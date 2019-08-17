import React from 'react';

const RandomImages = props => {
    props.getRandomImages();
    console.log(props.randomImages);
    const renderedImages = props.randomImages.map(image => {
        return (
            <div>{image.id}</div>
        );
    });
    return <div>test{renderedImages}</div>
}

export default RandomImages;



