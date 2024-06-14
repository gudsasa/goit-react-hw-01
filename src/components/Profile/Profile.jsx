import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  image,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.containerWrap}>
      <div className={css.container}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.subtitle}>@{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
