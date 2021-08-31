'use strict';

import {Review} from '/models/review.js';

class ReviewController {

    constructor () {
        let info = {
            creatorName: '',
            creatorEmail: '',
            message: '',
            filePath: '',
            dateOfIssue: '',
        };
        
        let review = new Review(info);
        
        console.log(review.info);
    }

}

export {ReviewController};