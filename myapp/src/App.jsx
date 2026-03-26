import './App.css'
import LearnFragment from './Component/LearnFragment'
import LearnUseState from './Component/UseState'
import LearnCounter from './Component/LearnCounter'
import Change from './Component/Change'
import Balance from './Component/Balance'
import SideEffect from './Component/SideEffect'
import Routing from './Component/Routing'
import ProductCard from './Component/Card'
import FunctionOne from './Component/FunctionOne'
import FunctionTwo from './Component/FunctionTwo'
import UpdatedComponent from './Component/hoc/UpdatedComponent'
import NormalComponent from './Component/hoc/NormalComponent'
import NormalUser from './Component/hoc/NormalUser'
import PremiumUser from './Component/hoc/PremiumUser'

function App() {

  // const isUser=false;
  // const data=isUser?<FunctionOne/>:<FunctionTwo/>

  return (
   <div>
    {/* <LearnFragment/> */}
    {/* <LearnUseState/> */}
    {/* <LearnCounter/> */}
    {/* <Change/> */}
    {/* <Balance/> */}
    {/* <SideEffect/> */}
    {/* <Routing/> */}
    {/* {data}
    <FunctionOne/>
    <FunctionTwo/> */}
    {/* <NormalComponent name="Normal"/>
    <UpdatedComponent name="Updated"/> */
    }
    <NormalUser/>
    <PremiumUser/>
   </div>
  );
}

export default App
