'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 아이콘 컴포넌트
const TimerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const BlockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

const StatsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

// FAQ 항목
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 pb-4 mb-4 last:border-0"
    >
      <h3 className="text-lg font-medium text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        ref={targetRef}
        className="relative pt-20 pb-12 sm:pt-24 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden"
      >
        {/* 배경 원소들 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-20 right-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-indigo-300/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-purple-300/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-pink-300/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-30 h-30 sm:w-40 sm:h-40 rounded-full bg-blue-300/10 blur-3xl"></div>
          
          {/* 움직이는 작은 점들 - 모바일에서는 일부만 표시 */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut" 
            }}
            className="absolute top-[20%] right-[30%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-400/30"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              x: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 7,
              ease: "easeInOut" 
            }}
            className="absolute bottom-[30%] left-[25%] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-purple-400/30"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              x: [0, -10, 0],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut" 
            }}
            className="absolute top-[35%] left-[15%] hidden sm:block w-5 h-5 rounded-full bg-pink-400/30"
          ></motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity, y, scale }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="text-center lg:text-left max-w-md lg:max-w-xl mx-auto lg:mx-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4"
              >
                뽀모도로 + 사이트 차단 = 집중력 향상
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              >
                딴짓 그만, 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative">
                  지금 집중ON!
                  <svg width="100%" height="8" className="absolute -bottom-2 left-0 hidden md:block">
                    <motion.path
                      d="M0,0 C175,0 300,0 400,0"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:pr-8 mx-auto lg:mx-0 max-w-sm lg:max-w-none"
              >
                뽀모도로 타이머와 유튜브 차단 기능으로
                <br className="hidden sm:block" />
                집중력을 높여주는 <span className="font-semibold">무료</span> 크롬 확장 프로그램
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <a 
                    href="https://chrome.google.com/webstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mr-2">
                      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>
                    크롬에 설치하기
                  </a>
                </motion.div>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-white text-indigo-600 font-medium rounded-xl border border-indigo-200 hover:bg-indigo-50 transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                  </svg>
                  문의하기
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2"
              >
                <span className="text-gray-600 text-xs sm:text-sm">✓ 개인정보 수집 없음</span>
                <span className="text-gray-600 text-xs sm:text-sm">✓ 광고 없음</span>
                <span className="text-gray-600 text-xs sm:text-sm">✓ 설치 10초</span>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex-shrink-0 w-full max-w-xs sm:max-w-sm mx-auto mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-30 transform rotate-6"></div>
              <div className="bg-white p-3 rounded-3xl shadow-2xl relative z-10">
                <div className="bg-gray-100 rounded-2xl p-4 relative overflow-hidden">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-sm text-gray-500 font-medium">집중ON</div>
                  </div>
                  
                  <div className="text-center py-6 sm:py-8 px-3 sm:px-4">
                    <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 text-indigo-600">25:00</div>
                    <div className="bg-indigo-100 rounded-full h-2 sm:h-3 mb-4 sm:mb-6 overflow-hidden">
                      <div className="bg-indigo-600 h-full w-1/3 rounded-full"></div>
                    </div>
                    <div className="flex justify-center gap-3 sm:gap-4">
                      <button className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium">시작</button>
                      <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium">초기화</button>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 border-t border-gray-200 pt-3 sm:pt-4">
                    <div className="text-center text-xs sm:text-sm text-gray-500">오늘의 집중시간: 2시간 45분</div>
                    <div className="mt-3 sm:mt-4 grid grid-cols-7 gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="h-6 sm:h-8 bg-indigo-100 rounded-sm relative overflow-hidden">
                          <div 
                            className="absolute bottom-0 w-full bg-indigo-500 rounded-sm" 
                            style={{height: `${Math.random() * 100}%`}}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-xs text-gray-400 mt-1">최근 7일 통계</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      
      {/* Features Section */}
      <section className="py-12 bg-gradient-to-br from-violet-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 rounded-full opacity-60 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-100 rounded-full opacity-60 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-3">집중력 향상 도구</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                놀라운 기능으로 집중력 향상
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-indigo-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <TimerIcon />
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">뽀모도로 타이머</h3>
                <p className="text-gray-600 text-sm mb-4">25분 집중, 5분 휴식의 효과적인 시간 관리로 생산성을 높여보세요.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-indigo-600">
                  <span>자세히 알아보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-purple-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">사이트 차단</h3>
                <p className="text-gray-600 text-sm mb-4">SNS, 뉴스, 스트리밍 등 집중을 방해하는 사이트들을 효과적으로 차단합니다.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-purple-600">
                  <span>자세히 알아보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">활동 분석</h3>
                <p className="text-gray-600 text-sm mb-4">일별, 주별 집중 시간과 패턴을 확인하고 더 효율적인 업무 습관을 기를 수 있습니다.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600">
                  <span>자세히 알아보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* User Example Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-indigo-50 via-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
          >
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3">모두를 위한 솔루션</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">이런 분들</span>께 추천해요
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              집중ON은 모든 사람들의 생산성 향상을 위해 설계되었습니다.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* 학생 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-90 transition-opacity z-10 flex items-center justify-center p-6 scale-y-0 group-hover:scale-y-100 sm:origin-bottom transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm">
                  시험 준비, 숙제 완성, 공부 시간에 유튜브와 SNS에 빠지지 않도록 도와드립니다. 하루 공부량을 측정하며 동기부여를 받으세요.
                </p>
              </div>
              <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 text-white">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                  학생
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  시험 공부나 과제에 집중하고 싶은 학생들에게 완벽한 도구입니다.
                </p>
                <div className="mt-3 sm:mt-4 flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                  <span>더 알아보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* 직장인 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-90 transition-opacity z-10 flex items-center justify-center p-6 scale-y-0 group-hover:scale-y-100 sm:origin-bottom transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm">
                  업무 중 SNS나 뉴스 사이트에 시간을 낭비하지 않도록 합니다. 뽀모도로 타이머로 효율적인 업무 사이클을 만들어 생산성을 높여보세요.
                </p>
              </div>
              <div className="h-32 sm:h-40 bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 text-white">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-indigo-600 transition-colors">
                  직장인
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  업무 효율을 높이고 싶은 직장인들에게 필수적인 집중 도구입니다.
                </p>
                <div className="mt-3 sm:mt-4 flex items-center text-indigo-600 font-medium text-xs sm:text-sm">
                  <span>더 알아보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* 프리랜서 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-90 transition-opacity z-10 flex items-center justify-center p-6 scale-y-0 group-hover:scale-y-100 sm:origin-bottom transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm">
                  자유로운 업무 환경에서 자기 관리는 필수입니다. 목표 시간 설정과 차단 기능으로 마감을 지키고 효율적으로 일할 수 있도록 도와드립니다.
                </p>
              </div>
              <div className="h-32 sm:h-40 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 sm:w-16 sm:h-16 text-white">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                  프리랜서
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  자유로운 환경에서 일하는 프리랜서들의 자기 관리를 도와줍니다.
                </p>
                <div className="mt-3 sm:mt-4 flex items-center text-purple-600 font-medium text-xs sm:text-sm">
                  <span>더 알아보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
          >
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3">집중ON 만의 특별함</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              집중ON의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">특별한 장점</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-5">
            {[
              {
                title: '광고 없음',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 mx-auto text-rose-500">
                    <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                  </svg>
                ),
                description: '집중을 방해하는 광고를 보지 않아도 됩니다!'
              },
              {
                title: '개인정보 수집 없음',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 mx-auto text-green-500">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                ),
                description: '사용자 데이터를 절대 수집하지 않습니다!'
              },
              {
                title: '완전 무료',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 mx-auto text-amber-500">
                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 1-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a3.833 3.833 0 0 0 1.72-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178a3.833 3.833 0 0 0-1.719-.756V8.334c.64.091 1.231.34 1.72.756l.88.66a.75.75 0 0 0 .9-1.2l-.88-.66a5.34 5.34 0 0 0-1.72-.756V6Z" clipRule="evenodd" />
                  </svg>
                ),
                description: '별도의 유료 요금제가 전혀 없습니다!'
              },
              {
                title: '귀여운 UI',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 mx-auto text-purple-500">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ),
                description: '예쁘고 직관적인 디자인으로 사용이 즐겁습니다!'
              },
              {
                title: '설치 10초',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 mx-auto text-blue-500">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                  </svg>
                ),
                description: '클릭 한 번으로 바로 사용할 수 있습니다!'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-white rounded-xl p-3 sm:p-4 md:p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="relative z-10">
                  {benefit.icon}
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-indigo-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-xxs sm:text-xs">{benefit.description}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-indigo-100 to-white rounded-full opacity-30 group-hover:opacity-70 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
          >
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3">자주 묻는 질문</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">궁금한 점</span>이 있으신가요?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              집중ON에 대해 가장 많이 묻는 질문들을 모았습니다.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-5"
            >
              <div className="p-4 sm:p-6 border-l-4 border-indigo-500">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">Q</span>
                  정말 무료인가요?
                </h3>
                <div className="pl-8 sm:pl-10">
                  <p className="text-gray-700 text-xs sm:text-sm">네, 집중ON은 완전 무료로 제공됩니다. 별도의 구독료나 추가 비용이 전혀 없습니다.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-5"
            >
              <div className="p-4 sm:p-6 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">Q</span>
                  개인정보 수집하나요?
                </h3>
                <div className="pl-8 sm:pl-10">
                  <p className="text-gray-700 text-xs sm:text-sm">아니요, 집중ON은 어떠한 개인정보도 수집하지 않습니다. 모든 데이터는 사용자의 브라우저 내에만 저장됩니다.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">Q</span>
                  어떤 사이트가 차단되나요?
                </h3>
                <div className="pl-8 sm:pl-10">
                  <p className="text-gray-700 text-xs sm:text-sm">기본적으로 유튜브, 인스타그램, 넷플릭스 등 집중을 방해하는 주요 소셜 미디어와 스트리밍 사이트들이 차단됩니다. 사용자가 원하는 사이트를 추가할 수도 있습니다.</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 sm:mt-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/contact" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm sm:text-base">
                  <span>더 많은 질문이 있으신가요?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 ml-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 z-0"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-20 sm:w-40 h-20 sm:h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 sm:w-80 h-40 sm:h-80 bg-white rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-30 sm:w-60 h-30 sm:h-60 bg-pink-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              지금 <span className="text-amber-300">딴짓을 멈추고</span>,<br className="hidden sm:inline" /> 집중ON을 켜보세요
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              하루 25분의 집중이 인생을 바꿉니다. 지금 시작해보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mr-2">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                  크롬에 바로 설치하기
                </a>
              </motion.div>
              
              <Link 
                href="#features" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:py-4 text-white font-medium border border-white/30 rounded-xl hover:bg-white/10 transition-colors"
              >
                더 알아보기
              </Link>
            </div>
            
            <div className="mt-8 sm:mt-12 text-white/80 text-base sm:text-lg">
              <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-300">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  설치 10초
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-300">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  완전 무료
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-300">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  개인정보 수집 없음
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
