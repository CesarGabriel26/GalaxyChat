let Container = document.getElementById('Login-SingUp')
let login = document.getElementById('login')
let SingUp = document.getElementById('SingUp')

//================= Login ===== SingUp =================//
let UserNameSingUp = document.querySelector('#SingUp #UserName')
let EmailSingUp = document.querySelector('#SingUp #Email')
let PasswordSingUp = document.querySelector('#SingUp #Password')
let ConfirmPasswordSingUp = document.querySelector('#SingUp #ConfirmPassword')
let ImagePrevil = document.getElementById('ImagePrevil')
let FileINP = document.getElementById('FileINP')

let EmailLogIn = document.querySelector('#login #Email')
let PasswordLogIn = document.querySelector('#login #Password')

var ImagePath = ""

function Mudar() {
    
    if (Container.classList.contains('SingUp_Active')) {
        SingUp.classList.remove('Ativo')
        login.classList.add('Ativo')
        Container.classList.remove('SingUp_Active')
    }else{
        SingUp.classList.add('Ativo')
        login.classList.remove('Ativo')
        Container.classList.add('SingUp_Active')
    }

}

if (FileINP) {
    FileINP.addEventListener('change', () => {
        const file = FileINP.files[0]
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            ImagePath = reader.result
            ImagePrevil.src = ImagePath
        })
        reader.readAsDataURL(file);
    })
}


function SingUp_() {
    var Nome = UserNameSingUp.value
    var Email = EmailSingUp.value
    var Senha = PasswordSingUp.value
    var ConfSenha = ConfirmPasswordSingUp.value

    if (ValidarSingUp(Nome,Email,Senha,ConfSenha,ImagePath)) {
        alert('cadastrado')

        var User = {
            Name: Nome,
            Email: Email,
            Senha: Senha,
            Pfp: ImagePath,
            ChatsAdd: []
        }

        SaveUserData(User,Email)

    }
}

function ValidarSingUp(Nome,Email,Senha,ConfSenha,Image) {
    if (Nome === "" || Email === "" || Senha === "" || ConfSenha === "") {
        alert('Preencha todos os campos')
        return false
    }else if (Image === "") {
        alert('Escolha uma foto de perfil')
        return false
    }else if (Senha != ConfSenha) {
        return false
    }

    return true
}

function LogIn_() {
    var Email = EmailLogIn.value
    var Senha = PasswordLogIn.value

    if (ValidarLogIn(Email,Senha)) {
        LoadUserData(Email)
    }
}

function ExecuteLogin(Data) {
    var Senha = PasswordLogIn.value
    if(Data[4] === Senha){
        alert('Bem vindo ao sistema')

        localStorage.setItem('GalaxyChatUserData',JSON.stringify(Data))
        location.href = "chat.html"
    }else {
        alert('Nome de usuario ou senha incorretos')
    }
    
}

function ValidarLogIn(Email,Senha) {
    if (Email === "" || Senha === "") {
        alert('Preencha todos os campos')
        return false
    }

    return true
}