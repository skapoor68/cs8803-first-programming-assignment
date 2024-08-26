import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
  }>;
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weatherData.name}</Text>
      <Text style={styles.temperature}>{weatherData.main.temp.toFixed(1)}°F</Text>
      <Text style={styles.weatherCondition}>{weatherData.weather[0].main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherCondition: {
    fontSize: 18,
    color: '#666',
  },
});

export default WeatherDisplay;