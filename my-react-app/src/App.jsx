import './App.css'
import Dashboard from './components/Dashboard'
import FnUnmount from './components/FuUnmount'
import response from './components/response'
import React from 'react'
import SecondComponent from './components/SecondComponent'
import MemoExample from './components/MemoExample'
import { AuthContext,useContext } from './components/AuthProvider'


 export const UserContext = React.createContext();

function App() {
 

  const user = "David";
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div>
       <h1>Simple Auth Example</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome User ✅</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login ❌</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
      {/* <Dashboard data={response} />; */}
      {/* <FnUnmount/> */}
      {/* <UserContext.Provider value={user}>
        <h1>App Component</h1>
        <SecondComponent />
      </UserContext.Provider> */}
      {/* <MemoExample/> */}
    </div >
  )
}

export default App
