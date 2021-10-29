import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';
import CV from './pages/CV';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'MyWork') {
      return <MyWork />;
    }
    if (currentPage === 'CV') {
      return <CV />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer className="footer has-background-grey-light">
        <div className="content has-text-centered">
          <p>
            <strong>© Eric Duwe, 2021</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
