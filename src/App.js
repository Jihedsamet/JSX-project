import './App.css';
import Profile from './components/Profile/Profile';

function App() {
  const name= 'dj'
const img = 'https://img.freepik.com/photos-gratuite/gros-plan-dj-travaillant-sous-lumiere-bleue_181624-18773.jpg'  
return (
    

    <>
    <Profile name={name} img={img} />
    


    </>
  );
}

export default App;
