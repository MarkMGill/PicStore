import React from 'react';
import ImageInfo from './ImageInfo';
import ImageBuy from './ImageBuy';

const ImageDetail = props => {
    
    var image;
    props.images.forEach(cur => {
        if(props.match.params.id === cur.id){
            image = cur;
        }
    });

    const imageRef = React.createRef();

    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid rounded" ref={imageRef} alt="gurg" src={image.urls.regular} />
                </div>
                <div className="col-md-4">
                    <ImageInfo author={image.user.name} desc={image.alt_description} />
                </div>
                <div className="col-md-4">
                    <ImageBuy id={image.id} />
                </div>
            </div>
        </div>
    )
};

export default ImageDetail;