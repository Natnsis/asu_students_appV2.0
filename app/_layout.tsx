import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";

// This is the component that uses the useAuth hook and handles the conditional rendering.
// It must be a child of the ClerkProvider to access the authentication state.
function AppStack() {
  const { isSignedIn, isLoaded } = useAuth();

  // If the auth state is still loading, return a placeholder.
  // In a real app, you would show a splash screen here to prevent a flicker.
  if (!isLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        // If the user is signed in, we render the (tabs) route group.
        <Stack.Screen name="(tabs)" />
      ) : (
        // If the user is not signed in, we render the (auth) route group.
        // This will display the sign-in and sign-up screens.
        <Stack.Screen name="index" />
      )}
    </Stack>
  );
}

// The main RootLayout component that wraps the entire app with necessary providers.
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
        <AppStack />
      </GluestackUIProvider>
    </ClerkProvider>
  );
}
