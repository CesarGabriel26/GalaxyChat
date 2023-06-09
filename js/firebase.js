const firebaseConfig = {
    apiKey: "AIzaSyCi-ugsaNNgZ6UWPX3Pu1iXClLQ-pEJft0",
    authDomain: "galaxychat-d18aa.firebaseapp.com",
    databaseURL: "https://galaxychat-d18aa-default-rtdb.firebaseio.com",
    projectId: "galaxychat-d18aa",
    storageBucket: "galaxychat-d18aa.appspot.com",
    messagingSenderId: "922791142687",
    appId: "1:922791142687:web:d40ba0414ff3a6fa7a3c2a",
    measurementId: "G-KQTMJ8QC61"
};

// ! inicializando firebase
firebase.initializeApp(firebaseConfig);

// ! referenciando database
var DB = firebase.database()

const SaveChatData = (Array, Chat) => {
    var NewForm = DB.ref('Chats').child(Chat);

    NewForm.update({
        messages: Array
    })
}

function LoadChatData(Chat_Name) {
    var data = []

    DB.ref(`Chats/${Chat_Name}`).on('value', (Snapshot) => {

        Snapshot.forEach(chat => {
            data.push(chat.val())
        })
        
        if (data != undefined) {
            console.log(data);
            UpdateChat(data)
        }
    });

    DB.ref(`Chats/${Chat_Name}`).on('child_added', (Snapshot) => {

        Snapshot.forEach(chat => {
            data = chat.val()
        })
        
        if (data != undefined) {
            UpdateChat(data)
        }
    });

    
    
}

function SaveUserData(Array,Index) {
    var NewForm = DB.ref('Users').child(Index);

    NewForm.update(Array)
}

function LoadUserData(Email) {
    var data = []

    DB.ref(`Users/${Email}`).on('value', (Snapshot) => {

        Snapshot.forEach(user => {
            data.push(user.val())
        })
        
        if (data != undefined) {
            ExecuteLogin(data)
        }
    });
}

function GetChatData(chat) {
    
}