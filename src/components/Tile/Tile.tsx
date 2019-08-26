import React from "react";
import { Dispatch } from "redux";
import * as styles from "./Tile.css";
import { connect } from "react-redux";
import { onMouseEnterTile, onMouseLeaveTile } from "../../store/actionCreator";

interface State {
  transform: string;
}
interface Props {
  img: string;
  title: string;
  category: string;
  rank: number;
  style: React.CSSProperties;
  onMouseEnterTileProps: (id: number) => void;
  onMouseLeaveTileProps: () => void;
}

class Tile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      transform: "scale(1)"
    };
    this.onMouseEnterTile = this.onMouseEnterTile.bind(this);
    this.onMouseLeaveTile = this.onMouseLeaveTile.bind(this);
  }
  scalesToDouble() {
    this.setState({ transform: "scale(2)" });
  }

  scalesToNormal() {
    this.setState({ transform: "scale(1)" });
  }

  onMouseEnterTile = (id: number) => {
    console.log(id);
    this.scalesToDouble();
    this.props.onMouseEnterTileProps(id);
  };

  onMouseLeaveTile = () => {
    this.scalesToNormal();
    this.props.onMouseLeaveTileProps();
  };

  public render() {
    const { img, title, category, rank, style } = this.props;
    return (
      <div
        className={styles.tile}
        style={{ transform: this.state.transform, ...style }}
        onMouseEnter={() => {
          this.onMouseEnterTile(rank);
        }}
        onMouseLeave={() => this.onMouseLeaveTile()}
      >
        <img className={styles.image} src={img} />
        <div className={styles.info}>
          <div>{title}</div>
          <div>{category}</div>
          <div>{rank}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  onMouseEnterTileProps: (id: number) => {
    dispatch(onMouseEnterTile(id));
  },
  onMouseLeaveTileProps: () => {
    dispatch(onMouseLeaveTile());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Tile);
