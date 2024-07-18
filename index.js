const nodemailer=require('nodemailer')
const sender=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'Enter user email',
        pass:'Enter user password'
    }
})

const composemail={
    from:'Enter user email',
    to:'Enter mailid for whom to send',
    subject:'Welcome to nodemailer',
    text:'qwertyuioppppplkjhgfdsazxcvbnmmkoiuytrewqazxcvbnmkoppoiujnbvcxsertyuikjhgfds'
}

sender.sendMail(composemail,function(error,info){
    if(error){
        console.log('msg not sent',error);
    }else{
        console.log('msg sent successfully'+info.response);
    }
})