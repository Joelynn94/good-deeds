/*
productName,
productDesc, 
productPrice, 
productCategory, 
productQuantity, 
productImage
*/

module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      // Giving the Product model a name of type STRING
      productName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {}
      },
      productImage: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {}
      },
      productDesc: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {}
      },
      productPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {}
      },
      productCategory: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {}
      },
      productQuantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {}
      }
    });
  
    Product.associate = function(models) {
      // Associating Product with Posts
      // When an Product is deleted, also delete any associated Posts
      Product.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Product;
  };