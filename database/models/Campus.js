/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "no address",
    validate: {
        notEmpty: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://timesandtrendsacademy.com/wp-content/uploads/How-to-pick-the-best-fashion-designing-college-re850.jpg",
  },

  description: {
    type: Sequelize.STRING(2000),
  }
});

// Export the campus model
module.exports = Campus;