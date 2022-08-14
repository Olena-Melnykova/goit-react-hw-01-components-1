import css from "./FriendListItem.module.css";

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusIsOn : css.statusIsOff}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
