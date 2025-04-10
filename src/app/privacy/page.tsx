'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <section className="pt-32 pb-24 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8 text-center">
              개인정보처리방침
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                <strong className="text-indigo-600">집중ON</strong> 확장 프로그램은 사용자의 개인정보 보호를 매우 중요하게 생각합니다. 이 문서는 저희 서비스 이용 시 적용되는 개인정보 처리에 관한 정책을 설명합니다.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  1. 수집하는 정보
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  <strong>집중ON</strong>은 사용자의 어떠한 개인정보도 수집하지 않습니다. 사용자의 집중 시간과 관련된 데이터만 생성되며, 이는 모두 사용자의 기기에 로컬로 저장됩니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  2. 데이터 저장 위치
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  모든 데이터는 <code className="bg-gray-100 px-1 py-0.5 rounded text-indigo-500 font-mono">chrome.storage.local</code>에 저장되며, 사용자의 브라우저 내에만 존재합니다. 외부 서버로 전송되거나 저장되지 않습니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  3. 제3자 제공
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  <strong>집중ON</strong>은 어떠한 사용자 데이터도 제3자에게 제공하지 않습니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  4. 쿠키 사용
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  <strong>집중ON</strong>은 쿠키를 사용하지 않습니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  5. 외부 서버 통신
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  <strong>집중ON</strong>은 외부 서버와 어떠한 통신도 하지 않습니다. 모든 기능은 사용자의 브라우저 내에서 로컬로 작동합니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  6. 정책 변경 시 고지 방식
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  개인정보처리방침이 변경될 경우, 해당 내용을 이 페이지에 게시하여 알려드립니다. 중요한 변경사항이 있는 경우 확장 프로그램 내에서도 알림을 제공할 수 있습니다.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  7. 문의 방법
                </h2>
                <p className="text-gray-800 mb-0 leading-relaxed">
                  개인정보 처리에 관한 문의나 우려사항이 있으시면 아래 이메일로 연락해주세요.
                </p>
                <p className="text-gray-800 mt-2 font-medium">
                  이메일: <a href="mailto:homecreator.ai@gmail.com" className="text-indigo-600 hover:underline">homecreator.ai@gmail.com</a>
                </p>
              </div>
              
              <div className="border-t border-gray-200 mt-10 pt-6 text-center">
                <p className="text-gray-600 text-base">
                  최종 업데이트: 2025년 4월 10일
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 