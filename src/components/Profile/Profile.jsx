import {
  Avatar,
  Container,
  ProfileLocation,
  ProfileName,
  ProfileTag,
  StatsItem,
  StatsList,
  UserContainer,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <UserContainer>
        <Avatar src={avatar} alt={username} width={200} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </UserContainer>
      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsItem>
      </StatsList>
    </Container>
  );
};
