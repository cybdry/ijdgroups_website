import React, { useState } from 'react';

//React-router
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

//React-transition-group
import {CSSTransition} from 'react-transition-group';

//Styles
import './App.scss';

//Components
import Navigation from './Components/Navigation';
import MobileNavigation from './Components/MobileNavigation';
import Footer from './Components/Footer';

//Views
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Portfolio from './Views/Portfolio';
import Rental from './Views/Rental';

//Icons
import BackToTop from './Icons/BackToTop';

function App(){
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop,setShowScrollToTop] = useState(false);

  //Detect position from top and show/hide scrollToTop button
  //If device width is smaller than 1100, don't show scrollToTop button
  function showScrollToTopIcon(){
    let positionY;
    let windowWidth;

    window.addEventListener('scroll',function(){
      positionY = this.scrollY;
      windowWidth = this.innerWidth;

      if(positionY > 200 && windowWidth < 1100){
        setShowScrollToTop(true);
      }else{
        setShowScrollToTop(false);
      }
    });
  }

  //Scroll to top for switching between the views
  function scrollToTop(){
    window.scrollTo({top:0});
  }

  //Smooth scroll to top for scrollToTop icon
  function smoothScrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

  return (
    <Router>
    
        <div className="App">
          <div className="wrapper">
            {showScrollToTopIcon()}

            <CSSTransition
              in={isMobileMenuOpen}
              classNames="mobile-navigation"
              timeout={300}
              unmountOnExit
            >
              <div className="mobile-menu-wrapper">
                <MobileNavigation closeMobileMenu={()=>setIsMobileMenuOpen(false)}  />
              </div>
            </CSSTransition>

            <CSSTransition
              in={isMobileMenuOpen}
              classNames="mobile-navigation-overlay"
              timeout={300}
              unmountOnExit
            >
              <div className="mobile-menu-overlay" onClick={()=> setIsMobileMenuOpen(false)}></div>
            </CSSTransition>

            <CSSTransition
              in={showScrollToTop}
              classNames="showScrollToTop"
              timeout={300}
              unmountOnExit
            >
              <div className="scrollToTop" onClick={smoothScrollToTop}>
                <BackToTop />
              </div>
            </CSSTransition>

            <Navigation openMobileMenu={()=>setIsMobileMenuOpen(true)} />
          <Routes>
						<Route key="/" exact="true" path="/" element={<Home scrollToTop={scrollToTop}/>}>
                {({match})=>(
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="slide-backward"
                    unmountOnExit
                    >
                     
                  </CSSTransition>
                )}
            </Route>

						<Route key="/about" exact="true" path="/about" classNames="page" element={<About/>}>
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >

                    </CSSTransition>
                  )}
            </Route>

						<Route key="/contact" exact="true" path="/contact" classNames="page" element={<Contact/>}>
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                        
                    </CSSTransition>
                  )}
            </Route>

						<Route key="/portfolio" exact="true" path="/portfolio" classNames="page" element={<Portfolio/>}>
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                    </CSSTransition>
                  )}
            </Route>

						<Route key="/rental" exact="true" path="/rental" classNames="page" element={<Rental scrollToTop={scrollToTop}/>}>
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                       
                    </CSSTransition>
                  )}
            </Route>
          </Routes>
            <Footer scrollToTop={smoothScrollToTop} />
          </div>
        </div>
    </Router>
  );
}

export default App;
