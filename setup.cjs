const fs = require('fs');
const path = require('path');

const directories = [
  'src/components',
  'src/pages',
  'src/layouts',
  'src/assets',
  'src/utils',
  'src/data',
  'src/hooks'
];

directories.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

const pages = [
  'Home', 'About', 'Services', 'ServiceDetails', 'Careers',
  'JobDetails', 'Reviews', 'FAQ', 'Contact', 'PrivacyPolicy',
  'Terms', 'PaymentTerms'
];

pages.forEach(page => {
  const filePath = path.join(__dirname, `src/pages/${page}.jsx`);
  const content = `import React from 'react';\n\nconst ${page} = () => {\n  return (\n    <div className="pt-24 min-h-screen container mx-auto px-4">\n      <h1 className="text-4xl font-serif text-brand-primary dark:text-brand-light mb-8">${page}</h1>\n      <p>Content coming soon...</p>\n    </div>\n  );\n};\n\nexport default ${page};\n`;
  fs.writeFileSync(filePath, content);
});

const components = [
  'Navbar', 'Footer', 'FloatingWidgets'
];

components.forEach(comp => {
  const filePath = path.join(__dirname, `src/components/${comp}.jsx`);
  const content = `import React from 'react';\n\nconst ${comp} = () => {\n  return (\n    <div>${comp}</div>\n  );\n};\n\nexport default ${comp};\n`;
  fs.writeFileSync(filePath, content);
});

console.log('Scaffolding complete.');
