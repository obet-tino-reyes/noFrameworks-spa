const NAME = 'forbes',
DOMAIN = `https://${NAME}.com.mx/`,
SITE = `${DOMAIN}/wp-json`,
API =  `${SITE}/wp/v2`,
POSTS = `${API}/posts?_embed`,
POST = `${API}/posts`,
SEARCH  = `${API}/search?_embed&search=`;

export default{
    NAME,
    DOMAIN,
    SITE,
    API,
    POSTS,
    POST,
    SEARCH,

}