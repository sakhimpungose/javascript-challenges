<h1 align="center">JavaScript Challenges</h1>

<div align="center">
Welcome to the JavaScript Challenges Repository! <br>
This repository serves as a personal space for honing my problem-solving skills in JavaScript.
</div>

## How this repository is structured
This repository is structure in a specific way:

```text
- src
    - challenges
        - 001
            index.js
            index.test.js
            README.md
        - ...
```

Each challenge contains the following:
- A solution.
- Passing tests.
- A README.md that describes the challenge and includes examples to make it easier to understand.

## Installation
1. Clone the repository
    ```sh
    git clone https://github.com/sakhimpungose/javascript-challenges.git
    ```
2. Navigate to the project folder
    ```sh
    cd javascript-challenges
    ```
3. Install NPM packages
    ```sh
    npm install
    ```

## Tests
To run the tests, run:
```sh
npm run test
```

You can run a specific Mocha test file by providing the path to that test file as an argument to the `npx mocha` command. This allows you to execute only the tests in the specified test file.

### Running a Specific Test File

Suppose you want to run the tests located in the `src/challenges/001/index.test.js` file, which corresponds to a specific challenge. Here's how you can do it:

```sh
npx mocha src/challenges/001/index.test.js
```



