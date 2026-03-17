# OOP Counter with State-Driven UI

Starting point: in-class 2_counter skeleton; iterated through Week 8 (skeleton) → Week 9 (core logic + draft docs) → Week 10 (polished submission).

## Overview
- Reusable Counter component with increment, decrement, reset, zero floor, and inactive state styling.
- StepCounter extends Counter with a configurable positive step, overriding increment/decrement.
- Documentation/demo page included with responsive layout and examples.

## Features
- Multiple independent counters on one page.
- Custom initial value (default 0) and optional step (default 1 for StepCounter).
- Zero-state class toggling on decrement/reset; reset logs "Reset Activated!!!".
- No DOMContentLoaded usage; modules loaded via script type="module" at page end.

## Project Structure
- index.html — Documentation and live demo.
- js/counter.js — Base Counter class with UI mounting and state updates.
- js/StepCounter.js — Step-based subclass (extends/super, overrides increment/decrement).
- js/main.js — Instantiates three demo counters with different configs.
- css/main.css — Component and page styling; css/grid.css — grid utilities.

## Run the Demo
1) From this folder, start a local server: `python3 -m http.server 8000`
2) Open `http://localhost:8000` in a browser.
3) Interact with the counters and watch the console for reset logs.

## Usage Example
HTML containers:
```
<div id="counter-default" class="counter"></div>
<div id="counter-custom" class="counter"></div>
<div id="counter-step" class="counter"></div>
```

JS modules:
```
import { Counter } from './js/counter.js';
import { StepCounter } from './js/StepCounter.js';

new Counter('#counter-default');
new Counter('#counter-custom', 5);
new StepCounter('#counter-step', 10, 5);
```

## Notes
- Decrement never goes below zero; reset always sets zero and logs.
- All handlers are named methods; no DOMContentLoaded or getElementById per course rules.
- Styling is responsive; update css/main.css if you want to theme it further.
