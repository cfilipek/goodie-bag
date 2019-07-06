const Sequelize = require('sequelize');
const db = require('../database');
const Op = Sequelize.Op


module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    [Op.lt]: 10
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://images.freeimages.com/images/large-previews/11b/candy-1326928.jpg',
  }
});
