const {app} = require("./app.js");
const {SERVER_PORT} = require('./config.js')

const PORT = SERVER_PORT || 6000;

const {conn} = require('./DBConnection.js')

if(conn)
{
    app.listen(PORT,(err) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(`Server Running on ${PORT}`);
        }
    })
}

