"use client";

import SectionWrapper from "./SectionWrapper";

const tools = [
  {
    emoji: "🧠",
    name: "Claude",
    description: "核心AI开发工具，用于教学内容生成、教育应用开发和Prompt Engineering",
    usage: "应用开发 & 内容生成",
  },
  {
    emoji: "💎",
    name: "Google Gemini",
    description: "多模态AI工具，用于分析学生作业、生成个性化学习反馈报告",
    usage: "作业分析 & 反馈",
  },
  {
    emoji: "🪁",
    name: "Kimi",
    description: "长文本处理AI助手，辅助教材分析、教研资料整理和课程内容优化",
    usage: "教材分析 & 教研",
  },
  {
    emoji: "📒",
    name: "NotebookLM",
    description: "Google 知识管理工具，用于整理教材笔记和教研资料库",
    usage: "知识管理",
  },
  {
    emoji: "🎨",
    name: "Canva AI",
    description: "AI驱动的设计工具，快速制作教学PPT和课堂视觉素材",
    usage: "教学设计",
  },
  {
    emoji: "📊",
    name: "ChatGPT",
    description: "辅助教学策略研究、教育论文阅读和教学方法论探索",
    usage: "教研辅助",
  },
];

export default function ToolsSection() {
  return (
    <SectionWrapper id="tools">
      <div className="mb-12">
        <span className="tag tag-purple mb-4">AI Tools</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          我的 AI 工具箱
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          运用多种大语言模型进行教学内容生成、Prompt Engineering 与教育场景应用开发。
        </p>
        <div className="section-divider mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group"
          >
            <div className="text-3xl mb-3">{tool.emoji}</div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
            <span className="text-xs text-[var(--accent)] font-medium">
              {tool.usage} →
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
