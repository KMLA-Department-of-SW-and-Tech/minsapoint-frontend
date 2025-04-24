import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

export default function Index() {
  return (
    <View>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
            <Text style={styles.touchableOpacityText}>Press Me~~~~~</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
            <Text style={styles.touchableOpacityText}>Press Me~~~~~</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
            <Text style={styles.touchableOpacityText}>Press Me~~~~~</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    touchableOpacity: {
        marginHorizontal: "auto",
        marginBottom: 30,
    },
    touchableOpacityText: {
        fontSize: 40,
        
    },
});