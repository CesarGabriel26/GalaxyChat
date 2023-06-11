if ('Notification' in window) {
    console.log('Navegador suporta notificações')
    GetPermission()
} else {
    console.error('Navegador não suporta notificações')
}

function GetPermission(){
    if (Notification.permission === 'granted') {
        console.log('Permição de notificação consedida');
    } else {
        Notification.requestPermission().then((res)=>{
            if (res === 'granted') {
                console.log('Permição de notificação consedida');
            } else if (res === 'denied') {
                console.log('Permição de notificação recusada');
            } else if (res === 'default') {
                console.log('Permição de notificação não entregue');
                GetPermission()
            }
        })
    }
}

function notify(User,Message,Icon) {
    var notification = new Notification(User,{
        body: Message,
        icon: Icon,
        vibrate: [200,100,200],
    });

    setTimeout(()=>{
        notification.close() 
    },5000)
}

