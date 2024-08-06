import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

interface SearchRecipe {
  title: string;
}

const Search = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const [searchRecipe, setSearchRecipe] = useState<SearchRecipe | null>(null);

  const recipeOptions = recipes.map((recipe) => ({ label: recipe.title }));

  const handleChange = (
    e: SyntheticEvent<Element, Event>,
    value: { label: string } | null,
  ) => {
    setSearchRecipe(value ? { title: value.label } : null);
  };

  return (
    <SearchStyle>
      <Autocomplete
        value={searchRecipe ? { label: searchRecipe.title } : null}
        onChange={handleChange}
        options={recipeOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Recipe"
            variant="outlined"
            sx={{
              width: 300,
              color: (theme) =>
                theme.palette.getContrastText(theme.palette.background.paper),
            }}
          />
        )}
        sx={{
          color: (theme) =>
            theme.palette.getContrastText(theme.palette.background.paper),
        }}
      />
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
`;

// const StyledTextField = styled(TextField)`
//   & .MuiInputBase-root {
//     background-color: white; /* Set background color to white */
//   }
//   & .MuiOutlinedInput-notchedOutline {
//     border-color: #ccc; /* Optional: change border color to lighter */
//   }
//   & .MuiInputBase-input {
//     color: black; /* Ensure text color is black or a contrasting color */
//   }
//   & .MuiInputBase-root {
//     background-color: white; /* Set background color to white */
//   }
//   & .MuiOutlinedInput-notchedOutline {
//     border-color: white; /* Set border color to white */
//   }
//   & .MuiInputBase-input {
//     color: black; /* Set text color to black or a contrasting color */
//   }
//   & .MuiAutocomplete-option {
//     background-color: white; /* Background color for options */
//     color: black; /* Text color for options */
//   }
//   & .MuiAutocomplete-option.Mui-focused {
//     background-color: #f0f0f0; /* Background color for the focused option */
//     color: black; /* Text color for the focused option */
//   }
// `;

export default Search;
