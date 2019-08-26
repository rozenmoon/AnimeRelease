import React from "react";
import * as styles from "./TileContainer.css";
import Tile from "../Tile/Tile";
import { connect } from "react-redux";
interface Props {
  title: string;
  hoveredElement: number;
}
const TileContainer: React.SFC<Props> = ({ title, hoveredElement }) => {
  const tiles = new Array(7).fill({
    img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    title: "1",
    category: "1"
  });

  // Shuffel(id: number, hoveredElement: number) {
  //   if (id > hoveredElement) {
  //     this.setState({ transform: `transform(100px, 0px)`});
  //   }
  //   else if(id < hoveredElement) {
  //     this.setState({ transform: `transform(-100px, 0px)` });
  //   }
  // }

  // undoShauffel(){
  //   this.setState({ transform: "scale(1)" });
  // }
  const StyleBeforeElement = { transform: `translate(-100px)` };
  const StyleAfterElement = { transform: `translate(100px)` };
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {/* {tiles.map((prop,index) => <Tile style={{transform: `scale(2) translate(${index*100}px, 0px)`} {...prop}/>)} */}
        {tiles.map((prop, index) => (
          <Tile
            style = {hoveredElement === -1? null :index === hoveredElement? null :index < hoveredElement ? StyleBeforeElement: StyleAfterElement}
            key={index}
            rank={index}
            {...prop}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: {hoveredElement: {id: number}}) => ({
  hoveredElement: state.hoveredElement.id
});
export default connect(
  mapStateToProps,
  null
)(TileContainer);
