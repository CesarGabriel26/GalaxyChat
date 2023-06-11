let Config = document.getElementById('Configs')
let RightContainer = document.getElementById('Right')

var inver = false
var LoadContacts = true

var userData = JSON.parse(localStorage.getItem('GalaxyChatUserData'))
var CurrentChat = JSON.parse(localStorage.getItem('GalaxyChatCurrentChat'))
let MessageINP = document.getElementById('Message')

/*Variaveis de configuração*/
var Hour_12_Format = false
var FontSize = 15
/**/

function Show_Config() {

    if (inver) {
        Config.style.right = "-1000"
        inver = false
    } else {
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
let Mensagem_Font = document.querySelectorAll('#Mensagem')
let FontSizeText = document.getElementById('FontSizeText')
let Midia_prev = document.getElementById('Midia')
let PrevContainer = document.querySelector('.File_Previl-Emojis')
let EmojisContainer = document.getElementById('EmojisContainer')

TogleButons.forEach(TogleButton => {
    TogleButton.addEventListener('click', () => {
        if (TogleButton.classList.contains('Ativo')) {
            TogleButton.classList.remove('Ativo')
            eval(TogleButton.getAttribute('data-function'))
        } else {
            TogleButton.classList.add('Ativo')
            eval(TogleButton.getAttribute('data-function'))
        }
    })
})

FontSizeText.innerHTML = `${FontSize}px`
FontSizeText.innerHTML = `${FontSize}px`
Mensagem_Font.forEach(msg => {
    msg.style.fontSize = `${FontSize}px`
})

//buttons functions

function ChangeHourFormat() {
    if (Hour_12_Format) {
        Hour_12_Format = false
    } else {
        Hour_12_Format = true
    }
    UpdateChat(chat_Prim)
}

function ChangeFontSize(Size) {
    FontSize += Size

    if (FontSize < 15) {
        FontSize = 15
    } else if (FontSize > 20) {
        FontSize = 20
    }

    Mensagem_Font.forEach(msg => {
        msg.style.fontSize = `${FontSize}px`
    })
    FontSizeText.innerHTML = `${FontSize}px`
}

function ShowMidaPrev() {
    console.log('Chamado');
    if (PrevContainer.classList.contains('Ativo')) {
        if (Midia_prev.style.left == "-1000px") {
            Midia_prev.style.left = "30%"
            EmojisContainer.style.left = "-1000px"
        } else {
            PrevContainer.classList.remove('Ativo')
            Midia_prev.style.left = "-1000px"
            EmojisContainer.style.left = "-1000px"
        }

    } else {
        PrevContainer.classList.add('Ativo')
        Midia_prev.style.left = "30%"
        EmojisContainer.style.left = "-1000px"
    }
}

function ShowEmojisContainer() {
    if (PrevContainer.classList.contains('Ativo')) {
        if (EmojisContainer.style.left == "-1000px") {
            Midia_prev.style.left = "-1000px"
            ImagePath = ""
            Midia_prev.innerHTML = ""

            EmojisContainer.style.left = "0"
        } else {
            PrevContainer.classList.remove('Ativo')
            EmojisContainer.style.left = "-1000px"
            Midia_prev.style.left = "-1000px"
        }

    } else {
        PrevContainer.classList.add('Ativo')
        EmojisContainer.style.left = "0"
    }
}


/*Setando Foto na tela*/
let UserPfp = document.getElementById('UserPfp')
UserPfp.src = userData[3]

// Setando Chats que o usuario faz parte
var Contacts = document.getElementById('Contacts')
var ContactImage = document.getElementById('ContactImageHeader')
var ContactName = document.getElementById('ContactName')

if (CurrentChat) {
    ContactName.innerHTML = CurrentChat[0]
    ContactImage.src = CurrentChat[1]
}


const Contact_Card = (Contact, name) => `
    <div onclick="Change_Chat('${name}','${Contact[0]}')" class="Contato_Card">
        <div class="ContactPFP">
            <img ondragstart="return false" src="${Contact[0]}" id="ContactImage">
        </div>
        <div class="textos">
            <p class="Nome">${name}</p>
        </div>
    </div>
`


function LoadContactsChats(Chat_Name, data) {
    Contacts.innerHTML += Contact_Card(data, Chat_Name)
    let ctcard = document.querySelectorAll('.Contato_Card')
    if (ctcard.length > userData[0].length) {
        ctcard[ctcard.length - 1].remove()
    }
}

// ! chenge chat
function Change_Chat(i, foto) {
    Chat_Array = []
    chat_Prim = []
    loaded = false

    var dl = [i, foto]

    localStorage.setItem('GalaxyChatCurrentChat', JSON.stringify(dl))
    CurrentChat = JSON.parse(localStorage.getItem('GalaxyChatCurrentChat'))
    ContactName.innerHTML = CurrentChat[0]
    ContactImage.src = foto
    LoadChatData(CurrentChat[0])
}

// Criando Chats e enviando os para firebase
let ChatPfp = document.getElementById('ChatPfp')
var ImgPath = ""
let CNC = document.getElementById('CNC')

if (ChatPfp) {
    ChatPfp.addEventListener('change', () => {
        const file = ChatPfp.files[0]
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            ImgPath = reader.result
        })
        reader.readAsDataURL(file);
    })
}
var visible = false
function ShowNewChatCreator() {
    console.log("Chamado");
    if (visible) {
        CNC.style.display = 'none'
        visible = false
    } else {
        CNC.style.display = 'flex'
        visible = true
    }
}

function CreateNewChat() {
    let ChatName = document.getElementById('ChatName').value
    var Timestamp = new Date().toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', hour12: false })

    if (ValidarCriacao(ChatName)) {
        var ServerMessage = [
            {
                pfp: "img/Omega.jpg",
                nome: "Omega",
                hora: Timestamp,
                Text: "Chat criado com suceço",
                image: ""
            }
        ]
        var chts = userData[0]
        chts.push(ChatName)
        console.log(chts)
        var TempData = {
            Name: userData[2],
            Email: userData[1],
            Senha: userData[4],
            Pfp: userData[3],
            ChatsAdd: chts
        }


        SaveUserData(TempData, userData[2])

        localStorage.setItem('GalaxyChatUserData', JSON.stringify(TempData))
        userData = JSON.parse(localStorage.getItem('GalaxyChatUserData'))

        chts.forEach(ch => {
            LoadContactsDT(ch)
        })

        SaveChatData(ServerMessage, ImgPath, ChatName)
        CNC.style.display = 'none'
    }
}

function ValidarCriacao(Nome) {
    if (Nome == "") {
        alert('De um nome ao seu servidor')
        return false
    }
    if (ImgPath == "") {
        alert('De uma foto ao seu servidor')
        return false
    }

    return true
}

//capturando tecla enter
MessageINP.addEventListener('keypress',CheckIfEnter)

function CheckIfEnter(event) {
    event = event || window.event;
  
    var keyCode = event.keyCode || event.which;
    if (keyCode === 13) {
        SendMessage()
    }
}