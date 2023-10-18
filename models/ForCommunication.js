module.exports = (sequelize, DataTypes) => {
  const Schema = {
    designation: DataTypes.STRING,
    name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    statusbar: DataTypes.STRING,
    basicInformationID: DataTypes.INTEGER
  };

  const ForCommunication = sequelize.define("for-communications", Schema);
  
  return ForCommunication;
};
