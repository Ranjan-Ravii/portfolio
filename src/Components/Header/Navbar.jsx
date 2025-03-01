import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Blogs', href: 'blogs' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => { //IntersectionObserver is an js api that track intersection of sections
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.href);
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);
  



  useEffect(() => {
    const handleScroll = () => {
      // Get all sections and create an array of their positions
      const sectionPositions = navItems.map(item => {
        const section = document.getElementById(item.href);
        if (section) {
          return {
            id: item.href,
            top: section.offsetTop - 200, // Offset for better detection
            bottom: section.offsetTop + section.offsetHeight - 200
          };
        }
        return null;
      }).filter(Boolean);

      const currentPosition = window.scrollY;

      // Find the current section
      const currentSection = sectionPositions.find(section => 
        currentPosition >= section.top && currentPosition < section.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0f223c] fixed top-0 left-0 right-0 z-50">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-8 mx-auto">
          <div className="flex items-center font-black text-5xl text-[#FF6500] cursor-pointer" 
          onClick={() => handleClick('home')} >
  
            {/* <img src="logo.png" alt="logo" 
             
             onClick={() => handleClick('home')} 
             className="h-12 w-12 rounded-2xl cursor-pointer" // Logo stays orange
            /> */}
              R
            
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`transition-colors duration-300 text-base font-medium ${
                    activeSection === item.href 
                      ? 'text-[#FF6500]' 
                      : 'text-gray-300 hover:text-[#FF6500]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1E3E62] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0B192C] w-full">
          <div className="px-8 py-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className={`block py-3 text-base font-medium w-full text-left ${
                  activeSection === item.href 
                    ? 'text-[#FF6500]' 
                    : 'text-gray-300 hover:text-[#FF6500]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;