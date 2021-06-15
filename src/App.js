import './App.css';
import Box from './components/Box';
import EmojiGrid from './components/EmojiGrid';
import bandage from './images/head-bandage.png';
import sneeze from './images/sneezing-face.png';
import nauseated from './images/nauseated-face.png';
import mask from './images/mask.png';
import thermometer from './images/thermometer.png';
import vomiting from './images/face-vomiting.png';
import smile from './images/smiling-face.png';
import slightSmile from './images/slight-smile.png';
import neutralFace from './images/neutral-face.png';
import slightFrown from './images/slight-frown.png';
import frown from './images/frowning-face.png';
import crying from './images/crying-face.png';
import knife from './images/knife.png';
import hammer from './images/hammer.png';
import fire from './images/fire.png';
import electricity from './images/electric.png';

function App() {
  return (
    <div className="App">
      <Box description="Sick" color="#fcd409">
        <EmojiGrid emojis={[bandage, sneeze, nauseated, mask, thermometer, vomiting]} />
      </Box>
      <Box description="Standard Set" color="#0c7ffa">
        <EmojiGrid emojis={[smile, slightSmile, neutralFace, slightFrown, frown, crying]} />
      </Box>
      <Box description="Pain Quality" color="#94de19">
        <table>
            <tr>
                <th><img src={knife} /></th>
                <th><img src={hammer} /></th>
                <th><img src={fire} /></th>
                <th><img src={electricity} /></th>
            </tr>
        </table>
      </Box>
      <Box description="Verbal Scale" color="#0c7ffa">
        <p>herekdsnucfhiuaencglrsdfknvshndirulnhvtuwenrhoituvnsehiruntvhsioduv</p>
        <p>nacsuidhfaiunhiuneugygbosgbuyi</p>
      </Box>
      <Box description="Visual Scale" color="#0c7ffa">
        <EmojiGrid emojis={[smile, slightSmile, neutralFace, slightFrown, frown, crying]} />
      </Box>
      <Box description="Numerical Scale" color="#0c7ffa">
        <p>herekdsnucfhiuaencglrsdfknvshndirulnhvtuwenrhoituvnsehiruntvhsioduv</p>
        <p>nacsuidhfaiunhiuneugygbosgbuyi</p>
      </Box>
    </div>
  );
}

export default App;
