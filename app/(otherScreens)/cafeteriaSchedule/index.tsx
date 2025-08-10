import React, { useEffect, useState, useRef } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CafeteriaSchedule() {
  const [sundayBreakfast, setSundayBreakfast] = useState("");
  const [sundayLunch, setSundayLunch] = useState("");
  const [sundayDinner, setSundayDinner] = useState("");

  const [mondayBreakfast, setMondayBreakfast] = useState("");
  const [mondayLunch, setMondayLunch] = useState("");
  const [mondayDinner, setMondayDinner] = useState("");

  const [tuesdayBreakfast, setTuesdayBreakfast] = useState("");
  const [tuesdayLunch, setTuesdayLunch] = useState("");
  const [tuesdayDinner, setTuesdayDinner] = useState("");

  const [wednesdayBreakfast, setWednesdayBreakfast] = useState("");
  const [wednesdayLunch, setWednesdayLunch] = useState("");
  const [wednesdayDinner, setWednesdayDinner] = useState("");

  const [thursdayBreakfast, setThursdayBreakfast] = useState("");
  const [thursdayLunch, setThursdayLunch] = useState("");
  const [thursdayDinner, setThursdayDinner] = useState("");

  const [fridayBreakfast, setFridayBreakfast] = useState("");
  const [fridayLunch, setFridayLunch] = useState("");
  const [fridayDinner, setFridayDinner] = useState("");

  const [saturdayBreakfast, setSaturdayBreakfast] = useState("");
  const [saturdayLunch, setSaturdayLunch] = useState("");
  const [saturdayDinner, setSaturdayDinner] = useState("");

  const [loading, setLoading] = useState(true);
  const initialLoadDone = useRef(false);

  const fetchData = async (showLoading: boolean = false) => {
    if (showLoading) setLoading(true);
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

        initialLoadDone.current = true;
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(true);

    const intervalId = setInterval(() => {
      fetchData(false);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator size="large" color="#16a34a" />
        <Text style={{ marginTop: 8, color: "#374151", fontWeight: "600" }}>
          Loading cafeteria schedule...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          color: "#15803d",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Cafeteria Schedule
      </Text>

      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            minWidth: 700,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d1d5db",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#e5e7eb",
              borderBottomWidth: 1,
              borderBottomColor: "#d1d5db",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            {["Day", "Breakfast", "Lunch", "Dinner"].map((header) => (
              <View
                key={header}
                style={{
                  minWidth: header === "Day" ? 120 : 190,
                  paddingVertical: 14,
                  paddingHorizontal: 12,
                  borderRightWidth: header !== "Dinner" ? 1 : 0,
                  borderRightColor: "#d1d5db",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {header}
                </Text>
              </View>
            ))}
          </View>

          {[
            ["Sunday", sundayBreakfast, sundayLunch, sundayDinner],
            ["Monday", mondayBreakfast, mondayLunch, mondayDinner],
            ["Tuesday", tuesdayBreakfast, tuesdayLunch, tuesdayDinner],
            ["Wednesday", wednesdayBreakfast, wednesdayLunch, wednesdayDinner],
            ["Thursday", thursdayBreakfast, thursdayLunch, thursdayDinner],
            ["Friday", fridayBreakfast, fridayLunch, fridayDinner],
            ["Saturday", saturdayBreakfast, saturdayLunch, saturdayDinner],
          ].map((row, idx) => (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                backgroundColor: idx % 2 === 0 ? "#f9fafb" : "#ffffff",
                borderBottomWidth: 1,
                borderBottomColor: "#e5e7eb",
                borderBottomLeftRadius: idx === 6 ? 12 : 0,
                borderBottomRightRadius: idx === 6 ? 12 : 0,
              }}
            >
              {row.map((cell, i) => (
                <View
                  key={i}
                  style={{
                    minWidth: i === 0 ? 120 : 190,
                    paddingVertical: 14,
                    paddingHorizontal: 12,
                    borderRightWidth: i !== 3 ? 1 : 0,
                    borderRightColor: "#e5e7eb",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#1f2937",
                      fontSize: 14,
                      flexWrap: "wrap",
                    }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {cell || "-"}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
