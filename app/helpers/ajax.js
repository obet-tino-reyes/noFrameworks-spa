export async function  ajax(props){ //consumir el api endpoint sin tener que hacer esta validacion cada que consulto un api endpoint
    let {url,cbSuccess} = props
   
    try{
        const res = await fetch(url)
        const json = await  res.json();
        await cbSuccess(json)


       if(!res.ok){throw{
            status:res.status, statusText:res.statusText
        }}
    }catch(err){
        let message = err.statusText || "ocurrio un error"
        document.getElementById('main').innerHTML = `
        <div class="error">
      <p>  error ${err.status} : ${message}</p>
        </div>
        `
        document.querySelector('.loader').style.display = 'none';
    }
    
}