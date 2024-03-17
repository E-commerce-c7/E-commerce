# Poké-MongoDB

You are going to build a Pokémon API with Node, Express, and MongoDB. Your API will allow users to perform CRUD operations on each of the 151 original Pokémon, and power a front-end.

## How to start this app

- `npm install`
- `npm start`
- `npm run dev:react`

## Requirements

In addition to your frequent commits, **make a commit after completing each of the following steps** (marked by check boxes), indicating that you have just completed it. It may not be the case that you have time to complete all of the following steps, but regardless, **you must work on them in order.**

- Back-end
- Front-end
- Middleware
- _bonus_ : Testing

### Back-end

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section or just use [Thunder Client](https://www.thunderclient.com/)

Using the existing code provided in `server/`, follow the steps below to build out a Pokémon API:

|         URL          | HTTP Verb | Request Body |                                  Result                                  |
| :------------------: | :-------: | :----------: | :----------------------------------------------------------------------: |
|     /api/pokemon     |    GET    |    empty     |                        Return JSON of all Pokémon                        |
|     /api/pokemon     |   POST    |     JSON     |          Create new Pokémon and return JSON of created Pokémon           |
|     /api/pokemon     |  DELETE   |    empty     |         Delete all Pokémon in and return JSON of deleted Pokémon         |
| /api/pokemon/:number |    GET    |    empty     |           Return JSON of single Pokémon with matching `number`           |
| /api/pokemon/:number |    PUT    |     JSON     | Update Pokémon with matching `number` and return JSON of updated Pokémon |
| /api/pokemon/:number |  DELETE   |    empty     | Delete Pokémon with matching `number` and return JSON of deleted Pokémon |

- [ ] Connect Mongoose to your local Mongo database in `db/index.js`
- [ ] Create a Pokémon model in `pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
  - [ ] `number`, a unique number
  - [ ] `name`, a unique string
  - [ ] `types`, an array of strings
  - [ ] `imageUrl`, a string
- [ ] Populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json` by running `npm run seed:db` (THIS STEP NEEDS TO BE DONE AFTER IMPLEMENTING YOU SCHEMA)
- [ ] Create a controller in `pokemon/pokemonController.js` that interacts with your Pokémon model
- [ ] Create a router in `pokemon/pokemonRouter.js` that utilizes each of your controller's methods. Be sure to handle errors appropriately.
- [ ] Import `pokemonRouter` into `server/index.js` and assign it to the correct route
- [ ] Write at least two tests in `test/api-spec.js` that will help assure future developers that the API is working as intended

### Front-end

> **Escape hatch:** If you have a showstopping bug in your server, mock it out with [json-server](https://github.com/typicode/json-server).

Inside of `client/`, implement a single page front end to interact with this API using React.

    
Your front end should be served from Express and should allow the user to:

- [ ] Display all Pokémon (with their images)
- [ ] See Pokémon details when I click on it
- [ ] Add a new Pokémon
- [ ] Edit Pokémon based on their name
- [ ] Delete Pokémon based on their name
- [ ] Filter Pokémon based on their type
- [ ] Before adding or editing a Pokémon, check if the name that you added/edited exists or not.

For this step, you are free to showcase your skills in front-end. Create your front-end the way you want with all the features above being implemented. If you wish, you can use the starter code we have implemented in the `client/src` folder with some style in the `client/dist` folder. However, you will have to create most of the components and style them yourself.



### Middleware

> **Important:** You must complete all of the steps in [back-end](#back-end) before moving onto this section.

Inside of `server/middleware/rateLimiter.js`, create a custom middleware function in which you implement rate limiting for your API with the following guidelines.

- [ ] Require each request to `/api/pokemon` to include a `User` property in the header
- [ ] Only allow a single user to make 100 requests per hour
- [ ] Mount your middleware in an appropriate location in `server/index.js`
- [ ] Update your front-end to send a `User` property with each request

### Testing

> **Important:** this section is ***completely optional*** thus you must finish all of the previous steps first before moving on

Inside of `test/api-spec.js` and `test/pokemon-spec.js`, create your own tests for both your API and database, you have full creative freedom over what to do in this section.

### Available Resources

You may visit each of these resources directly, or search for them on Google with the [`site:`](https://support.google.com/websearch/answer/2466433?hl=en) operator:

* [MDN](https://developer.mozilla.org/)
* [W3Schools](https://www.w3schools.com/)
* [ReactJS Docs](https://reactjs.org/)
* [React Router Docs](https://reactrouter.com/en/main)
* [Webpack Docs](https://webpack.js.org/concepts/)
* [Babel Docs](https://babeljs.io/docs/en/)
* [jQuery Docs](https://jquery.com/)
* [axios Docs](https://github.com/axios/axios)
* [NodeJS Docs](https://nodejs.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [Express Rate Limit npm package Docs](https://www.npmjs.com/package/express-rate-limit)
* [MongoDB Docs](https://docs.mongodb.com/)
* [Mongoose Docs](https://mongoosejs.com/docs/guide.html)
* [Morgan npm package Docs](https://www.npmjs.com/package/morgan)
* [Mocha Docs](https://mochajs.org/)
* [Chai Docs](https://www.chaijs.com/api/)
* Docs for any npm packages you might use
* [Google Search](https://google.com) to search for the correct page on any of the documentation above
