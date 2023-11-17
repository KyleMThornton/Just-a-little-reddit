import './App.css';
import { PostFeed } from './features/PostFeed';


function App() {
  return (
    <div className='pageWrapper'>
      <div className='titleWrapper'>
        <h1>just a little reddit</h1>
        <h3>Don't scroll all day. Select how many posts you'd like to see and enjoy reddit...but just a little.</h3>
        <h5>Note: due to a limitation of the reddit API, video will play without audio.</h5>
        <h5>Also Note: AdBlockers may affect the functionality of this site.</h5>
      </div>
      <PostFeed />
    </div>
  );
}

export default App;
