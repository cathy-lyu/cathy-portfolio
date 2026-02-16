"use client";

import SectionWrapper from "./SectionWrapper";

const textbooks = [
  {
    name: "Unlock",
    level: "A1 - B2",
    description: "剑桥大学出版社综合教材，注重学术英语和批判性思维培养",
    color: "bg-blue-500",
  },
  {
    name: "Think",
    level: "A2 - B2",
    description: "注重思维训练的青少年英语教材，培养独立思考能力",
    color: "bg-purple-500",
  },
  {
    name: "Power Up",
    level: "A1 - A2",
    description: "剑桥少儿英语教材，趣味性强，适合低龄学习者",
    color: "bg-green-500",
  },
  {
    name: "Guess What",
    level: "A1",
    description: "以自然科学为主题的少儿英语启蒙教材",
    color: "bg-orange-500",
  },
];

const examLevels = [
  {
    name: "KET",
    fullName: "Key English Test",
    level: "A2",
    description: "剑桥英语入门考试，覆盖日常基础英语能力",
    skills: ["阅读与写作", "听力", "口语"],
    color: "border-green-400",
    bgColor: "bg-green-50",
  },
  {
    name: "PET",
    fullName: "Preliminary English Test",
    level: "B1",
    description: "剑桥英语中级考试，证明在工作和旅行中使用英语的能力",
    skills: ["阅读", "写作", "听力", "口语"],
    color: "border-blue-400",
    bgColor: "bg-blue-50",
  },
  {
    name: "FCE",
    fullName: "First Certificate in English",
    level: "B2",
    description: "剑桥英语高级考试，国际认可的英语能力证明",
    skills: ["阅读与语用", "写作", "听力", "口语"],
    color: "border-purple-400",
    bgColor: "bg-purple-50",
  },
];

const achievements = [
  { icon: "🏆", label: "教师风采奖", detail: "多次集体赛课获奖" },
  { icon: "⭐", label: "最受欢迎教师", detail: "年度学生投票评选" },
  { icon: "📈", label: "最佳留存率奖", detail: "续费率长期 95%+" },
  { icon: "👑", label: "S级教师评级", detail: "教学质量最高等级" },
];

export default function TeachingSection() {
  return (
    <SectionWrapper id="teaching" bgClassName="bg-[var(--section-bg)]">
      <div className="mb-12">
        <span className="tag tag-green mb-4">Teaching Mastery</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          教学专长
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          深耕剑桥英语体系，从教材研读到考试冲刺，构建完整的教学方法论。
        </p>
        <div className="section-divider mt-4" />
      </div>

      {/* Exam Levels */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {examLevels.map((exam, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 border-2 ${exam.color} ${exam.bgColor} card-hover`}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{exam.name}</h3>
              <span className="text-sm font-medium text-gray-500">
                {exam.level}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{exam.fullName}</p>
            <p className="text-sm text-gray-700 mb-4">{exam.description}</p>
            <div className="flex flex-wrap gap-2">
              {exam.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 bg-white/80 rounded-full text-gray-600 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Textbooks */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">授课教材体系</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {textbooks.map((book, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 border border-gray-100 card-hover text-center"
          >
            <div
              className={`w-12 h-12 ${book.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold`}
            >
              {book.name[0]}
            </div>
            <h4 className="font-bold text-gray-900 text-sm">{book.name}</h4>
            <p className="text-xs text-gray-500 mt-1">{book.level}</p>
            <p className="text-xs text-gray-600 mt-2">{book.description}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">教学荣誉</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 border border-gray-100 card-hover text-center"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
            <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
