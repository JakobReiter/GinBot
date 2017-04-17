'use strict';

module.exports = function (sequelize, DataTypes) {

    return sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        server: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        authKey: {
            type: DataTypes.STRING,
            allowNull: false
        },
        onHolidayTill: {
            type: DateTypes.DATETIME,
            allowNull: true
        },
        isIll: {
            type: DateTypes.DATETIME,
            allowNull: true
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['server', 'ProfileId']
            }
        ],
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.Profile, {
                    foreignKey: {
                        allowNull: false,
                    },
                });
            }
        },
        instanceMethods: {}
    });
};