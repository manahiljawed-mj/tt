'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Jobs.hasMany(models.AppliedJob, {
      //   foreignKey: 'job_id',
      //   onDelete: 'CASCADE',
      // });
    }
  }
  Jobs.init({
    job_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyHR_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company_HRs',
        key: 'companyHR_id',
      },
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    job_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soft_skills_required: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_experience_required: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    education_required: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills_required: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    job_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_posted: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicants: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'Jobs',
    timestamps: false,
  });
  return Jobs;
};