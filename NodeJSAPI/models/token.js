const {getRows} = require('../database/query');

exports.authLogin = async (username,password) => {
    if(username=="root" && password == "rockwell"){
return [{user:username}];
}
}

