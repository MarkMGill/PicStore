import React from 'react';
import unsplash from '../../api/unsplash';
import RandomImages from './RandomImages';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { randomImages: [] };

        this.imageRef = React.createRef();
        this.getRandomImages = this.getRandomImages.bind(this);
    };

    
    getRandomImages = async term => {
        const response =  await unsplash.get('/photos/random', {
            params: { count: 12 }
        });
        this.setState({ randomImages: response.data });
        console.log(this.state.randomImages);
    };

    render() {
        
        
        
        return (
            
            <div>
                <h1>Home Page</h1>
                {/*<RandomImages randomImages={this.state.randomImages} getRandomImages={this.getRandomImages} />*/}
            </div>
           
        );
    }
}

export default Home;