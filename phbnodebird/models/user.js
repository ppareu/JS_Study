/*
User 시퀄라이즈

User DB 객체 생성
*/
const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true,
        },
        nick: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        provider: {
          type: Sequelize.ENUM("local", "kakao"),
          allowNull: false,
          defaultValue: "local",
        },
        snsId: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User", // User은 테이블
        tableName: "users", // users은
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
      foreignKey: "followingId",
      as: "Followers",
      through: "Follow", // Followers랑 Follwinfs 관계를 맺는걸 설정
    });
    db.User.belongsToMany(db.User, {
      foreignKey: "followerId",
      as: "Followings", // as는 명칭은 별명
      through: "Follow", // // Followers랑 Follwinfs 관계를 맺는걸 설정
    });
  }
}

module.exports = User;
