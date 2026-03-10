import { Counter } from './counter.js';

export class StepCounter extends Counter {
  constructor(selector, initialValue = 0, step = 1) {
    super(selector, initialValue);
    if (step > 0) {
      this.step = step;
    } else {
      this.step = 1;
    }
  }

  handleIncrement() {
    this.count += this.step;
    this.update();
  }

  handleDecrement() {
    if (this.count >= this.step) {
      this.count -= this.step;
    } else {
      this.count = 0;
    }
    this.update();
  }
}
