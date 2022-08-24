const sequelize = require('sequelize');
const data_base = require('../config/database'); //calls database configuration

exports.IndexPage = async (req,res)=>{
    try {
        //res.render("index", {});
        
        res.sendFile('/../public/index.html')
    } catch (error) {
        console.log(error)
    }
}

exports.Time = async (req,res)=>{
    try {
        const [results, metadata] = await data_base.query("SELECT NOW()" );
        
        res.send(results);
    } catch (error) {
        console.log(error)
    }
}

exports.Photo = async (req,res)=>{
    try {      
        console.log("W_W_W_W_W_W_W_W_W_W_W_W")
        console.log(__dirname)
        console.log("W_W_W_W_W_W_W_W_W_W_W_W")
        //res.sendFile('/public/photo.html', { root: '../' })
        res.sendFile('./public/photo.html')
    } catch (error) {
        console.log(error)
    }
}