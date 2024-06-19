import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const services = [
  {
    title: 'PHOTO AND VIDEO SERVICES',
    description: 'Lorem ipsum dolor sit amet, vel dignissim... nostrud exercitation ullamco.',
    image: require('./../pictures/PhotoAndVidServices.jpg'), // replace with your actual image
  },
  {
    title: 'DÉCOR AND EVENT PRODUCTION',
    description: 'Lorem ipsum dolor sit amet, vel dignissim... nostrud exercitation ullamco.',
    image: require('./../pictures/DecorAndEventProduct.jpg'), // replace with your actual image
  },
  {
    title: 'FOOD AND BEVERAGES',
    description: 'Lorem ipsum dolor sit amet, vel dignissim... nostrud exercitation ullamco.',
    image: require('./../pictures/FoodAndBeverage.webp'), // replace with your actual image
  },
  {
    title: 'AUDIOVISUAL, LIGHTS AND SOUND RENTAL',
    description: 'Lorem ipsum dolor sit amet, vel dignissim... nostrud exercitation ullamco.',
    image: require('./../pictures/LightsAndSoundRental.jpg'), // fix extension typo
  },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextYellow}>SERVICES </Text>
        <Text style={styles.headerTextWhite}>OFFERED</Text>
      </View>
      {services.map((service, index) => (
        <View key={index} style={styles.serviceContainer}>
          <Image source={service.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  headerTextYellow: {
    color: '#f0a500',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTextWhite: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  serviceContainer: {
    flexDirection: 'row',
    margin: 15,
    padding: 13,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: '#f0a500',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default App;
