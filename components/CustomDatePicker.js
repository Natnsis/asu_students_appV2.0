import { View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, ButtonText } from "./ui/button";

const CustomDatePicker = ({ date, setDate }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (event.type === "set" && selectedDate instanceof Date) {
      setDate(selectedDate); // Pass the selected date to the parent component
    }
  };

  return (
    <View>
      <Button onPress={() => setShowPicker(true)} variant="outline">
        <ButtonText>
          {date ? date.toLocaleDateString() : "Select a Date"}
        </ButtonText>
      </Button>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()} // Use the current date if `date` is null
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
