import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c77846e7-fd5d-4c47-b5bd-f0cb63f84506", // Get this from tina.io
  token: "0b794dde3d0446ff7987d6a83edbd9e0849720f0", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "events",
        label: "Events",
        path: "content",
        format: "md",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `events/${values?.date?.slice(0,4)}/${values?.date?.slice(5,10)}-${values?.location?.toLowerCase().replace(/ /g, '-')}-${values?.artistName?.toLowerCase().replace(/ /g, '-')}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        templates: [
          {
            name: 'simple',
            label: 'Simple Editor',
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "artistName",
                label: "Name of artist or group",
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
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
                label: "Body",
                isBody: true,
              },
            ],
          },
          {
            name: 'advanced',
            label: 'Advanced Editor',
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "artistName",
                label: "Name of artist or group",
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
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
                label: "Body",
                isBody: true,
              },
              {
                type: "rich-text",
                name: "css",
                label: "Add your custom CSS here if you are coding your event in HTML (otherwise, leave blank)",
              },
            ],
          },
        ],
      },
    ],
  },
});
