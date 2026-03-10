export class Counter {
  constructor(selector, initialValue = 0) {
    // Cache selector and clamp the starting value at 0 to prevent negatives
    this.selector = selector;
    this.count = Math.max(initialValue, 0);
    // Build UI and bind events
    this.mount();
    // Render initial state and toggle inactive classes
    this.update();
  }

  mount() {
    const container = document.querySelector(this.selector);
    this.container = container;

    // Create pieces: display + three buttons
    this.display = this.createDisplay();
    this.btnIncrement = this.createButton('Increment');
    this.btnDecrement = this.createButton('Decrement');
    this.btnReset = this.createButton('Reset');

    // Insert into DOM
    container.append(this.display, this.btnDecrement, this.btnIncrement, this.btnReset);

    // Hook up event handlers
    this.bindEvents();
  }

  createDisplay() {
    const display = document.createElement('div');
    display.classList.add('counter-display');
    return display;
  }

  createButton(text) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.classList.add('counter-btn');
    return btn;
  }

  bindEvents() {
    this.btnIncrement.addEventListener('click', this.handleIncrement.bind(this));
    this.btnDecrement.addEventListener('click', this.handleDecrement.bind(this));
    this.btnReset.addEventListener('click', this.handleReset.bind(this));
  }

  // --- State handlers ---
  handleIncrement() {
    this.count++;
    this.update();
  }

  handleDecrement() {
    // Prevent going below zero per assignment rule
    if (this.count > 0) {
      this.count--;
      this.update();
    }
  }

  handleReset() {
    this.count = 0;
    this.update();
    // Required console message
    console.log('Reset Activated!!!');
  }

  // --- Render helpers ---
  update() {
    this.updateDisplay();
    this.updateUIState();
  }

  updateDisplay() {
    this.display.textContent = `Count: ${this.count}`;
  }

  updateUIState() {
    const isZero = this.count === 0;
    // Visually disable decrement/reset when count is zero
    this.btnDecrement.classList.toggle('inactive', isZero);
    this.btnReset.classList.toggle('inactive', isZero);
  }
}
