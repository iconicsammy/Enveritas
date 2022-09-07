# Survey Application

## Setting up

    run 
    
    ```
    npm install 
    ```

    to have network experience, stimulate a server instance:

    ```
    npm run start-auth
    ```

    Then run the application:

    ```
    npm start
    ```

    build it with:

    ```
    npm run build
    ```

    There are default user names combination to login with:

        username:kmsium@gmail.com
        password: 123456

    You can use postman to create the users as well by sending username and password to the post endpoint:

        ```
        http://localhost:3004/register
        ```

## Main Goal

    The main goal of the application is to let admin create survey forms that can be accessed by any user.

    For more flexiblity, each survey is saved as a JSON file as shown below, which you can map with models and dto's of the application.

    ```
    {
      "id": 37,
      "title": "test",
      "description": "",
      "isCurrentlyOpen": false,
      "isDraft": true,
      "targetNumberOfParticipants": "23",
      "category": "Tech",
      "questions": [
        {
          "questionType": "text",
          "questionIdentifier": "9ea6c44b-6660-4b53-b218-45f66186b25d",
          "label": "Your City",
          "validations": {
            "minLength": 5
          },
          "choices": []
        }
      ]
    }

    ```

    That way, we can create survey's with our editors and pass them along to common JSON form builders we can extend or implement.

## Admin and End-User Component

    The majority of the application deals with the admin user for creating a form. But once a survey is saved/created, we can use JSONFormBuilder component to easily construct back the form for the user to fill.

    In real life, we would use the component with any other reactjs application along with the validator functions in utils/validators.ts file.

## Archicture

    The application is divided into application, store and views:

    Application: the heart of the application containing the business logic of the application. Components are to talk to the middleware("services") which decide if an operation needs to talk to an endpoint or not.

    Store: our centralized state management

    views: the UI parts that are grouped by user (logged in user), guest and shared.

## Data Handling

    Application is offline ready using indexdb database but priority is given to online. That is when creating a survey, it will first try to create it online. If it fails, it will create it in local database.

    The same goes for retrieving data. Components are not aware of where data is going or coming from thanks to the middleware layer of the application.

# Known Issues

    As a one day work, I am sure you will find issues but here are known issues:

        1. Reordering does reorder the questions in the state and data but text input value don't change.
        2. Survey is not grouped. So if a user wants to create 100 questions, it might not be friendly to list them all but rather have them grouped and enable multi-screens per survey.
        3. Common questions are not implemented such as location question ("Locate Me") or "rating" but they are relatively easy to hook into the app.