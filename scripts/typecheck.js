// ABOUTME: Validates configuration placeholders and module usage in index.html.
// ABOUTME: Ensures Firebase config keys are declared for later substitution.
import { readFileSync, existsSync } from 'node:fs';

const filePath = new URL('../index.html', import.meta.url);

if (!existsSync(filePath)) {
  console.error('index.html is missing.');
  process.exit(1);
}

const contents = readFileSync(filePath, 'utf8');

const requiredConfig = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
];

const missing = requiredConfig.filter((key) => !contents.includes(key));

if (missing.length > 0) {
  console.error(`Missing Firebase config keys: ${missing.join(', ')}`);
  process.exit(1);
}

if (!contents.includes("type=\"module\"")) {
  console.error('Missing type="module" for script tag.');
  process.exit(1);
}

console.log('Configuration checks passed.');
