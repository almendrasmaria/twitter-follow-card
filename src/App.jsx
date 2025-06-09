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
    </>
  );
}

export default App;
