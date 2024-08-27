# CS 4261/8803 First Programming Assignment - Weather Applet

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). 

It is a weather app that gets the device location, uses the location to get the current weather from OpenWeather, and writes the weather data to a Firebase Realtime Database.

## Demo
https://www.youtube.com/watch?v=68c4CZblvnw

## How to run this locally

Prerequisites - You should have node, npm, and XCode or Android Studio to run native emulators.

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
