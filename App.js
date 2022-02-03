import './App.css';
import { Container } from 'semantic-ui-react'
import Header from "./components/Header";
import AllProducts from './components/AllProducts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CartProducts from './components/CartProducts';


function App() {
  return (
 <Container style={{marginTop:"10px"}} >

<Router>
<Header />

        <Routes>
        <Route exact path="/" element={   <AllProducts/>}/>
        <Route exact path="/cartProducts" element={<CartProducts/>}/>
           
        
         
        
        </Routes>
   
    </Router>




 </Container>
  );
}

export default App;
