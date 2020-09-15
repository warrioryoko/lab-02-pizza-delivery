// I'm not going to pretend this isn't the solution code
// This is a bit too much for me to approach blind

const Parlor = require('./parlor');
const Driver = require('./driver');
const Order = require('./order');

describe('Parlor class', () => {
  it('can add drivers', () => {
    const parlor = new Parlor();
    const driver = new Driver('Jeb Bush');

    parlor.addDriver(driver);
  });

  it('can add orders', () => {
    const parlor = new Parlor();
    const order = new Order('pizza order', 120, 40);

    parlor.addOrder(order);
  });

  it('prints a schedule', () => {
    console.table = jest.fn();
    const parlor = new Parlor();

    const order1 = new Order('pizza order', 30, 10);
    parlor.addOrder(order1);

    const order2 = new Order('pizza order', 50, 20);
    parlor.addOrder(order2);

    const order3 = new Order('pizza order', 60, 5);
    parlor.addOrder(order3);

    const harold = new Driver('Harold');
    parlor.addDriver(harold);

    const kumar = new Driver('Kumar');
    parlor.addDriver(kumar);

    parlor.printSchedule();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 30, status: 'busy' },
      { start: 31, end: 34, status: 'free' },
      { start: 35, end: 60, status: 'busy' },
      { start: 61, end: 1439, status: 'free' }
    ]);

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 9, status: 'free' },
      { start: 10, end: 50, status: 'busy' },
      { start: 51, end: 1439, status: 'free' }
    ]);

  });
});
