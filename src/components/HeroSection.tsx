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
              <span>开放合作 &middot; AI教育产品 &middot; 教研创新</span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Hi, I&apos;m Cathy.
              <br />
              <span className="text-[var(--accent)]">
                AI + Education
              </span>
              <br />
              <span className="text-gray-400 text-3xl md:text-4xl">
                Product &amp; Curriculum Builder.
              </span>
            </h1>

            <p
              className={`text-lg text-gray-600 max-w-lg leading-relaxed ${
                visible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              国际名校教育学硕士，6年+ K12英语线上+线下教育经验。字节跳动等头部公司的互联网经验，在新东方、环球趣学等北京知名教育机构积累了教学教研、用户运营的复合经验。AI native —— 现正践行AI工具深度应用于英语教学，并独立开发英语教育AI网页。也是 AI 时代和教育的积极思考和践行者。
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
            <div className="relative py-14 px-8">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl mx-auto">
                <Image
                  src="/吕可欣.jpeg"
                  alt="Cathy Lyu"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Floating stats cards - positioned outside photo */}
              <div className="absolute bottom-0 left-0 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-base">
                    🎓
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">教学经验</p>
                    <p className="text-base font-bold text-gray-900">6+ 年</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-base">
                    📈
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">续费率</p>
                    <p className="text-base font-bold text-gray-900">98%+</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-base">
                    🤖
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">AI 教育</p>
                    <p className="text-base font-bold text-gray-900">Builder</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-base">
                    🚀
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">0-1 产品</p>
                    <p className="text-base font-bold text-gray-900">经历</p>
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
