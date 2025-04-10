'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              집중<span className="text-purple-500">ON</span>
            </h3>
            <p className="text-gray-600 mb-4">
              뽀모도로 타이머와 유튜브 차단으로<br />
              집중력을 높여주는 크롬 확장 프로그램
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              바로가기
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              연락처
            </h3>
            <p className="text-gray-600 mb-2">
              이메일: homecreator.ai@gmail.com
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 집중ON. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 