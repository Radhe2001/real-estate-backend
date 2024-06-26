## Real-Estate Backend

Built using node.js Express.js and Mongodb
To setup this application you need to install all the packages to the repo for that

    npm install

Make sure that you have already installed node LTS version.

To run the application you need to run the command

    npm app.js

make sure that the internet is connected else it won't be able to fetch the data from mongodb.

## Setting up the env file

Create .env file in the repo and assign the values for these variables

-   CONNECTION_URL(connection url for mongodb)
-   SECRET(secret key for jwt token generation)
-   PORT(port on which it is listeneing , frontend is requesting the data on 5000 port)
-   EMAIL (email from which the mail will be send for contact info)
-   PASSWORD (password of the above mail)
-   RECEIVER (email to whom the mail will be send)

## API Endpoints

| API Endpoints   | Method | Usecase                                     |
| --------------- | ------ | ------------------------------------------- |
| /user/register  | POST   | For user registeration                      |
| /user/login     | POST   | For user login                              |
| /add            | POST   | For adding the property item                |
| /add/:type      | GET    | For getting the items based on it's type    |
| /add/all        | POST   | For fetching all the items                  |
| /add/delete/:id | DELETE | For deleting the specific item              |
| /search/:input  | GET    | For getting the items matching serach input |
| /contact        | POST   | For sending the mail                        |
