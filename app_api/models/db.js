var mongoose=require('mongoose');
var dbURI='mongodb+srv://iamberkmutlu_db_user:z5Owtl03J0r9ahN3@cluster0.kywkdli.mongodb.net/?appName=Cluster0';
mongoose.connect(dbURI);

mongoose.connection.on("cnnected",function(){
    console.log("Mongoose "+dbURI+" bağlantısı başarılı");
});

mongoose.connection.on("error",function(){
    console.log("Mongoose "+dbURI+" bağlantısı başarısız");
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose "+dbURI+" bağlantısı kesildi");
});


process.on('SIGINT',function(){
    mongoose.connection.close();
    console.log("Mongoose bağlantısı kapatıldı");
    process.exit(0);
    
});
require('./venue');