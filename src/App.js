import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Coral" },
  { id: "u2", name: "Naiya" },
  { id: "u3", name: "Roxy" },
  { id: "u4", name: "Lolita" },
  { id: "u5", name: "Yuyo" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };
  console.log("test");
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
