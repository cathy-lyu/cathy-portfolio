"use client";

import SectionWrapper from "./SectionWrapper";

const tools = [
  {
    emoji: "🤖",
    name: "DeepSeek",
    description: "日常教学备课的核心AI助手，用于生成教案、练习题和教学素材",
    usage: "备课 & 出题",
  },
  {
    emoji: "🫧",
    name: "豆包",
    description: "字节跳动AI助手，辅助课堂互动设计和学生沟通话术优化",
    usage: "互动设计",
  },
  {
    emoji: "💎",
    name: "Google Gemini",
    description: "多模态AI工具，用于分析学生作业、生成个性化学习反馈报告",
    usage: "作业分析",
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
          善用 AI 工具赋能教学全流程，从备课、授课到课后反馈，提升教学效率。
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
