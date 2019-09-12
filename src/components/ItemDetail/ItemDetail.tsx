import React from "react";
import { connect } from "react-redux";
import * as styles from "./ItemDetail.css";

interface Props {
  SelectedAnime: { selectedAnime: number; selecedAnimeData: any };
}

enum Sections{
	Overview = 1,
	Details
}

interface State {
	currentSelected: Sections;
}

class ItemDetail extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			currentSelected : Sections.Overview
		}
	}

	public render() {
  if (this.props.SelectedAnime.selecedAnimeData) {
    let {
      image_url,
      title_japanese,
      synopsis,
      genres,
      aired
    } = this.props.SelectedAnime.selecedAnimeData;
    return (
      <div className={styles.container}>
        <div className={styles.background}>
          <span className={styles.animePosterHolder}>
            <img
              className={styles.animePoster}
              src={image_url ? image_url : null}
            ></img>
          </span>
        </div>
        <div className={styles.details}>
          <div className={styles.animeHeader}>
            <div>
              <p className={styles.title}>{title_japanese}</p>
              <div className={styles.releaseDate}>
                {"Release Date: "}
                {aired.from ? aired.from : "To be decided"}
              </div>
              <div className={styles.genres}>
                {genres.map(genre => (
                  <div className={styles.genre}>{genre.name}</div>
                ))}
              </div>
              <div className={styles.description}>{synopsis}</div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.navigation}>
            <div className={styles.category}>{"Overview"}</div>
            <div className={styles.category}>{"Details"}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
	}
}
};

const mapStateToProps = state => ({
  SelectedAnime: state.SelectedAnime
});

export default connect(mapStateToProps)(ItemDetail);
