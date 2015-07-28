require("../styles/main.css");
import React from "react";
import Content from "./contents";
import Eggs from "./eggs";

// import TodoList from "./todoList";
// import TodoApp from "./todoApp";
var TodoList = require('./todoList.js');
var TodoApp = require('./todoApp.js');

$(document).ready(function(){

  // React.render(
  //   <Content toy="hippo"/>,
  //   document.getElementById('test')
  // );

  // React.render(
  //   <Eggs />,
  //   document.getElementById('open-egg')
  // );

  React.render(<TodoApp />, document.getElementById('todo'));
})


