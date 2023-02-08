import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import React from 'react';
import ImageCard from '../../components/ImageCard';

type Props = {
    images: any
}

const SSG: NextPage<Props> = ({ images }) => {
    return (
        <div>
            <div className='flex flex-wrap'>
                {images.map((dog: any) => (
                    <ImageCard src={dog} key={dog} />
                ))}
            </div>
        </div>
    );
}
export default SSG;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await axios.get(`${process.env.SERVER_URL}/api/images`);
    const images = res.data.message;
    return {
        props: {
            images,
        }
    };
}