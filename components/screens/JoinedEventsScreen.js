import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const events = [
  {
    id: 1,
    title: 'Sinulog Festival',
    date: 'Jan. 21, 2024',
    details: 'Lorem ipsum dolor sit amet, vel dignissimos reiciendis ob voluptatem deserunt eaque voluptates.',
    image: require('./../pictures/sinulog.jpg')
  },
  {
    id: 2,
    title: 'The Voice Kids of Misor',
    date: 'Jan. 12-14, 2024',
    details: 'Lorem ipsum dolor sit amet, vel dignissimos reiciendis ob voluptatem deserunt eaque voluptates.',
    image: require('./../pictures/TheVoiceKid.jpg')
  },
  {
    id: 3,
    title: 'MESCON',
    date: 'Sept. 10, 2024',
    details: 'Lorem ipsum dolor sit amet, vel dignissimos reiciendis ob voluptatem deserunt eaque voluptates.',
    image: require('./../pictures/Mescon.jpg')
  },
  {
    id: 4,
    title: 'FLIPTOP',
    date: 'Sept. 10, 2024',
    details: 'Lorem ipsum dolor sit amet, vel dignissimos reiciendis ob voluptatem deserunt eaque voluptates.',
    image: require('./../pictures/FlipTop.jpg')
  },
];

export default function HomeScreen() {
  const handleDelete = (eventTitle) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete/leave the event: ${eventTitle}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('Deleted:', eventTitle),
        },
      ],
      { cancelable: false }
    );
  };

  const handleFeedback = (eventTitle) => {
    Alert.alert(
      'Feedback',
      `Are you sure you want to provide feedback for the event: ${eventTitle}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('Feedback for:', eventTitle),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextYellow}>JOINED </Text>
        <Text style={styles.headerTextWhite}>EVENTS</Text>
      </View>
      {events.map(event => (
        <View key={event.id} style={styles.eventCard}>
          <Image source={event.image} style={styles.eventImage} />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>Date of event: {event.date}</Text>
            <Text style={styles.eventDesc}>{event.details}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleDelete(event.title)}>
                <Text style={styles.buttonText}>DELETE/LEAVE</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleFeedback(event.title)}>
                <Text style={styles.buttonText}>FEEDBACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

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
    color: '#FFD700',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTextWhite: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  eventCard: {
    backgroundColor: '#1c1c1c',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  eventImage: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  eventDetails: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  eventTitle: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 5,
  },
  eventDesc: {
    color: '#AAA',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
