
import nodemailer from "nodemailer";


const createTransport = async() => {
    return nodemailer.createTransport({
        // host: "smtp.gmail.com",
        service: 'gmail',
        port : 465,
        secure: false,
        auth:{
            user: 'x',
            pass: 'x'
        }
    
    });
}

export const send  = async () => {
    try{
        const info = await createTransport.transporter.sendMail({
            from :'x',
            to :'x',
            subject: 'titulo' ,
            text: 'Texto',
            html: '<p>Nuevo texto</p>'
        })
        return info.messageId;
    }catch(error){
        console.log(error);
    }
    
}