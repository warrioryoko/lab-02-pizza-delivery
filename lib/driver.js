const Schedule = require('./schedule');

class Driver {
  name;
  currentSchedule = new Schedule();

  constructor(name) {
    this.name = name;
  }
}

module.exports = Driver;
