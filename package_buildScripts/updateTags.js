const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const eventsDirectory = './content/events';
let tagsSet = new Set();

function processDirectory(directoryPath) {
  const items = fs.readdirSync(directoryPath, { withFileTypes: true });

  items.forEach((item) => {
    if (item.isDirectory()) {
      processDirectory(path.join(directoryPath, item.name));
    } else if (item.isFile()) {
      const filePath = path.join(directoryPath, item.name);
      const content = fs.readFileSync(filePath, 'utf8');
      const frontMatter = matter(content);

      let tags = frontMatter.data.tags;

      // Check if tags is a string, convert it to an array
      if (typeof tags === 'string') {
        tags = tags.split(',').map(tag => tag.trim());
      }

      // Process tags if it's an array
      if (Array.isArray(tags)) {
        tags.forEach(tag => {
          tag.toLowerCase().split(' ').forEach(splittedTag => tagsSet.add(splittedTag));
        });
      }
    }
  });
}

// Start processing from the events directory
processDirectory(eventsDirectory);

// Convert the set of tags to an array
const tagsArray = Array.from(tagsSet);

// Write to tags.json file
fs.writeFileSync(path.join('static', 'tags.json'), JSON.stringify({ tags: tagsArray }, null, 2), 'utf8');
console.log('Tags updated successfully!');
