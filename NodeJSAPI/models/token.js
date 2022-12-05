const {getRows} = require('../database/query');
var fs = require('mz/fs')
exports.authLogin = async (username,password) => {
    if(username=="root" && password == "bdpA!2o22"){
         
        return [{user:username}];
}
}

