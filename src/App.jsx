import TwitterFollowCard from "./TwitterFollowCard";
import { users } from "./data/users.js";
import "./App.css";

function App() {
  return (
    <>
      <TwitterFollowCard />
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <img className="avatar-twitter" src={`https://unavatar.io/${user.userName}`} />
              @{user.userName} - {user.name} - {user.isFollowing ? "Sí" : "No"}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
