import Constants from "expo-constants";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { TaskItem } from "../components/TaskItem/TaskItem";
import { Header } from "../components/Header/Header";
import { InputButton } from "../components/InputButton/InputButton";
import { useTask } from "../services/task/useTask";

export function HomeScreen() {
  const { tasks } = useTask();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Header />

        {tasks.map((task) => {
          return <TaskItem task={task} key={task.id} />;
        })}

        <InputButton />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe3e8",
    marginTop: Constants.statusBarHeight,
  },
});
