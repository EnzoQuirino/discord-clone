import React from "react";

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
      <User>
        <Avatar className={isBot ? 'bot' : ''} />
  
        <strong>{nickname}</strong>
  
        {isBot && <span>Bot</span>}
      </User>
    );
  };
  

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Online - 1</Role>
            <UserRow nickname = "Enzo Quirino" isBot = {false} />

            <Role>Offline - 1</Role>
            <UserRow nickname = "Music Bot" isBot = {true} />
            <UserRow nickname = 'Random Guy 1' isBot = {false}/>
            <UserRow nickname = 'Random Guy 2' isBot = {false}/>
            <UserRow nickname = 'Random Guy 3' isBot = {false}/>
            <UserRow nickname = 'Random Guy 4' isBot = {false}/>
            <UserRow nickname = 'Random Guy 5' isBot = {false}/>
            <UserRow nickname = 'Random Guy 6' isBot = {false}/>
            <UserRow nickname = 'Random Guy 7' isBot = {false}/>
            <UserRow nickname = 'Random Guy 8' isBot = {false}/>
            <UserRow nickname = 'Random Guy 9' isBot = {false}/>
            <UserRow nickname = 'Random Guy 10' isBot = {false}/>
            <UserRow nickname = 'Random Guy 11' isBot = {false}/>
            <UserRow nickname = 'Random Guy 12' isBot = {false}/>
            <UserRow nickname = 'Random Guy 13' isBot = {false}/>
            <UserRow nickname = 'Random Guy 14' isBot = {false}/>
            <UserRow nickname = 'Random Guy 15' isBot = {false}/>
            <UserRow nickname = 'Random Guy 16' isBot = {false}/>
            <UserRow nickname = 'Random Guy 17' isBot = {false}/>
            <UserRow nickname = 'Random Guy 18' isBot = {false}/>
            <UserRow nickname = 'Random Guy 19' isBot = {false}/>
            <UserRow nickname = 'Random Guy 20' isBot = {false}/>
            <UserRow nickname = 'Random Guy 21' isBot = {false}/>
            <UserRow nickname = 'Random Guy 22' isBot = {false}/>
            <UserRow nickname = 'Random Guy 23' isBot = {false}/>
        </Container>
    );
};

export default UserList