import './App.css';
import PostForm from './components/PostForm';
import BulletinBoard from './components/BulletinBoard';

function App() {
  return (
    <div className='input-board'>
       <PostForm />
       <BulletinBoard />
    </div>
  );
}

export default App;
