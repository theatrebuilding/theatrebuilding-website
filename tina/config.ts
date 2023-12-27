import { defineConfig } from "tinacms";

// Fleek exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

// Validation functions
function validateDescription(value) {
  if (value && value.length > 160) {
    return "Description must be less than 160 characters";
  }
}

function validateInfo(value) {
  if (value && value.length > 50) {
    return "Must be less than 50 characters";
  }
}

function validateLocation(value) {
  if (value && value.length > 80) {
    return "Must be less than 80 characters";
  }
}

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // This is generated on tina.io and updated as environment variable in fleek deploy settings.
  token: process.env.TINA_CONTENT, // This is generated on tina.io and updated as environment variable in fleek deploy settings.

  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin'  // within the public folder
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "event",
        label: "Events",
        path: "content/events",
        format: "md",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `/${values?.date?.slice(0,4)}/${values?.date?.slice(5,10)}-${values?.location?.toLowerCase().replace(/ /g, '-').replace(/[#_,.&!@£*()|^§±œ∑¥]/g, '')}-${values?.artistName?.toLowerCase().replace(/ /g, '-').replace(/[#_,.&!@£*()|^§±œ∑¥]/g, '')}-${values?.title?.toLowerCase().replace(/ /g, '-').replace(/[#_,.&!@£*()|^§±œ∑¥]/g, '')}`
            },
          },
          beforeSubmit: async ({
            form,
            cms,
            values,
          }: {
            form: Form
            cms: TinaCMS
            values: Record<string, any>
          }) => {
            if (form.crudType === 'create') {
              return {
                ...values,
                createdAt: new Date().toISOString(),
              }
            }
            return {
              ...values,
              lastUpdated: new Date().toISOString(),
            }
          }
        },
        templates: [
          {
            name: 'simple',
            label: 'Simple Editor',
            fields: [
              {
                type: "boolean",
                name: "draft",
                label: "Draft",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
                validate: validateInfo,
              },
              {
                type: "string",
                name: "artistName",
                label: "Name of artist or group",
                validate: validateInfo,
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
                validate: validateLocation,
                required: true,
              },
              {
                type: "datetime",
                name: "date",
                label: "When do you want to publish your performance?",
                ui: {
                  timeFormat: "HH:mm"
                },
                required: true,
              },
              {
                type: "string",
                name: "altDate",
                label: "Write here if your work takes place in an alternate or different time to the Gregorian calendar time in which it is published",
                required: false,
              },
              {
                type: "rich-text",
                name: "body",
                label: "Content",
                isBody: true,
              },
              {
                type: "string",
                name: "description",
                label: "Optionally add a short description of the work for SEO purposes (max 160 characters)",
                required: false,
                validate: validateDescription,
              },
              {
                type: "image",
                name: "image",
                label: "Optionally add an image that you associate with your performance for SEO purposes (max 1mb)",
                required: false,
              },            
            ],
          },
          {
            name: 'advanced',
            label: 'Advanced Editor',
            fields: [
              {
                type: "boolean",
                name: "draft",
                label: "Draft",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
                validate: validateInfo,
              },
              {
                type: "string",
                name: "artistName",
                label: "Name of artist or group",
                required: true,
                validate: validateInfo,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
                required: true,
                validate: validateLocation,
              },
              {
                type: "datetime",
                name: "date",
                label: "When do you want to publish your performance?",
                ui: {
                  timeFormat: "HH:mm"
                },
                required: true,
              },
              {
                type: "string",
                name: "altDate",
                label: "Write here if your work takes place in an alternate or different time to the Gregorian calendar time in which it is published",
                required: false,
              },
              {
                type: "rich-text",
                name: "body",
                label: "Body",
                isBody: true,
              },
              {
                type: 'rich-text',
                name: "css",
                label: "Add your custom CSS here if you are coding your event in HTML (otherwise, leave blank)",
              },
              {
                type: "string",
                name: "description",
                label: "Optionally add a short description of the work for SEO purposes (max 160 characters)",
                required: false,
                validate: validateDescription,
              },
              {
                type: "image",
                name: "image",
                label: "Optionally add an image that you associate with your performance for SEO purposes (max 1mb)",
                required: false,
              },
            ],
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH, // This is generated on tina.io and updated as environment variable in fleek deploy settings.
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
