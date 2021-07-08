# React-notes-app

## About the app
This is notes taking app using firebase as backend and react.js for the front end.  
You must sign in with google accout to be able to use the app.  
When logged in the users can create, delete or edit their notes. All the notes are stored in firestore and you must write rules so nobody will be able to see other people's information.

## How was it build
The app uses:
- firebase - for storage and authentication
- react - for visualisation
- react-redux - for state managment between different components
- react-fontawesome - for icons
- framer-motion - for additional animations
- autoresize - for resizing the textareas

## Important pieces of code

1. ./firebase/confing.js  
config.js is the place where the connection between the app and firebase happens. There the firebase, auth and firestore are defined and exported for easy usage through the app.
1. ./redux/  
    there is all the redux code that manages the global state of the application

## Credits
The desing of the website is based on [Docket Note](https://dribbble.com/shots/14037848-Docket-note-Side-menu) 

