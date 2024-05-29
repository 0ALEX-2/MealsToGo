import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
            // marginTop: isAndroid ? 45 : 0,
            marginTop: StatusBar.currentHeight,
          }}
        >
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
