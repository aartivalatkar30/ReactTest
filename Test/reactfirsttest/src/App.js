import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './component/AddRecipe';
import RecipiDetails from './component/RecipiDetails';
import RecipieList from './component/RecipieList';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path ="/" element={<Home/>}/>

      <Route path ="/AddRecipe" element={<AddRecipe/>}/>

      <Route path ="/RecipiDetails" element={<RecipiDetails/>}/>
      <Route path ="/RecipieList" element={<RecipieList/>}/>
      </Routes>
    </div>
  )
}

export default App;

