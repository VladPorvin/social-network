import contentReducer from './content-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    contentPage: {
      posts: [
        { id: 1, message: 'Hello how are u' },
        { id: 2, message: 'Ama okey' },
        { id: 3, message: 'My name is Jiovanni' },
      ],
      newPostText: '',
    },

    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('Changed');
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.contentPage.newPostText,
    };
    this._state.contentPage.posts.push(newPost);
    this._state.contentPage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.contentPage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.contentPage = contentReducer(this._state.contentPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
