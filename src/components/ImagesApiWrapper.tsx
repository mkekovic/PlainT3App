import React, { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import ImageCard from './ImageCard';

export default function ImagesAPIWrapper() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        const now = Date.now();
        setIsLoading(true)
        try {
            const response = await axios.get("https://dog.ceo/api/breed/malinois/images");
            setImages(response.data.message);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className='flex flex-col items-center'>
            <button onClick={() => handleClick()} className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Load Images
            </button>
            {isLoading ? <Spinner /> :
                <div className='flex flex-wrap'>
                    {images.map(dog => (
                        <ImageCard src={dog} key={dog} />
                    ))}
                </div>
            }
        </div>


    )
}
