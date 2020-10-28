import React, {Component} from 'react';
import {compName, maxCard, minCard, stepCount, suits} from "../utils/Constants";

class Game extends Component {
    constructor(props) {
        super(props);

        let cards = this.generateCards();
        console.log('++', cards);

        let gamerCards = cards[0];
        let compCards = cards[1];

        this.state = {
            gamer: {
                name: props.gamerName,
                cards: gamerCards,
                currentCard: `${gamerCards[0].rang} - ${gamerCards[0].suit}`,
                score: 0
            },
            computer: {
                name: compName,
                cards: compCards,
                currentCard: `${compCards[0].rang} - ${compCards[0].suit}`,
                score: 0
            },
            step: 1
        }
    }

    shuffle = arr => {
        let temp = 0;
        let ind = 0;
        for(let i = arr.length - 1; i >= 0; i--){
            ind = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[ind];
            arr[ind] = temp;
        }

        return arr;
    }

    generateCards = () => {
        let allCards = [];
        let count = 0;
        for(let i = 0; i < suits.length; i++){
            for(let j = minCard; j <= maxCard; j++){
                allCards[count++] = {rang: j, suit: suits[i]};
            }
        }

        this.shuffle(allCards);

        let cards1 = [];
        let cards2 = [];

        //let gamerNum = 0;
        count = allCards.length;
        for(let i = 0; i < count; i++){

            if(i < count / 2){
                cards1.push(allCards[i]);
            }
            else {
                cards2.push(allCards[i]);
            }

            /*
            if(i >= count / 2){
                gamerNum = 1;
            }
            cards[gamerNum][i % count] = allCards[i];
            */
        }
        return [cards1, cards2];

    }


    handleNextClick = () => {
        let step = this.state.step;
        //console.log(`step - ${step} gamer-${this.state.gamer.score} comp-${this.state.computer.score}`);
        if(step < stepCount) {
            let gamerCards = this.state.gamer.cards;
            let compCards = this.state.computer.cards;

            let nextCurrentCartGamer = `${gamerCards[step].rang} - ${gamerCards[step].suit}`;
            let nextCurrentCartComp = `${compCards[step].rang} - ${compCards[step].suit}`;

            let scoreGamer = this.state.gamer.score;
            let scoreComp = this.state.computer.score;

            if(gamerCards[step - 1].rang === compCards[step - 1].rang){
                scoreGamer++;
                scoreComp++;
            }
            else if(gamerCards[step - 1].rang > compCards[step - 1].rang){
                scoreGamer++;
            } else {
                scoreComp++;
            }

            this.setState({
                gamer: {
                    name: this.state.gamer.name,
                    cards: gamerCards,
                    currentCard: nextCurrentCartGamer,
                    score: scoreGamer
                },
                computer: {
                    name: this.state.computer.name,
                    cards: compCards,
                    currentCard: nextCurrentCartComp,
                    score: scoreComp
                },
                step: step + 1
            });
        } else {
            let gameResult = {
                gamerScore: this.state.gamer.score,
                compScore: this.state.computer.score
            }

            return this.props.setGameResult(gameResult);
        }

    }

    render() {
        return (
            <div className='flex-container'>
                <p className='p-gamer text-uppercase'>{this.state.computer.name}</p>
                <div className='card text-center'>{this.state.computer.currentCard}</div>
                <div className='card text-center'>{this.state.gamer.currentCard}</div>
                <p className='p-gamer text-uppercase right'>{this.state.gamer.name}</p>
                <button className='btn btn-primary mt-0' onClick={this.handleNextClick}>next</button>
            </div>
        );
    }
}

export default Game;