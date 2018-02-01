module.exports = (sequelize, DataTypes) => {
    const toy = sequelize.define("toy", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        message: DataTypes.STRING,
        email: DataTypes.STRING,
        creditcard: DataTypes.INTEGER,
        streetAdress: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        zip: DataTypes.STRING,
        expire: DataTypes.DATE,
        expire: DataTypes.DATE,
        // createdAt: {
        //     type: 'TIMESTAMP'
        // }
    });
    return toy;
};