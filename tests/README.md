# e2e Testing

This project is using Open MCT's e2e-as-a-dependency model. To learn more, please see the official documentation on the [Official README](https://github.com/nasa/openmct/blob/master/e2e/README.md)

## How to Run Locally

To run the tests, we recommend the following workflow which bridges two separate github repos:
yamcs/quickstart and openmct-yamcs (this one).

1. `git clone yamcs/quickstart`
2. `cd docker` in yamcs/quickstart
3. `make all` in yamcs/quickstart
4. `cd openmct-yamcs` to move out of yamcs/quickstart
5. `npm install` in openmct-yamcs
6. Sanity test that yamcs is up with `npm run wait-for-yamcs` in openmct-yamcs
7. `npm run test:getopensource`
8. `npm run build:example` or `npm run build:example:master`
9. `npm run test:e2e:watch`
