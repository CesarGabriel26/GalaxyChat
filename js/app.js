

let ChatContainer = document.getElementById('Chat')

// ! Inputs Do usuario
let ImageInputBtn = document.getElementById('ImageInputBtn')
let ImageInput = document.getElementById('ImageInput')

// ? carregando dados iniciais do chat
var loaded = false

var UserName = userData[2]


const ChatMessageCardAddressee = (message) => `
        <div class="Card Addressee">
            <div class="CardPFP">
                <img src="${message.pfp}" alt="">
            </div>
            <svg class="MesgIcon" viewBox="0 0 8 13" height="13" width="8">
                <path opacity="0.13"
                d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
                <path  d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z">
                </path>
            </svg>
            <div class="CardTextos">
                <div class="Topo">
                    <p>${message.nome}</p>
                    <p class="Hora">${ReturnHour(message.hora)}</p>
                </div>
                ${ReturnImage(message.image)}
                <p class="Mensagem" id="Mensagem">${Translate_Code_To_Emoji(message.Text)}</p>
            </div>
        </div>
    `
const ChatMessageCardSender = (message) => `
    <div class="Card Sender">
        <div class="CardTextos">
            <div class="Topo">
                <p class="Hora">${ReturnHour(message.hora)}</p>
                <p>${message.nome}</p>
            </div>
            ${ReturnImage(message.image)}
            <p class="Mensagem" id="Mensagem">${Translate_Code_To_Emoji(message.Text)}</p>
        </div>
        <svg class="MesgIcon" viewBox="0 0 8 13" height="13" width="8">
            <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path>
            <path d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z">
            </path>
        </svg>
        <div class="CardPFP">
            <img src="${message.pfp}" alt="">
        </div>
    </div>
`

function ReturnImage(img) {
    if (img != "") {
        if (img[1] == "video/mp4") {
            return `<video controls controlsList="nodownload" src="${img[0]}" style="height: 200px;"></video>`
        } else if (img[1] == "image/png" || img[1] == "image/gif" || img[1] == "image/jpeg") {
            return `<img src= "${img[0]}" style="height: 200px;">`
        }
    } else {
        return ""
    }
}

function ReturnHour(Hora) {
    if (Hour_12_Format) {
        return Converter(Hora)
    } else {
        return Hora
    }
}

//Fonte -> https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no
function Converter(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

/*================================================================================*/

var ImagePath = ""
ImageInputBtn.addEventListener('click', () => {
    ImageInput.value = null;
    ImageInput.click()
})


ImageInput.addEventListener('change', () => {
    var file = ImageInput.files[0]
    var reader = new FileReader();

    reader.addEventListener('load', () => {
        ImagePath = [reader.result, file.type]
        Midia_prev.innerHTML = `
            ${ReturnImage(ImagePath)}
            <button onclick="Close_Cear_Prev()" class="chatBtn ONTop"> 
                <svg height="40px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        `
        
        ShowMidaPrev()
    })
    reader.readAsDataURL(file);
})


function Close_Cear_Prev() {
    ImagePath = ""
    Midia_prev.innerHTML =""
    Midia_prev.style.left = "-1000px"
    PrevContainer.classList.remove('Ativo')
}

/*================================================================================*/
var Chat_Array = []
var chat_Prim = []


LoadChatData(CurrentChat[0])
userData[0].forEach((ch, i) =>{
    if (i >= userData[0].length) {
        LoadContacts = false
        console.log(LoadContacts);
    }

    LoadContactsDT(ch)
})


function SendMessage() {

    if (MessageINP.value === "" && ImagePath === "") {
        return
    }

    var Timestamp = new Date().toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', hour12: false })

    var mesg = {
        pfp: userData[3],
        nome: UserName,
        hora: Timestamp,
        Text: MessageINP.value,
        image: ImagePath
    }

    Chat_Array.push(mesg)
    SaveChatData(Chat_Array,ContactImage.src, CurrentChat[0])
    //DebugSaveChatData(Chat_Array)
    MessageINP.value = ""
    ImagePath = ""
}

function UpdateChat(data) {
    ChatContainer.innerHTML = ""

    chat_Prim = data
    Chat_Array = chat_Prim[1]

    if (Chat_Array == undefined || chat_Prim.length == 0 || chat_Prim.length > 2) {
        return
    }

    SpawnMessages(Chat_Array)

    loaded = true

}

function SpawnMessages(array) {
    var adres_notificatios = false
    array.forEach(mensagem => {
        if (mensagem.nome == UserName) {
            ChatContainer.innerHTML += ChatMessageCardSender(mensagem)
            adres_notificatios = false
        } else {
            ChatContainer.innerHTML += ChatMessageCardAddressee(mensagem)
            adres_notificatios = true
        }

        Mensagem_Font = document.querySelectorAll('#Mensagem')
        Mensagem_Font.forEach(msg =>{
            msg.style.fontSize = `${FontSize}px`
        })

        var cards = ChatContainer.getElementsByClassName('Card')
        cards[cards.length - 1].scrollIntoView()
    });
    if (adres_notificatios && loaded && array[array.length - 1].nome != "Omega") {
        PlaySound()
        notify(array[array.length - 1].nome, array[array.length - 1].Text, array[array.length - 1].pfp)
    }
}

function PlaySound() {
    let audio = document.createElement('audio')
    audio.src = "audio/mixkit-bell-notification-933.wav"
    audio.play()
}
