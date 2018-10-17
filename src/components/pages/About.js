import React from "react";
import { Badge } from 'reactstrap'



class About extends React.Component {
  state = {}

  render() {

    return (
      <div className="about-container">
      <div className="item about" id="about">       
        <div>
          <div>
        <Badge>
          Who I Am:
        </Badge>
        
        <p>A fullstack web-developer with a passion for both design <i>and</i> databases!</p>
        </div> 
        </div>
        <div>
          <div>
          <Badge>What I Like to Do:
          </Badge>
         <p>Design apps, websites, games and more!</p>
        </div>
        </div>
        <div>
          <div>
          <Badge>Languages I Speak:
          </Badge>
        
          <p>Javascript, C#, NodeJS, SQL, HTML, and CSS</p>
        </div>
        </div>
        <div>
          <div>
          <Badge>Tools I Use:
          </Badge>
       <p>Express, Axios, Babel, Webpack, Jest, Nightmare, MongoDB/Mongoose, MySQL/Sequelize, NodeCLI, and more!</p>
        </div>
        </div>
        <div>
          <div>
          <Badge>Frameworks/Libraries:
          </Badge>
       <p>React, DotNet, PixiJS, PhaserJS, JQuery and more!</p>
        </div> 
        </div>     

      
      </div>
      </div>
    );
  }
}
{/* <p>
Daniel Kubiak is a full-stack developer and indie game designer specializing in:
<ul>
  <li>
    JS/Node JS
  </li>
  <li>
    React/Redux
  </li>
  <li>
    MongoDB/Mongoose ORM
  </li>
  <li>
    MySQL/Sequelize ORM
  </li>
  <li>
    JQuery, Phaser JS, and Pixi JS
  </li>
</ul>
</p> */}

export default About;
