module.exports = (sequelize, DataTypes) => {
  const Schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  };

  const Role = sequelize.define("roles", Schema);

  return Role;
};

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Role extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Role.init({
//     name: {
//       type:DataTypes.STRING,
//       allowNull:false,
//       validate:{
//         notEmpty:true
//       }
//     },
//   }, {
//     sequelize,
//     tableName:"roles",
//     modelName: 'Role',
//   });
//   return Role;
// };
