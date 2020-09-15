const Order = require('./order');

describe('Order class', () => {
  it('has a name, and a delivery minute', () => {
    const testOrder = new Order('Wrong number for White Castle', 120, 40);
    expect(testOrder.name).toEqual('Wrong number for White Castle');
    expect(testOrder.deliveryMinute).toEqual(120);
  });

  it('has a start minute', () => {
    const testOrder = new Order('Drunk dialer', 120, 20);
    expect(testOrder.startMinute).toEqual(60);
  });
});
