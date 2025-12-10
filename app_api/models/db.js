//var dbURI='mongodb+srv://iamberkmutlu_db_user:z5Owtl03J0r9ahN3@cluster0.kywkdli.mongodb.net/?appName=Cluster0';var mongoose=require('mongoose');
var mongoose=require("mongoose");
var dbURI="mongodb://localhost/mekanbul";
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log("Mongoose "+dbURI+" adresindeki veritabanına bağlandı.");
});
mongoose.connection.on("error",function(){
    console.log("Mongoose bağlantı hatası.");
});
mongoose.connection.on("disconnected",function(){
    console.log("Mongoose bağlantısı kesildi.");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Mongoose uygulama sonlandırma nedeniyle bağlantıyı kapattı.");
    process.exit(0);
});
require("./venue");
