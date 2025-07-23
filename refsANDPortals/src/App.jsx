import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1}></TimerChallenge>
        <TimerChallenge title={"Not Easy"} targetTime={5}></TimerChallenge>
        <TimerChallenge title={"Modrate"} targetTime={10}></TimerChallenge>
        <TimerChallenge title={"Pros"} targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;