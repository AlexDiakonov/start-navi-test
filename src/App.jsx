import styles from "./App.module.scss";
import fetchPresets from "./services/fetchPresets";
import { useEffect, useRef, useState } from "react";
import GameTable from "./components/GameTable";
import gameTableStyles from "./components/GameTable/gameTable.module.scss";
import GameRoadMap from "./components/GameRoadMap";
import GameOptionsSetter from "./components/GameOptionsSetter";

function App() {
  const [gameFieldsSet, setFields] = useState([]);
  const [fieldsToShow, setFieldsToShow] = useState([]);
  const [squaresLocation, setSquaresLocation] = useState([]);
  const [startGameFields, setStartFields] = useState([]);
  const [error, setError] = useState(null);
  const colRefs = useRef([]);

  colRefs.current = [];

  useEffect(() => {
    fetchPresets(setFields, setError);
  }, []);

  useEffect(() => {
    error &&
      alert(
        "Ohh, it's seems I'm tired, let me catch 5 minutes of personal time please? =)"
      );
  }, [error]);

  const addToColRefs = (el) => {
    if (
      el &&
      !colRefs.current.includes(el) &&
      el.classList.contains(gameTableStyles.activeCell)
    ) {
      colRefs.current.push(el);
    }
  };

  const gameOptionsHandler = (e) => {
    e.preventDefault();
    const settingItem = gameFieldsSet.find(
      (item) => item.name === e.target.value
    );
    setFieldsToShow(
      Array.from({ length: settingItem.field }, (_, i) => settingItem.field * 1)
    );
  };

  const onGameStart = (e) => {
    e.preventDefault();
    setSquaresLocation([]);
    colRefs.current &&
      colRefs.current.forEach((el) =>
        el.classList.remove(gameTableStyles.activeCell)
      );

    setStartFields(fieldsToShow);
  };

  return (
    <div className={styles.gameArea}>
      <div className={styles.gameArea__formSideWrapper}>
        {gameFieldsSet.length > 1 && (
          <GameOptionsSetter
            gameFieldsSet={gameFieldsSet}
            gameOptionsHandler={gameOptionsHandler}
            onGameStart={onGameStart}
          />
        )}
        <GameTable
          addToColRefs={addToColRefs}
          setSquaresLocation={setSquaresLocation}
          squaresLocation={squaresLocation}
          startGameFields={startGameFields}
        />
      </div>
      <GameRoadMap squaresLocation={squaresLocation} />
    </div>
  );
}

export default App;
