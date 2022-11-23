import "./App.css";
import SignOut from "./components/SignOut";
import NotLoggedIn from "./components/NotLoggedIn";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { status } = useAuthContext();

  const render = status === "LoggedIn" ? <SignOut /> : <NotLoggedIn />;

  return <div className="App">{render}</div>;
}

export default App;
