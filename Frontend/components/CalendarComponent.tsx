import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';

// Set up the locale config for the calendar
LocaleConfig.locales['en'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
};
LocaleConfig.defaultLocale = 'en';

const CalendarComponent: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: 'blue' },
                }}
                theme={{
                    calendarBackground: '#ffffff',
                    selectedDayBackgroundColor: 'blue',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: 'blue',
                    textDisabledColor: '#d9e1e8',
                }}
            />
            <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDateText: {
        marginTop: 20,
        fontSize: 16,
    },
});

export default CalendarComponent;
