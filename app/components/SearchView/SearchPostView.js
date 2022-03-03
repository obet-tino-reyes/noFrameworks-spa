const searchPostView = (props) =>{
    let {id, title, _embedded} = props;
    const $searchPostView = document.createElement('article');
     let excerpt = _embedded.self[0].excerpt.rendered,
      slug = _embedded.self[0].slug,
      date = _embedded.self[0].date;

    let dateFormat = new Date(date).toLocaleString();

    
    $searchPostView.classList.add('searchPostView');


    document.addEventListener('click', e => {
        if(!e.target.matches('.searchPostView a')){
            return false;
        };
        localStorage.setItem('postId', e.target.dataset.id);
    });

    $searchPostView.innerHTML = `
        <h2>${title}</h2>
        <p>${excerpt}</p>
        <div>
        <small>${dateFormat}</small>
        <a href='#/${slug}' data-id='${id}'>Ver Articulo.</a>
        </div>
        `
    

    return $searchPostView;
}
export default searchPostView;