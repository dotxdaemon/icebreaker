// ABOUTME: Performs lightweight style and content checks on index.html.
// ABOUTME: Ensures the minimalist design requirements are present.
import { readFileSync, existsSync } from 'node:fs';

const filePath = new URL('../index.html', import.meta.url);

if (!existsSync(filePath)) {
  console.error('index.html is missing.');
  process.exit(1);
}

const contents = readFileSync(filePath, 'utf8');

const requiredStyles = [
  '#f4f4f0',
  '#1a1a1a',
  'Inter',
  'button',
  'hover',
];

const missing = requiredStyles.filter((snippet) => !contents.includes(snippet));

if (missing.length > 0) {
  console.error(`Missing required style hints: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Style checks passed.');
