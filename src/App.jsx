import TwitterFollowCard from "./TwitterFollowCard";
import { users } from "./data/users.js";
import "./App.css";

function App() {
  return (
    <>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <TwitterFollowCard userName={user.userName} initialFollowing={user.isFollowing}>{user.name}</TwitterFollowCard> 
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
