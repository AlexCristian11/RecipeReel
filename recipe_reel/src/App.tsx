import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesThunk } from './store/recipes/thunk';
import { RootState } from './store';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipesPage from './components/RecipesPage';
import RecipeInfo from './components/RecipeInfo';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipesThunk() as any);
  }, []);
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="recipes/:id" element={<RecipeInfo />} />
    </Routes>
  );
};

export default App;
