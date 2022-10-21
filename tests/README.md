# e2e Testing
This project is using Open MCT's e2e-as-a-dependency model. To learn more, please see the official documentation on the [Official README](https://github.com/nasa/openmct/blob/master/e2e/README.md)

# How to Run locally
1. `git clone yamcs/quickstart`
2. cd docker
3. make all
4. Sanity test that yamcs is up with `npm run wait-for-yamcs`
5. cd openmct-yamcs
6. npm install
7. npx playwright@1.25.2 install
8. npm run build:example
9. npm run test:getopensource
10. npm run test:e2e:quickstart:local