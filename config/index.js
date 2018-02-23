var dbconfig = require('./dbconfig');

module.exports = {
    getDbConnStr: function () {
        var string = `mongodb://${dbconfig.user}:${dbconfig.pwd}@ds245228.mlab.com:45228/nodetodosample`;
        return string;
    }
}