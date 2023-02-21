import styles from "./gameTable.module.scss";

const GameTable = ({
  startGameFields,
  addToColRefs,
  setSquaresLocation,
  squaresLocation,
}) => {
  const squaresLocationHandler = ({ target }) => {
    const chosenItem = {
      row: target.parentElement.attributes[0].value,
      col: target.attributes[1].value,
    };
    if (target.classList.contains(styles.activeCell)) {
      target.classList.remove(styles.activeCell);
      setSquaresLocation(
        squaresLocation.filter((item) => {
          return item.row !== chosenItem.row || item.col !== chosenItem.col;
        })
      );
    } else {
      target.classList.add(styles.activeCell);
      setSquaresLocation((prevState) => [...prevState, chosenItem]);
    }
  };

  return (
    <table className={styles.gameTable}>
      <tbody className={styles.gameTable__field}>
        {startGameFields.map((item, idx) => (
          <tr
            className={styles.gameTable__field__row}
            data-row-number={idx + 1}
            key={item + idx}
          >
            {startGameFields.map((item, idx) => (
              <td
                onMouseEnter={squaresLocationHandler}
                ref={addToColRefs}
                className={styles.gameTable__field__cell}
                key={item + idx}
                datacolnumber={idx + 1}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default GameTable;
