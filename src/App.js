import './App.css';
import PostCard from './components/PostCard/PostCard';
import { redditData } from './api/tempReddit';

function App() {
  return (
    <div>
      <h1>Reddit</h1>
      <button>Click on me!</button>
      <PostCard title={'test'} content={'i fucking hate this'} />
    </div>
  );
}

export default App;
