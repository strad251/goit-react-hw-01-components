import user from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

import { theme } from '../utils/Theme'
import { ThemeProvider } from 'styled-components';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';




export const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> 

      <FriendList friends={friends} />

      <Transactions items={transactions} />

    </ThemeProvider>
  );
};
