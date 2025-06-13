import TwitterFollowCard from "./TwitterFollowCard";
import { users } from "./data/users.js";
import "./App.css";

function App() {
  return (
    <section className="twitter-container">
      <h2>A quién seguir</h2>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          );
        })
      }
    </section>
  );
}

export default App;
