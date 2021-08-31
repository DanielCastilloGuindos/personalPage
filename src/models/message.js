'use strict';

class Message {

    constructor (data) {
        this.info = {
            creatorName: data.creatorName ?? '',
            creatorEmail: data.creatorEmail ?? '',
            filePath: data.filePath ?? '',
            message: data.message ?? '',
            dateOfIssue: data.dateOfIssue ?? '',   
        };
    }

}

export {Message};