/*
productName,
productDesc, 
productPrice, 
productCategory, 
productQuantity, 
productImage
*/

module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
      // Giving the Product model a name of type STRING
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productImage: {
        type: DataTypes.STRING,
        allowNull: true
      },
      productDesc: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "No Description"
      },
      productPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      productCategory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productInCart: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
    // Product.associate = function(models) {
    //   // Associating Product with Posts
    //   // When an Product is deleted, also delete any associated Posts
    //   Product.hasMany(models.Cart, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Product;
  };