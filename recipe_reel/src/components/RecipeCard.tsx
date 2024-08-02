import styled from 'styled-components';
import { PiCookingPotFill } from 'react-icons/pi';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image }) => {
  return (
    <RecipeCardStyle id={id.toString()}>
      <img src={image} alt="recipe" />
      <h3>{title}</h3>
      <button>
        Cook
        <PiCookingPotFill id="icon" />
      </button>
    </RecipeCardStyle>
  );
};

const RecipeCardStyle = styled.div`
  margin: 10px;
  max-width: 90%;
  height: 300px;
  color: #fff;
  background-color: #181717;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif;

  img {
    width: 90%;
    height: 50%;
    border-radius: 8px;
  }

  h3 {
    font-size: 1em;
    background: transparent;
  }

  button {
    color: #000;
    background-color: #d5c514;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 40px;
    font-size: 1em;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;

    #icon {
      color: #000;
      background: transparent;
      font-size: 1.5em;
    }

    @media (min-width: 600px) {
      width: 75%;
    }

    @media (min-width: 900px) {
      width: 50%;
    }
  }
`;

export default RecipeCard;
