const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Validação de login 

const usuarios = [
    {
        login: 'ApenasUmUsuário',
        pass: '1234'
    },
    {
        login: 'ProfWeldes',
        pass: '1234'
    }
]

let botao = document.getElementById('btnLogar')


botao.addEventListener('click', function logar(){
    let getUsuario = document.getElementById('usuario').value
    let getSenha = document.getElementById('senha-user').value
    let validaLogin = false

    for(let i in usuarios){

        if(getUsuario == usuarios[i].login && getSenha == usuarios[i].pass){
            validaLogin = true
            break;
        }else{
            validaLogin = false
        }
    }

    if(validaLogin == true){
        function alerta(){
            Swal.fire({
                title: "Sucesso ao logar!",
                text: "Clique em ok para retornar ao site",
                icon: "success"
            }
        ).then((result) =>{
           if(result.isConfirmed){
            location.href = "index2.html"
           }
        });
    }
        alerta();  
        event.preventDefault()
 
    }
    
    
    
    else {
    event.preventDefault()
    function alert(){
        Swal.fire({
            title: "Falha no login",
            text: "Insira os dados cadastrados corretamente",
            icon: "error"
          });
    }
    alert();
    }
})

