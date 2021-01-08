//const { response } = require('express');
const express = require ('express');
const bodyParser = require ('body-parser');
const { check, validationResult } = require('express-validator');
const fs = require('fs');
const app = express();
const mysql = require('mysql');
var urlencoded = bodyParser.urlencoded({extended: false})


let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pronitron",
    database:'usersdb'
})
    

con.connect((err)=>{
   if(err) throw err;
   console.log('Connected to the Database');
});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/client', express.static('client'));
app.use('/css', express.static('css'));


app.get('/', (request,response)=>{
    response.render('index');
});

app.get('/formuleSolo', (request,response)=>{
    response.render('formuleSolo');
});


app.get('/formuleDeuxPersonnes', (request,response)=>{
    response.render('formuleDeuxPersonnes')
});

app.get('/formuleTroisPersonnes', (request,response)=>{
    response.render('formuleTroisPersonnes');
});

app.get('/formuleQuatrePersonnes', (request,response)=>{
    response.render('formuleQuatrePersonnes')
});


app.get('/formuleEntreprise', (request,response)=>{
    response.render('formuleEntreprise')
});
app.get('/ebook', (request,response)=>{
    response.render('ebook')
});

app.get('/formuleOnLigne', (request,response)=>{
    response.render('formuleOnLigne')
});

app.post('/formuleSolo',urlencoded, (request, response)=>{
    response.render('formuleSolo');
    var sql = "INSERT INTO `sportifs`(`name`,`email`,`telephone`,`date`) VALUES( '"+ request.body.name +"','"+ request.body.email +"','"+ request.body.telephone +"','"+ request.body.date +"')";
    con.query(sql, function(err){
    if(err) throw err;
    console.log('Data insert into DB');
    var timeAppointement = request.body.date;
    console.log(timeAppointement)
    });

    //var slq = "SELECT DATE_FORMAT (date,'%y-%m-%d') from `sportifs`";
    //con.query(slq, function (err, result, fields) {
        //if(err)throw err;
        //console.log(result[key]);
    //});
});

app.post('/formuleDeuxPersonnes',(request,response)=>{
    response.render('formuleDeuxPersonnes');
    var sql = "INSERT INTO `sportifs`(`name`,`email`,`telephone`,`date`) VALUES( '"+ request.body.name +"','"+ request.body.email +"','"+ request.body.telephone +"','"+ request.body.date +"')";
    con.query(sql, function(err){
    if(err) throw err;
    console.log('Data insert into DB');
    var timeAppointement = request.body.date;
    console.log(timeAppointement)
    });

});
app.post('/formuleTroisPersonnes',(request,response)=>{
    response.render('formuleTroisPersonnes');
    var sql = "INSERT INTO `sportifs`(`name`,`email`,`telephone`,`date`) VALUES( '"+ request.body.name +"','"+ request.body.email +"','"+ request.body.telephone +"','"+ request.body.date +"')";
    con.query(sql, function(err){
    if(err) throw err;
    console.log('Data insert into DB');
    var timeAppointement = request.body.date;
    console.log(timeAppointement)
    });

});
app.post('/formuleTroisPersonnes',(request,response)=>{
    response.render('formuleTroisPersonnes');
    var sql = "INSERT INTO `sportifs`(`name`,`email`,`telephone`,`date`) VALUES( '"+ request.body.name +"','"+ request.body.email +"','"+ request.body.telephone +"','"+ request.body.date +"')";
    con.query(sql, function(err){
    if(err) throw err;
    console.log('Data insert into DB');
    var timeAppointement = request.body.date;
    console.log(timeAppointement)
    });

});
app.post('/formuleQuatrePersonnes',(request,response)=>{
    response.render('formuleQuatrePersonnes');
    var sql = "INSERT INTO `sportifs`(`name`,`email`,`telephone`,`date`) VALUES( '"+ request.body.name +"','"+ request.body.email +"','"+ request.body.telephone +"','"+ request.body.date +"')";
    con.query(sql, function(err){
    if(err) throw err;
    console.log('Data insert into DB');
    var timeAppointement = request.body.date;
    console.log(timeAppointement)
    });

});
app.post('/formuleEntreprise',(request,response)=>{
    response.render('formuleEntreprise');
    var sql = "INSERT INTO `sportifs`(`name`,`email`,`telephone`,`date`) VALUES( '"+ request.body.name +"','"+ request.body.email +"','"+ request.body.telephone +"','"+ request.body.date +"')";
    con.query(sql, function(err){
    if(err) throw err;
    console.log('Data insert into DB');
    var timeAppointement = request.body.date;
    console.log(timeAppointement)
    });

});
app.listen(4000, ()=>{
    console.log("Server listen on port 3000")
})