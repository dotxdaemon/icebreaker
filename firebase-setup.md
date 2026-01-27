# Firebase setup

## Create the Firebase project
1. Go to the Firebase console and create a project.
2. In the project overview, click **Add app** and choose **Web**.
3. Register the app and copy the Firebase config values.

## Enable Firestore
1. Open **Build → Firestore Database**.
2. Click **Create database** and choose a location.
3. Start in **production mode** so you can confirm rules intentionally.

## Add initial data
1. In Firestore, create a collection named `questions`.
2. Add documents with a `text` field (string), such as `"What is a hobby you love?"`.

## Set anonymous access rules
Anonymous read/write is risky in production because anyone can spam your data. If this is still what you want, set rules like this (Firestore rules):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /questions/{document} {
      allow read, write: if true;
    }
  }
}
```

## Update `index.html`
1. Open `index.html` and replace the placeholder values in `firebaseConfig`:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
2. Save the file and reload the page. You should see a random question once Firestore responds.

## Validate
- Click **Next** to see another random question.
- Click **Add**, submit a question, and confirm it appears after the alert.
