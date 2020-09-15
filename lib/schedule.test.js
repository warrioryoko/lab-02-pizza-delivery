// I'm not going to pretend that this isn't the solution code
// This is a bit too much for me to approach blind

const Schedule = require('./schedule');
const Order = require('./order');

describe('Schedule class', () => {
  it('calculates the next open minute', () => {
    const schedule = new Schedule();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    expect(schedule.nextOpenMinute()).toEqual(41);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.clear();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('prints the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'busy' },
      { start: 41, end: 1439, status: 'free' }
    ]);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    expect(schedule.freeWindow(0, 41)).toBeFalsy();
    expect(schedule.freeWindow(41, 50)).toBeTruthy();
  });
});
