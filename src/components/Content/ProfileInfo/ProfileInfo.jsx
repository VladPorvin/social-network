import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
                <div className={s.profile__img}>
                    <img className={s.content__bg} src="https://images.unsplash.com/photo-1642775588674-3ad7225d3f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="error" />
                </div>
                <div className={s.profile__info}>
                    <h4 className={s.name}>Jiole Marine</h4>
                    <p className={s.status}>Lorem ipsum dolor sit.</p>
                </div>
            </div>
    )
}

export default ProfileInfo;