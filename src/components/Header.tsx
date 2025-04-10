'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            집중<span className="text-purple-500">ON</span>
          </Link>
        </motion.div>

        {/* Desktop menu */}
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <li>
            <Link href="/" className="text-gray-800 hover:text-indigo-600 transition-colors">
              홈
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-indigo-600 transition-colors">
              문의하기
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-gray-800 hover:text-indigo-600 transition-colors">
              개인정보처리방침
            </Link>
          </li>
        </motion.ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  홈
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
} 