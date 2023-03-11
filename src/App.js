import './App.css';
import PostCard from './components/PostCard/PostCard';
import { redditData } from './api/tempReddit';

function App() {
  return (
    <div>
      <h1>Reddit</h1>
      <button>Click on me!</button>
      <PostCard title={'test'} content={'i might sort of get this'} />
    </div>
  );
}

export default App;
