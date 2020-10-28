import React, {Component} from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamerName: ''
        }
    }

    handleChangeInput = event => {
        this.setState({gamerName: event.target.value});
    }

    handleStartClick = () => {
        this.props.setGamerName(this.state.gamerName);
        this.setState({gamerName: ''});
    }

    render() {
        return (
            <div className='flex-container'>
                <h1>Enter your name</h1>
                <input className='txt' type='text' value={this.state.gamerName} onChange={this.handleChangeInput}/>
                <button className='btn btn-primary px-5' onClick={this.handleStartClick}>Start</button>
            </div>

        );
    }
}

export default Main;