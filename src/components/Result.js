import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);

    }

    handleAgainClick = () => {
        this.props.returnDefaultName('');  // this renders -> <Main/>
        //this.props.returnDefaultName(this.props.gamerName);   // this renders -> <Game/>
        this.props.returnDefaultResult(null);
    }

    render() {
        let result;
        let gamerScore = this.props.gameResult.gamerScore;
        let compScore = this.props.gameResult.compScore;
        if(gamerScore > compScore) {
            result = 'win';
        } else if(gamerScore < compScore){
            result = 'lose';
        }
        else {
            result = 'draw';
        }

        return (
            <div className='flex-container'>
                <p className='p-result text-uppercase'>{result}</p>
                <p className='p-result'>
                    {gamerScore} - {compScore}
                </p>

                <button className='btn btn-primary' onClick={this.handleAgainClick}>Again?</button>

            </div>
        );
    }
}

export default Result;