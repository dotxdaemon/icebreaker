# Firebase setup

## Create the Firebase project
1. Open <https://console.firebase.google.com/> in a browser.
2. Click **Add project**.
3. Enter a project name that you can recognize later.
4. Review the project ID shown in the dialog so you can match it to `firebaseConfig` later.
5. Continue through the prompts until the project is created.
6. When the project dashboard loads, confirm the project name in the upper-left corner matches what you entered.

## Register the web app
1. In the project overview, click **Add app**.
2. Select the **Web** icon (`</>`).
3. Enter an app nickname that helps you identify this app.
4. Leave "Set up Firebase Hosting" unchecked unless you plan to use Hosting right away.
5. Click **Register app**.
6. Copy the Firebase configuration object shown on screen.
7. Click **Continue to console**.

## Enable Firestore
1. In the left sidebar, open **Build → Firestore Database**.
2. Click **Create database**.
3. Select **Production mode**.
4. Click **Next**.
5. Pick a Firestore location that is close to your users.
6. Click **Enable** and wait for Firestore to finish provisioning.

## Add initial data
1. In the Firestore **Data** tab, click **Start collection**.
2. Enter `questions` as the **Collection ID** and click **Next**.
3. Set **Document ID** to **Auto-ID**.
4. Add a field:
   - Field name: `text`
   - Type: `string`
   - Value: a sample question like `What is a hobby you love?`
5. Click **Save** to create the document.
6. Repeat the document creation step if you want multiple questions.

## Set anonymous access rules
Anonymous read/write is risky in production because anyone can spam your data. If this is still what you want, apply the following rules:

1. In Firestore, open the **Rules** tab.
2. Replace the rules editor content with the rules below.
3. Click **Publish** to apply the rules.

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
1. Open `index.html` in a text editor.
2. Locate the `firebaseConfig` object.
3. Replace each placeholder value with the corresponding value from the Firebase config you copied:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
4. Save the file.
5. Reload the page in your browser.

## Validate
1. Wait for the page to load.
2. Confirm a question appears once Firestore responds.
3. Click **Next** and verify a different question appears.
4. Click **Add**, submit a question, and confirm it appears after the alert.
