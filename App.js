
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goal, setGoal] = useState('');
  const [visible, setVisible] = useState(false);
  const [goals, setGoals] = useState(['one to trhee']);

  const onChangeTextHandler = (text) => {
    setGoal(text);
  }

  const onAddGoalHandlr = (goal) => {
    setGoals([...goals, goal]);
    setVisible(false);
    // setGoal('');
  }

  const onDeleteHandler = (index) => {
    setGoals(goals.filter((goal, i) => i !== index));
  }
  console.log(goal);
  const onRenderGoalItemHandler = (itemData) => {
    return <GoalItem itemData={itemData} onDelete={onDeleteHandler} />
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title="Add Goal"  onPress={() => setVisible(visible => !visible)}/>
        <GoalInput onAdd={onAddGoalHandlr} visible={visible}/>
        <View style={styles.goalContainer}>
          {/* <ScrollView >
            {goals.map((goal, index) => <Text style={styles.goalItem} key={index}>{goal}</Text>)}
          </ScrollView> */}
          <FlatList data={goals} renderItem={onRenderGoalItemHandler} keyExtractor={item => item}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  goalContainer:{
    flex:5
  },
});
