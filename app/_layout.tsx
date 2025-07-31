import { Redirect, Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <GluestackUIProvider mode="light">
        <SignedIn>
          <Redirect href="/(tabs)" />
        </SignedIn>
        <SignedOut>
          <Stack screenOptions={{ headerShown: false }} />
        </SignedOut>
      </GluestackUIProvider>
    </ClerkProvider>
  );
}
