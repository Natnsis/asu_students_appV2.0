// CafeteriaSchedule.tsx
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function CafeteriaSchedule() {
  // Sunday
  const [sundayBreakfast, setSundayBreakfast] = useState("");
  const [sundayLunch, setSundayLunch] = useState("");
  const [sundayDinner, setSundayDinner] = useState("");

  // Monday
  const [mondayBreakfast, setMondayBreakfast] = useState("");
  const [mondayLunch, setMondayLunch] = useState("");
  const [mondayDinner, setMondayDinner] = useState("");

  // Tuesday
  const [tuesdayBreakfast, setTuesdayBreakfast] = useState("");
  const [tuesdayLunch, setTuesdayLunch] = useState("");
  const [tuesdayDinner, setTuesdayDinner] = useState("");

  // Wednesday
  const [wednesdayBreakfast, setWednesdayBreakfast] = useState("");
  const [wednesdayLunch, setWednesdayLunch] = useState("");
  const [wednesdayDinner, setWednesdayDinner] = useState("");

  // Thursday
  const [thursdayBreakfast, setThursdayBreakfast] = useState("");
  const [thursdayLunch, setThursdayLunch] = useState("");
  const [thursdayDinner, setThursdayDinner] = useState("");

  // Friday
  const [fridayBreakfast, setFridayBreakfast] = useState("");
  const [fridayLunch, setFridayLunch] = useState("");
  const [fridayDinner, setFridayDinner] = useState("");

  // Saturday
  const [saturdayBreakfast, setSaturdayBreakfast] = useState("");
  const [saturdayLunch, setSaturdayLunch] = useState("");
  const [saturdayDinner, setSaturdayDinner] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://asu-api.onrender.com/schedules");
      const data = await res.json();

      if (data?.response) {
        data.response.forEach((item: any) => {
          const food = item.food;
          const day = item.day.toLowerCase();
          const time = item.time.toLowerCase();

          if (day === "sunday" && time === "breakfast")
            setSundayBreakfast(food);
          if (day === "sunday" && time === "lunch") setSundayLunch(food);
          if (day === "sunday" && time === "dinner") setSundayDinner(food);

          if (day === "monday" && time === "breakfast")
            setMondayBreakfast(food);
          if (day === "monday" && time === "lunch") setMondayLunch(food);
          if (day === "monday" && time === "dinner") setMondayDinner(food);

          if (day === "tuesday" && time === "breakfast")
            setTuesdayBreakfast(food);
          if (day === "tuesday" && time === "lunch") setTuesdayLunch(food);
          if (day === "tuesday" && time === "dinner") setTuesdayDinner(food);

          if (day === "wednesday" && time === "breakfast")
            setWednesdayBreakfast(food);
          if (day === "wednesday" && time === "lunch") setWednesdayLunch(food);
          if (day === "wednesday" && time === "dinner")
            setWednesdayDinner(food);

          if (day === "thursday" && time === "breakfast")
            setThursdayBreakfast(food);
          if (day === "thursday" && time === "lunch") setThursdayLunch(food);
          if (day === "thursday" && time === "dinner") setThursdayDinner(food);

          if (day === "friday" && time === "breakfast")
            setFridayBreakfast(food);
          if (day === "friday" && time === "lunch") setFridayLunch(food);
          if (day === "friday" && time === "dinner") setFridayDinner(food);

          if (day === "saturday" && time === "breakfast")
            setSaturdayBreakfast(food);
          if (day === "saturday" && time === "lunch") setSaturdayLunch(food);
          if (day === "saturday" && time === "dinner") setSaturdayDinner(food);
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#16a34a" />
        <Text className="text-gray-800 mt-2 font-semibold">
          Loading cafeteria schedule...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-3xl font-extrabold text-green-700 text-center mt-4 mb-2">
        Cafeteria Schedule
      </Text>

      <ScrollView
        className="flex-1 px-3"
        horizontal
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ScrollView>
          <View className="rounded-xl overflow-hidden border border-gray-300 shadow-md">
            {/* Header */}
            <View className="flex-row bg-gray-200">
              <Text className="text-gray-900 font-bold px-4 py-3 min-w-[120px] text-center">
                Day
              </Text>
              <Text className="text-gray-900 font-bold px-4 py-3 min-w-[150px] text-center">
                Breakfast
              </Text>
              <Text className="text-gray-900 font-bold px-4 py-3 min-w-[150px] text-center">
                Lunch
              </Text>
              <Text className="text-gray-900 font-bold px-4 py-3 min-w-[150px] text-center">
                Dinner
              </Text>
            </View>

            {/* Rows */}
            {[
              ["Sunday", sundayBreakfast, sundayLunch, sundayDinner],
              ["Monday", mondayBreakfast, mondayLunch, mondayDinner],
              ["Tuesday", tuesdayBreakfast, tuesdayLunch, tuesdayDinner],
              [
                "Wednesday",
                wednesdayBreakfast,
                wednesdayLunch,
                wednesdayDinner,
              ],
              ["Thursday", thursdayBreakfast, thursdayLunch, thursdayDinner],
              ["Friday", fridayBreakfast, fridayLunch, fridayDinner],
              ["Saturday", saturdayBreakfast, saturdayLunch, saturdayDinner],
            ].map((row, idx) => (
              <View
                key={idx}
                className={`flex-row ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {row.map((cell, i) => (
                  <Text
                    key={i}
                    className="px-4 py-4 min-w-[120px] text-center text-gray-800"
                  >
                    {cell}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
