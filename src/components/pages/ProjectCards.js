import React, { Component } from 'react';
import CardModel from "../Card";


const projects = [
    {
        title: "Web-Scraper", image: "/webscraper.png", desc: "Scrapes BBC News using MongoDB.  \nAdd/delete notes", id: 0, link: "https://bbc-news-webscraper.herokuapp.com/" 
    },
    {
        title: "Ludum: a Phaser Game", image: "/ludum.png", desc: "Example of a simple dungeon-crawler using Phaser JS", id: 1, link: "https://ludum.herokuapp.com"
    },
    {
        title: "BurgerApp", image: "/burgerapp.png", desc: "Demonstration of CRUD ops with SQL", id: 2, link: "https://immense-chamber-31608.herokuapp.com/"
    },
    {
        title: "ClickGame", image: "/clickgame.png", desc: "Mnemonic click game using React", id: 3, link: "https://dkubiak1.github.io/ClickGame/"
    },
    {
        title: "FriendFinder", image: "/friendfinder.png", desc: "Basic algorithm to calculate and compare user inputs", id: 4, link: "https://sheltered-ravine-51533.herokuapp.com/"
    },
    {
        title: "Trivia Game", image: "/triviagame.png", desc: "Web quiz with timer and SFX", id: 5, link: "https://dkubiak1.github.io/TriviaGame/"
    },
    {
        title: "VidWall", image: "/vidwall.png", desc: "YouTube video-magnet app using FireBase", id: 6, link: "https://dkubiak1.github.io/VidWall/"
    },
    {
        title: "ImageDetection", image: "/facedetection.png", desc: "Use Google Vision API with your webcam!", id: 7, link: "https://face-detection6969.herokuapp.com/"
    },
    {
        title: "CLI-mazon", image: "/bamazon.png", desc: "NodeJS CLI app simulates inventory using SQL", id: 8, link: "https://github.com/dkubiak1/bamazon"
    }
]

class ProjectCards extends Component {
    constructor(props) {
        super(props);
        this.state = {projects : projects};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.visible = false;

    }
    componentDidMount() {
        // projects.forEach(element => {
        //     this.state.projects.push(element);
        // });
        //console.log(this.state.projects);
    }

    onMouseEnter(event) {
        //console.log(event.target);
        this.visible = true;

    }

    onMouseLeave(event) {
        //console.log(event.target);
    }

    handleClick() {
        //document.body.style.opacity = 0;
        //console.log("hi")
    }
    
    render() {

        return (
            <div className="projects" id="projects" >
            {this.state.projects.map((e, index) => (
                <CardModel 
                    className="card"
                    title={e.title}
                    image={e.image}
                    desc={e.desc}
                    index={index}
                    id={e.id}
                    key={e.id}
                    link={e.link}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    visible={this.visible}
                    onClick={this.handleClick}
                />)
            )}
           
            </div>
            
        )
    }
}

export default ProjectCards;