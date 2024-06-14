import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(item => (
        <li className={css.item} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={
              item.isOnline ? (
                <p className={css.online}>Online</p>
              ) : (
                <p className={css.offline}>Offline</p>
              )
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
