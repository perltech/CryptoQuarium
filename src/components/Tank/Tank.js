import React, {Component} from "react";
import Fish from "../Fish";
import PufferFish from "../PufferFish";
import "./Tank.css";
import axios from 'axios';


class Tank extends Component {
    state = {
        allUserFish: []
    }

    renderFish(fish){
        switch (fish.codeSpecies) {
            case 'Fish': 
                return <Fish key={fish.id}/>
            case 'PufferFish':
                return <PufferFish key={fish.id}/>
            
            default:
                return <Fish key={fish.id}/>
        }
    }

    componentDidMount(){
        axios.get('/api/allUserFish')
        .then((allFish)=> {
            this.setState({allUserFish: allFish.data});
            // console.log(allUserFish);
            // allFish.data.forEach((fish) => {
            //     console.log(`This fish ${fish.species} has ID: ${fish.id}`);
            // })
        })
        .catch((err)=> {
            console.log(`Error: No statement history for you!`)
            console.log(err)
        })
    }

     componentDidMount(){
        axios.get('/api/allUserFish/')
        .then((allFish)=> {
            // allFish.data.forEach()
            console.log(allFish.data);
        })
        .catch((err)=> {
            console.log(`Error: here Fishy fishy`)
            console.log(err)
        })
    }

    render() {
        
        return (
<div id="wrap"> 
<div className="window">
    <div className="fishtank_wrap">
        <div className="fishtank">
        <div className="bubble_wrap">
        <div className="bubbles b0"></div>
        <div className="bubbles b1"></div>
        <div className="bubbles b2"></div>
        <div className="bubbles b3"></div>
        <div className="bubbles b4"></div>
        <div className="bubbles b5"></div>
        </div>
        <div className="bubble_wrap bw2">
        <div className="bubbles b6"></div>
        <div className="bubbles b7"></div>
        <div className="bubbles b8"></div>
        </div>
        <div className="water"></div>
       

        {this.state.allUserFish.map((fish) => {
            console.log(`inside of fish render`);
            return this.renderFish(fish);
        })}


            <div className="ground"></div>
            <div className="rock_1"></div>
            <div className="rock_2"></div>
            <div className="rock_3"></div>
            <div className="rock_4"></div>
            <div className="rock_5"></div>
            <div className="plant_1_wrap">
                <div className="plant_1"></div>
                <div className="plant_2"></div>
                <div className="plant_3"></div>
            </div>
            <div className="plant_2_wrap">
                <div className="plant_4"></div>
                <div className="plant_5"></div>
            </div>
            <div className="long_plant">
                <div className="l_plant_1"></div>
                <div className="l_plant_2"></div>
                <div className="l_plant_3"></div>
            </div>
            <div className="long_plant2">

                <div className="l_plant_2"></div>
                <div className="l_plant_3"></div>
            </div>
            <div className="water"></div>

        </div>
    </div>
</div>
</div>
        )
    }
};

export default Tank;