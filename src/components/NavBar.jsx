import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  // Define navigation items with their respective paths and labels
  const navItems = [
    { to: '/', label: 'About' },
    { to: '/Contact', label: 'Contact' },
    { to: '/Portfolio', label: 'Portfolio' },
    { to: '/Resume', label: 'Resume' },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: '100vw' }}>
      <nav className="nav nav-tabs">
        <Navbar.Brand className="KG">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>Keith Godfrey<span></span></h1>
            </div>
            <div className="role">
              <div className="block"></div>
              <p>Full-Stack Developer</p>
            </div>
          </div>
        </Navbar.Brand>
        
        {/* Render navigation links using navItems array */}
        {navItems.map((item) => (
          <Link key={item.to} to={item.to}>
            <Button variant="primary" className="m-2">
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </Navbar>
  );
}

export default NavBar;