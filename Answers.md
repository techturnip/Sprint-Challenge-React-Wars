# Answers

1.  What is React JS and what problems does it try and solve?
    React JS is a web application development library that allows us to bypass slower and heavy DOM manipulation through a virtual DOM where rerendering can be isolated as opposed to rerendering an entire page thus making it quicker and lighter.

2.  What does it mean to _think_ in react?
    It means changing our thought process to think of web development in a more modular way. Which requires breaking an app down into components and consider the level of interaction needed for an app to be quick and efficient.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Aside from syntax the biggest difference is that Class/Stateful components have access to state and lifecycle hooks.

4.  Describe state.
    State is very similar to props in that it is a plain JS object that can hold information but state is managed inside the component creating interactivity through rerendering of stateful components on state changes.

5.  Describe props.
    Props shouldn't change and are often used as a way to communicate with components by passing them down. Pieces of state can be passed down to child components as props.
