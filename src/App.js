
import Contact from './components/Contact';
import Circulo from './components/Circulo';
import Cuadro from './components/Cuadro';
import Barra from './layout/Barra';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Routes>


    <Route path='/' element={<Barra/>}>
      <Route path='Circulo' element={  <Circulo/>   }     />
      <Route path='Contacto' element={  <Contact/>   }     />
      <Route path='Cuadro' element={  <Cuadro/>   }     />

    </Route>





    </Routes>
    </BrowserRouter>
  );
}

export default App;