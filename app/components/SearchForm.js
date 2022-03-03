const SearchForm = () => {
    const $searchForm = document.createElement('form');
    $searchForm.classList.add('search-form');

    $searchForm.innerHTML = `
    <input name='search'  minlength="5" type='search' placeholder='Buscar Articulo' autocomplete='off' ></input>
    `
   
    document.addEventListener('search', e=> {
        if(!e.target.matches('input[type = "search"]')){
            return false
        }
        if(!e.target.value){
            localStorage.removeItem('apiSearch');
        }
    });
    
    document.addEventListener('submit' ,e => {
     
        if(!e.target.matches('.search-form')){
            return false;
        }
        e.preventDefault();

        localStorage.setItem('apiSearch', e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`
    })
    return $searchForm;
}

export default SearchForm;
