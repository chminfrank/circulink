# CircuLink · 循环接力

粤港澳大湾区 · 循环经济 × 产教融合 —— 课堂演示版网站。

退役工业设备 + 退休老师傅，一起进入职业院校课堂：企业无偿捐赠设备，学校获得教学单元，
我们只收固定的文件服务费（不按捐赠额抽成，保证捐赠的无偿性与税务定性）。

## 这个站是什么

纯静态展示站，用于课堂演示与路演扫码。**企业与设备记录为示例数据**，政策与统计数据取自
公开文件（国发〔2024〕7 号、教职成〔2022〕5 号、财税〔2019〕46 号、教育部统计公报等）。

- 院校视角：按专业 / 城市 / 补贴匹配大湾区 12 家中型制造企业
- 企业视角：按工种 / 年级 / 补贴匹配 12 所高职与技师学院
- 在库退役设备 12 台（受赠价 ¥0）、一线技师导师 10 位
- 中英双语（按浏览器语言自动切换，可用 `?lang=zh` / `?lang=en` 强制）
- 二维码页可现场生成可打印二维码

## 目录

```
index.html                 首页
school.html / enterprise.html      两个入口
school-detail.html / company-detail.html / equipment-detail.html
equipment.html / mentors.html      设备库 / 技师导师库
register-school.html / register-enterprise.html
login.html / profile.html / admin.html
style.css
js/{data,render,i18n,auth,match}.js
```

## 本地打开

```bash
python -m http.server 8099
# 然后浏览器打开 http://127.0.0.1:8099/
```

直接双击 `index.html` 也能看，但部分浏览器会限制本地 JS，建议用上面的本地服务。

## 说明

- 无后端、无数据库、无第三方追踪；登录/注册为前端演示逻辑，数据仅存浏览器本地存储。
- 页面内的企业与设备均为虚构示例，不对应真实主体。

---

MM3162 Innovation and Entrepreneurship Seminar · Asian Circularity Index (ACI) · 2026
