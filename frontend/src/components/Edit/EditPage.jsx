import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../InputField/Input';
import {updateUser} from '../../redux/apiRequests';
import {APPLICATION_SETTINGS} from '../../constant';
import './EditPage.css';
const EditPage = (props) => {
    const {setIsEdit} = props
    const avaUrl = APPLICATION_SETTINGS.avaUrl;
    const dispatch = useDispatch();
    const _user = useSelector(state => state.user);

    const [name, setName] = useState(_user.name);
    const [age, setAge] = useState(_user.age);
    const [about, setAbout] = useState(_user.about);
    const [theme, setTheme] = useState(_user.theme);
    const [url, setUrl] = useState(_user.avaUrl);

    const handleSubmit = e => {
        e.preventDefault();
        setIsEdit(false);
        const user = {
            name,
            age,
            about,
            avaUrl: url,
            theme
        };
        // dispatch(update(updateUser));
        updateUser(user, dispatch);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">Save</button>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input label="Display name" data={name} setData={setName} />
                        <Input label="Age" data={age} setData={setAge} />
                        <Input label="About" data={about} setData={setAbout} inputType="textarea" inputClass="input-about" />
                        <label>Profile Picture</label>
                        <div className="input-image-container">
                            {avaUrl.map(url => (
                                <img src={url}
                                    className="input-image"
                                    alt=""
                                    onClick={(e) => setUrl(e.target.src)}
                                />))}
                        </div>
                        <div className="theme-container">
                            <label>Theme</label>
                            <input
                                type="color"
                                className="theme-color"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                            />
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default EditPage