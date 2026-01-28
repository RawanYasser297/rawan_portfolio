import { useAuth } from "./context/authContext";
import { loginWithGoogle } from "./googleAuth";
import { Header } from "./Header";
import Shop from './components/Shop';

function App() {
  
  const {user}=useAuth()
  return (
    <div>
      <Header />
      <h1>Welcome to the Gallery Store</h1>
      <p>Your one-stop shop for all things art!</p>
      {!user && <button onClick={loginWithGoogle}>Sign In</button>}
      <Shop  />
    </div>
  )
}

export default App
