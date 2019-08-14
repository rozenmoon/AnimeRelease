import React from 'react';
import * as styles from './TileContainer.css';
import Tile from '../Tile/Tile';

interface Props {
	title: string;
}
const TileContainer: React.SFC<Props> = ({title}) => {
	return (
	<div>
		<h2 className={styles.title}>{title}</h2>
		<div className={styles.container}>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
			<Tile img="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" title="1" category="1" rank="1"/>
		</div>
	</div>	)
}

export default TileContainer;