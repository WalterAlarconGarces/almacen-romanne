const sequelize = require('sequelize');
const data_base = require('../config/database'); //calls database configuration

exports.IndexPage = async (req,res)=>{
    try {
        //res.render("index", {});
        console.log("WWWWWWWW")
        console.log(__dirname)
        res.sendFile(__dirname+'../index.html')
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
