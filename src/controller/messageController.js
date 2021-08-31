'use strict';

import {Message} from '/models/message.js';

class MessageController {

    constructor () {
        let info = {
            creatorName: '',
            creatorEmail: '',
            message: '',
            filePath: '',
            dateOfIssue: '',
        };
        
        let message = new Message(info);
        
        console.log(message.info);
    }

}

export {MessageController};