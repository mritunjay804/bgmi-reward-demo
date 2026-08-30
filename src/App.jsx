import { Countdown } from "./components/countdown";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Rewards } from "./components/reward";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Countdown />
      <Rewards />
    </div>
  );
}

export default App;