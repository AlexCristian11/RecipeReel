const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecipes = async (number = 100, offset = 0) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${number}&offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    return data.results;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchRecipeInfo = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch recipe info');
    }
    const data = await response.json();

    const recipeInfo = {
      id: data.id,
      title: data.title,
      image: data.image,
      ingredients: data.extendedIngredients.map(
        (ingredient: { name: string; amount: number; unit: string }) => ({
          name: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
        }),
      ),
      cuisine: data.cuisines,
      instructions: data.instructions,
      nutrition: {
        calories: data.summary.match(/(\d+)\s*calories/)[1],
        protein: data.summary.match(/(\d+)\s*g of protein/)[1],
        fat: data.summary.match(/(\d+)\s*g of fat/)[1],
      },
    };

    return recipeInfo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
