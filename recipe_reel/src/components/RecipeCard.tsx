import styled from 'styled-components';
import { PiCookingPotFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <RecipeCardStyle id={id.toString()}>
      <div className="image-container">
        <img src={image} alt="recipe" />
        <div className="overlay">
          <h4>{title}</h4>
          <button onClick={handleClick}>
            Cook
            <PiCookingPotFill id="icon" />
          </button>
        </div>
      </div>
    </RecipeCardStyle>
  );
};

const RecipeCardStyle = styled.div`
  margin: 10px;
  max-width: 80%;
  color: #fff;
  background-color: #181717;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  font-family: 'Roboto', sans-serif;

  .image-container {
    position: relative;
    display: inline-block;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .image-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }

  h4 {
    font-size: 0.9em;
    background: transparent;
    margin-bottom: 30px;
    color: #fff;
  }

  button {
    color: #fff;
    background: transparent;
    border-radius: 5px;
    border: none;
    height: 40px;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    justify-content: flex-end;
    cursor: pointer;

    #icon {
      color: #fff;
      background: transparent;
      font-size: 1.5em;
      margin-left: 20px;
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
