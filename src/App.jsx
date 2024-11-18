import "./App.scss";
import Balance from "./components/tsx/Balance";
import ProfileInfo from "./components/tsx/ProfileInfo";

function App() {
  return (
    <main className="main">
      <ProfileInfo />
      <Balance />
    </main>
  );
}

export default App;
