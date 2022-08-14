import Section from "./components/Section/Section";
import Profile from './components/Profile/Profile';
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import Transactions from "./components/Transactions/Transactions";
import user from "./data/user.json";
import uploadStats from "./data/uploadStats.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={uploadStats} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <Transactions transactions={transactions} />
      </Section>

    </div>
  );
}
