import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const checkInformed = async () => {
  const studentStatus = await AsyncStorage.getItem("studentStatus");
  const parsedData = JSON.parse(studentStatus);
  if (parsedData.isInformed) {
    // ... go to home
  } else {
    //... start normally from index
  }
};

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}
