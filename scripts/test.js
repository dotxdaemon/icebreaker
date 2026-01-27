// ABOUTME: Validates the icebreaker HTML structure and JS behavior hooks.
// ABOUTME: Ensures required UI elements and Firestore wiring are present.
import { readFileSync, existsSync } from 'node:fs';

const filePath = new URL('../index.html', import.meta.url);

if (!existsSync(filePath)) {
  console.error('index.html is missing.');
  process.exit(1);
}

const contents = readFileSync(filePath, 'utf8');

const requiredSnippets = [
  'id="question"',
  'id="next"',
  'id="add"',
  'id="form"',
  'id="input"',
  'id="submit"',
  'questions',
  'getDocs',
  'addDoc',
  'collection',
  'Next',
  'Add',
];

const missing = requiredSnippets.filter((snippet) => !contents.includes(snippet));

if (missing.length > 0) {
  console.error(`Missing required snippets: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Basic structure checks passed.');
