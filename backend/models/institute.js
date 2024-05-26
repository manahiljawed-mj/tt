'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Institute.belongsTo(models.Candidate, {
        foreignKey: 'candidate_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Institute.init({
    institute_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    candidate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Candidates',
        key: 'candidate_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    institute_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree_program: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Institute',
  });
  return Institute;
};