import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar, Sidebar } from './components';
import { Landing, Register, Menu, ProtectedDashboard, ProtectedLogin, Profile, Recipe, CreateRecipe, User, Category, Error} from './pages';
import { Home, Search, List, MyProfile } from './pages/home';





function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/register' element={<ProtectedLogin><Register/></ProtectedLogin>}></Route>
        <Route path='/profile' element={<ProtectedDashboard><Profile/></ProtectedDashboard>}></Route>

        <Route path='/home' element={<ProtectedDashboard><Menu/></ProtectedDashboard>}>
          <Route index element={<Home/>}></Route>
          <Route path='/home/search' element={<Search/>}></Route>
          <Route path='/home/list' element={<List/>}></Route>
          <Route path='/home/myProfile' element={<MyProfile/>}></Route>
          <Route path='/home/recipe/:id' element={<Recipe/>}></Route>
        </Route>

  
        <Route path='/category/:category' element={<ProtectedDashboard><Category/></ProtectedDashboard>}></Route>
        <Route path='/createRecipe' element={<ProtectedDashboard><CreateRecipe/></ProtectedDashboard>}></Route>
        <Route path='/user/:id' element={<ProtectedDashboard><User/></ProtectedDashboard>}></Route>

       
        

        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
