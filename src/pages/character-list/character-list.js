import CharacterListComp from '../../component/character-list/character-list-comp';
import Layout from '../../component/layout/layout';

const CharacterList = () => {
  return (
    <Layout>
      <CharacterListComp show={true} />
    </Layout>
  );
};

export default CharacterList;
