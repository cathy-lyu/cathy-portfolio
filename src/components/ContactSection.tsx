"use client";

import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s build the future of education.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            如果你对 AI + 教育感兴趣，欢迎交流合作。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:cathylyu11@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              cathylyu11@gmail.com
            </a>
            <a
              href="tel:18992581226"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              189-9258-1226
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span>🎓</span>
              <span>曼彻斯特大学 教育学硕士</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>北京</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎹</span>
              <span>钢琴十级 · 摄影 · 歌唱</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-100 pt-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 Cathy Lyu. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6">
            <a href="#intro" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
