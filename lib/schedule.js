// I'm not going to pretend this isn't the solution code
// This is a bit too much for me to approach blind

class Schedule {
  MINUTES_PER_DAY = 60 * 24;
  #schedule = Array(this.MINUTES_PER_DAY).fill(false);

  nextOpenMinute() {
    return this.#schedule.findIndex(minute => !minute);
  }

  freeWindow(startMinute, endMinute) {
    return this.#schedule
      .slice(startMinute, endMinute)
      .every(minute => !minute);
  }

  addOrder(order) {
    for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
      this.#schedule[i] = true;
    }
  }

  clear() {
    this.#schedule.fill(false);
  }

  print() {
    const schedule = this.#schedule.reduce((acc, minute, i) => {
      if(this.#schedule[i - 1] === minute) {
        acc[acc.length - 1] = { ...acc[acc.length - 1], end: i };
      } else {
        acc.push({ start: i, end: i, status: minute ? 'busy' : 'free' });
      }

      return acc;
    }, []);

    console.table(schedule);
  }
}

module.exports = Schedule;
