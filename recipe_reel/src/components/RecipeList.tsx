import { useSelector } from 'react-redux';
import { RootState } from '../store';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const RecipeList = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  return (
    <RecipeListStyle>
      {recipes.map((recipe) => (
        <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} />
      ))}
    </RecipeListStyle>
  );
};

const RecipeListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default RecipeList;
