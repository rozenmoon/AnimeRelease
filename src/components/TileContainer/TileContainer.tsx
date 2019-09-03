import React from "react";
import * as styles from "./TileContainer.css";
import Tile from "../Tile/Tile";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  hoveredElement: number;
  InitialData: {loading: boolean, upcoming: Array<object>};
}
const TileContainer: React.SFC<Props> = ({ title, hoveredElement, InitialData }) => {
  const StyleBeforeElement = { transform: `translate(-100px)` };
  const StyleAfterElement = { transform: `translate(100px)` };
  const StyleAfterElementForFirst = { transform: `translate(200px)` };

  return (
    <div>
      <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
        {InitialData ? InitialData.loading=== false ? InitialData.upcoming.map((prop, index) => {
          return(
          <Link to="/anime">
            <Tile
              style = {hoveredElement === -1? null : index === hoveredElement? null : index < hoveredElement ? StyleBeforeElement: hoveredElement === 0 ? StyleAfterElementForFirst: StyleAfterElement}
              key={index}
              index={index}
              {...prop}
            />
          </Link>
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
