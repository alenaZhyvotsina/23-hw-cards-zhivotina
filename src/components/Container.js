import React, {Component} from 'react';
import Game from "./Game";
import Result from "./Result";
import Main from "./Main";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.gamerName && !this.props.gameResult){
            return <Game gamerName={this.props.gamerName} setGameResult={this.props.setGameResult}/>;
        } else if(this.props.gameResult){
            return <Result gamerName={this.props.gamerName} gameResult={this.props.gameResult} returnDefaultName={this.props.setGamerName} returnDefaultResult={this.props.setGameResult}/>;
        } else {
            return <Main setGamerName={this.props.setGamerName}/>;
        }
    }
}

export default Container;