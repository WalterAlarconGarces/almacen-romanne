const Sequelize = require("sequelize");
const database = require("config/db.js")


const Precios = database.define("precios",{
    id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    costo_sin_iva:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    costo_con_iva: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    costo_con_porcentaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    porcentaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    proveedor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fecha_factura: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    timestamps: false
  })

module.exports = Precios;