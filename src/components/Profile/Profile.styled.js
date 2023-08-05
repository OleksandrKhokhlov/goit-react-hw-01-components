import styled from '@emotion/styled';

const Container = styled.div`
  color: #181717a8;
  padding: 15px;
  text-align: center;
  background-color: #0000001f;
`;
const UserContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;
const Avatar = styled.img`
  margin-top: 20px;
  border-radius: 50%;
`;
const ProfileName = styled.p`
  color: black;
  font-weight: 700;
`;
const ProfileTag = styled.p`
  margin: 0;
`;
const ProfileLocation = styled.p`
  margin-bottom: 0;
  padding-bottom: 16px;
`;
const StatsList = styled.ul`
  list-style: none;
  max-width: 300px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: #0f0f0e4f;
`;
const StatsItem = styled.li`
  padding: 10px 0;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1413134a;
  width: 100%;
  height: 100%;
`;
export {
  Container,
  UserContainer,
  Avatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  StatsList,
  StatsItem,
};
