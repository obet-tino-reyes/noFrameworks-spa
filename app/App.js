import Header from "./components/Header.js";
import Router from "./components/Router.js";
import Main from './components/Main.js';
import Loader from "./components/Loader.js";

const App = async () =>{
    const $root =  document.getElementById('root');
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
 
 
    Router();

};
export default App;
