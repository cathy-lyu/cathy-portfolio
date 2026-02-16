"use client";

import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    tag: "AI教学工具",
    tagClass: "tag-blue",
    emoji: "📝",
    title: "KET/PET 智能备课助手",
    pain: "传统备课耗时长，教材资源分散，难以针对学生薄弱点定制化出题。",
    solution:
      "基于 AI 大模型，自动分析 Unlock/Think/Power Up 教材知识点，一键生成针对性练习题和教学大纲。",
    techStack: ["DeepSeek", "Prompt Engineering", "教材知识图谱"],
    status: "开发中",
  },
  {
    tag: "AI学习助手",
    tagClass: "tag-green",
    emoji: "🗣️",
    title: "英语口语陪练 Bot",
    pain: "学生课后缺乏真实英语对话场景，口语练习依赖约外教，成本高且不灵活。",
    solution:
      "利用 AI 语音对话能力，模拟 KET/PET 口语考试场景，提供即时纠错和评分反馈。",
    techStack: ["豆包 AI", "语音识别", "场景模拟"],
    status: "规划中",
  },
  {
    tag: "AI效率工具",
    tagClass: "tag-orange",
    emoji: "📊",
    title: "学生学情分析看板",
    pain: "教师难以追踪每个学生的学习进度和薄弱环节，期末评估依赖主观记忆。",
    solution:
      "自动记录学生每次课堂表现、测试成绩，用数据可视化展示学习轨迹和提分趋势。",
    techStack: ["Google Gemini", "数据可视化", "自动化报告"],
    status: "规划中",
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
                    project.status === "开发中"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="text-4xl mb-3">{project.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900">
                {project.title}
              </h3>
            </div>

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

              <div className="mt-auto">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
