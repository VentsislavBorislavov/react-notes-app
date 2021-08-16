# Notes App

## About the app
This is notes app using firebase as backend and react.js for the front end.  
You must sign in with google accout to be able to use the app.  
When logged in the users can create, delete and edit their notes. All the notes are stored in firestore.

## Build with

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
    there are all the redux code that manages the global state of the application
## Links
- Live Site URL: [Notes App](https://react-note-app-b76e7.web.app/)

## Credits
The desing of the website is based on [Docket Note](https://dribbble.com/shots/14037848-Docket-note-Side-menu) 

## Author

- Website - [Ventsislav Borislavov](https://ventsislav-borislavov.netlify.app/)
