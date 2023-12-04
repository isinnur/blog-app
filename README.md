# Firebase Blog App

This simple blog application has been developed using Firebase. Users can log in, create new posts, and delete their own posts if they are the author.

## Features

- **Login**: Users can log in using Firebase Authentication.
- **Create Posts**: Users can create blog posts.
- **Delete Posts**: Users who created a post can delete their own posts.

  ![image](https://github.com/isinnur/blog-app/assets/98089962/4cd29e5c-a8d9-426d-97dc-d98c0abe5521)
![image](https://github.com/isinnur/blog-app/assets/98089962/941504e4-5b02-4341-ac67-d4a6b4ee7e58)
![image](https://github.com/isinnur/blog-app/assets/98089962/0137a4a0-01af-4ccf-9cc1-a66034bcab09)
![image](https://github.com/isinnur/blog-app/assets/98089962/4a12a5aa-d043-4b96-b475-2989313cf8a0)


## Installation

1. **Create a Firebase Project**: Create a new project on the Firebase console and configure the necessary settings.

2. **Firebase Configuration**: Create `src/firebase-config.js` file and import your Firebase configuration.

   ```javascript
   // src/firebase-config.js

   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id",
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);
   const auth = getAuth(app);

   export { db, auth };
   ```

3. **Install Dependencies**: Open the terminal in the project directory and run the following command to install dependencies:

   ```bash
   npm install
   ```

4. **Run the Application**: Start the application with the following command:

   ```bash
   npm start
   ```

## Usage

1. **Login**: Open the app, log in with your google account.

2. **Create a Post**: Navigate to the create post section and write your blog post.

3. **Delete a Post**: If you authored a post, you will see a delete button. Click it to remove your post.
