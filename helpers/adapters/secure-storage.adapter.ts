import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';


export class SecureStorageAdapter {

  static async setItem(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value)
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el token de autenticación, por favor intente nuevamente')
    }
  }

  static async getItem(key: string) {
    try {
      await SecureStore.getItem(key)
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el token de autenticación, por favor intente nuevamente')
      return null
    }
  }

  static async deleteItem(key: string): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key)
    } catch (error) {
      console.error('Error deleting item from secure storage', error)
      Alert.alert('Error', 'No se pudo eliminar el token de autenticación, por favor intente nuevamente')
    }
  }
}
