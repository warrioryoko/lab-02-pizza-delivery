const Driver = require('./driver');

describe('Driver class', () => {
  const dumbDriver = new Driver('Harold & Kumar');
  it('Creates a new driver... who goes to White Castle', () => {
    expect(dumbDriver.name).toEqual('Harold & Kumar');
  });
});
