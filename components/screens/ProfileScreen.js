import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <ImageBackground
          source={require("../pictures/Wallpaper.png")} // Update this path if necessary
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.photoContainer}>
          <Button title="+" onPress={() => {}} style={styles.addPhotoButton} />
        </View>
        <Text style={styles.serviceProviderName}>Service Provider Name</Text>
        <Text style={styles.address}>Event Service Provider Address</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>Open: 06:00 am</Text>
          <Text style={styles.timeText}>Close: 09:00 pm</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.popularEventsTitle}>Popular Events</Text>
      <ScrollView horizontal style={styles.eventsContainer}>
        {events.map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <View style={styles.eventImageContainer}>
              <Image source={{ uri: event.image }} style={styles.eventImage} />
              <TouchableOpacity style={styles.addEventButton}>
                <Text style={styles.addEventButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventLocation}>{event.location}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const events = [
  {
    image: "https://link-to-image.com/image1.jpg",
    title: "Mr. & Mrs. Malik Wedding",
    date: "23 Sept, 23",
    location: "Cagayan de Oro City",
  },
  {
    image: "https://link-to-image.com/image2.jpg",
    title: "Barbella's Birthday",
    date: "12 August, 23",
    location: "Cagayan de Oro City",
  },
  {
    image: "https://link-to-image.com/image3.jpg",
    title: "Class of 1979 Reunion",
    date: "25-27 July, 23",
    location: "Cagayan de Oro City",
  },
  {
    image: "https://link-to-image.com/image4.jpg",
    title: "Barbella's Debut",
    date: "23 Sept, 25",
    location: "Cagayan de Oro City",
  },
  {
    image: "https://link-to-image.com/image5.jpg",
    title: "Kids Party",
    date: "12 August, 24",
    location: "Cagayan de Oro City",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Background color matching the design
    padding: 20,
  },
  profileContainer: {
    backgroundColor: "#FFC700",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  photoContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  addPhotoButton: {
    fontSize: 30,
  },
  serviceProviderName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
    marginVertical: 10,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  timeText: {
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  editButton: {
    backgroundColor: "#FFD700",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  logoutButton: {
    backgroundColor: "#FFD700",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  popularEventsTitle: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
  },
  eventsContainer: {
    flexDirection: "row",
  },
  eventCard: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    width: 200,
  },
  eventImageContainer: {
    position: "relative",
  },
  eventImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  addEventButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#FFD700",
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addEventButtonText: {
    color: "#000",
    fontSize: 18,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventDate: {
    fontSize: 14,
    color: "#555",
  },
  eventLocation: {
    fontSize: 14,
    color: "#555",
  },
});

export default ProfileScreen;
