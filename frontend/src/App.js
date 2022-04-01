import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import EditPage from './components/Edit/EditPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MakePost from './components/Posts/MakePost';
import Post from './components/Posts/Post';

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const _user = useSelector(state => state.user);
  const { pending, error } = _user;
  return (
    <div className="App">
      {isEdit
        ? <EditPage setIsEdit={setIsEdit} />
        : !isEdit && !isOpenPost ?
          <>
            <Header setIsEdit={setIsEdit} />
            <div className='post-container'>
              <Post />
            </div>
            <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
          </>
          :
          <>
            <Header setIsEdit={setIsEdit} />
            <MakePost setIsOpenPost={setIsOpenPost} />
          </>
      }
      {pending && <p className='loading'>Loading...</p>}
      {!isEdit && error && <p className='error'> Error when fetching data from</p>}
    </div>
  );
}

export default App;
