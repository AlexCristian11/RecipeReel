import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRecipeInfo } from '../services';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

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
  const navigate = useNavigate();
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

  console.log(recipe.cuisine);

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

  const handleBackClick = () => {
    navigate('/recipes');
  };

  return (
    <RecipeInfoStyle>
      <button onClick={handleBackClick}>
        <IoIosArrowBack /> Back
      </button>
      <MainInfoStyle>
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
          <div
            id="instructions"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
          <h3>Nutrition</h3>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>{recipe.nutrition.calories} kcal</td>
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
      </MainInfoStyle>
    </RecipeInfoStyle>
  );
};

const RecipeInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    color: #0396e0;
    font-size: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 0 0 10px;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const MainInfoStyle = styled.div`
  color: #fff;
  display: flex;
  align-content: space-around;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;

  .left-side {
    width: 90%;
    padding: 40px;

    .ingredients {
      li {
        font-size: 1.25rem;
      }
    }
  }

  .right-side {
    width: 90%;
    padding: 40px;

    p {
      line-height: 1.75em;
    }

    #instructions {
      font-size: 1.25rem;
      line-height: 1.5em;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;

      td {
        padding: 8px 10px;
        border-bottom: 1px solid #ddd;
      }

      td:first-child {
        text-align: right;
        font-weight: bold;
        padding-right: 20px;
      }

      td:last-child {
        text-align: left;
      }
    }
  }

  img {
    width: 70%;
    height: 60%;
    border-radius: 6px;
  }
`;

export default RecipeInfo;
