import { useEffect } from 'react';
import './App.css';
import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';



function App() {
  const { user } = useAuth();

  // useEffect(()=>{
  //   async function getData(){
  //     const response = await fetch('https://api.coingecko.com/api/v3/coins')
  //     const data = await response.json()
  //     console.log(data)
  //   }
    
  //   getData()

  // },[])


  return (
    <div className="bg-gray-200 text-gray-700 text-sm font-medium">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
