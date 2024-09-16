1. What problem does the context API help solve?
## It renders prop drilling obsolete and adds a new dimension to data gathering.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
## actions are objects that can render the State mutable when need be.
## reducers are functions that can take a malleable state and change it
## stores are the objects that hold your app's state tree, there is only ever one in a Redux Application.
## The store contains the state in an object tree therein.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
## The application state is the global one while component state is local. Store holds the application state and thus can be used anywhere in the app while component state can only be used in its own component. 
## Application is better for a wider range of data distribution as opposed to component that can use more data.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
## Redux-Thunk is middleware that allows you to call action creators that returns a function instead of an an action object.    
1. What is your favorite state management system you've learned and this sprint? Please explain why!
## Context API because it doesn't require you to learn as much as opposed to redux that re-invents the wheel just to avoid prop drilling.
