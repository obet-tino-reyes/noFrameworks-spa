import {ajax} from "../helpers/ajax.js";
import api from "../helpers/api.js";

import Post from "./HomeView/Post.js";
import FullPostView from "./HomeView/FullPostView.js";
import ContactView from "./ContactView/ContactView.js";
import searchPostView from "./SearchView/SearchPostView.js";


/* router allows the navigation through the page views these change their content  acording to their hash
in this project we have 3 views which are the homepage which shows the  articles by date, the search view the one that appears when we click on the input and the contact form

*/
const Router = async () => {

    let {hash} = location;
    /* homepage  we check if there are no hashes or if there is just one we show the homepage content */ 
    if(!hash || hash === '#/'){
        await ajax({ //see ajax function inside helpers folder to understand it.
            url:api.POSTS,
            cbSuccess:(posts) => {
                posts.forEach(post => { /* it loops through all the obejct that we got then  for each post we use the card component to show it in the page  and finally we append it to the main div */
                
                    let $content = Post(post);   
                    document.getElementById('main').append($content);
                });
            },
        });
    }
    else if(hash === "#/Contacto"){
            document.getElementById('main').appendChild(ContactView())
       
        
    }
  
    else if(location.hash.includes('#/search')){
        let query = localStorage.getItem('apiSearch');
        if(!query){
            return false
        }
        await ajax({
            url:`${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                if(search.length  === 0){
                    document.querySelector('main').innerHTML = `
                    <div>
                    <p>no existen resultados para el articulo: ${query}. lo sentimos</p>
                    </div>
                    `
                }else{
                    search.forEach(post => {
                        console.log(post);
                        let $content = searchPostView(post);
                        document.querySelector('main').appendChild($content);
                    });

                }
            }
        })
    }
    else{ //if 
        await ajax({  
                url:`${api.POST}/${localStorage.getItem('postId')}`,
                cbSuccess:(post) => {
              
                    document.getElementById('main').insertAdjacentElement('afterbegin',FullPostView(post));
                },

            })
        ;
    };

    document.querySelector('.loader').style.display = 'none'
}
export default Router;