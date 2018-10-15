import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CarouselPage from "./pages/Carousel";
import Projects from "./pages/Projects";
import ProjectCards from "./pages/ProjectCards";


class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      //return <Blog />;
      return <CarouselPage />
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div className="container2">
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        
        <ProjectCards />
        {this.renderPage()}
      </div>
    );
  }
}
//<Projects />
export default Portfolio;
