'use strict';

class Review {

    constructor (data) {
        this.info = {
            creatorName: data.creatorName ?? '',
            creatorEmail: data.creatorEmail ?? '',
            message: data.message ?? '',
            dateOfIssue: data.dateOfIssue ?? '',
        };
    }

}

export {Review};