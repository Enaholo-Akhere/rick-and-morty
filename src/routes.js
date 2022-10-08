import CharacterDetails from './pages/character-details/character-details';
import CharacterList from './pages/character-list/character-list';

//using the optional params just in case I need to pass props
const routes = [
  {
    path: '/character-details/:id',
    render: (params) => <CharacterDetails {...params} />,
  },
  {
    path: '/',
    render: (params) => <CharacterList {...params} />,
  },
];

export default routes;
