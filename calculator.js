"use strict";

// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій:
// додавання, віднімання, множення та ділення.
const ERROR_MESSAGE = "One of values is not a valid number";

class Calculator {
  add(a, b) {
    if (this.#isValidNumber(a) && this.#isValidNumber(b)) {
      return a + b;
    }

    throw new Error(ERROR_MESSAGE);
  }

  subtract(a, b) {
    if (this.#isValidNumber(a) && this.#isValidNumber(b)) {
      return a - b;
    }

    throw new Error(ERROR_MESSAGE);
  }

  multiply(a, b) {
    if (this.#isValidNumber(a) && this.#isValidNumber(b)) {
      return a * b;
    }

    throw new Error(ERROR_MESSAGE);
  }

  divide(a, b) {
    if (
      this.#isValidNumber(a) &&
      this.#isValidNumber(b) &&
      this.#isNotZero(b)
    ) {
      return a / b;
    }

    if (!this.#isNotZero(b)) {
      throw new Error("You can't divide by zero");
    }

    throw new Error(ERROR_MESSAGE);
  }

  #isValidNumber(value) {
    return typeof value === "number" ? true : false;
  }

  #isNotZero(value) {
    return value !== 0;
  }
}
