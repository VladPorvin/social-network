const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Opolin fostra' },
    { id: 3, message: 'Oh lorem soft' },
    { id: 4, message: 'Oh li hwo are' },
    { id: 5, message: 'hahaha' },
  ],
  dialogs: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Lena' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Romulter' },
    { id: 5, name: 'Rom' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      }

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }
    default:
      return state;
  }
};
export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: text };
};
export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};
export default dialogsReducer;
