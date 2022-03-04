const ContactView = () => {
    const $ContactView = document.createElement('form');
    $ContactView.classList.add( 'contact-form');
    
    $ContactView.innerHTML = `
    <legend>Envíanos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu nombre"
      title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
      pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
    <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
      title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
      <img src="./app/assets/images/forbes-mexico-logo.svg" alt="Cargando">
    </div>
    <div class="contact-form-response none">
    </div>
    `;
    function validatingForm(){
        const $inputs = document.querySelectorAll('.contact-form [required]');

        $inputs.forEach((input) => {
            const $span = document.createElement('span');
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add('contact-form-error', 'none');
            input.insertAdjacentElement('afterend', $span);
        });

        document.addEventListener('keyup', (e) => {
            if(e.target.matches('.contact-form [required]')){
                let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            
                if(pattern && $input.value !== ""){
                    let regex = new RegExp(pattern)
                    return !regex.exec($input.value)
                    ? document.getElementById($input.name).classList.add('is-active')
                    : document.getElementById($input.name).classList.remove('is-active');
                }
                if(!pattern){
                    return $input.validatingForm === ""
                    ? document.getElementById($input.name).classList.add('is-active')
                    :document.getElementById($input.name).classList.remove('is-active');
            
            }
        }
        })
        document.addEventListener('submit', (e) => {
            e.preventDefault();
            const $loader = document.querySelector('.contact-form-loader'),
            $response = document.querySelector('.contact-form-response');
            $loader.classList.remove('none');
            
            fetch("https://formsubmit.co/ajax/obetreyes1419@gmail.com",{
                method:'POST',
                body: new FormData(e.target)
            })
            .then(res => res.ok ? res.json(): Promise.reject(res))
            .then(json => {
                console.log(json)
                $loader.classList.add('none');
                $response.classList.remove('none');
                $response.innerHTML = `<p>tu mensaje ha sido enviado correctamente , si es necesario te enviaremos una respuesta lo mas rapido que podamos</p>`
                $ContactView.reset();
                
            })
            .catch(err => {
                console.log(err)
                let message = err.statusText || `Ocurrio un error al enviar el mensaje`;
                $response.innerHTML = `<p>Error: ${err.status}: ${message}</p>`
            }).finally(() =>{
                setTimeout(() => {
                    $response.classList.add('none')
                }, 3000);
            })
        })
    };
     
   setTimeout(() => validatingForm(), 100);
    return $ContactView;
   
}
export default ContactView;