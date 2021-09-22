import * as express from "express";
import MailService from "../services/mail.services";

class MailController {
    public async post(request: express.Request, response: express.Response) {
        const message = Object.assign({}, request.body);     
            
        MailService.to = message.to;
        MailService.subject = message.subject;
        MailService.message = message.message;
        let result = MailService.sendMail();

        response.status(200).json({ 'result': result })
    }
};

export default new MailController();