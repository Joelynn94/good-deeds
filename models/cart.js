module.exports = function(sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Cart.associate = function(models) {
      // We're saying that a Cart should belong to a User
      // A Cart can't be created without a User due to the foreign key constraint
      Cart.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      
    };
  
    return Cart;
  };