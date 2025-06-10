import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    userName: "ngarcia",
    name: "Nahuel Garcia",
    isFollowing: true,
  },
  {
    userName: "malmendras",
    name: "María Almendras",
    isFollowing: false,
  },
  {
    userName: "tecmac",
    name: "Cristhian Maco",
    isFollowing: false,
  },
  {
    userName: "jluque",
    name: "Josue Luque",
    isFollowing: false,
  },
];

function App() {
  return (
    <>
      <TwitterFollowCard />
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.userName} - {user.name} - {user.isFollowing ? "Sí" : "No"}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
