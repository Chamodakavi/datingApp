import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SearchBar({
  onDateRangeChange,
  travelers,
  setTravelers,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTravelersModal, setShowTravelersModal] = useState(false);

  const [markedDates, setMarkedDates] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [searchBarHeight, setSearchBarHeight] = useState(hp("6.5%"));

  // Change search bar height dynamically based on selection
  useEffect(() => {
    if (startDate && endDate) {
      setSearchBarHeight(hp("8.5%"));
    } else {
      setSearchBarHeight(hp("6.5%"));
    }
  }, [startDate, endDate]);

  // Date range selection logic
  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
      setMarkedDates({
        [day.dateString]: {
          startingDay: true,
          endingDay: true,
          color: "#b1473c",
          textColor: "white",
        },
      });
    } else {
      if (day.dateString < startDate) {
        setStartDate(day.dateString);
        setMarkedDates({
          [day.dateString]: {
            startingDay: true,
            endingDay: true,
            color: "#b1473c",
            textColor: "white",
          },
        });
      } else {
        setEndDate(day.dateString);
        let range = {};
        let d = new Date(startDate);
        const end = new Date(day.dateString);

        while (d <= end) {
          const dStr = d.toISOString().split("T")[0];
          range[dStr] = {
            color: "#b1473c",
            textColor: "white",
            startingDay: dStr === startDate,
            endingDay: dStr === day.dateString,
          };
          d.setDate(d.getDate() + 1);
        }
        setMarkedDates(range);
        if (onDateRangeChange) {
          onDateRangeChange({ startDate, endDate: day.dateString });
        }
      }
    }
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: wp("0.3%"),
          borderColor: "#b1473c",
          borderRadius: wp("4%"),
          paddingVertical: hp("1.2%"),
          paddingHorizontal: wp("3%"),
          width: "90%",
          height: searchBarHeight,
          marginLeft: wp("5%"),
        },
      ]}
    >
      {/* Search icon */}
      <FontAwesome
        name="search"
        size={wp("5.5%")}
        color="#b1473c"
        style={{ marginRight: wp("1.5%") }}
        onPress={() => setShowCalendar(true)}
      />

      {/* Dates display: start and end horizontally */}
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => setShowCalendar(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.dateText, { marginRight: wp("2%") }]}>
          {startDate ? startDate : "Start Date"}
        </Text>
        {endDate ? (
          <Text style={styles.dateText}>{endDate}</Text>
        ) : (
          <Text style={styles.dateText}>End Date</Text>
        )}
      </TouchableOpacity>

      {/* Calendar icon */}
      <FontAwesome
        name="calendar"
        size={wp("5.5%")}
        color="#b1473c"
        style={{ marginLeft: wp("3%"), marginRight: wp("2%") }}
        onPress={() => setShowCalendar(true)}
      />

      {/* Travelers icon and text */}
      <FontAwesome
        name="user"
        size={wp("5.5%")}
        color="#b1473c"
        style={{ marginLeft: wp("5%"), marginRight: wp("1.5%") }}
        onPress={() => setShowTravelersModal(true)}
      />
      <TouchableOpacity
        onPress={() => setShowTravelersModal(true)}
        activeOpacity={0.7}
      >
        <Text
          style={{ color: "#b1473c", fontSize: wp("4.5%"), fontWeight: "600" }}
        >
          {travelers} Travelers
        </Text>
      </TouchableOpacity>

      {/* Calendar Modal */}
      <Modal visible={showCalendar} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              markingType={"period"}
              markedDates={markedDates}
              onDayPress={onDayPress}
              theme={{
                selectedDayBackgroundColor: "#b1473c",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#b1473c",
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCalendar(false)}
            >
              <Text style={styles.closeButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Travelers Picker Modal */}
      <Modal
        visible={showTravelersModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowTravelersModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.travelersPickerContainer}>
            <Text style={styles.travelersTitle}>Select Travelers</Text>

            <Picker
              selectedValue={travelers}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue) => setTravelers(itemValue)}
            >
              {[...Array(10).keys()].map((i) => (
                <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
              ))}
            </Picker>

            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setShowTravelersModal(false)}
            >
              <Text style={styles.closeButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    color: "#b1473c",
    fontSize: wp("4.5%"),
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  calendarContainer: {
    backgroundColor: "#18171c",
    marginHorizontal: wp("5%"),
    borderRadius: wp("4%"),
    padding: hp("1.5%"),
  },
  travelersPickerContainer: {
    backgroundColor: "#18171c",
    padding: hp("2%"),
    borderRadius: wp("4%"),
    marginHorizontal: wp("15%"),
    alignItems: "center",
  },
  travelersTitle: {
    fontSize: wp("5.5%"),
    color: "#b1473c",
    marginBottom: hp("2%"),
  },
  picker: {
    height: hp("20%"),
    width: wp("35%"),
    color: "#b1473c",
  },
  pickerItem: {
    color: "#b1473c",
    fontSize: wp("4.5%"),
  },
  closeButton: {
    marginTop: hp("1.5%"),
    alignSelf: "center",
    backgroundColor: "#b1473c",
    paddingVertical: hp("1.2%"),
    paddingHorizontal: wp("8%"),
    borderRadius: wp("2%"),
  },
  doneButton: {
    marginTop: hp("2%"),
    backgroundColor: "#b1473c",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("10%"),
    borderRadius: wp("2%"),
  },
  closeButtonText: {
    color: "#18171c",
    fontWeight: "bold",
    fontSize: wp("4%"),
    textAlign: "center",
  },
});
