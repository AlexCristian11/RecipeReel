import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesThunk } from './store/recipes/thunk';
import { RootState } from './store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  useEffect(() => {
    dispatch(fetchRecipesThunk() as any);
  }, [])
  return (
    <div>
      <h1>Test Recipe</h1>
      {recipes.map(recipe => (
        <ul>
          <li>{recipe.title}</li>
        </ul>
      ))}
   </div>
  );
}

export default App;
