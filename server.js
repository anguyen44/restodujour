var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    port:'3306',
    user:'root',
    password:'', //empty for window
    database: 'dev-restodujour'

});

var server = app.listen(4000, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/utilisateurs', function(req, res){
    con.query('select * from utilisateurs U join join_utilisateursroles_utilisateurs J on U.id = J.utilisateurs_id join utilisateursroles UR on UR.id = J.utilisateursRoles_id', function(error, rows, fields){
          if(error) console.log(error);
          else{
              console.log("rows of utilisateurs: ",rows);
              res.send(rows);
          }
    });
  });

  app.get('/restaurants', function(req, res){
    con.query('select * from restaurants', function(error, rows, fields){
          if(error) console.log(error);
          else{
              console.log("rows of restaurants: ",rows);
              res.send(rows);
          }
    });
  });

  app.get('/restaurantsMenu', function(req,res){
    con.query('select * from restaurants R join menusdujour M on R.id = M.restaurant_id', function(error, rows, fields){
      if(error) console.log(error);
      else{
         console.log("rows of restaurantsMenu: ",rows);
         res.send(rows);
      }
    });
  });