
import React, { useState, useEffect } from 'react';

const navLinks = [
    { name: 'サービス紹介', href: '#solutions' },
    { name: '利用の流れ', href: '#howitworks' },
    { name: 'お客様の声', href: '#testimonials' },
    { name: '料金プラン', href: '#pricing' },
    { name: '私たちについて', href: '#about' },
    { name: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <a href="#" onClick={closeMenu} className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-blue-600' : 'text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_70%)]'}`}>MercaEasy</a>
                    
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-100 hover:text-white'}`}>
                                {link.name}
                            </a>
                        ))}
                         <a href="#contact" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 transform">
                            お問い合わせ
                        </a>
                    </nav>

                    {/* Mobile Nav Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className={`relative h-10 w-10 z-50 transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                            <span className="sr-only">Open main menu</span>
                            <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="container mx-auto px-6 pt-24">
                    <nav className="flex flex-col items-center space-y-6">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={closeMenu} className="text-xl text-slate-700 hover:text-blue-600 font-medium">
                                {link.name}
                            </a>
                        ))}
                         <a href="#contact" onClick={closeMenu} className="mt-6 bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 w-full text-center">
                            お問い合わせ
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
