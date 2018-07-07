Jalangi2-TypeScript
=======

### Introduction
[Jalangi2](https://github.com/Samsung/jalangi2) is a framework for writing dynamic analyses for JavaScript. This project is a skeleton project for writing analyses for Jalangi2 in TypeScript. The project provides a [TypeScript declaration file for Jalangi2](src/Jalangi.d.ts), [a sample analysis](src/SampleAnalysis.ts), and [a sample mocha test](test/sample-test.ts) that invokes the analysis. The `package.json` file is prepared with scripts for compiling, linting, and running the tests.

See the [Jalangi2 repository](https://github.com/Samsung/jalangi2) for further details about how to use the framework.

### Getting started
Clone the repository and install the dependencies.

    git clone git@github.com:simongregersen/jalangi2-typescript.git
    cd jalangi2-typescript
    npm install

Compile the project to the `build/` directory.

    npm run compile

Run all tests in the `test/` directory.

    npm run test

See the `package.json` script section for further options.
