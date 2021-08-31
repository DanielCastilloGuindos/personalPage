'use strict';

const express = require('express');
const mainRouters = express.Router();

mainRouters.get('/', (req, res) => {
    let pathHbsRender = 'templates/index';

    res.render(pathHbsRender);
});

module.exports = mainRouters;
// export {mainRouters};