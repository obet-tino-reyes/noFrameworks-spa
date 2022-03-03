import SearchForm from "./SearchForm.js";

const Header = () => {
    const $Header = document.createElement('header'),
    $Menu = document.createElement('nav');
    $Header.classList.add('header');
    $Menu.classList.add('header');
    
    $Menu.innerHTML = `
    <div>
    <a href="#/" class='logo'>Forbes Mexico Spa</a>
    <a href="#/">Inicio</a>
    <a href="#/Contacto">Contacto</a>
    </div>
    `;


    $Header.appendChild($Menu);
    $Header.appendChild(SearchForm());
    return $Header

}
export default Header;