# JET RESTAURANT EXPLORER

JET RESTAURANT EXPLORER Application Integrates JET provided API to gather the restaurants in the given postal code and display the restaurants to user in user friendly and considering better user experiance.

The application is developed with following technologies


## Technologies


- React, Vite
- NextUI, Tailwind.
- Node
- Express
- Typescript, Javascript


## Running the Application

Dockerfile for each module has been created to easily run and distribute the application, it contains all the required dependencies that application needs.

**Running with Docker**
Make sure you to install docker

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

After installation of docker
```bash
git clone https://github.com/Imtiaz-Ali-3612/jet-restaurant-explorer.git
```
```bash
cd jet-restaurant-explorer
```
```bash
docker-compose up
```

**Running without Docker **

make sure to have latest version of Node installed

1. after cloning, in your favourite command line move to jet-webserver directory
2. install node modules
```bash
npm install
```
3. now start the server with
```bash
npm start
```
4. similarly move to jet-webclient
5. install node modules
```bash
npm install
```
6. run the client with
```bash
npm run dev
```
## Features
1. Search by postal code.
2. Postal code suggestion.
3. Pagination for number of restaurants retrieved.


## Improvement

Application has provided basic interface to user and can be enhanced by following.
1. Large language models can be used to improve the search feature.
2. Filter's can be added to increase the user experiance.
3. Sorting option can be provided to user.
4. With design first approach the user interface can be improve alot.

   i. The pagination is old styled it can be improved to let user see more options without clicking the page buttons by just scrolling.
   
    ii. The post code suggestion user interface can be made better with design first approach.

6. To add more to user experiance.

    i. Search result can be put in new page to allow user share the search results by copying/forwarding the url of results.

     ii. User past search queries can be stored to suggest user, as postal codes
   
## Considerations
1. As the data available on API is only for UK, the postal code suggestion I developed also only suggest user about UKs postal codes.



