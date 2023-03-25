
import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";

import css from "./FriendsList.module.css";

export const FriendList = ({friends, isOnline}) => {
    return (
    <ul className={css["friend-list"]}>
        {friends.map(friend=> (
            <FriendListItem friend={friend} key={friend.id}/>
        ))}
    </ul>
    );
};
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    isOnline: PropTypes.bool.isRequired,    
}