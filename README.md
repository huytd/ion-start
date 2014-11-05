# ion-start

This is the starter template for Ionic (Android/iOS) project:

- Module-based struct
- With Karma pre-configured for Unit Test
- Run script to test on Android/iOS (both emulator and devices)
- Build script to export signed-APK file quickly (you need create your own keystore)
- Support custom icon and splash screen

## First thing to do! 

Run the following command to update project's dependencies:

`bower install`

or 

`npm install`

## Module-based struct

### Project Struct

```
www
|... img                  <------- Global images
|... css                  <------- Global CSS/SASS
|... js
     |... app.js          <------- Init your app and routing here
     |... config.js       <------- Config app name, modules, dependencies here
|... lib                  <------- Put your libs here
|... modules              <------- Put your modules here. Must follow the same struct
     |... your-module
          |... controllers
          |... views
          |... img
          |... css
          |... test
          |... module.js
```

### Using modules

In `config.js` file, define the list of your modules like the following code:

```
$modules = [
    '<name>Module'
];
```

Module name must follow: `<name>` + `"Module"` to make it work with the parser

And create a new module in `modules` folder with the `<name>` defined above in `lower case` (for example: `fun`, `lol`, `login`, `wallet`,...)

In `module.js` file, define your module name and load all your js file here with `bulkLoad` function.

```
bulkLoad([
    'modules/fun/controllers/funController.js'
]);
```

### Testing with Karma Jasmine

Write all the test inside your module's `test` folder. Using Jasmine syntax.

Test file must contains `"use strict";` at the begining, and must contains this initial code:

```
// Init test - DO NOT TOUCH!
var scope;
beforeEach(angular.mock.module('ionstart'));
var ctrl, scope;
beforeEach(inject(function($controller, $rootScope) {
   // Create a new scope that's a child of the $rootScope
   scope = $rootScope.$new();
   ctrl = $controller('<your-controller-here>', {
       $scope: scope
   });
}));
// End of Init test
```

## Using scripts

_Note: If the script won't work, try `chmod +x <script>` to make it runnable_

### Run on Emulator and Devices

To run your app on emulator or devices (both Android and iOS), you can use script:

`./run` (for iOS)

or 

`./runa` (for Android)

This script will auto select connected emulator or device to run the code.

### Deploy your Android app easily

First, you need to create keystore ([read this](http://developer.android.com/tools/publishing/app-signing.html))

Then, put your keystore in project's folder (named: `appsign.keystore`), and run the following script and enter your keystore password:

`./release`

Your APK will exported in `APK` folder

### App Icons

In `res` folder, there are: `android`, `ios` and `splash` folder. 

You can put all your app icon to this folder for Android and iOS app.

`splash` folder is used to replace iOS app Launch images.

## Change app name and package name

Edit `config.xml` to change your app and package name.

Then, open `run`, `runa`, `release` scripts and change the package name to your new package name.