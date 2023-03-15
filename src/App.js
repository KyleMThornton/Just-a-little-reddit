import './App.css';
import { PostFeed } from './features/PostFeed';


function App() {
  return (
    <div className='pageWrapper'>
      <div className='titleWrapper'>
        <h1>Reddit</h1>
      </div>
      <PostFeed />
    </div>
  );
}

export default App;
