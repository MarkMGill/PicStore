import React from 'react';

const ImageBuy = props => {
 
    const pStyle = {
        color: 'red'
      };

    const spanStyle = {
        color: 'blue',
        fontSize: '18px'
    };

    var price= Math.floor((Math.random() * 100) + 1);

    return (
        <div className="card">
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="">Qty:</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <p>Price: </p>
                            <p className="lead font-weight-bold" style={pStyle}>$ {price}.99</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><span style={spanStyle}>Free Shipping </span>on orders over $25.  Delivers within 3 business days.</p>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-block btn-success">
                            <i className="fas fa-shopping-cart pr-4"></i>Add to Cart
                        </button>
                        <button className="btn btn-block btn-success">
                            <i className="fas fa-cash-register pr-5"></i>Buy
                        </button>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default ImageBuy;