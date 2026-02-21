import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function CreateRecipeScreen() {
    const router = useRouter();

    const [ingredients, setIngredients] = useState(['Flour', 'Sugar', 'Eggs']);


    return (
        <ScrollView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconSpace}>
                <Pressable onPressOut={() => router.back()}>
                    <Image
                    source={require("@/assets/images/icons/close-icon.svg")}
                    style={styles.image}
                    />
                </Pressable>
            </View>
            <View style={styles.iconSpace}>
                <Pressable>
                    <Image
                        source={require("@/assets/images/icons/check-icon.svg")}
                        style={styles.image}
                    />
                </Pressable>
            </View>
          </View>

          <View>
            <View style={styles.imagePlaceholder}>
                <Image
                    source={require("@/assets/images/icons/image-placeholder-icon.svg")}
                    style={styles.imagePlaceholderIcon}
                />
            </View>
            <View style={styles.recipeHeader}>
                <Text style={styles.title}>Placeholder Title</Text>
                <Text style={styles.subtitle}>Prep Time:</Text>
                <Text style={styles.subtitle}>Cook Time:</Text>
            </View>
            <View style={styles.blockContainer}>
                <View style={styles.block}>
                    <Text style={styles.title}>Ingredients</Text>
                </View>
            </View>
            <View style={styles.blockContainer}>
                <View style={styles.block}>
                    <Text style={styles.title}>Steps</Text>
                    {ingredients.map((ingredient, index) => (
                        <Text key={index} style={styles.listItem}>
                        • {ingredient}
                        </Text>
                    ))}
                </View>
            </View>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 60,
        paddingHorizontal: 16,
        paddingBottom: 16,
      },
      iconSpace: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      },
      image: {
        width: 24,
        height: 24
      },
      imagePlaceholder: {
        width: '100%',
        height: 200, // or whatever height you want
        backgroundColor: '#E0E0E0', // Light gray
        borderRadius: 8, // Optional rounded corners
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
      },
      imagePlaceholderIcon: {
        width: 64,
        height: 64
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 24,
        paddingBottom: 8,
        paddingHorizontal: 16,
      },
      subtitle: {
        fontSize: 16,
        paddingBottom: 5,
        paddingHorizontal: 16,
      },
      recipeHeader: {
        justifyContent: "space-between",
      },
      blockContainer: {
        alignItems: 'center',
        paddingTop: 20
      },
      block: {
        backgroundColor: '#BFEBC3',
        width: '90%',
        height: 200,
        borderRadius: 16,
        padding: 16
      },
      listItem: {
        fontSize: 16
      }
});

