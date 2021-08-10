import "./App.css"
import React from "react"
import ComponentC from "./useContext/ComponentC"
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
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
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
      <UserContext.Provider value={"hari"}>
        <ChannelContext.Provider value={"vijayawada"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
