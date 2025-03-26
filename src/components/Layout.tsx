
import React, { useEffect } from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import FluidBackground from './FluidBackground';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Add intersection observer for animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <FluidBackground />
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-24"
      >
        {children}
      </motion.main>
      
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="py-12 border-t border-white/10 mt-20 relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">联系我</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-blue-400" />
                  <span>example@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-semibold">📱</span>
                  <span>+86 138-xxxx-xxxx</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-semibold">📍</span>
                  <span>北京, 中国</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">关注我</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">下载简历</h3>
              <p className="mb-4 text-sm">获取我的完整简历PDF版本:</p>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all">
                <span>下载 PDF</span>
                <span>📄</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 甘先生 • 保留所有权利
            </p>
            <button 
              onClick={scrollToTop} 
              className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
              aria-label="回到顶部"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;
