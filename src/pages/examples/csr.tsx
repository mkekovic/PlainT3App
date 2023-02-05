import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import Spinner from '../../components/Spinner';
import ImageCard from '../../components/ImageCard';

const CSR: NextPage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('/api/images').then(res => setImages(res.data.message));
    }, []);

    return (
        <div>
            <div className='flex flex-wrap'>
                {images.map(dog => (
                    <ImageCard src={dog} key={dog} />
                ))}
            </div>
        </div>
    );
}
export default CSR;