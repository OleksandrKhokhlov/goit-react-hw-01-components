import styled from '@emotion/styled';

const FriendListUser = styled.ul`
  list-style: none;
  padding: 0;
`;
const User = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 300px;
  margin: 15px auto;
  img {
    margin-left: 15px;
    margin-right: 15px;
  }
`;
const IsOnlaineUser = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
  margin-top: 6%;
  background-color: ${({isOnline}) => (isOnline)?'green':'red'};
`;


export { FriendListUser, User, IsOnlaineUser };
