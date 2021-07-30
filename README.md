# React.JS Boilerplate

A template of a react.js with minimal starting dependencies.

+ react
+ react-dom
+ react-router-dom

A file structure allows developers to easily read and navigate through the source code. Thus, increasing productivity. Some [articles]() explaines 

## React Routing

This template only has one `.html` file. This file will be the master or root entry point of the entire application's various components.

[Dev Ed](https://www.youtube.com/watch?v=Law7wfdg_ls&ab_channel=DevEd) summarized that routing in react is basically conditionally rendering components based on the URL. That is, instead of reloading to different `.html` files, React only removes components which are not part of the current URL.

## Components?

Components are basically like html tags, such as `<p></p>`, `<div></div>`, etc. but React.js allows developers to create their own components. Each components can consists of regular html tags or nested components, which also contains html tags. Then, components will be processed by `React` and `ReactDOM` and rendered to the client.


## Usage 

1. public
..* contains the target `index.html` and external styling.
..* the html file contains the reference to the `index.js` which is the React.js file.

2. src
..* contains the javascript codes, components, html tags, logic, data, API calls.

### src File Structure

```
src
 |
 |--screens
 |
 |--shared
 |
 |--index.js
```

|---------|---------------------------|
| sreens  | screens or views. holds all the components and their logic, routing, more and sub-directories for components
| shared  | all *shared* data or values used and shared by the entire application should be stored here. E.g., `.json` data
| index.js  | the root or main `.js` file that renders the entire application `<App />` to the root container `<div id='root'></div>` in the `public/index.html' file
