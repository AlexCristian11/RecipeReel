import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesThunk } from './store/recipes/thunk';
import { RootState } from './store';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  // useEffect(() => {
  //   dispatch(fetchRecipesThunk() as any);
  // }, [])
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;
