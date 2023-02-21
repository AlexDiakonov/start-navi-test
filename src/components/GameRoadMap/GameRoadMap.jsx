import styles from "./gameRoadMap.module.scss";

const GameRoadMap = ({ squaresLocation }) => {
  return (
    <div className={styles.roadMapWrapper}>
      <h2 className={styles.roadMapWrapper__title}>Hover suqres</h2>
      {squaresLocation.length > 0 && (
        <ul className={styles.roadMapWrapper__list}>
          {squaresLocation.map((item, idx) => (
            <li key={idx} className={styles.roadMapWrapper__list__item}>
              row {item.row} col {item.col}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameRoadMap;
