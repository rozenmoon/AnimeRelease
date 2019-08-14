import React from 'react';
import * as styles from './Tile.css';

interface Props {
	img: string,
	title: string;
	category: string;
	rank:string;
}

const Tile: React.SFC<Props> = ({img,title,category,rank}) => {
	return (
		<div className={styles.tile}>
			<img className={styles.image} src={img}></img>
			<div className={styles.info}>
				<div>{title}</div>
				<div>{category}</div>
				<div>{rank}</div>
			</div>
		</div>)
}

export default Tile;
