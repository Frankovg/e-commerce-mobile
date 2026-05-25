import ProductImages from "@/presentation/products/components/ProductImages"
import { useProduct } from "@/presentation/products/hooks/useProduct"
import ThemedButton from "@/presentation/theme/components/ThemedButton"
import ThemedButtonGroup from "@/presentation/theme/components/ThemedButtonGroup"
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput"
import { ThemedView } from "@/presentation/theme/components/ThemedView"
import { Ionicons } from "@expo/vector-icons"
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router"
import { useEffect } from "react"
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native"

const ProductScreen = () => {
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()

  const { productQuery } = useProduct(id as string)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name='camera-outline' size={25} />
    })
  }, [])

  useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title
      })
    }
  }, [productQuery.data])

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator size={30} />
      </View>
    )
  }

  if (!productQuery.data) {
    return <Redirect href='/(products-app)/(home)' />
  }

  const product = productQuery.data!

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <ProductImages images={product.images} />

        <ThemedView style={{ marginTop: 20, marginHorizontal: 10 }}>
          <ThemedTextInput placeholder="Título" style={{ marginVertical: 5 }} />
          <ThemedTextInput placeholder="Slug" style={{ marginVertical: 5 }} />
          <ThemedTextInput placeholder="Descripción" style={{ marginVertical: 5 }} multiline numberOfLines={5} />
        </ThemedView>

        <ThemedView style={{ marginVertical: 5, marginHorizontal: 10, flexDirection: 'row', gap: 10 }}>
          <ThemedTextInput placeholder="Precio" style={{ flex: 1 }} />
          <ThemedTextInput placeholder="Inventario" style={{ flex: 1 }} />
        </ThemedView>

        <ThemedView style={{ marginHorizontal: 10 }}>
          <ThemedButtonGroup options={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']} selectedOptions={product.sizes} onSelect={(options) => console.log(options)} />
          <ThemedButtonGroup options={['kif', 'men', 'women', 'unisex']} selectedOptions={[product.gender]} onSelect={(options) => console.log(options)} />
        </ThemedView>

        <View style={{ marginHorizontal: 10, marginBottom: 50, marginTop: 20 }}>
          <ThemedButton
            icon="save-outline"
            onPress={() => console.log('guardar')}
          >
            Guardar
          </ThemedButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ProductScreen
