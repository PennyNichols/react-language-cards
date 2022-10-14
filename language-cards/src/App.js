import Header from './components/Header/Header';
import LanguageCards from './components/LanguageCards/LanguageCards';
import {languages} from './helper/data'

function App() {
  return (
    <div className="App text-center">
      <Header/>
      <LanguageCards name={languages[1].name} img={languages[1].img} options={languages[1].options}/>
    </div>
  );
}

export default App;
