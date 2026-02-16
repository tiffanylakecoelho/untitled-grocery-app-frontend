import { Image } from "expo-image";
import { SectionList, StyleSheet, Text, View } from "react-native";

const data = [
  {
    title: 'B',
    data: ['Baked Ziti','BBQ Chicken Wraps','Beef and Broccoli','Beef Stroganoff','Beef Tacos','Breakfast Burritos']
  },
  {
    title: 'C',
    data: ['Caprese Chicken','Chicken Alfredo','Chicken Fajitas','Chicken Noodle Soup','Chicken Stir Fry','Chickpea Stew','Coconut Curry Chicken']
  },
  {
    title: 'E',
    data: ['Eggplant Parmesan']
  },
  {
    title: 'F',
    data: ['Fish Tacos']
  },
  {
    title: 'G',
    data: ['Garlic Butter Shrimp','Greek Salad']
  },
  {
    title: 'H',
    data: ['Honey Garlic Chicken']
  },
  {
    title: 'L',
    data: ['Lemon Garlic Salmon','Lentil Soup']
  },
  {
    title: 'M',
    data: ['Miso Glazed Cod','Mushroom Risotto']
  },
  {
    title: 'R',
    data: ['Roasted Chicken and Potatoes','Roasted Vegetable Pasta']
  },
  {
    title: 'S',
    data: ['Shrimp Fried Rice','Spaghetti Bolognese','Spinach and Feta Omelet','Stuffed Bell Peppers','Sweet Potato Black Bean Bowl']
  },
  {
    title: 'T',
    data: ['Teriyaki Salmon','Thai Peanut Noodles','Tomato Basil Soup','Turkey Chili']
  },
  {
    title: 'V',
    data: ['Vegetable Curry','Vegetable Lasagna','Vegetable Pad Thai','Veggie Quesadillas']
  }
]

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconSpace}>
          <Image
              source={require("@/assets/images/icons/search-icon.svg")}
              style={{ width: 24, height: 24 }}
            />
        </View>
        <Text style={styles.headerTitle}>Recipes</Text>
        <View style={styles.iconSpace}>
          <Image
              source={require("@/assets/images/icons/create-icon.svg")}
              style={{ width: 24, height: 24 }}
            />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <SectionList
          sections={data}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
        />
      </View>
    </View>
  );
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D6DD',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

