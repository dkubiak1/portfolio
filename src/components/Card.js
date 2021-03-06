import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CardModel extends Component{
    constructor(props) {
        super(props)
        this.state={visible:true,
            popoverOpen: false}
        //this.visible= false;
        this.visible = true;
        this.onMouseEnter=this.onMouseEnter.bind(this);
        this.onMouseLeave=this.onMouseLeave.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onMouseEnter() {
        if (!this.visible)this.setState({visible:true});
       // this.visible = true;
       // console.log(this)
        //this.toggle()
    }

    onMouseLeave() {
        //if (this.visible)this.setState({visible:false});
        //this.visible = false;
        //this.toggle();
    }

    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }    

    onClick() {
        
    }
    
render() {


  return (
    
    <Card key={this.props.id} id={"Popover"+this.props.id} className="card" onClick={this.props.onClick}>
      
    
        <img  src={this.props.image} alt={this.props.desc} className="card-img" onMouseEnter={() =>{this.onMouseEnter()}} onMouseLeave={() => {this.onMouseLeave()}}/>       
    
    <CardBody className="card-body">
      
    <a  href={this.props.link} > 
        <CardTitle className="card-title">{this.props.title}</CardTitle>

        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
        <CardText className="card-div">{this.props.desc}</CardText>
    </a>       
    <a href={this.props.ghlink}><p className="ghlink"  >{this.props.ghlink}</p></a>
    
     
    </CardBody>
   
     
        
       
       
       
      </Card>
    
  );
  //<Button>Button</Button>

  //<ReactCSSTransitionGroup
//   transitionName="example"
//   transitionEnterTimeout={500}
//   transitionLeaveTimeout={300}>
//  </ReactCSSTransitionGroup>

// <Popover placement="bottom" isOpen={this.state.popoverOpen} target={"Popover"+this.props.id} toggle={this.toggle}>
// <PopoverHeader>{this.props.title}</PopoverHeader>
// <PopoverBody>{this.props.desc}</PopoverBody>
// </Popover>
}
};

export default CardModel;

//onClick={() => {console.log('hi'); document.body.style.opacity = 0; var same; same=window.location;
//setTimeout(()=>{if(same===window.location)document.body.style.opacity = 1}, 1000)}}