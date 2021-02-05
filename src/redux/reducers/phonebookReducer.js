import { createReducer } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContact,
  setFilter,
  getInitialContacts,
} from '../actions/phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

const onAddContact = (state, action) => ({
  ...state,
  contacts: [...state.contacts, action.payload],
});

const onDeleteContact = (state, action) => ({
  ...state,
  contacts: [...state.contacts.filter(item => item.id !== action.payload)],
});

const onSetFilter = (state, action) => ({
  ...state,
  filter: action.payload,
});

const onGetInitialContacts = (state, action) => ({
  ...state,
  contacts: [...action.payload],
});

const phonebookReducer = createReducer(
  { ...initialState },
  {
    [addNewContact]: onAddContact,
    [deleteContact]: onDeleteContact,
    [setFilter]: onSetFilter,
    [getInitialContacts]: onGetInitialContacts,
  },
);

export default phonebookReducer;

//=================================
// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   SET_FILTER,
//   GET_INITIAL_CONTACTS,
// } from '../constans/phonebookConstans';

// const phonebookReducer = (state = { ...initialState }, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts.filter(item => item.id !== action.payload),
//         ],
//       };
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case GET_INITIAL_CONTACTS:
//       return {
//         ...state,
//         contacts: [...action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default phonebookReducer;
