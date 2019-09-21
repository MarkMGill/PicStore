import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1 className="display-4">Welcome to PicStore!</h1>
                    <h3>Get some great framed pics!</h3>
                    <p className="lead">How it works:</p>
                    <ul style={{ listStyle: 'none' }}>
                        <li>1. Just search for anything you'd like a picture of.</li>
                        <li>2. A list of pictures you seached for will display. Pick any one you like!</li>
                        <li>3. Select the amount you'd like to buy, and buy them!!!</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;