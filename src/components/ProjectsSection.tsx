"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    tag: "AI教学平台",
    tagClass: "tag-blue",
    emoji: "📚",
    title: "原版教材学习平台",
    pain: "线下学生课后缺乏系统化的教材复习工具，纸质资料不便回顾。",
    solution:
      "基于AI工具设计并开发的教学辅助网站，整合剑桥原版教材内容，为100+线下学生提供数字化学习体验。",
    techStack: ["Google AI Studio", "Prompt Engineering", "Web开发"],
    status: "Demo",
    link: "",
    image: "",
  },
  {
    tag: "AI学习工具",
    tagClass: "tag-green",
    emoji: "🃏",
    title: "AI 词汇闪卡系统",
    pain: "学生背单词效率低，传统词汇本无法提供智能复习和个性化推荐。",
    solution:
      "AI驱动的智能词汇闪卡，根据KET/PET考纲自动生成词汇卡片，支持间隔重复和个性化学习路径。",
    techStack: ["Google AI Studio", "Gemini", "间隔重复算法"],
    status: "Demo",
    link: "",
    image: "/projects/flashcard-system.png",
  },
  {
    tag: "AI互动游戏",
    tagClass: "tag-orange",
    emoji: "🎮",
    title: "词汇学习游戏",
    pain: "低龄学生注意力有限，传统词汇练习枯燥，学习动力不足。",
    solution:
      "将词汇学习与游戏化设计结合，通过互动HTML游戏让学生在趣味中掌握核心词汇。",
    techStack: ["Kimi", "HTML5游戏", "教育场景设计"],
    status: "已上线",
    link: "https://vtpm3a2wpiooe.ok.kimi.link",
    image: "",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <span className="tag tag-orange mb-4">AI Vibe Coding</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          AI 教育项目
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          用 AI 技术解决英语教学中的真实痛点，从备课效率到个性化学习。
        </p>
        <div className="section-divider mt-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover flex flex-col"
          >
            {/* Card header */}
            <div className="p-6 pb-0">
              <div className="flex items-center justify-between mb-4">
                <span className={`tag ${project.tagClass}`}>{project.tag}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === "已上线"
                      ? "bg-green-100 text-green-700"
                      : project.status === "Demo"
                        ? "bg-orange-100 text-orange-700"
                        : project.status === "开发中"
                          ? "bg-pink-100 text-pink-700"
                          : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              {!project.image && <div className="text-4xl mb-3">{project.emoji}</div>}
              <h3 className="text-lg font-bold text-gray-900">
                {project.title}
              </h3>
            </div>

            {/* Project screenshot */}
            {project.image && (
              <div className="mx-6 mt-4 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Card body */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  痛点
                </p>
                <p className="text-sm text-gray-600">{project.pain}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  解决方案
                </p>
                <p className="text-sm text-gray-700">{project.solution}</p>
              </div>

              <div className="mt-auto space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
                  >
                    访问项目
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
