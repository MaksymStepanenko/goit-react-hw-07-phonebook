import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


// Робота з редаксом:
// 1. Встановити бібліотеку redux та react-redux
// 2. Сконфігурувати "store"
// 3. Зв'язати наш "store" з React додатком, через <Provider store={store}>
// 4. Створити редьюсер з початковим стейтом і
//    підключити цей редьюсер до "store" за допомогою "combineReducers"
// 5. Описати для кожної дії в редьюсері свій обробник/кейс/протокол
// 6. Підписатися на стейт безпосередньо в середині компоненти, за допомогою
//    "useSelector"
// 7. Отримати логістичну функцію "dispatch" за допомогою хука "useDispatch()"
// 8. Задіспатчити екшин(Надіслати інструкцію до редьюсеру) dispatch({ type: 'categories/setCategoryList', payload: catList })
// NOTE: Action - це об'єкт, в якого має бути обов'язкове поле type,
//       ще може бути payload - він не обов'язковий.
//       Редьюсер - це чиста функція, яка приймає в себе "state" та "action"
//       і повертає змінений стан.
//       dispatch - це логістична функція, яка приймає в себе "action"
//       і доставляє його до редьюсеру.

// {
//   contacts: [],
//   filter: ""
// }
