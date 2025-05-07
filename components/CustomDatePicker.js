import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, ButtonText } from "./ui/button";

const CustomDatePicker = () => {
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View>
      <Button onPress={() => setShowPicker(true)}>
        <ButtonText>
          {date ? date.toLocaleDateString() : "Select a Date"}
        </ButtonText>
      </Button>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()} // Default to current date if no date is selected
          mode="date" // Show calendar for date selection
          display="default" // Use default display style
          onChange={handleDateChange} // Handle date selection
          confirmBtnText="Confirm" // Confirm button text
          cancelBtnText="Cancel" // Cancel button text
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
