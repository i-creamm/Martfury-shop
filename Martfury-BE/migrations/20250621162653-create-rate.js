'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      comment: {
        type: Sequelize.STRING
      },
      rate_date: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.DOUBLE
      },
      order_detail_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'order_details',
          key: 'order_detail_id'
        }
      },
      product_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'products',
          key: 'product_id'
        }
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'user_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rates');
  }
};