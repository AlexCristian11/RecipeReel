const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchRecipes = async (number = 100, offset = 0) => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${number}&offset=${offset}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        return data.results;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

