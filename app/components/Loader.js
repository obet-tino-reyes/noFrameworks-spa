const Loader = () => {
    const $loader = document.createElement('img');
    $loader.classList.add('loader');
    $loader.src = './app/assets/images/forbes-mexico-logo.svg';
    $loader.alt = 'cargando..'

    return $loader;
};
export default Loader;
