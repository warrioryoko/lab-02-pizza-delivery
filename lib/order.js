class Order {
  name;
  deliveryMinute;
  #COOK_TIME = 20;
  #drivingDistanceInMinutes;

  constructor(name, deliveryMinute, drivingDistanceInMinutes) {
    this.name = name;
    this.deliveryMinute = deliveryMinute;
    this.#drivingDistanceInMinutes = drivingDistanceInMinutes;
  }

  get startMinute() {
    return this.deliveryMinute - (this.#COOK_TIME + this.#drivingDistanceInMinutes);
  }
}

module.exports = Order;
