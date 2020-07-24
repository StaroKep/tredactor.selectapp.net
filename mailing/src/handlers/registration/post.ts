import { Request, Response } from 'express';
import { SMTPClient } from 'emailjs';

interface RequestData {
    email: string;
    link: string;
}

export default (request: Request, response: Response) => {
    const data: RequestData = request.body;
    const { email, link } = data;


    const client = new SMTPClient({
        user: '******',
        password: '******',
        host: '******',
        ssl: true,
        port: '******',
    });

    client.send(
        {
            text: '******',
            from: 'Ivan Ivanov <***@example.com>',
            to: 'Ivan Ivanov <***@example.com>',
            subject: 'Registration',
        },
        (err, message) => {
            console.log(err || message);

            if (!err) {
                response.sendStatus(200);
            } else {
                response.sendStatus(500);
            }
        }
    );


};
