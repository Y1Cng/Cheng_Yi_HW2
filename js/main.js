import { Counter } from './counter.js';
import { StepCounter } from './StepCounter.js';

const counterDefault = new Counter('#counter-default');
const counterCustom = new Counter('#counter-custom', 5);
const counterStep = new StepCounter('#counter-step', 10, 5);