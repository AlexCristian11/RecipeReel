import styled from 'styled-components';

const Main = () => {
  return (
    <MainStyle>
      <h1 id="text">Search for a Recipe or find a new one</h1>
      <div>
        <p>
          Go to the Recipes page to search for a recipe. There, you can filter
          the search by cuisine, ingredients and more. Start your search for new
          culinary experiences.
        </p>
      </div>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  padding: 20px 0 20px 40px;

  div {
    max-width: 400px;
  }

  p {
    font-size: 1.25em;
  }
`;

export default Main;
