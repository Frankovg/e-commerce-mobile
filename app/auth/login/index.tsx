import ThemedButton from '@/presentation/theme/components/ThemedButton'
import Themedlink from '@/presentation/theme/components/Themedlink'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import React from 'react'
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native'

const LoginScreen = () => {
  const { height } = useWindowDimensions()
  const backgroundColor = useThemeColor({}, 'background')
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35
          }}
        >
          <ThemedText type='title'> Ingresar </ThemedText>
          <ThemedText style={{ color: 'grey' }}> Por favor ingrese para continuar </ThemedText>
        </View>

        <View style={{
          marginTop: 20,
        }}
        >
          <ThemedTextInput
            placeholder='Correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
            icon='mail-outline'
          />
          <ThemedTextInput
            placeholder='Contraseña'
            secureTextEntry
            autoCapitalize='none'
            icon='lock-closed-outline'
          />
        </View>

        <View style={{ marginTop: 10 }} />

        <ThemedButton
          icon='arrow-forward-outline'
        >
          Ingresar
        </ThemedButton>

        <View style={{ marginTop: 50 }} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ThemedText>¿No tienes cuenta?</ThemedText>
          <Themedlink href='auth/register' style={{ marginHorizontal: 5 }}>Crear cuenta</Themedlink>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )

}

export default LoginScreen
