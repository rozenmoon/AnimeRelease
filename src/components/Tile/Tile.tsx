import React from "react";
import { Dispatch } from "redux";
import * as styles from "./Tile.css";
import { connect } from "react-redux";
import { onMouseEnterTile, onMouseLeaveTile, onAnimeTileClick} from "../../store/actionCreator";
interface State {
  transform: string;
}
interface Props {
  index: number;
  image_url: string;
  title: string;
  rank: number;
  start_date: string;
  mal_id:number;
  style: React.CSSProperties;
  onMouseEnterTileProps: (id: number) => void;
  onMouseLeaveTileProps: () => void;
  onAnimeTileClick: (id: number) => void;
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
    const { index, image_url, title, rank, style, start_date, mal_id } = this.props;

    const Customstyles =
      index === 0 ? { transformOrigin: "left", ...style } : { ...style };

    return (
      <div
        className={styles.tile}
        style={{ transform: this.state.transform, ...Customstyles }}
        onMouseEnter={() => {
          this.onMouseEnterTile(index);
        }}
        onMouseLeave={() => this.onMouseLeaveTile()}
        onMouseDown={() => this.props.onAnimeTileClick(mal_id)}
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
  },
  onAnimeTileClick: (id: number) => {
    dispatch(onAnimeTileClick(id));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Tile);
