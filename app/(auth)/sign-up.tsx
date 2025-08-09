import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

/**
 * Renders the sign-up page component.
 * It handles both the initial sign-up form and the email verification form.
 *
 * @returns {JSX.Element} The sign-up page component.
 */
export default function SignUpScreen() {
  // Destructure properties from the Clerk `useSignUp` hook.
  // `isLoaded`: A boolean indicating if the Clerk SDK has finished loading.
  // `signUp`: The sign-up object with methods for the authentication flow.
  // `setActive`: A function to set the active session after a successful sign-up.
  const { isLoaded, signUp, setActive } = useSignUp();

  // Get the router object for navigation.
  const router = useRouter();

  // State to hold the user's email address for sign-up.
  const [emailAddress, setEmailAddress] = React.useState("");
  // State to hold the user's password for sign-up.
  const [password, setPassword] = React.useState("");
  // State to control which form is displayed: the sign-up form or the verification form.
  const [pendingVerification, setPendingVerification] = React.useState(false);
  // State to hold the verification code entered by the user.
  const [code, setCode] = React.useState("");

  /**
   * Handles the submission of the initial sign-up form.
   * This function creates a new user and sends a verification email.
   */
  const onSignUpPress = async () => {
    // If the Clerk SDK isn't loaded yet, do nothing.
    if (!isLoaded) return;

    console.log(emailAddress, password);

    try {
      // Create the sign-up attempt with the provided email and password.
      await signUp.create({
        emailAddress,
        password,
      });

      // Prepare for email address verification by sending an email with a code.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to switch the UI to the verification form.
      setPendingVerification(true);
    } catch (err) {
      // Log any errors that occur during the sign-up process.
      console.error("Sign-up error:", JSON.stringify(err, null, 2));
    }
  };

  /**
   * Handles the submission of the email verification form.
   * This function attempts to verify the user with the provided code.
   */
  const onVerifyPress = async () => {
    // If the Clerk SDK isn't loaded yet, do nothing.
    if (!isLoaded) return;

    try {
      // Use the code provided by the user to attempt email verification.
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // Check if the verification was completed successfully.
      if (signUpAttempt.status === "complete") {
        // If successful, set the newly created session as the active one.
        await setActive({ session: signUpAttempt.createdSessionId });
        // Navigate the user to the `(tabs)` folder, which is typically the main part of the app.
        router.replace("/(tabs)");
      } else {
        // Log the sign-up attempt if it's not complete to debug further steps.
        console.error(
          "Verification not complete:",
          JSON.stringify(signUpAttempt, null, 2)
        );
      }
    } catch (err) {
      // Log any errors that occur during the verification process.
      console.error("Verification error:", JSON.stringify(err, null, 2));
    }
  };

  // Conditionally render the verification form if verification is pending.
  if (pendingVerification) {
    return (
      <View>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity onPress={onVerifyPress}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Render the initial sign-up form.
  return (
    <View>
      <Text>Sign up</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity onPress={onSignUpPress}>
        <Text>Continue</Text>
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        <Text>Already have an account?</Text>
        <Link href="/sign-in">
          <Text>Sign in</Text>
        </Link>
      </View>
    </View>
  );
}
