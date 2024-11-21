import "./App.scss";
import Balance from "./components/tsx/Balance";
import ProfileInfo from "./components/tsx/ProfileInfo";
import Tabs from "./components/tsx/Tabs";
function App() {
  return (
    <main className="main">
      <section className="top-section">
        <ProfileInfo />
        <Balance />
      </section>

      <section className="navbar-container">
        <Tabs />
      </section>
    </main>
  );
}

export default App;
