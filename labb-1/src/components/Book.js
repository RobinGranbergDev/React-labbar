import React, {useState} from 'react'
import './Book.css'

export default function Book( {img, title, author} ) {

    const [outline, setOutline] = useState(false);

    const toggleOutline = () => {
        setOutline(prev => !prev);
        console.log(outline)
    }

    return (
        <div onClick={toggleOutline} className={(outline) ? 'bookOutline' : 'book'}>
            <img src={img} alt=""/>
            <h2>Title: {title}</h2>
            <p>Author: {author}</p>   
        </div>
    )
}
