import React from "react"
import "./App.css"
import DataFetchingOne from "./useReduce/DataFetchingOne"
//import React, { useReducer } from "react"
// import ComponentA from "./useReduce/ComponentA"
// import ComponentB from "./useReduce/ComponentB"
// import ComponentC from "./useReduce/ComponentC"
//export const CountContext = React.createContext()
// import ComponentC from "./useContext/ComponentC"
// import DataFetching from "./useEffect/DataFetching"
// import DataFetching1 from "./useEffect/DataFetching1"
//import HookCounterFour from "./Hooks/HookCounterFour"
// import IntervalClassCounter from "./useEffect/IntervalClassCounter"
// import IntervalHookCounter from "./useEffect/IntervalHookCounter"
// import HookCounterThree from "./Hooks/HookCounterThree"
//import ClassCounter from "./Hooks/ClassCounter"
// import HookCounter from "./Hooks/HookCounter"
// import HookCounterTwo from "./Hooks/HookCounterTwo"
// import PostForm from "./components/PostForm"
// import PostList from "./components/PostList"
//export const UserContext = React.createContext()
//export const ChannelContext = React.createContext()
// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1
//     case "decrement":
//       return state - 1
//     case "reset":
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* Count - {count} */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetching1 /> */}
      {/* <UserContext.Provider value={"hari"}> */}
      {/* <ChannelContext.Provider value={"vijayawada"}> */}
      {/* <ComponentC /> */}
      {/* </ChannelContext.Provider> */}
      {/* </UserContext.Provider> */}
      {/* <ComponentA />
        <ComponentB />
        <ComponentC /> */}
      <DataFetchingOne />
    </div>
    // </CountContext.Provider>
  )
}

export default App
