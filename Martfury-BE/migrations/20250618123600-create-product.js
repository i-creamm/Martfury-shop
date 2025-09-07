'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      entered_date: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sold: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 0
      },
      category_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'categories',
          key: 'category_id'
        }
      }    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};