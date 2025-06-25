// This is a simple script to replace path aliases in all UI components
// You can run it with: node fix-imports.js
const fs = require('fs');
const path = require('path');

const uiComponentsDir = path.join(__dirname, 'vitereact/src/components/ui');
const files = fs.readdirSync(uiComponentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    const filePath = path.join(uiComponentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the path alias with relative path
    content = content.replace(/import { cn } from "@\/lib\/utils";/g, 'import { cn } from "../../lib/utils";');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${file}`);
  }
});

console.log('All UI component imports fixed!');