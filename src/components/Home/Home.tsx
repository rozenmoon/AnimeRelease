import React from 'react';
import Container from '../TileContainer/TileContainer';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Route, Switch} from 'react-router-dom';

const Home: React.SFC = () => {
	return (
    <Switch>
      <Route exact path="/" render={ () => <Container title={"Top Release Anime"}/>}/>
      <Route path="/anime" render={ () => <ItemDetail /> } />
    </Switch>
  );
}
export default Home;