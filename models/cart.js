module.exports = function(sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 10]
        }
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
      Cart.belongsTo(models.Product, {
          //
      });
    };
    return Cart;
  };