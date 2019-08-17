import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    
    state = { term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
        // redirect router from https://gist.github.com/elitan/5e4cab413dc201e0598ee05287ee4338
        this.props.history.push(`/search=${this.state.term}`);
    } 

    render() {
        return (
            
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Image Search</label>
                    <input className="form-control" type="text" value={this.state.term} onChange={ e => this.setState({ term: e.target.value })} />
                </div>
            </form>
            
        );
    }
}

export default withRouter(SearchBar);





