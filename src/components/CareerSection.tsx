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
      "全英文教授剑桥原版教材，主要负责海淀万柳校区学生（A1-B1级别）KET、PET级别小班课程及考试课。AI赋能教学，独立开发教学辅助网站。",
    highlights: [
      "基于AI工具设计并开发3个教育应用（原版教材学习平台、AI词汇闪卡系统、词汇学习游戏），赋能100+线下学生",
      "熟练使用 Unlock、Think、Power Up 等剑桥体系教材，续费率均达 98% 以上，多次评级为 S级 英语教师",
      "教师师训讲师：负责KET级别课程体系设计、教学质量把控、教师培训指导",
      "英语教研组长，统筹10+名教师的教学研究与课程开发，建立标准化备课SOP",
      "获「教师风采奖」、年度「最受欢迎教师」以及年度最佳「留存率」奖",
    ],
    stats: [
      { label: "续费率", value: "98%+" },
      { label: "教师评级", value: "S级" },
      { label: "AI应用", value: "3个" },
    ],
  },
  {
    tag: "科技公司",
    tagClass: "tag-blue",
    title: "美国社区运营",
    company: "迅雷科技",
    period: "2021.12 - 2023.10",
    description:
      "最右海外版从0到1冷启动运营，负责美国核心用户日常沟通和产品反馈。通过核心用户沟通和维护，完善内容品类和产品迭代。",
    highlights: [
      "搭建促活和用户激励SOP，提高用户UGC生产和留存，核心用户月增长 20%+，UGC 生产增加 200%",
      "搭建站内长期投稿活动，定制海外节日日历并跟踪热点内容，组织社区热点活动",
      "通过热点话题或流行事件增加站内调性UGC，增强社区氛围，增加整体内容消费和点击",
    ],
    stats: [
      { label: "用户月增长", value: "20%+" },
      { label: "UGC增长", value: "200%" },
      { label: "产品阶段", value: "0→1" },
    ],
  },
  {
    tag: "大厂经验",
    tagClass: "tag-purple",
    title: "英语教师",
    company: "字节跳动",
    period: "2020.05 - 2021.12",
    description:
      "校招进入，先后在大力教育、清北网校、抖音直播三个项目担任英语教师及课程主播。",
    highlights: [
      "大力教育：线上小班暑一期主讲转化率第一名（50%），赛教第4名（共30名教师）",
      "清北网校：千人大班教师，寒短课程目标完成度100%，教师风采前10名（百名教师）",
      "抖音直播：教育抖音账号直播课程主播，最高点赞转发10W+，直播课程售卖转化率4%（高于抖音同期平均）",
    ],
    stats: [
      { label: "转化率排名", value: "第1名" },
      { label: "视频互动", value: "10W+" },
      { label: "直播转化率", value: "4%" },
    ],
  },
  {
    tag: "教育机构",
    tagClass: "tag-orange",
    title: "英语教师",
    company: "新东方",
    period: "2019.09 - 2020.04",
    description:
      "通过校招选拔进入优能高中部，在百余名候选人中选出前10名进行集训，最终被选拔为高中部班课老师。",
    highlights: [
      "主要教授高中英语课程，日常教授词汇部分",
      "日常进行新师培训、赛课",
      "辅助班课老师备课常规高二英语课程",
    ],
    stats: [
      { label: "选拔排名", value: "前10" },
      { label: "候选人数", value: "100+" },
      { label: "教授科目", value: "高中英语" },
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
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg">🎓</div>
            <div>
              <p className="text-sm text-gray-500">2018.09 - 2019.12</p>
              <h4 className="font-bold text-gray-900">曼彻斯特大学</h4>
            </div>
          </div>
          <p className="text-gray-700 text-sm">教育学（国际）硕士 · 全球QS30</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">高中英语教师资格证</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">TKT 剑桥认证教师</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">IELTS 6.5</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">英国国家V50 优秀志愿者</span>
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
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">高级中学历史教师资格证</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">英语四六级</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">院级奖学金</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">新媒体中心部长</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">院级文体部员</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">国际马拉松优秀志愿者领导</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
