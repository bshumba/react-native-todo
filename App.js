import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: '20%'}}>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({});
