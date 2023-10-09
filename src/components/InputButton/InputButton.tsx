import { useEffect, useRef, useState } from "react";import {
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTaskContext } from "../../services/task/useTaskContext";

export function InputButton() {
  const { addTask, tasks, mode, updateTask, selectedTask } = useTaskContext();

  const inputRef = useRef<TextInput>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (selectedTask) {
      setMessage(selectedTask.message);
      inputRef.current?.focus();
    }
  }, [selectedTask]);

  function handleAddTask() {
    Keyboard.dismiss();

    if (mode === "update") {
      updateTask({
        id: selectedTask.id,
        message,
      });
    } else {
      addTask({
        id: tasks.length + 1,
        message,
      });
    }

    setMessage("");
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.containerInput}
        onPress={() => inputRef.current?.focus()}
      >
        <TextInput
          ref={inputRef}
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
          placeholder="Adicionar tarefa..."
        />

        <TouchableOpacity style={styles.btnAddTarefa} onPress={handleAddTask}>
          <MaterialCommunityIcons name="send" size={24} color="black" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  containerInput: {
    flexDirection: "row",
    gap: 5,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#2196F3",
  },
  input: {
    flex: 1,
  },
  btnAddTarefa: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
