import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { APPLICATION_SETTINGS } from '../../constant';
import { createPost } from '../../redux/postSlice';
import Input from '../InputField/Input'
import './Post.css';
const MakePost = (props) => {
    const {setIsOpenPost} = props;
    const dispatch = useDispatch();
    const [title, setTitle] = useState("Add a title");
    const [description, setDescription] = useState("Add some description");
    const [selectedIdx, setSelectedIdx] = useState(0);
    const tags = APPLICATION_SETTINGS.tags;
    const handlePost = () => {
        setIsOpenPost(false);
        const newPost = {
            title,
            description,
            tag: selectedIdx
        };
        dispatch(createPost(newPost));
    }
    return (
        <section className='makepost-container'>
            <div className="makepost-navigation">
                <p 
                className="makepost-save"
                onClick={handlePost}
                >
                    Post
                </p>
            </div>
            <Input
                label='Add some description'
                data={title}
                setData={setTitle}
                inputType="textarea"
                inputClass="makepost-title"
            />
            <Input
                label='Add some description'
                data={description}
                setData={setDescription}
                inputType="textarea"
                inputClass="makepost-title"
            />
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, idx) => (
                    <button
                        key={idx}
                        className={selectedIdx === idx
                            ? `makepost-tags-selected-${tag}`
                            : `posts-tags-${tag}`
                        }
                        onClick={() => setSelectedIdx(idx)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </section >
    )
}

export default MakePost