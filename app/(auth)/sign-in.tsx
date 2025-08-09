import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

/**
 * Renders the sign-in page component.
 *
 * @returns {JSX.Element} The sign-in page component.
 */
export default function Page() {
  // Destructure properties from the Clerk `useSignIn` hook.
  // `signIn`: The sign-in object with methods for the authentication flow.
  // `setActive`: A function to set the active session after a successful sign-in.
  // `isLoaded`: A boolean indicating if the Clerk SDK has finished loading.
  const { signIn, setActive, isLoaded } = useSignIn();

  // Get the router object for navigation.
  const router = useRouter();

  // State to hold the user's email address.
  const [emailAddress, setEmailAddress] = React.useState("");

  // State to hold the user's password.
  const [password, setPassword] = React.useState("");

  /**
   * Handles the sign-in form submission.
   * This function attempts to sign in the user with the provided credentials.
   */
  const onSignInPress = async () => {
    // If the Clerk SDK isn't loaded yet, do nothing.
    if (!isLoaded) return;

    try {
      // Attempt to create a sign-in session with the user's email and password.
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // Check if the sign-in process is complete.
      if (signInAttempt.status === "complete") {
        // If successful, set the newly created session as the active one.
        await setActive({ session: signInAttempt.createdSessionId });
        // Navigate the user to the `(tabs)` folder, which is typically the main part of the app.
        router.replace("/(tabs)");
      } else {
        // Log the sign-in attempt if it's not complete to debug further steps.
        console.error(
          "Sign-in not complete:",
          JSON.stringify(signInAttempt, null, 2)
        );
      }
    } catch (err) {
      // Log any errors that occur during the sign-in process.
      // This is crucial for debugging authentication issues.
      console.error("Sign-in error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      {/* Input for the user's email address */}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      {/* Input for the user's password */}
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      {/* Touchable button to trigger the sign-in process */}
      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {/* Link to the sign-up page for new users */}
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.link}>Sign up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4f7",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1e293b",
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#3b82f6",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 3,
  },
  linkText: {
    color: "#4a5568",
  },
  link: {
    color: "#3b82f6",
    fontWeight: "bold",
  },
});
