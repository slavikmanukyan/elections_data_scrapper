import Sequelize from "sequelize";
import glob from "glob";
import path from "path";
import config from "config";
import _ from "lodash";

// Make postgres return integers when using count methods
// https://github.com/sequelize/sequelize/issues/2383
require("pg").defaults.parseInt8 = true;

const modelsPath = glob.sync('./models/*.model.js');
const sequelize = new Sequelize(config.db.url, {
  logging: false
});

const db = {};

function init() {
  modelsPath.forEach(file => {
    const model = sequelize.import(path.join(process.cwd(), file));
    const modelName = _.upperFirst(model.name);
    db[modelName] = model;
  });

  for (const model in db) {
    if (db[model].associate) {
      db[model].associate(db);
    }

    if (db[model].defineScopes) {
      db[model].defineScopes(db);
    }
  }

  Object.assign(db, {
    sequelize,
    Sequelize
  });

  return sequelize.sync();
}

module.exports = db;
module.exports.init = init;
