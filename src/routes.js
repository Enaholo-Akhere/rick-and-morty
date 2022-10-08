import CharacterDetails from './pages/character-details/character-details';
import CharacterList from './pages/character-list/character-list';
import Home from './pages/home/home';

//using the optional params just in case I need to pass props
const routes = [
  {
    path: '/character-details/:id',
    render: (params) => <CharacterDetails {...params} />,
  },
  {
    path: '/character-list',
    render: (params) => <CharacterList {...params} />,
  },
  { path: '/', render: (params) => <Home {...params} /> },
];

export default routes;
