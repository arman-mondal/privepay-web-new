import { useState } from 'react';

const navItems = ['Home', 'Contact', 'Careers','Terms & Conditions'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6 flex flex-row gap-2 items-center">
            <img src="/logo.png" alt="easybank logo" className='w-12 h-12 rounded-xl' />
            <p className='font-bold'>Prive Pay</p>
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem) => (
              <a className="mx-3 py-5 hover:gradient-border-bottom" href={navItem==='Contact'? '/contacts' : navItem==='Home' ? '/' : navItem==='Careers'? '/careers' :navItem==='Terms & Conditions'? '/terms' : '/'}>
                {navItem}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-[#ff5733] px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-[#ff5733] to-[#ff5733] hover:button-brightness focus:outline-none focus:ring ring-green-400">
            Download Now
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src="/icons/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
