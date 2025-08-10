import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import "@/global.css";

export default function RootLayout() {
  const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk Publishable Key");
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={CLERK_PUBLISHABLE_KEY}
    >
      <GluestackUIProvider mode="light">
        <Slot />
      </GluestackUIProvider>
    </ClerkProvider>
  );
}
