import { Profile } from "../Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendsList } from "components/FriendsList/FriendsList";
import { TransactionHistory } from "components/Transactions/Transactions";
import { Container } from "./App.styled";
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Container>
    <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
             stats={user.stats}/>
    <Statistics stats={data}/>   
    <FriendsList data={friends}/>  
    <TransactionHistory data={transactions}/>
    </Container>
  );
};
