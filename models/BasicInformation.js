module.exports = (sequelize, DataTypes) => {
  const Schema = {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    pin: DataTypes.STRING,
  };

  const BasicInformation = sequelize.define("basic-informations", Schema);

  //Association
  BasicInformation.associate = (models) => {
    BasicInformation.hasMany(models.ForCommunication, {
      onDelete: "cascade",
    });
  };

  return BasicInformation;
};
