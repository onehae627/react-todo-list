import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

export const { persistAtom: persistAtomTodos } = recoilPersist({
    key: "persistAtomTodos"
  });
  
export const { persistAtom: persistAtomLastTodoId } = recoilPersist({
    key: "persistAtomLastTodoId"
  });

export  const todosAtom = atom({
    key: "app/todosAtom",
    default: [
      {
        id: 3,
        regDate: "2022-04-27 12:12:12",
        content: "명상"
      },
      {
        id: 2,
        regDate: "2022-04-27 12:12:12",
        content: "공부"
      },
      {
        id: 1,
        regDate: "2022-04-27 12:12:12",
        content: "운동"
      }
    ],
    effects_UNSTABLE: [persistAtomTodos]
  });
  
export  const lastTodoIdAtom = atom({
    key: "app/lastTodoIdAtom",
    default: 3,
    effects_UNSTABLE: [persistAtomLastTodoId]
  });