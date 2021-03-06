import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache, gql} from "@apollo/client"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import swDev from "./swDev"

export const client = new ApolloClient({
  uri: "http://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// 
// -- Custom Service Worker -- //
setTimeout(()=>{
  swDev()
}, 5000)
