
import './App.css';
import BarraNavegacao from './Componentes2/BarraNavegacao';
import Footer from './Componentes2/Footer';
import Home from './Componentes2/Home';
import ListaUsuarios from './Componentes2/ListaUsuarios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUpdateUsuario from './Componentes2/CreateUpdateUsuario';

function App() {
  return (
    <div>
    <Router>

  
   <BarraNavegacao/>
   <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/usuarios" component={ListaUsuarios}></Route>
   <Route path="/usuarios/:id" component={CreateUpdateUsuario}></Route>
   </Switch>
 
   <Footer/>
   </Router>
   
   </div>
  );
}

export default App;
