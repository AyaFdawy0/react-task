import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UsersModule from "../modules/UsersModule";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users";
import User from "../pages/User";
import AddUser from "../pages/AddUser";
import NotFound from "../pages/NotFound";
import Navbar from "../component/Navbar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
            <div className="App">
      <BrowserRouter>
      <Navbar/>
         <Routes>

           <Route path='/' element={<Home />} />
           <Route path='about' element={<About />} />
           <Route path="users" element={<UsersModule />} />
           <Route path='users/add' element={  <AddUser />} />
           <Route path='users/userID' element={  <User />} />
           <Route path='*' element={  <NotFound />} />
         </Routes>
      </BrowserRouter>
     
    </div>
    </Provider>
   
  );
}

export default App;
