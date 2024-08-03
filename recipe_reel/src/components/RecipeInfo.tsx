import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeInfo } from '../services';
import img from '../assets/images/img.jpg';
import styled from 'styled-components';

interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}

interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: Ingredient[];
  cuisine: string[];
  instructions: string;
  nutrition: {
    calories: string;
    protein: string;
    fat: string;
  };
}

const RecipeInfo = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    title: '',
    image: '',
    ingredients: [],
    cuisine: [],
    instructions: '',
    nutrition: {
      calories: '',
      protein: '',
      fat: '',
    },
  });

  useEffect(() => {
    const fetchAndSetRecipe = async () => {
      try {
        const recipeData = await fetchRecipeInfo(Number(id));
        setRecipe(recipeData);
      } catch (error: any) {
        throw new Error(error.message);
      }
    };

    fetchAndSetRecipe();
  }, [id]);

  return (
    <RecipeInfoStyle>
      <div className="left-side">
        <img src={recipe.image} alt="image" />
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-side">
        <h1>{recipe.title}</h1>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
        <h3>Nutrition</h3>
        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>{recipe.nutrition.calories}</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{recipe.nutrition.protein}g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{recipe.nutrition.fat}g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </RecipeInfoStyle>
  );
};

const RecipeInfoStyle = styled.div`
  color: #fff;
  display: flex;
  align-content: space-around;
  font-family: 'Roboto', sans-serif;

  .left-side {
    width: 90%;
    padding: 40px;
  }

  .right-side {
    width: 90%;
    padding: 40px;

    p {
      line-height: 1.75em;
    }
  }

  img {
    width: 70%;
    height: 60%;
    border-radius: 6px;
  }
`;

export default RecipeInfo;
