import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return (
      <div>
      <ul>
       
        <li>
        <Link to='/circulo'>
          Circulo
        </Link>
          
        </li>

        <li>
        <Link to='/cuadro'>
          Cuadro
        </Link>
          
        </li>

        <li>
        <Link to='/contacto'>
          Contact
        </Link>
          
        </li>
      </ul>

      <section>
        <Outlet/>
      </section>
      </div>
    );
  }
  
  export default Barra;