module.exports = function(sequelize, DataTypes) {
    var Donation = sequelize.define("Donation", {
      decription: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Donation.associate = function(models) {
      // We're saying that a Donation should belong to a User
      // A Donation can't be created without a User due to the foreign key constraint
      Donation.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Donation;
  };