import React from "react";
import { Dispatch } from "redux";
import * as styles from "./Tile.css";
import { connect } from "react-redux";
import { onMouseEnterTile, onMouseLeaveTile } from "../../store/actionCreator";
interface State {
  transform: string;
}
interface Props {
  index: number;
  image_url: string;
  title: string;
  rank: number;
  start_date: string;
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
    this.scalesToDouble();
    this.props.onMouseEnterTileProps(id);
  };

  onMouseLeaveTile = () => {
    this.scalesToNormal();
    this.props.onMouseLeaveTileProps();
  };

  public render() {
    const { index, image_url, title, rank, style, start_date } = this.props;
    return (
      <div
        className={styles.tile}
        style={{ transform: this.state.transform, ...style }}
        onMouseEnter={() => {
          this.onMouseEnterTile(index);
        }}
        onMouseLeave={() => this.onMouseLeaveTile()}
      >
        <img className={styles.image} src={image_url} />
        {this.state.transform === "scale(2)" ? (
          <div className={styles.info}>
            <div>{title}</div>
            <div>{start_date}</div>
          </div>
        ) : null}
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
