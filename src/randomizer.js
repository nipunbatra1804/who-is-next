class RandomNumberGenerator {
  constructor() {
    this.number = null;
    this.min = 0;
    this.max = 0;
  }

  range(max = 255, min = 0) {
    this.min = min;
    this.max = max;
    return this;
  }

  isOutOfRange(number) {
    return number < this.min || number > this.max;
  }

  rand() {
    const numbers = new Uint8Array(1);
    window.crypto.getRandomValues(numbers);
    this.number = numbers[0];
  }

  random() {
    do {
      this.rand();
    } while (this.isOutOfRange(this.number));

    return this.number;
  }
}

export default new RandomNumberGenerator();
