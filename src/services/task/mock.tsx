import { utils } from "../../utils/utils";
import { Task } from "./taskTypes";
export const mock: Task[] = [
  {
    id: utils.uuidv4(),
    title: "Pagar as contas de luz",
  },
  {
    id: utils.uuidv4(),
    title: "Levar o dog para passear",
  },
];
