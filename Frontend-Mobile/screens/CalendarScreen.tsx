import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarComponent from '../components/CalendarComponent';

const CalendarScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <CalendarComponent />
            {/* You can add more content specific to the CalendarScreen here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default CalendarScreen;
