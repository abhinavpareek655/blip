import { FlatList, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Blip</Text>
        </View>
        <View style={styles.feed}>
          
        </View>
        <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcons}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcons}>🔍</Text>
          <Text style={styles.navText}>Search</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcons}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcons}>➕</Text>
          <Text style={styles.navText}>Create</Text>
          </TouchableOpacity> 
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
    },
    header: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#2C2C2C",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ffffff",
    },
    feed: {
      flex: 1,
    },
    postContainer: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#2C2C2C",
    },
    postHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    username: {
      fontWeight: "bold",
      color: "#ffffff",
    },
    timestamp: {
      color: "#888",
      fontSize: 12,
    },
    postContent: {
      color: "#ffffff",
      fontSize: 16,
      marginBottom: 10,
    },
    postActions: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    actionButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    actionText: {
      color: "#ffffff",
      marginLeft: 5,
    },
    navbar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      // paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: "#2C2C2C",
    },
    navItem: {
      padding: 10,
      alignItems: 'center'
    },
    navIcons: {
      fontSize: 25,
      color: 'white',
    },
    navText: {
      color: 'white',
      fontSize: 10,
    },
  })