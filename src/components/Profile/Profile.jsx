import css from "../Profile/Profile.module.css";

export default function Profile({ name, tag, location, imageUrl, stats }) {
  return (
    <div className={css.profileCard}>
      <img className={css.profileAvatar} src={imageUrl} alt="User avatar" />
      <p className={css.profileName}>{name}</p>
      <p className={css.profileDimText}>@{tag}</p>
      <p className={css.profileDimText}>{location}</p>

      <ul className={css.profileStatsList}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span className={css.profileStatsValue}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span className={css.profileStatsValue}>{stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span className={css.profileStatsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
