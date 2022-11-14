import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound';
import Protected from './Protected';

function Rotas() {
  return (
    <Routes>
        <Route index element={<Login/>}/>


        {/* Essa Rota está englobando as Demais */}

        <Route element={<Protected/>}>

            {/* Fazendo com que, somente se a operação do Elemento Protected seja feito, o usuário poderá acessar as demais páginas: */}
            
            <Route path='/home' element={<Home/>}/>

            <Route path='/about' element={<About/>}/>

            <Route path='/services' element={<Services/>}/>

            <Route path='/projects' element={<Projects/>}/>

            <Route path='/*' element={<NotFound/>}/>

        </Route>
      </Routes>  
  )
}

export default Rotas