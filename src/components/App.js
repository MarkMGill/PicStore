import React from 'react';
import './App.css';
import unsplash from '../api/unsplash';
import Home from './Home/Home'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Nav from './Nav';
import Footer from './Footer';
import ImageDetail from './ImageDetail/ImageDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
     
    state = { images: [], randomImages: [] };
    
    onSearchSubmit = async term => {
        const response =  await unsplash.get('/search/photos', {
            params: { query: term }
        });
        
        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <div className="container" style={{ marginTop: '10px' }}>
                        <SearchBar onSubmit={this.onSearchSubmit} />
                        <Switch>
                            <Route 
                                path="/PicStore/" exact
                                render={(props) => <Home {...props} randomImages={this.state.randomImages}
                                runIt={this.getRandomImages} />}
                            />
                            <Route 
                                path="/search=:searchTerm" exact 
                                render={(props) => <ImageList {...props} images={this.state.images} />} 
                            />
                            <Route 
                                path="/shop/:id" 
                                render={(props) => <ImageDetail {...props} images={this.state.images} />} 
                            />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;











