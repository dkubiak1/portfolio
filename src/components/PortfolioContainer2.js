import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CarouselPage from "./pages/Carousel";
import Projects from "./pages/Projects";
import ProjectCards from "./pages/ProjectCards";
import ReactDOM from 'react-dom';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'


class Portfolio extends Component {
  constructor(props){
    super(props);

   

    this.projectRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();

    this.scrollToDomRef = this.scrollToDomRef.bind(this);
  }
  state = {
    currentPage: "Home"
  };

  componentWillMount() {
    configureAnchors({})
  }

  componentDidMount() {
    setTimeout(() => {document.body.style.opacity = 1}, 500);
    // document.body.addEventListener('onbeforeunload', () => {
    //   console.log('bye');
    //   document.body.style.opacity = 0;
    // });
    document.body.onbeforeunload = function() {
      console.log('bye');
      document.body.style.opacity = 0;
    }
  }
  
  componentWillUnmount() {
    //document.body.style.opacity = 0;
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
    //window.scrollTo(0, this.contactRef);
    let ref;
    if (page === "Contact") ref=this.contactRef;
    if (page === "Blog") ref=this.projectRef;
    if (page === "About") ref=this.aboutRef;
   // this.scrollToDomRef(ref);
  };

  scrollToDomRef = (ref) => {
    const domNode = ReactDOM.findDOMNode(ref.current)
    domNode.scrollIntoView()
}

  render() {
    return (
      <div className="container2">
        <ScrollableAnchor id={'section0'}>
        <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section1'}>
        <div>
        <ProjectCards 
          ref={this.projectRef}
        />
        </div>
        </ScrollableAnchor>
        
       
        <a className="abs" href="#section0"><i className="far fa-arrow-alt-circle-up"></i></a>
        <ScrollableAnchor id={'section2'}>
        <div>
        <About 
          ref={this.aboutRef}
        />
        </div>
        </ScrollableAnchor>
        
        <a className="abs" href="#section0"><i className="far fa-arrow-alt-circle-up"></i></a>
        <ScrollableAnchor id={'section3'}>
        <div>
        <Contact
          ref={this.contactRef}
         />
         </div>
         </ScrollableAnchor>
        
         

        
      </div>
    );
  }
}
//<Projects />
export default Portfolio;
