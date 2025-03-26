const translations = {
  // 通用
  "lang.en": "English",
  "lang.zh": "中文",
  "download": "下载简历",
  "contact": "联系我",

  // 头部信息
  "name": "甘智斌",
  "intention": "前端实习生、AI全栈实习生",
  "education": "本科 - 东华理工大学 - 软件工程（2023.09 - 2027.06）",
  "email": "luli_0819@qq.com",

  // 侧边栏
  "nav.about": "个人简介",
  "nav.education": "教育经历",
  "nav.internship": "实习经历",
  "nav.experience": "在校经历",
  "nav.awards": "荣誉/奖项",
  "nav.skills": "专业技能",
  "nav.portfolio": "个人作品",
  "nav.projects": "项目经历",

  // 部分标题
  "section.about": "个人简介",
  "section.education": "教育经历",
  "section.internship": "实习经历",
  "section.experience": "在校经历",
  "section.awards": "荣誉/奖项",
  "section.skills": "专业技能",
  "section.portfolio": "个人作品",
  "section.projects": "项目经历",

  // 教育经历
  "education.university": "东华理工大学",
  "education.major": "软件工程",
  "education.time": "2023.09 - 2027.06",
  "education.gpa": "GPA：专业前10%",
  "education.courses": "相关课程：HTML、CSS、JavaScript、Vue.js、JavaWeb、计算机网络、操作系统、数据结构等",

  // 在校经历
  "experience.1": "优秀学生，入党积极分子",
  "experience.2": "大一参与团队项目，负责接入讯飞大模型实现智能聊天功能",

  // 荣誉奖项
  "awards.1": "江西省蓝桥杯二等奖",
  "awards.2": "信息系统创新大赛三等奖",
  "awards.3": "二等奖学金",
  "awards.4": "通过英语四级",
  "awards.5": "东华理工ECPC银奖",

  // 专业技能
  "skills.frontend": "前端技术",
  "skills.frontend.desc": "熟练掌握HTML、CSS、JavaScript、ES6，了解TypeScript；熟悉Vant-UI、Iconfont、Element-UI，了解antd UI框架；精通Vue3、Vue Router、Pinia，有TypeScript和React使用经验。",
  "skills.backend": "后端开发",
  "skills.backend.desc": "使用koa、Express构建restful API，了解Nest.js的AOP、IoC、DI思想，具备分层解耦开发能力，了解Python。",
  "skills.ai": "AI技术栈",
  "skills.ai.desc": "熟悉LangChain.js，了解Naive RAG，使用相关工具进行文本处理、向量化与持久化，了解Agent tool和ReAct模式。",
  "skills.other": "其他技能",
  "skills.other.desc": "熟练使用git进行代码版本控制；擅长利用prompt技巧，借助cursor、deepseek进行规划与调试。",

  // 个人作品
  "portfolio.juejin": "掘金",
  "portfolio.juejin.desc": "四级作者，人气排名52，发布80余篇技术文章。",
  "portfolio.gitee": "Gitee",
  "portfolio.leetcode": "LeetCode",
  "portfolio.leetcode.desc": "完成100+题目",
  "portfolio.lanqiao": "蓝桥杯OJ",
  "portfolio.lanqiao.desc": "完成200+题目",

  // 项目经历
  "project.1.name": "墨香逸读",
  "project.1.time": "2025.01 - 2025.02",
  "project.1.tech": "技术栈：Vue3、Pinia、Vant UI、Iconfont、Tailwind、TypeScript、CozeBot",
  "project.1.desc1": "用Vue3 + Vant UI搭建前端，Tailwind CSS完成样式设计，实现假数据加载与组件复用。",
  "project.1.desc2": "借助Coze Bot的API实现AI对话读书伴侣功能。",
  "project.1.desc3": "运用keepalive缓存、路由和组件懒加载优化项目性能；自定义hooks和指令实现图片懒加载。",

  "project.2.name": "卷王笔记",
  "project.2.time": "2025.01",
  "project.2.tech": "技术栈：Vue3、Vant UI、Nest.js、TypeORM、LangChain、DeepSeek、Mysql",
  "project.2.desc1": "二次封装axios，利用JWT实现前后端双token无感刷新。",
  "project.2.desc2": "借助SSE实现流式输出，TypeORM封装sql操作。",
  "project.2.desc3": "完成大文件分片上传、断点续传和秒传；利用Embedding等技术实现私有化数据问答，并部署为API。",

  "project.3.name": "语境通翻译",
  "project.3.time": "2025.01",
  "project.3.tech": "技术栈：React、Transformers.js",
  "project.3.desc1": "结合React与Transformers.js开发，实现前端视图加载和大模型翻译功能。",
  "project.3.desc2": "获取资源下载数据并展示进度；用class类和单例模式封装nlp翻译类，借助Web Worker优化性能。",

  // 实习经历
  "internship.company1": "字节跳动",
  "internship.position1": "前端开发实习生",
  "internship.time1": "2024.03 - 2024.06",
  "internship.tech1": "技术栈：React, TypeScript, Redux, Webpack, Node.js",
  "internship.resp1.1": "负责抖音创作者平台的前端开发和维护，优化页面加载速度和用户体验",
  "internship.resp1.2": "参与开发埋点监控系统，提高了数据采集的准确性和完整性",
  "internship.resp1.3": "协助团队进行代码重构，提高代码可维护性和可扩展性",

  "internship.company2": "腾讯",
  "internship.position2": "全栈开发实习生",
  "internship.time2": "2023.07 - 2023.10",
  "internship.tech2": "技术栈：Vue3, Vite, TypeScript, Koa, MySQL",
  "internship.resp2.1": "参与微信小程序后台管理系统的开发，实现多个业务模块的功能",
  "internship.resp2.2": "优化系统性能，减少页面首屏加载时间，提升用户体验",
  "internship.resp2.3": "协助编写技术文档，提高团队协作效率和代码质量",

  // 个人介绍
  "about.desc": "擅长利用github和Stack Overflow解决问题，热爱在掘金、知乎分享知识，对编程充满热情。",
};

export default translations;
