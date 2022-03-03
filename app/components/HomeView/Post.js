const Post = (props) => {
    let {id,title, excerpt, slug,fimg_url }  = props;
    



    const $Post = document.createElement('article');
    $Post.classList.add('card');

    document.addEventListener('click', e => {
        if(!e.target.matches('.card a')){
            return false;
        };
        localStorage.setItem('postId', e.target.dataset.id);
    });

    $Post.innerHTML = `
    <h2>${title.rendered}</h2>
    <img src="${fimg_url}"  alt='${title.rendered}'>
    <p>${excerpt.rendered}</p>
    <a href='#/${slug}' data-id='${id}'>Leer Articulo</a>
    `



    return $Post


}
export default Post;