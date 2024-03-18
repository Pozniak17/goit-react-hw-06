import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { rootReducer } from "./reducers";

//! createStore(reducer, preloadedState, enhancer)

//* reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
//* preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
//* enhancer - функція розширення можливостей стору. Необов'язковий параметр.

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
