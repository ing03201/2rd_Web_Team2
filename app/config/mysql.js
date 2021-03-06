const mysql = require("mysql"); // mysql 연결 
const mysqlConnection = { 
    init: function () { return mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password : 'password',
        database: 'study_db', 
        charset: 'utf8mb4'
        }); 
    }, 
    open: function (conn) {
        conn.connect(function (err) {
                if (err) {
                    console.error('MySQL connection failed.');
                    console.error('Error Code : ' + err.code);
                    console.error('Error Message : ' + err.message); 
                } 
                
                else {
                    console.log('MySQL connection successful.');
                }
            }
        );
    } 
    , 
    
    close: function (conn) {
        conn.end(function (err) {
            if (err){
                console.error('MySQL Terminate failed.'); 
                console.error('Error Code : ' + err.code); 
                console.error('Error Message : ' + err.message); 
            } 
            
            else {
                console.log("MySQL Terminate connection."); 
            } 
        }
        ); 
    } 
}; 

module.exports = mysqlConnection;