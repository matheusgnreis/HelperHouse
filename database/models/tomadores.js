const pedidos = require("./pedidos");

module.exports = function(sequelize, DataTypes) {
    const Tomadores = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTERGER.UNSIGNED
        },
        nome: {
            type:DataTypes.STRING(100), 
            allowNull: false
        },
        sobrenome: {
            type:DataTypes.STRING(100), 
            allowNull: false
        },
        email: {
            type:DataTypes.STRING(120), 
            allowNull: false,
            unique: true
        },
        cpf: {
            type:DataTypes.STRING(11), 
            allowNull: false,
            unique: true
        },
        endereco: {
            type:DataTypes.STRING(150), 
            allowNull: false
        },
        imagem: {
            type:DataTypes.STRING(100), 
            unique: true
        },
        senha: {
            allowNull: false,
            type: DataTypes.STRING(16)
        },
        pedido_id: {
            type:DataTypes.INTERGER.UNSIGNED, 
            references: {model: pedidos, key: 'id'}
        },
    },{
        tableName: 'tomadores',
        timestamps: false
      });

    Tomadores.hasMany(models.Pedidos, {
        foreignKey: 'pedidos_id',
        as: 'pedidos'
      });
    

    return Tomadores;
}