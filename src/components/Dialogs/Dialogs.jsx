import React from 'react';
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };
  let onMessasgeChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            value={props.state.newMessageBody}
            onChange={onMessasgeChange}
            ref={newMessageElement}
            className={s.message}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage} className={s.post}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
