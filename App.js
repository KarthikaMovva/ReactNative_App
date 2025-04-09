import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, count === 0 && styles.disabledButton]} 
          onPress={() => count > 0 && setCount(count - 1)}
          disabled={count === 0}
        >
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});
