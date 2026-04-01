import './App.css'
import Dashboard from './components/Dashboard'
import FnUnmount from './components/FuUnmount'
import response from './components/response'
import React from 'react'
import SecondComponent from './components/SecondComponent'
import MemoExample from './components/MemoExample'

 export const UserContext = React.createContext();

function App() {
 

  const user = "David";

  return (
    <div>
      {/* <Dashboard data={response} />; */}
      {/* <FnUnmount/> */}
      {/* <UserContext.Provider value={user}>
        <h1>App Component</h1>
        <SecondComponent />
      </UserContext.Provider> */}
      <MemoExample/>
    </div >
  )
}

export default App
