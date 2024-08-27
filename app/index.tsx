import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { LocationObject } from 'expo-location';
import WeatherDisplay from '../components/WeatherDisplay';
import { getLocation, getWeather, storeWeather } from '../services/weatherService';

export default function Index() {
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const loc = await getLocation();
      setLocation(loc);
    } catch (err) {
      setError('Error getting location');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWeather = async () => {
    if (!location) return;
    setIsLoading(true);
    try {
      const { latitude, longitude } = location.coords;
      const weatherData = await getWeather(latitude, longitude);
      setWeather(weatherData);
      setError(null);
    } catch (err) {
      setError('Error fetching weather. View console for more details.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const saveWeather = async () => {
    if (!weather) return;
    try {
      await storeWeather(weather);
      alert('Weather data stored to Firebase successfully');
    } catch (err) {
      setError('Error storing weather data. View console for more details.');
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Applet</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <Pressable style={styles.button} onPress={fetchWeather} disabled={isLoading || !location}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </Pressable>
      {isLoading && <Text style={styles.loading}>Loading...</Text>}
      <WeatherDisplay weatherData={weather} />
      {weather &&
        <Pressable style={styles.button} onPress={saveWeather}>
          <Text style={styles.buttonText}>Save Weather</Text>
        </Pressable>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loading: {
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  weatherContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#038aff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white'
  }
});