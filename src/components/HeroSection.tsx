"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="intro"
      ref={ref}
      className="min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text */}
          <div className="flex-1 space-y-6">
            <div
              className={`flex items-center gap-2 text-sm text-gray-500 ${
                visible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <span className="status-dot" />
              <span>开放合作 &middot; AI教育 &middot; 教研创新</span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Hi, I&apos;m Cathy.
              <br />
              <span className="text-[var(--accent)]">
                AI + English Education
              </span>
              <br />
              <span className="text-gray-400 text-3xl md:text-4xl">
                Explorer & Builder.
              </span>
            </h1>

            <p
              className={`text-lg text-gray-600 max-w-lg leading-relaxed ${
                visible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              曼彻斯特大学教育学硕士，剑桥TKT认证教师。
              用AI重新定义英语教学，让每一个学生都能获得个性化的学习体验。
            </p>

            <div
              className={`flex flex-wrap gap-3 ${
                visible ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-full font-medium text-sm hover:bg-[var(--accent-light)] transition-colors"
              >
                查看 AI 项目
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                联系我
              </a>
            </div>
          </div>

          {/* Right: Photo + Stats card */}
          <div
            className={`flex-shrink-0 ${
              visible ? "animate-slide-in-right delay-300" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/吕可欣.jpeg"
                  alt="Cathy Lyu"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                    🎓
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">教学经验</p>
                    <p className="text-lg font-bold text-gray-900">5+ 年</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg">
                    📈
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">续费率</p>
                    <p className="text-lg font-bold text-gray-900">95%+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
