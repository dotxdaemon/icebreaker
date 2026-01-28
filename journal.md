# Journal

- Goal: Build a single-file minimalist HTML site for icebreaker questions using Firebase Firestore (questions collection), with random display, Next, and Add flow.
- Constraints: Vanilla HTML/CSS/JS, Firebase v9+ modular CDN imports, no build process, placeholder Firebase config values, anonymous writes.
- Design: Off-white background (#f4f4f0), dark text (#1a1a1a), outline buttons with simple hover, large typography, ample whitespace, Inter font.
- UX: Centered question, Next button chooses random from fetched array, Add reveals input; submit writes to Firestore and alerts, then hides input.
- Testing: Use npm scripts (test/lint/typecheck) to validate file existence and required structure/content since no framework is present.
- Added firebase-setup.md with Firebase project, Firestore, rules, and config placeholder steps for the icebreaker page.
- Added a question queue module to rotate icebreaker questions without immediate repeats.
