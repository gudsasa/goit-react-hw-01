import FriendsListItem from "../FriendsListItem/FriendsListItem";
import css from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
