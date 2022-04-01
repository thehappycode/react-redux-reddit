import React from 'react'
import "./Footer.css"
const Footer = (props) => {
    const { isOpenPost, setIsOpenPost } = props;
    return (
        <footer>
            <div
                className="footer-title"
                onClick={() => setIsOpenPost(!isOpenPost)}
            >
                {isOpenPost ? 'x' : '+'}
            </div>
        </footer>
    )
}

export default Footer