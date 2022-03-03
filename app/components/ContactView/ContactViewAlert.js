const ContactViewAlert = (res) => {
    const $contactViewAlert = document.createElement('div');
    $contactViewAlert.classList.add('contactView-Alert');
    


    $contactViewAlert.innerHTML = `
    <span class="close">&times;</span>
    <p>tu mensaje ha sido enviado . nos comunicaremos contigo si es necesario !</p>
`



 return $contactViewAlert;
}
export default ContactViewAlert;