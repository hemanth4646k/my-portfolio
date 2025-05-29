import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { div } from 'framer-motion/client';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ];


  return (
    <div className='bg-red-500 w-[300px] '>
        <div>Portfolio</div>
    </div>
  );
};

export default Sidebar;