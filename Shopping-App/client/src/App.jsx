import UserLayout from "./pages/UserLayout"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import ItemStore from "./components/ItemStore"
import Login from "./components/Login"
import AdminLayout from "./pages/AdminLayout"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/admin" element={<AdminLayout/>}/> 
      <Route path="/user" element={<UserLayout/>}>
      <Route index element={<ItemStore/>}/>
      <Route path="mycart" element={<h1>My Cart</h1>}/>
      <Route path="myorders" element={<h1>My Orders</h1>}/>
      <Route path="settings" element={<h1>Settings Page</h1>}/>
      <Route path="profile" element={<h1>My Profile</h1>}/>
      <Route path="logout" element={<h1>Logout</h1>}/>
      <Route path="*" element={<h1>Error Page</h1>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
