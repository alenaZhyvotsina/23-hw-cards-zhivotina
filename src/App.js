import React, {Component} from 'react';
import './App.css';
import Container from "./components/Container";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamerName: '',
            gameResult: null
        }
    }

    setGamerName = name => {
        this.setState({gamerName: name});
    }

    setGameResult = res => {
        if(res) {
            this.setState({
                gameResult: {
                    gamerScore: res.gamerScore,
                    compScore: res.compScore
                }
            })
        } else this.setState({gameResult: null});
    }

    render() {
        return (
            <div className='container'>
                <Container gamerName={this.state.gamerName}
                           gameResult={this.state.gameResult}
                           setGamerName={this.setGamerName}
                           setGameResult={this.setGameResult}
                           returnDefaultName={this.setGamerName} returnDefaultResult={this.setGameResult}
                />

            </div>
        )
    }
}

export default App;
