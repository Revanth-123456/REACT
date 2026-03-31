import './App.css'
import Dashboard from './components/Dashboard'
import response from './components/response'

function App() {
  

  return (
    <div>
      <Dashboard data={response} />;
      
    </div>
  )
}

export default App
