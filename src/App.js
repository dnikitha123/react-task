import './App.css';
import Assessment from './components/pages/AssessmentPage/Assessment';
import SideHeader from './components/pages/SideHeaderPage/SideHeader';

function App() {
  return (
    <div className='container'>
      <SideHeader/>
      <Assessment/>
    </div>
  );
}

export default App;