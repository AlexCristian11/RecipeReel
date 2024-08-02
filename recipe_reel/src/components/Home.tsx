import Header from './Header';
import video from '../assets/videos/hero-video.mp4';
import styled from 'styled-components';
import RecipeList from './RecipeList';
import Main from './Main';

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <VideoStyle>
        <video width="100%" height="500" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="title-overlay">
          <h1>
            Discover Your Next <br /> Favorite Recipe
          </h1>
          <p>
            "Perfect recipes for delicious meals in no time. Search for a recipe
            and enjoy discoveries from around the globe"
          </p>
        </div>
      </VideoStyle>
      <Main />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const VideoStyle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 15;
  }

  .title-overlay {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    background: transparent;
    z-index: 20;
    width: 400px;
  }

  .title-overlay h1 {
    color: #fff;
    background: transparent;
    font-size: 3.5em;
    font-family: 'Bebas Neue', sans-serif;
    font-style: italic;
  }

  .title-overlay p {
    color: #fff;
    background: transparent;
    font-size: 1.25em;
    font-style: italic;
    overflow-wrap: break-word;
  }
`;

export default Home;
