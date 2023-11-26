const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "LibroReclamos"


});


conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  const puerto = process.env.PUERTO || 3001;

  app.listen(puerto, function () {
    console.log("Servidor funcionando en puerto: " + puerto);
  });




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//definimos las carpetas
// Definimos las carpetas estáticas
app.use("/css", express.static(path.join(__dirname, 'css')));
app.use("/img", express.static(path.join(__dirname, 'img')));
app.use("/js", express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, "html")));
//pagina principal


app.get("/comunidad.html",function(req,res){
    var filepath = path.join(__dirname,"/html/comunidad.html")
    res.sendFile(filepath) ;
});

app.get("/inicio.html",function(req,res){
    var filepath = path.join(__dirname,"/html/inicio.html")
    res.sendFile(filepath) ;
});

app.get("/eventos.html",function(req,res){
    var filepath = path.join(__dirname,"/html/eventos.html")
    res.sendFile(filepath) ;
});

app.get("/",function(req,res){
    var filepath = path.join(__dirname,"/html/calendario.html")
    res.sendFile(filepath) ;
});

app.listen(3000,function(){
    console.log('Escuchando en el puerto http://localhost:3001');
});


app.get("/api/fechas_civicas", function(req, res) {
    var sql = "SELECT * FROM fechas_civicas WHERE FECHA = CURDATE()";
    conexion.query(sql, function(error, results) {
        if (error) {
            throw error;
        } else {
            res.json(results);
        }
    });
});

