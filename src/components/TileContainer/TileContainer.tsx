import React from "react";
import * as styles from "./TileContainer.css";
import Tile from "../Tile/Tile";
import { connect } from "react-redux";

interface Props {
  title: string;
  hoveredElement: number;
  InitialData: {loading: boolean, upcoming: Array<object>};
}
const TileContainer: React.SFC<Props> = ({ title, hoveredElement, InitialData }) => {
  const StyleBeforeElement = { transform: `translate(-100px)` };
  const StyleAfterElement = { transform: `translate(100px)` };
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {InitialData ? InitialData.loading=== false ? InitialData.upcoming.map((prop, index) => {
          return(
          <Tile
            style = {hoveredElement === -1? null :index === hoveredElement? null :index < hoveredElement ? StyleBeforeElement: StyleAfterElement}
            key={index}
            index={index}
            {...prop}
          />
        )
        }): null : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hoveredElement: state.hoveredElement.id,
  InitialData: state.InitialData,
});
export default connect(
  mapStateToProps,
  null
)(TileContainer);
