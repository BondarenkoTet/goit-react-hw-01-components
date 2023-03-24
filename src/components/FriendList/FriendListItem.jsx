import css from "./FriendsList.module.css";


export const FriendListItem = ({friend: {isOnline, avatar, name}}) => {
    return <li className={
            isOnline 
                    ? `${css.status} ${css.green}` 
                    : `${css.status} ${css.red}`}>

                <span className={css.status}></span>
                <img className={css["avatar-friend"]} src={avatar} alt={name} width="48" />
                <p className={css["name-friend"]}>{name}</p>
            </li>
    }