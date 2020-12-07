React Native Boilerplate (TypeScript) v3.0.x
===========================================


## Getting Started

1. Clone this repo, `git clone https://github.com/ariefyusron/boilerplate-react-native.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. `https://www.npmjs.com/package/react-native-rename` for rename project
5. Change package com.boilerplate to your new bundleIdentifier `android/app/src/main/java/../SplashActivity.java` (if you use react-native-rename)
6. `cd android` `./gradlew clean` (if you rename the project)
7. Run `yarn` or `npm install` to install dependencies
8. Start the packager with `yarn start` or `npm start`
9. Connect a mobile device to your development machine
10. Run the test application:
  * On Android:
    * Run `yarn android` or `npm run android`
  * On iOS:
    * Run `yarn ios` or `npm run ios`
11. Enjoy!!!
