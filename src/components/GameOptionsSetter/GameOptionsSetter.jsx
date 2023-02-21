import styles from "./gameOptionsSetter.module.scss";
const GameOptionsSetter = ({
  gameFieldsSet,
  gameOptionsHandler,
  onGameStart,
}) => {
  return (
    <form className={styles.form} onSubmit={onGameStart} id="options">
      <select
        className={styles.form__select}
        onChange={gameOptionsHandler}
        id="options"
        defaultValue={"Pick mode"}
        form="options"
      >
        <option disabled value={"Pick mode"}>
          Pick mode
        </option>

        {gameFieldsSet.map((item, idx) => {
          return (
            <option key={item.name + idx} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>

      <button className={styles.form__button}>start</button>
    </form>
  );
};

export default GameOptionsSetter;
