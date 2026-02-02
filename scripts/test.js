// ABOUTME: Validates the icebreaker HTML structure and JS behavior hooks.
// ABOUTME: Ensures required UI elements and Firestore wiring are present.
import { readFileSync, existsSync } from 'node:fs';
import { createQuestionQueue } from '../question-queue.js';

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
  'id="theme-toggle"',
  'id="form"',
  'id="input"',
  'id="submit"',
  'questions',
  'getDocs',
  'addDoc',
  'collection',
  'Next',
  'Add',
  'data-theme',
  'theme-color',
  'localStorage',
  'max-width: 720px',
  'min-height: 44px',
  'prefers-reduced-motion',
  'translateY',
];

const missing = requiredSnippets.filter((snippet) => !contents.includes(snippet));
const removedSnippets = ['id="like"', 'id="dislike"', 'Like', 'Dislike'];
const stillPresent = removedSnippets.filter((snippet) => contents.includes(snippet));

if (missing.length > 0) {
  console.error(`Missing required snippets: ${missing.join(', ')}`);
  process.exit(1);
}

if (stillPresent.length > 0) {
  console.error(`Removed snippets are still present: ${stillPresent.join(', ')}`);
  process.exit(1);
}

console.log('Basic structure checks passed.');

const queue = createQuestionQueue(['A', 'B', 'C']);
const first = queue.next();
const second = queue.next();
const third = queue.next();
const fourth = queue.next();

if (!first || !second || !third) {
  console.error('Question queue did not return expected values.');
  process.exit(1);
}

if (new Set([first, second, third]).size !== 3) {
  console.error('Question queue repeated before cycling.');
  process.exit(1);
}

if (fourth !== first) {
  console.error('Question queue did not cycle as expected.');
  process.exit(1);
}

const addQueue = createQuestionQueue(['X', 'Y']);
addQueue.addQuestion('Z');

if (addQueue.next() !== 'X' || addQueue.next() !== 'Y' || addQueue.next() !== 'Z') {
  console.error('Question queue did not keep added questions at the end.');
  process.exit(1);
}
