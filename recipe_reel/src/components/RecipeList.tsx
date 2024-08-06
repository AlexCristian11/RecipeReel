import { useSelector } from 'react-redux';
import { RootState } from '../store';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import Search from './Search';
import { fetchRecipesByCuisine } from '../services';
import { useEffect, useState } from 'react';
import image from '../assets/images/img.jpg';

interface CuisineRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

const RecipeList = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const [cuisineRecipes, setCuisineRecipes] = useState<CuisineRecipe[]>([]);
  const [activeCuisine, setActiveCuisine] = useState<string | null>(null);
  const cuisines = [
    'African',
    'Asian',
    'British',
    'Eastern European',
    'French',
    'German',
    'Greek',
    'Italian',
    'Latin American',
    'Middle Eastern',
    'Spanish',
  ];

  const handleFilter = async (cuisine: string) => {
    try {
      const recipes = await fetchRecipesByCuisine(cuisine);
      setCuisineRecipes(recipes);
      setActiveCuisine(cuisine);
    } catch (error) {
      throw new Error(`Failed to handle ${cuisine} recipe search`);
    }
  };

  useEffect(() => {
    console.log(cuisineRecipes);
  }, [cuisineRecipes]);

  return (
    <RecipeListStyle>
      <Search />
      <CuisineFilterStyle>
        <div id="filter">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => handleFilter(cuisine)}
              className={cuisine === activeCuisine ? 'active' : ''}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </CuisineFilterStyle>
      <MainStyle>
        {cuisineRecipes.length > 0
          ? cuisineRecipes.map((recipe) => (
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            ))
          : recipes.map((recipe) => (
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            ))}
      </MainStyle>
    </RecipeListStyle>
  );
};

const RecipeListStyle = styled.div``;

const CuisineFilterStyle = styled.div`
  display: flex;

  #filter {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  button {
    color: #fff;
    font-size: 1em;
    height: 1.75em;
    border-radius: 20px;
    background-color: #232323;
    border: none;
    min-width: 100px;
    margin-right: 10px;
  }

  button.active,
  button:hover {
    background-color: #de4141;
  }
`;

const MainStyle = styled.div`
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
