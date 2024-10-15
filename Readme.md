# String Calculator TDD Kata (TypeScript)

This project is an implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)** in **TypeScript**. The kata is a simple exercise where you implement a string calculator that can sum numbers from a string input. The code is developed by writing tests first and then incrementally implementing the logic to pass the tests.

## Features
- Supports comma and newline as delimiters.
- Custom delimiter support.
- Throws exceptions for negative numbers.
- Handles an arbitrary number of numbers.

## Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/atharv2807/String-Calculator-TDD.git
   cd String-Calculator-TDD
2. **Install Dependencies**
   After navigating into the project directory, install the required dependencies using npm:
   ```bash
   npm install
   ```
3. **Initialize TypeScript and Jest**
   The project already includes configuration files for TypeScript (`tsconfig.json`) and Jest (`jest.config.js`). However, if needed, you can initialize them using the following commands:
   ```bash
   npx tsc --init   
   npx ts-jest config:init
   ```

## Running the Tests

To run the test suite and ensure everything is working correctly, use the following command:

```bash
npm test
```
