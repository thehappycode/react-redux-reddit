import {useSelector} from 'react-redux';
import './Header.css';
const Header = (props) => {
  const {setIsEdit} = props;
  const _user = useSelector(state => state.user);
  const handleEdit = () => {
    setIsEdit(true);
  }
  return (
    <>
      <header style={{
        backgroundColor: `${_user.theme}`,
        backgroundImage: `linear-gradient(180deg, ${_user.theme}, 2%, ${_user.theme}, 65%, #181818 100%)`}}>
        <div className='info-container'>
          <div className='info-edit' onClick={handleEdit}>
            Edit
          </div>
          <img className='info-ava' src={_user.avaUrl} alt=''/>
          <div className='info-username'>{_user.name}</div>
          <div className='info-age'>{_user.age}</div>
          <div className='info-about'>{_user.about}</div>
        </div>
      </header>
    </>
  )
}

export default Header