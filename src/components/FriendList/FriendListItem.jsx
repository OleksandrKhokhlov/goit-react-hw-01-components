import { User, IsOnlaineUser } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <User>
      <IsOnlaineUser isOnline={isOnline}></IsOnlaineUser>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </User>
  );
};
