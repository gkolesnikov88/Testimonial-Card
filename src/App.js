import './App.css';
import Card from './components/Card';
import logo from "./assets/profile-thumbnail.svg";

const textForCard = "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!";
const name = "Sarah Dole";
const tag = "@sarahdole";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Card
          text={textForCard}
          name={name}
          tag={tag}
          logo={logo}
        /> 
      </div>
    </div>
  );
}

export default App;
