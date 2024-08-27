import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  const weatherDescription = weatherData.weather[0].main;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weatherData.name}</Text>
      <Text style={styles.temperature}>{weatherData.main.temp.toFixed(1)}°F</Text>
      <Icon name={parseWeatherDescription(weatherDescription)} size={70}></Icon>
      <Text style={styles.weatherCondition}>{weatherDescription}</Text>
    </View>
  );
};

const parseWeatherDescription = (description: string) => {
	const standardizedDescription = description.trim().toLowerCase();
	
	if (standardizedDescription.includes("cloud")) {
		return 'weather-cloudy';
	} else if (standardizedDescription.includes("sun")) {
		return 'weather-sunny';
	} else if (standardizedDescription.includes("rain")) {
		return 'weather-rainy';
	} else {
		return 'weather-cloudy';
	}
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