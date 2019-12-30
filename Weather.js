import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#bdc3c7", "#2c3e50"],

    },

    Drizzle: {
        iconName: "cloud-drizzle",
        gradient: ["#4568DC", "#B06AB3"],

    },

    Rain: {
        iconName: "weather-pouring",
        gradient: ["#F0F2F0", "#000C40"],

    },

    Snow: {
        iconName: "weather-snowy",
        gradient: ["#20002c", "#cbb4d4"],

    },

    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#30E8BF", "#FF8235"],

    },

    Clear: {
        iconName: "weather-sunny",
        gradient: ["#F7971E", "#FFD200"],

    },

    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#0575E6", "#021B79"],

    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions["Clouds"].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons
                size={100}
                name={weatherOptions["Clouds"].iconName}
                color="white"
            />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf([
            "Thunderstorm",
            "Drizzle",
            "Rain",
            "Snow",
            "Atmosphere",
            "Clear",
            "Clouds"
        ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    temp: {
        fontSize: 48,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
