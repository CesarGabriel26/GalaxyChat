let Config = document.getElementById('Configs')
let RightContainer = document.getElementById('Right')

var inver = false

var userData = JSON.parse(localStorage.getItem('GalaxyChatUserData'))

/*Variaveis de configuração*/
var Hour_12_Format = false
/**/

function Show_Config() {

    if (inver) {
        Config.style.right = "-1000"
        inver = false
    }else {
        Config.style.right = "0"
        inver = true
    }

}

// ! Togle button for Dark and Light Theme
let Color_Mode_Button = document.getElementById('Color_Mode_Button')

Color_Mode_Button.addEventListener('click', () => {
    if (Color_Mode_Button.classList.contains('Ativo')) {
        Color_Mode_Button.classList.remove('Ativo')
        document.body.classList.add('Light')
    } else {
        Color_Mode_Button.classList.add('Ativo')
        document.body.classList.remove('Light')
    }
})

// ? All togle butons
let TogleButons = document.querySelectorAll('.TogleButton')

TogleButons.forEach(TogleButton => {
    TogleButton.addEventListener('click', ()=>{
        if (TogleButton.classList.contains('Ativo')) {
            TogleButton.classList.remove('Ativo')   
            eval(TogleButton.getAttribute('data-function'))
        }else {
            TogleButton.classList.add('Ativo')
            eval(TogleButton.getAttribute('data-function'))
        }
    })
})

function ChangeHourFormat() {
    if (Hour_12_Format) {
        Hour_12_Format = false
    }else {
        Hour_12_Format = true
    }
    UpdateChat(Chat)
}

/*Setando textos na tela*/
let UserPfp = document.getElementById('UserPfp')
UserPfp.src = userData[2]