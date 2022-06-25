import React from 'react';
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={s.users}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.usersItem}>
                        <div className={s.userFollow}>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                alt="user photo"/>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className={s.userInfo}>
                            <p className={s.userName}>{"u.fullName"}</p>
                            <p className={s.userLocation}>
                                <span>{"u.location.country"}</span>
                                <span>{"u.location.city"}</span>
                            </p>
                            <p className={s.userStatus}>{"u.status"}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )

}

export default Users;