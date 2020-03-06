module.exports = function(sequelize, DataTypes) {
    const Cart = sequelize.define("Cart", {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 10]
        }
      },
      productInCart: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      Cart.hasMany(models.Product, {
          //
      });
    };
    return Cart;
  };