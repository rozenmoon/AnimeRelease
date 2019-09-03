import React from 'react';
import { connect } from 'react-redux';

interface Props {
	SelectedAnime: { selectedAnime: number, SelectedAnimeData: object};
}

const ItemDetail :React.SFC<Props> = (props: Props) => {
	return(
		<div>
			{props.SelectedAnime.selectedAnime}
		</div>
	);
}

const mapStateToProps = (state) => ({
 SelectedAnime: state.SelectedAnime
});

export default connect(mapStateToProps)(ItemDetail);