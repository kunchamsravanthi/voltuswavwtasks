var express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '192.168.1.169',
    user: 'vw-srv-0001',
    password: 'Apple#123',
    database: 'TestDB',
    port: 6603
});
var app = express();
const http = require('http');
            const { parse } = require('querystring');

            const server = http.createServer((req, res) => {
                if (req.method === 'POST') {
                    collectRequestData(req, result => {

    con.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... nn");
            var sql ="INSERT INTO Users VALUES (".$_POST['firstname'].",".$_POST['lastname'].",".$_POST['password'].",".$_POST['email'].")";
            con.query(sql, function (err, result) {
                if (err) throw err;

                console.log("1 record inserted");
            });
        } else {
            console.log("Error connecting database ... nn", err);
        }
    });
   
                        console.log(result);
                        // res.end(`Parsed data belonging to ${result.fname}`);
                        // res.end(result.fname);
                    });
                } 
                else {
                    res.end(`
                        <!doctype html>
                        <html>
                        <body>
                            <form  method="POST">

                             <input className="form-item" type="text" placeholder="enter your first name" name="firstname" /><br><br>
                             <input className="form-item" type="text" placeholder="enter your last name" name="lastname"  /><br><br>
                             <input className="form-item" type="text" placeholder="enter your email" name="email"  /><br><br>
                             <input className="form-item" type="password" placeholder="password" name="password"  /><br><br>

                             <input className="form-submit" type="submit" values="submit" name="submit" />
                         </form>
                        </body>
                        </html>
                    `);
                }
            });
            server.listen(3000);

            function collectRequestData(request, callback) {
                const FORM_URLENCODED = 'application/x-www-form-urlencoded';
                if(request.headers['content-type'] === FORM_URLENCODED) {
                    let body = '';
                    request.on('data', chunk => {
                        body += chunk.toString();
                    });
                    request.on('end', () => {
                        callback(parse(body));
                    });
                }
                else {
                    callback(null);
                }
            }