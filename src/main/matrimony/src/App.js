import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { List } from './List';
import { Create } from './Create';
import { Read } from './Read';
import { Update } from './Update';
import { Menu } from './Menu';
import { Filter } from './Filter';
import { Remove } from './Remove';
import { Login } from './Login';
import { Slide } from './Slide';

const App=()=>{
  return(
    <>
    {
      (sessionStorage.getItem('user'))?
      <>
          <HashRouter>
      <Menu/>
      
      <Routes>
        <Route exact path="/" element={<Slide/>}/>
        <Route exact path="/view" element={<List/>}/>
        <Route exact path="/fresh" element={<Create/>}/>
        <Route exact path="/open/:key" element={<Read/>}/>
        <Route exact path="/modify/:primary" element={<Update/>}/>
        <Route exact path="/filter"   element={<Filter/>}/>
        <Route exact path="/remove" element={<Remove/>} />
        

      </Routes>
      

    </HashRouter>
    </>
    :
    <>
    <Login/>
    </>
    }


    </>
  )
}

export default App;
