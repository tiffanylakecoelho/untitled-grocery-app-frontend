import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export default function CreateRecipeScreen() {
    const router = useRouter();


    return (
        <View style={styles.container}>
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
        </View>
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
      }
});

