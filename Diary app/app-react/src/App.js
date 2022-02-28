
import {Land} from './components/Land/Land.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Post from '../src/Post'
const App = () => {
  return (
    <BrowserRouter>
   <div className='grid'>
     <Header />
     <Routes>
       <Route path='/' element={<Land />} />
       <Route path='add' element={<Post/>}/>

       </Routes>
       </div>
 
       </BrowserRouter>
  );
};
export default App;
