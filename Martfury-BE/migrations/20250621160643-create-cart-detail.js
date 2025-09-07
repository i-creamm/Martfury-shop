'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart_details', {
      cart_detail_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cart_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'carts',
          key: 'cart_id'
        }
      },
      product_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'products',
          key: 'product_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cart_details');
  }
};