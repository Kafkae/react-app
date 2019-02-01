import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const UserItem = styled.div`
  width: 300px;
  min-height: 350px;
  border: 3px solid #a82844;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Data = styled.span`
  font-size: 1.1em;
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 1.1em;
`;

const UserName = styled.span`
  font-size: 1.5em;
`;

export const User = ({ users }) => (
  <Wrapper>
    {users.map(users => {
      return (
        <UserItem key={users.id}>
          <Group>
            <Title>{users.name}</Title>
            <UserName>никнейм: {users.username}</UserName>
          </Group>
          <Group>
            <Title>Местоположение</Title>
            <Data>Город: {users.address.city}</Data>
            <Data>Улица: {users.address.street}</Data>
          </Group>
          <Group>
            <Title>Контакты</Title>
            <Data>Сайт: {users.website}</Data>
            <Data>Телефон: {users.phone}</Data>
          </Group>
        </UserItem>
      );
    })}
  </Wrapper>
);
