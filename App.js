import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import Task from './Components/Task'

const App = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleAddTask = () => {
    console.log(taskItems)
    setTaskItems([...taskItems, task]);
    setIsKeyboardOpened(false)
    setTask(null);
  }

  const delteTask = (index) => {
    let itemscopy = [...taskItems]
    itemscopy.splice(index, 1);
    setTaskItems(itemscopy);
  }
  const renderItem = ({ item, index }) => {
    return (<TouchableOpacity key={index} onPress={() => delteTask(index)}>
      <Task text={item} />
    </TouchableOpacity>
    )
  };
  return (
    <>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
      </View>
      <View style={{ maxHeight: keyboardStatus ? '68%' : '80%' }}>
        <FlatList
          data={taskItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{ flexDirection: 'row', width: '45%', position: 'absolute', bottom: 5, left: 50 }}>
        <TextInput style={styles.Input} placeholder={'Write Your Task Here'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper: {
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    maxHeight: '68%'
    // marginTop: 20,
  },
  writeTaskWrapper: {
    alignSelf: 'center'
    // position: 'absolute',
    // bottom: 5 ,
    // width: '100%',
    // flexDirection: 'row',
    // justifyContent:'center'
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // flex: 1
  },
  Input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFF',
    borderColor: '#C0C0C0',
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
})


export default App;
