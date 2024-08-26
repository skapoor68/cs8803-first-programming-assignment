import * as Location from 'expo-location';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAzgy7afPwWEVWBrWgo3oX5zDlHNqB2Zak",
  authDomain: "cs8803-first-assignment.firebaseapp.com",
  databaseURL: "https://cs8803-first-assignment-default-rtdb.firebaseio.com",
  projectId: "cs8803-first-assignment",
  storageBucket: "cs8803-first-assignment.appspot.com",
  messagingSenderId: "668397009259",
  appId: "1:668397009259:web:68c4d7fdd2713dfb96742e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permission to access location was denied');
  }
  return await Location.getCurrentPositionAsync({});
};

export const getWeather = async (latitude: number, longitude: number) => {
  const apiKey = 'f2e1b9b457653e1913229eb9057e3c3a';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return await response.json();
};

export const storeWeather = async (weatherData: any) => {
  await push(ref(database, 'weather'), weatherData);
};