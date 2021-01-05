# Slack-clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firestore Database (Real Time)

- Changes URL(roomID) >> Connects to the database (useEffect dependency)
- Uses URL param (roomID) to fetch data from database

## making data layer for user authentification

- enables access to user information _directly_
  - works like a global variable
- Context API's and Redux focuses on making data layer

## use of hook makes coding easier

### useContext( MyContext )

- useContext needs <Mycontext.Provider> to be stated in upper tree

In this clone,`useStateValue = () => useContext(StateContext);`
As I used `useStateValue()` in <App />, I covered <App />
with `<StateContext.Provider>` in index.js (exported from StateProvider.js)

- Provider `<StateContext.Provider>` _provides_ value to useStateValue

this way `useStateValue()`reads and writes whenever
_Provider's value_(context) changes  
 which is `value = {useReducer(reducer, initialState)}`

### useReducer

- In this clone, `useReducer( reducer, initialState )` is provided to `useStateValue()`

in Login.js, `[state, dispatch] = useStateValue()`
useReducer is alternative of useState function.

- useReducer gets not only initialState but also gets reducer function as parameter
  ( = reducerfunction can be exported )

This is why I used useReducer instead of useState function here.
reducer from reducer.js (called from any js dispatch function) can change some values
in reducer.js(initialState in this case) which will go to StateProvider in index.js
and change initialstate used under <App />

if `import { useStateValue } from './StateProvider';`
and Provider provides `value(useReducer(reducer, *initialState*))` to `useStateValue`
`initialState = {user:null(which can be updated by reducer)}` can be used ANYWHERE in that js file
for example, as `const [{ user }] = useStateValue();` in Sidebar.js

( if calls dispatch(reducer), import actionTypes too(for switch). )

- dispatch(obj) calls reducer(state,action) function

This dispatch object is moved to action(parameter) in reducer  
`(result.user in Login.js >> action.type in reducer.js)`
`(actionTypes.SET_USER in Login.js >> action.user in reducer.js)`

In useReducer(reducer, initialState) in StateProvider.js
reducer returns {user: action.user} and changes
initialState = {user: action.user} which goes to <StateProvider> in index.js
and is provided(spreaded) to <App /> for example, `const [{ user }] = useStateValue();`

### finally this will change every state of page...
