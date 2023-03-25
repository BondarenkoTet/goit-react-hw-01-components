import PropTypes from 'prop-types';
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
    };

    FriendListItem.propTypes = {
    friends: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
    
    }
    

    
        

