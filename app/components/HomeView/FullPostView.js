const FullPostView = (props) => {
    let {date, title, content, fimg_url} = props;

    let dateFormat = new Date(date).toLocaleString();

    const $FullPostView =  document.createElement('article'),
    $textContent = document.createElement('div');
    $FullPostView.classList.add('FullPostView');



    $FullPostView.innerHTML = `
   <small>${dateFormat}</small>
    <h1>${title.rendered}</h1>

    <img src='${fimg_url}' alt='${title}'>
    
    `;
    $textContent.innerHTML = content.rendered;
   
    $FullPostView.appendChild($textContent);
    return $FullPostView;


};


export default FullPostView;