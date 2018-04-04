# react-context-react-16.3
An example using new Context implementation in React 16.3.

The project contains two example, one without the use of context (my-no-context) and one with the use of context (my-context-base). 
Each project is structured using three files:
* Grandparent.js: that is the component that initialize the context
* Parent.js: the parent component of the child that need the function in the context. Please note as in the Context example tha Parent component don't know enything about the function needed from the Child component.
* Child.js: the component tha invoke a function passed by the Grandparent. I'm no totally happy about the function invocation in Context example, in the future I would like to found another solution.
