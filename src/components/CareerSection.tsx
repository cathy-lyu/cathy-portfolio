"use client";

import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    tag: "当前职位",
    tagClass: "tag-green",
    title: "英语教师",
    company: "环球趣学教育培训学校",
    period: "2023.10 - 至今",
    description:
      "全英文教授英国原版教材，负责海淀万柳校区KET/PET级别小班课程。教授A1-B1级别长线课程及考试冲刺短期课。",
    highlights: [
      "续费率和补缴率达 95%-98%",
      "多次评级为 S级 英语教师",
      "集体备课组长 & 多项教师奖项",
    ],
    stats: [
      { label: "续费率", value: "95%+" },
      { label: "教师评级", value: "S级" },
      { label: "使用教材", value: "4套" },
    ],
  },
  {
    tag: "科技公司",
    tagClass: "tag-blue",
    title: "美国社区运营",
    company: "迅雷科技",
    period: "2021.12 - 2023.10",
    description:
      "从0-1搭建最右海外版用户运营体系，负责海外核心用户访谈和产品反馈迭代。",
    highlights: [
      "核心用户月增长 20%+",
      "UGC 生产增加 200%",
      "搭建完整促活和用户激励 SOP",
    ],
    stats: [
      { label: "用户月增长", value: "20%+" },
      { label: "UGC增长", value: "200%" },
      { label: "调性内容", value: "30%+" },
    ],
  },
  {
    tag: "大厂经验",
    tagClass: "tag-purple",
    title: "英语教师",
    company: "字节跳动",
    period: "2020.05 - 2021.12",
    description:
      "先后在大力教育、抖音直播、清北网校三个项目担任英语教师及课程主播。",
    highlights: [
      "暑期主讲转化率第一名 (50%)",
      "抖音短视频最高点赞转发 10W+",
      "清北网校教师风采前10名",
    ],
    stats: [
      { label: "转化率排名", value: "第1名" },
      { label: "视频互动", value: "10W+" },
      { label: "直播转化率", value: "4%" },
    ],
  },
];

export default function CareerSection() {
  return (
    <SectionWrapper id="career" bgClassName="bg-[var(--section-bg)]">
      <div className="mb-12">
        <span className="tag tag-blue mb-4">Career & Framework</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          职业经历
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          从新东方到字节跳动，从迅雷国际化到一线教学，跨界融合教育与科技。
        </p>
        <div className="section-divider mt-4" />
      </div>

      <div className="grid gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 card-hover"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`tag ${exp.tagClass}`}>{exp.tag}</span>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.title}
                  <span className="text-gray-400 font-normal">
                    {" "}| {exp.company}
                  </span>
                </h3>
                <p className="text-gray-600 mt-2">{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 mt-0.5 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="flex md:flex-col gap-4 md:gap-3 md:text-right">
                {exp.stats.map((stat, j) => (
                  <div key={j}>
                    <p className="text-2xl font-bold text-[var(--accent)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">🎓</div>
            <div>
              <p className="text-sm text-gray-500">2018.09 - 2019.12</p>
              <h4 className="font-bold text-gray-900">曼彻斯特大学</h4>
            </div>
          </div>
          <p className="text-gray-700 text-sm">教育学（国际）硕士 · 全球QS30</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">TKT 剑桥认证教师</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">IELTS 6.5</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">V50 优秀志愿者</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg">📚</div>
            <div>
              <p className="text-sm text-gray-500">2014.09 - 2018.06</p>
              <h4 className="font-bold text-gray-900">哈尔滨师范大学</h4>
            </div>
          </div>
          <p className="text-gray-700 text-sm">历史教育学 本科</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">高中教师资格证</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">英语四六级</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">院级奖学金</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
