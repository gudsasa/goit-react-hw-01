import css from "./FriendsListItem.module.css";
import clsx from "clsx";

export default function FriendsListItem({ avatar, name, isOnline }) {
  const statusColor = clsx(
    css.friendStatus,
    isOnline ? css.isOnline : css.isOffline
  );

  return (
    <li className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt={name} />
      <p className={css.friendName}>{name}</p>
      <p className={statusColor}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
}
