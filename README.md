#### <img src="./src/Client/public/assets/photos/logo.png" width="18"></img>
``#### StyleCoffee
The main purpose of this project is build a Web Aplication using React, Redux  Node JS in the server and Mongo DB in the Database.

 - [Technologies](#technologies)
 - [Getting Started](#getting-started)
   - [Run Dev Mode](#run-development-mode) 
   - [Run Prod Mode](#run-on-production-mode)

## Technologies

The project is built with:

### FrontEnd
#### <img src="https://cdn.svgporn.com/logos/react.svg" width="18"></img> ReactJS
A javascript library open source property of Facebook, used to render views and control events, with the Virtual DOM makes the user experience smooth and enjoyable.
#### <img src="https://cdn.svgporn.com/logos/redux.svg" width="18"></img> Redux
Redux is an a javascript library to control the application state, this means that communication between client and server and testing actions are more easy, Redux librery are more effective on Redux projects, but it can also be used in AngularJS projects

Redux bases on three principles:

- The entire state of your application is contained in a single store
- The only way to modify the state is to issue an action that indicates that it changed
- To control how the store is modified by the actions, pure reducers are used


### Design
#### <img src="https://cdn.svgporn.com/logos/css-3.svg" width="18"></img> CSS3
Used to make website more beautiful and upgrade his look and feel, using transitions, transformations, and animations references CSS3
#### <img src="https://cdn.svgporn.com/logos/bem.svg" width="18"></img> BEM
Methodology used to oranize own code on components and code sharing on frontend.

BEM is based on Block, Element and Modifier


### Deploy and config
#### <img src="https://cdn.svgporn.com/logos/webpack.svg" width="18"></img> Webpack
A bundling system to prepare development on a web application, they have advantages in front Browserify, is based on modulable system, 
will be used to compile the SCSS styles, convert the code from ES6 to ES5 using babel, and gives the possibility to run the program in both development mode and production mode with her webpack.config.js

#### <img src="https://cdn.svgporn.com/logos/babel.svg" width="18"></img> Babel Transpiler for ES6 
As the project is writing its frontend with ES6, we need a transpiler since it is not yet supported 100% by all browsers
https://kangax.github.io/compat-table/es6/

## Get Started
Clone this repositori

* npm install
To run in Deleveloped mode run:
* npm run-script build

### Run development mode
FrontEnd
```
npm start
```
### Run on production mode
FrontEnd
```
npm run-script build
```
### Run Tests
Tests
```
npm test
```