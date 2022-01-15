const Player = (sequelize, DataTypes) => {
  const Player = sequelize.define("Player", {
    nickName: DataTypes.STRING,
    email: DataTypes.STRING,
    isATrueGamer: DataTypes.BOOLEAN
  });

  return Player;
};

module.exports = Player;