import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);
    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <div>
          <textarea
              value={state.newMessageBody}
              onChange={onNewMessageChange}
              ref={newMessageElement}
              className={s.message}
          ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={s.post}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
