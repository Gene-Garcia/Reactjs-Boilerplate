# React.JS Boilerplate

A template of a react.js with minimal starting dependencies.

+ react
+ react-dom
+ react-router-dom

A file structure allows developers to easily read and navigate through the source code. Thus, increasing productivity. Some [articles]() explains that with a formalized, recognized, and maintained file structure reduces the changes of merge conflicts.

## React Routing

This template only has one `.html` file. This file will be the master or root entry point of the entire application's various components.

[Dev Ed](https://www.youtube.com/watch?v=Law7wfdg_ls&ab_channel=DevEd) summarized that routing in react is basically conditionally rendering components based on the URL. That is, instead of reloading to different `.html` files, React only removes components which are not part of the current URL.

## Components?

Components are basically like html tags, such as `<p></p>`, `<div></div>`, etc. but React.js allows developers to create their own components. Each components can consists of regular html tags or nested components, which also contains html tags. Then, components will be processed by `React` and `ReactDOM` and rendered to the client.


## Usage 

1. public
- contains the target `index.html` and external styling.
- the html file contains the reference to the `index.js` which is the React.js file.

2. src
- contains the javascript codes, components, html tags, logic, data, API calls.

---

### General Folder Structure 

```
src/
 |
 |-- shared/
 |      |
 |      |-- data/
 |      |
 |      |-- constants/
 |
 |-- screens/
        |
        |-- App/ (Maybe other version of the App)
        |    |
        |    |-- ...
        |
        |-- App/
             |
             |-- components/ (includes the general components used by the app, e.g., nav, header, footer, app
             |
             |-- screens/
                     |
                     |-- About/
                     |     |
                     |     |-- ...
                     |
                     |-- Home/
                           |
                           |-- components/
                           |
                           |-- screens/
                                  | 
                                  |-- PrivacyPolicy/ 
                                            |
                                            |-- components
                                            |
                                            |-- screens/ ...continou nesting RouteName/components and RouteName/screens if there are more subroutes to Home/
```

+ The structure is repetitve nested structure of components/, and screens/ for subroutes of the current route. 
+ The route with the subroute in the example is Home/. Its url can be `DOMAIN/Home/PrivacyPolicy`

---

### Source codes in each directory


1. RouteNameOrApp/Components/

```
src/screens/App/components/
                    |
                    |-- App.jsx
                    |-- Nav.jsx

src/screens/App/screens/Home/components/
                                  |
                                  |-- Home.jsx
```

+ every *components/* folder contains `.jsx` or `.js` files which are React.js files that returns components for rendering.


2. RouteNameOrApp/

```
src/
 |
 |-- index.js

src/screens/App
             |
             |-- index.js
             |-- route.js (main route)
             
src/screens/App/screens/Home
                         |-- index.js
                         |-- route.js
                         
src/screens/App/screens/Home/screens/PrivacyPolicy
                                          |-- index.js
                                          |-- route.js
```

+ the directory of every RouteName and even its subroutes will always have two files. `index.js`, and `route.js`

#### index.js

In JS, importing from a folder e.g. /src/screens/App/screens/Home automatically imports the index.js if no file is indicated.

Every `index.js`, except for `src/index.js`, basically imports the main component in the RouteNameFolder or SubRouteNameFolder, and exports it.

The `src/index.js` is the index file that imports the main `src/screens/App/` and performs `ReactDOM.react(<App />, document.getElementById('root')`


#### route.js

Now, the exports from index.js will be imported by their respective routes as `component: NameOfComponent`. Then, along with the component, the `path: home/` is also exported

The route.js of ***PrivacyPolicy***, a subroute of *Home*, performs the above. While, the route.js of not only exports *component and path* but also ***subroutes: []***.

Subroutes in route.js is an array of *exported* route.js values from the SubRouteNameFolder directories.

Then, the `src/screens/App/route.js` basically exports an array of route.js references in the level of `Home/` and `About/`. It does not include subroute route.js because they are already exported by their parent RouteFolder.

Lastly, `src/screens/App/App.jsx` then just import `src/screens/App/route.js`with its nested route.js exports and index.js references. Which will be used in Route handling

```javascript
import routes from "../route";
...
<Router>
 <Switch>
  <Route {...routes.HOME} />
  <Route {...routes.ABOUT} />

  {/* Subroutes of HOME, routes[0] is the PrivacyPolicy reference */}
  <Route {...routes.HOME.routes[0]} />
 </Switch>
</Router>
```
