import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { object, string } from 'yup'
import { Formik } from 'formik'

const userSchema = object({
    email: string().required('Email is required to Login').email('Please enter a valid email address'),
    password: string().required('Password is required to Login')
})

export default function LoginPage() {
  function handleLogin(email: string, password: string) {
    console.log("Logging in with:", email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={userSchema}
       onSubmit={values => {
        handleLogin(values.email, values.password);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
       }) => (
         <>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Blip</Text>
            </View>
            <Text style={styles.subtitle}>Secure Identity on the Blockchain</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#666"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize='none' 
                />
            </View>
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="#666"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                />
            </View>
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signupLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
         </>
       )}
     </Formik>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30
    },
    logoText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#ffffff"
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: "#888",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        color: "#ffffff",
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: "#1DB954",
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 30,
        marginTop: 20,
    },
    loginButtonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    forgotPassword: {
        color: "#1DB954",
        marginTop: 20,
    },
    signupContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    signupText: {
        color: "#888",
    },
    signupLink: {
        color: "#1DB954",
        fontWeight: "bold",
    },
    errorText: {
        color: "#ff4d4d",
        fontSize: 14,
        marginBottom: 11,
    }
});
