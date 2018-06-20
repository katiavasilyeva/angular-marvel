export interface Counter {
  readonly currentValue: number;
}

export function setCounterValue(
  counter: Counter,
  currentValue: number
): Counter {
  return { ...counter, currentValue: currentValue };
}
