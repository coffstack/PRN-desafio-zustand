import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Task } from "../../services/task/taskTypes";
import { useTaskContext } from "../../services/task/useTaskContext";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface Props {
  task: Task;
}
export function TaskItem({ task }: Props) {
  const { removeTask, selectTask } = useTaskContext();

  function handleDelete(taskId: number) {
    removeTask(taskId);
  }

  function handleUpdate(taskId: number) {
    selectTask(taskId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.annotation}>
        <View style={{ flex: 1 }}>
          <Text style={styles.message}>{task.message}</Text>
        </View>

        <TouchableOpacity style={[styles.button, styles.buttonUpdate]}>
          <Feather
            name="edit"
            size={24}
            color="#0033ff"
            onPress={() => handleUpdate(task.id)}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonCreate]}>
          <Ionicons
            name="md-trash"
            size={24}
            color="#cb1a1a"
            onPress={() => handleDelete(task.id)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  annotation: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    gap: 10,
    alignItems: "center",
  },
  message: {
    fontSize: 15,
  },
  button: {
    alignItems: "flex-end",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  buttonCreate: {
    borderColor: "#cb1a1a",
  },
  buttonUpdate: {
    borderColor: "#0033ff",
  },
});
