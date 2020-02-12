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
   // database: 'dev-restodujour'
   database: 'dev-resto'

});

var server = app.listen(4000, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});


app.get('/utilisateursrole', function(req, res){
    con.query('select * from utilisateurs U join join_utilisateursroles_utilisateurs J on U.id = J.utilisateurs_id join utilisateursroles UR on UR.id = J.utilisateursRoles_id', function(error, rows, fields){
          if(error) console.log(error);
          else{
              // console.log(rows);
              res.send(rows);
          }
    });
  });

  app.get('/utilisateurs', function(req, res){
    con.query('select * from utilisateurs', function(error, rows){
          if(error) console.log(error);
          else{
              // console.log(rows);
              res.send(rows);
          }
    });
  });




  app.post('/signup',function (req, res){
    console.log('I got the datas');
    console.log(req.body);

    const data = req.body;

    res.json({
      status:'success',
      username: data.username,
      password: data.password
    });
    // var postData  = req.body;
    con.query('INSERT INTO utilisateurs SET ?', data, (error, results) => {
      if (error) console.log(error);
      else{
        res.end(JSON.stringify(results));}
    });
  });

  app.post('/signuprole',function (req, res){
    const data = req.body;

    
    // var postData  = req.body;
    con.query('INSERT INTO join_utilisateursroles_utilisateurs SET ?', data, (error, results) => {
      if (error) {
        console.log(error)
        res.json({
          status:'failure',
        });
      }else{
        res.json({
          status:'success',
        });
        console.log(results);
        res.end(JSON.stringify(results));}
    });
  });

  app.post('/uploadImage',function (req, res){
    console.log(req.body.img);
    res.json({
      message: 'success!',
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

  // pour la page de ensavoir plus
  app.get('/joursouvertures/:restaurant_id', function(req,res){
    //   var id = req.params.restaurant_id;
con.query('select * from horairesouverture O join restaurants R on O.restaurant_id = R.id join menusdujour M on M.restaurant_id = R.id where R.id =' +req.params.restaurant_id,
//con.query('select * from horairesouverture where restaurant_id ='+req.params.restaurant_id,
function(error, rows, fields){
   
      if(error) console.log(error);
      else{
        
         console.log("***************rows of horaires: ",rows);
        // console.log(id);
         res.send(rows);
      }
    });
  })
