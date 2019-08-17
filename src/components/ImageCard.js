import React from 'react';
import {Link} from 'react-router-dom';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {  price: Math.floor((Math.random() * 100) + 1) };
        
        this.imageRef = React.createRef();
    }
    
    componentDidMount() {
               
    }
    
    render() {
        
        const {alt_description, description, urls, id} = this.props.image;
        return (
                <Link to={`/shop/${id}`}>
                    <div className="card">
                        <img className="card-img-top img-fluid" ref={this.imageRef} alt={description} src={urls.regular} />
                        <div className="card-body">
                            <p className="card-text text-capitalize font-weight-bold">${this.state.price}.99</p>
                            <p className="card-text text-capitalize font-weight-bold">{alt_description}</p>
                            <p className="card-text text-capitalize">{description}</p>
                        </div>
                    </div>
                </Link>
        )
    }
}

export default ImageCard;