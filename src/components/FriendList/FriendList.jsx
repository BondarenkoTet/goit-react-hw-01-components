
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
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.node,
    name: PropTypes.string.isRequired,
    })
    )}