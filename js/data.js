/* ============================================================
   循环接力 CircuLink · 演示数据 v3
   院校：仅大专层次（高职专科 / 技师学院），共 12 所
   企业：仅中型制造企业（300–1000 人 / 2,000 万–4 亿元），共 12 家
   设备与技师：演示记录，均挂靠上述中型企业
   ⚠️ 本文件为课堂演示用的示例数据，非真实企业名录
   ============================================================ */

const SCHOOLS = [
  {
    id: 1,
    icon: "深圳",
    name: { zh: "深圳信息职业技术学院", en: "Shenzhen Institute of Information Technology" },
    type: { zh: "高职专科 · 深圳", en: "Higher vocational college · Shenzhen" },
    intro: { zh: "公办高职，电子信息与智能制造专业群是省级高水平专业群，实训基地按产线标准建设。", en: "A public vocational college whose IT and smart-manufacturing clusters are provincial high-level programmes, with line-standard training bases." },
    interns: 120,
    directions: [{ zh: "智能制造装备技术", en: "Smart Manufacturing Equipment" }, { zh: "电子信息工程技术", en: "Electronic Information Engineering" }, { zh: "工业机器人技术", en: "Industrial Robotics" }],
    details: {
      founded: { zh: "2002 年", en: "2002" },
      students: { zh: "在校约 1.6 万人", en: "~16,000 students" },
      teachers: { zh: "专任教师 900 余人", en: "900+ full-time faculty" },
      campus: { zh: "深圳龙岗大运新城", en: "Longgang, Shenzhen" },
      retention: { zh: "演示 92%", en: "Demo 92%" },
      address: { zh: "深圳市龙岗区龙翔大道 2188 号", en: "No. 2188 Longxiang Blvd, Longgang, Shenzhen" },
      phone: { zh: "0755-8922-6000", en: "+86 755 8922 6000" },
      email: { zh: "demo@sziit.edu.cn", en: "demo@sziit.edu.cn" },
      about: { zh: "学校以电子信息为特色，与深圳 ICT 产业链深度绑定，建有智能制造实训中心、工业机器人应用中心，学生在校期间即进入真实产线环境训练。本次拟接收注塑、SMT 与机器人三类退役设备。", en: "Specialising in electronic information and closely tied to Shenzhen's ICT chain, the college runs a smart-manufacturing training centre and a robotics application centre where students train in near-real production settings. It plans to receive retired moulding, SMT and robotics equipment." },
      highlights: [{ zh: "省级高水平专业群 2 个", en: "Two provincial high-level programme clusters" }, { zh: "国家级生产性实训基地", en: "National productive training base" }, { zh: "与华为、中兴共建产业学院", en: "Industry colleges with Huawei and ZTE" }, { zh: "毕业生本地就业率 90% 以上", en: "90%+ local employment rate" }],
      majors: [{ zh: "智能制造装备技术", en: "Smart Manufacturing Equipment" }, { zh: "工业机器人技术", en: "Industrial Robotics" }, { zh: "电子信息工程技术", en: "Electronic Information Engineering" }, { zh: "机电一体化技术", en: "Mechatronics" }]
    }
  },
  {
    id: 2,
    icon: "深圳",
    name: { zh: "深圳技师学院", en: "Shenzhen Institute of Technology" },
    type: { zh: "技师学院 · 深圳", en: "Technician college · Shenzhen" },
    intro: { zh: "技工教育体系内的技师学院，层次比照大专，以真实生产任务组织教学，设备更新压力最大。", en: "A technician college inside the technical-education system, at junior-college level, teaching through real production tasks and under the heaviest equipment-renewal pressure." },
    interns: 90,
    directions: [{ zh: "模具制造", en: "Mould Making" }, { zh: "数控加工", en: "CNC Machining" }, { zh: "机电一体化", en: "Mechatronics" }],
    details: {
      founded: { zh: "1985 年", en: "1985" },
      students: { zh: "在校约 1.1 万人", en: "~11,000 students" },
      teachers: { zh: "实习指导教师 600 余人", en: "600+ workshop instructors" },
      campus: { zh: "深圳龙岗、光明", en: "Longgang & Guangming, Shenzhen" },
      retention: { zh: "演示 95%", en: "Demo 95%" },
      address: { zh: "深圳市龙岗区龙岗街道", en: "Longgang Street, Longgang, Shenzhen" },
      phone: { zh: "0755-8375-1000", en: "+86 755 8375 1000" },
      email: { zh: "demo@szjsxy.edu.cn", en: "demo@szjsxy.edu.cn" },
      about: { zh: "学院以模具、数控、机电为主干专业，教学组织接近车间管理，学生按工位轮训。设备多为十年前采购，与现行产线存在代差，是本项目优先对接的受赠方之一。", en: "With mould making, CNC and mechatronics as its backbone, the college runs teaching much like shop-floor management and rotates students through workstations. Most machines were bought a decade ago, creating a generation gap with live lines." },
      highlights: [{ zh: "世界技能大赛集训基地", en: "WorldSkills training base" }, { zh: "教学以真实生产任务驱动", en: "Teaching driven by real production tasks" }, { zh: "设备平均机龄 9 年", en: "Average machine age 9 years" }, { zh: "毕业生供不应求", en: "Graduates in short supply" }],
      majors: [{ zh: "模具制造技术", en: "Mould Manufacturing" }, { zh: "数控加工技术", en: "CNC Machining" }, { zh: "机电一体化技术", en: "Mechatronics" }, { zh: "工业设计", en: "Industrial Design" }]
    }
  },
  {
    id: 3,
    icon: "广州",
    name: { zh: "广州番禺职业技术学院", en: "Guangzhou Panyu Polytechnic" },
    type: { zh: "高职专科 · 广州", en: "Higher vocational college · Guangzhou" },
    intro: { zh: "国家示范性高职，珠宝、智能制造、汽车类专业与珠三角产业高度匹配。", en: "A national demonstration vocational college whose jewellery, smart-manufacturing and automotive programmes match the Pearl River Delta industry." },
    interns: 110,
    directions: [{ zh: "智能制造", en: "Smart Manufacturing" }, { zh: "汽车制造与试验技术", en: "Automotive Manufacturing" }, { zh: "珠宝首饰工艺", en: "Jewellery Technology" }],
    details: {
      founded: { zh: "1993 年", en: "1993" },
      students: { zh: "在校约 1.5 万人", en: "~15,000 students" },
      teachers: { zh: "专任教师 800 余人", en: "800+ full-time faculty" },
      campus: { zh: "广州番禺", en: "Panyu, Guangzhou" },
      retention: { zh: "演示 90%", en: "Demo 90%" },
      address: { zh: "广州市番禺区沙湾镇青山湖", en: "Qingshan Lake, Shawan, Panyu, Guangzhou" },
      phone: { zh: "020-3487-8000", en: "+86 20 3487 8000" },
      email: { zh: "demo@gzpyp.edu.cn", en: "demo@gzpyp.edu.cn" },
      about: { zh: "学院是国家示范性高等职业院校，建有智能制造、汽车、珠宝三个实训中心，与珠三角制造企业长期合作。因珠宝与精密加工课程需要小批量设备，适合接收精密模具与数控类退役设备。", en: "A national demonstration college with training centres for smart manufacturing, automotive and jewellery, long partnered with PRD manufacturers. Its jewellery and precision-machining courses suit small-batch transfers of moulding and CNC equipment." },
      highlights: [{ zh: "国家示范性高职院校", en: "National demonstration college" }, { zh: "三大实训中心", en: "Three training centres" }, { zh: "与 200 余家企业合作", en: "200+ partner enterprises" }, { zh: "对口就业率 88%", en: "88% job-matched employment" }],
      majors: [{ zh: "智能制造装备技术", en: "Smart Manufacturing Equipment" }, { zh: "汽车制造与试验技术", en: "Automotive Manufacturing" }, { zh: "珠宝首饰工艺及鉴定", en: "Jewellery Technology" }, { zh: "模具设计与制造", en: "Mould Design & Manufacturing" }]
    }
  },
  {
    id: 4,
    icon: "广州",
    name: { zh: "广东机电职业技术学院", en: "Guangdong Mechanical & Electrical Polytechnic" },
    type: { zh: "高职专科 · 广州", en: "Higher vocational college · Guangzhou" },
    intro: { zh: "以机电、数控、自动化为主干，是省内机电类技能人才的主要供给校之一。", en: "Focused on mechatronics, CNC and automation; one of the province's main suppliers of electromechanical technicians." },
    interns: 100,
    directions: [{ zh: "数控技术", en: "CNC Technology" }, { zh: "电气自动化技术", en: "Electrical Automation" }, { zh: "工业机器人技术", en: "Industrial Robotics" }],
    details: {
      founded: { zh: "1963 年", en: "1963" },
      students: { zh: "在校约 1.4 万人", en: "~14,000 students" },
      teachers: { zh: "专任教师 700 余人", en: "700+ full-time faculty" },
      campus: { zh: "广州白云、南沙", en: "Baiyun & Nansha, Guangzhou" },
      retention: { zh: "演示 89%", en: "Demo 89%" },
      address: { zh: "广州市白云区同和街", en: "Tonghe Street, Baiyun, Guangzhou" },
      phone: { zh: "020-6136-2000", en: "+86 20 6136 2000" },
      email: { zh: "demo@gdmec.edu.cn", en: "demo@gdmec.edu.cn" },
      about: { zh: "学院前身为广东省机械学校，机电类实训条件扎实，但主力机床多数已服役十年以上。学院近年把工业机器人、自动化产线列为重点方向，对二手数控与机器人设备需求明确。", en: "Formerly the Guangdong Mechanical School, the college has solid workshop facilities, yet most of its main machines have served over a decade. Robotics and automated lines are now priority directions, giving it clear demand for second-hand CNC and robot equipment." },
      highlights: [{ zh: "机电类老牌院校", en: "Long-established electromechanical college" }, { zh: "省级实训基地 4 个", en: "Four provincial training bases" }, { zh: "双师型教师占比 65%", en: "65% dual-qualified faculty" }, { zh: "与广汽、格力等合作", en: "Partners include GAC and Gree" }],
      majors: [{ zh: "数控技术", en: "CNC Technology" }, { zh: "电气自动化技术", en: "Electrical Automation" }, { zh: "工业机器人技术", en: "Industrial Robotics" }, { zh: "模具设计与制造", en: "Mould Design & Manufacturing" }]
    }
  },
  {
    id: 5,
    icon: "广州",
    name: { zh: "广东交通职业技术学院", en: "Guangdong Communication Polytechnic" },
    type: { zh: "高职专科 · 广州", en: "Higher vocational college · Guangzhou" },
    intro: { zh: "交通运输与机电类专业并重，汽车、船舶、轨道方向实训设备更新需求大。", en: "Strong in transport and electromechanical programmes; heavy renewal needs in automotive, marine and rail training equipment." },
    interns: 85,
    directions: [{ zh: "汽车检测与维修", en: "Automotive Testing & Repair" }, { zh: "船舶工程技术", en: "Marine Engineering" }, { zh: "机电一体化", en: "Mechatronics" }],
    details: {
      founded: { zh: "1959 年", en: "1959" },
      students: { zh: "在校约 1.3 万人", en: "~13,000 students" },
      teachers: { zh: "专任教师 650 余人", en: "650+ full-time faculty" },
      campus: { zh: "广州天河、花都", en: "Tianhe & Huadu, Guangzhou" },
      retention: { zh: "演示 87%", en: "Demo 87%" },
      address: { zh: "广州市天河区天源路 789 号", en: "No. 789 Tianyuan Rd, Tianhe, Guangzhou" },
      phone: { zh: "020-8702-4668", en: "+86 20 8702 4668" },
      email: { zh: "demo@gdcp.edu.cn", en: "demo@gdcp.edu.cn" },
      about: { zh: "学院汽车与船舶实训依赖大量机电设备，部分焊接、切割工位仍使用旧机型。对焊装机器人、激光切割与空压系统的接受度高。", en: "Automotive and marine training depends on substantial electromechanical equipment, and some welding and cutting stations still use older models. The college is receptive to welding robots, laser cutting and compressed-air systems." },
      highlights: [{ zh: "交通行业特色鲜明", en: "Distinct transport-industry focus" }, { zh: "国家级实训基地 1 个", en: "One national training base" }, { zh: "汽车实训中心 6,000 ㎡", en: "6,000 m² automotive centre" }, { zh: "与广铁、招商局合作", en: "Partners include rail and China Merchants" }],
      majors: [{ zh: "汽车检测与维修技术", en: "Automotive Testing & Repair" }, { zh: "船舶工程技术", en: "Marine Engineering" }, { zh: "机电一体化技术", en: "Mechatronics" }, { zh: "焊接技术及自动化", en: "Welding & Automation" }]
    }
  },
  {
    id: 6,
    icon: "广州",
    name: { zh: "广州民航职业技术学院", en: "Guangzhou Civil Aviation College" },
    type: { zh: "高职专科 · 广州", en: "Higher vocational college · Guangzhou" },
    intro: { zh: "民航系统内高职院校，机务维修专业对精密加工与检测设备要求高。", en: "A civil-aviation vocational college whose aircraft-maintenance programmes demand precision machining and inspection equipment." },
    interns: 70,
    directions: [{ zh: "飞机机电设备维修", en: "Aircraft Electromechanical Maintenance" }, { zh: "航空电子设备维修", en: "Avionics Maintenance" }, { zh: "精密制造", en: "Precision Manufacturing" }],
    details: {
      founded: { zh: "1980 年", en: "1980" },
      students: { zh: "在校约 1.0 万人", en: "~10,000 students" },
      teachers: { zh: "专任教师 500 余人", en: "500+ full-time faculty" },
      campus: { zh: "广州白云机场片区", en: "Baiyun Airport area, Guangzhou" },
      retention: { zh: "演示 93%", en: "Demo 93%" },
      address: { zh: "广州市白云区机场路向云西街 10 号", en: "No. 10 Xiangyun West St, Airport Rd, Baiyun, Guangzhou" },
      phone: { zh: "020-8612-3777", en: "+86 20 8612 3777" },
      email: { zh: "demo@gcac.edu.cn", en: "demo@gcac.edu.cn" },
      about: { zh: "学院隶属民航系统，机务与航电实训强调工艺精度与检测规范。适合接收加工中心、精测与表面处理类退役设备，用于基础工艺训练。", en: "Under the civil-aviation system, its maintenance and avionics training emphasise craft precision and inspection discipline. It suits transfers of machining centres, metrology and surface-treatment equipment for basic craft training." },
      highlights: [{ zh: "民航局直属院校", en: "Affiliated to the CAAC" }, { zh: "机务实训基地按航司标准建设", en: "Maintenance base built to airline standards" }, { zh: "执照考试通过率居前", en: "Top licence exam pass rates" }, { zh: "与三大航合作", en: "Partners include the big three airlines" }],
      majors: [{ zh: "飞机机电设备维修", en: "Aircraft Electromechanical Maintenance" }, { zh: "航空电子设备维修", en: "Avionics Maintenance" }, { zh: "数控技术", en: "CNC Technology" }, { zh: "模具设计与制造", en: "Mould Design & Manufacturing" }]
    }
  },
  {
    id: 7,
    icon: "佛山",
    name: { zh: "顺德职业技术学院", en: "Shunde Polytechnic" },
    type: { zh: "高职专科 · 佛山", en: "Higher vocational college · Foshan" },
    intro: { zh: "地处中国家电之都，家电制造、模具与工业设计专业与本地产业绑定极深。", en: "Located in China's home-appliance capital, its appliance, mould and industrial-design programmes are tightly bound to local industry." },
    interns: 95,
    directions: [{ zh: "家电智能制造", en: "Smart Appliance Manufacturing" }, { zh: "模具设计与制造", en: "Mould Design" }, { zh: "工业设计", en: "Industrial Design" }],
    details: {
      founded: { zh: "1999 年", en: "1999" },
      students: { zh: "在校约 1.4 万人", en: "~14,000 students" },
      teachers: { zh: "专任教师 750 余人", en: "750+ full-time faculty" },
      campus: { zh: "佛山顺德德胜东路", en: "Shunde, Foshan" },
      retention: { zh: "演示 91%", en: "Demo 91%" },
      address: { zh: "佛山市顺德区德胜东路", en: "Desheng East Rd, Shunde, Foshan" },
      phone: { zh: "0757-2232-9999", en: "+86 757 2232 9999" },
      email: { zh: "demo@sdpt.edu.cn", en: "demo@sdpt.edu.cn" },
      about: { zh: "学院依托顺德家电与装备制造集群办学，与美的、格兰仕等企业共建实训基地。家电注塑与钣金设备更新快，学院对二手注塑机、冲压与检测设备有稳定需求。", en: "Built on Shunde's appliance and equipment clusters, the college co-runs training bases with Midea and Galanz. Appliance moulding and sheet-metal equipment turns over quickly, creating steady demand for used machines." },
      highlights: [{ zh: "国家示范性高职", en: "National demonstration college" }, { zh: "家电专业群全国知名", en: "Nationally known appliance cluster" }, { zh: "与美的共建产业学院", en: "Industry college with Midea" }, { zh: "本地就业率 92%", en: "92% local employment" }],
      majors: [{ zh: "家电智能制造技术", en: "Smart Appliance Manufacturing" }, { zh: "模具设计与制造", en: "Mould Design & Manufacturing" }, { zh: "工业设计", en: "Industrial Design" }, { zh: "机电一体化技术", en: "Mechatronics" }]
    }
  },
  {
    id: 8,
    icon: "珠海",
    name: { zh: "珠海城市职业技术学院", en: "Zhuhai City Polytechnic" },
    type: { zh: "高职专科 · 珠海", en: "Higher vocational college · Zhuhai" },
    intro: { zh: "珠海市属高职，机电与电子信息为主，服务本地装备制造与集成电路产业。", en: "A Zhuhai municipal college focused on mechatronics and electronics, serving local equipment manufacturing and IC industry." },
    interns: 75,
    directions: [{ zh: "机电一体化", en: "Mechatronics" }, { zh: "电子信息工程技术", en: "Electronic Information" }, { zh: "数控技术", en: "CNC Technology" }],
    details: {
      founded: { zh: "2004 年", en: "2004" },
      students: { zh: "在校约 1.0 万人", en: "~10,000 students" },
      teachers: { zh: "专任教师 520 余人", en: "520+ full-time faculty" },
      campus: { zh: "珠海金湾", en: "Jinwan, Zhuhai" },
      retention: { zh: "演示 86%", en: "Demo 86%" },
      address: { zh: "珠海市金湾区西湖城区金二路", en: "Jin'er Rd, Jinwan, Zhuhai" },
      phone: { zh: "0756-7253-000", en: "+86 756 725 3000" },
      email: { zh: "demo@zhcpt.edu.cn", en: "demo@zhcpt.edu.cn" },
      about: { zh: "学院近年新增智能制造与集成电路相关专业，实训设备缺口明显，是设备接收意愿最强的院校之一。", en: "The college recently added smart-manufacturing and IC programmes and has an evident equipment gap, making it one of the most willing receiving institutions." },
      highlights: [{ zh: "市属公办高职", en: "Municipal public college" }, { zh: "新建智能制造实训中心", en: "New smart-manufacturing centre" }, { zh: "与珠海格力、纳思达合作", en: "Partners include Gree and Ninestar" }, { zh: "设备缺口最明显", en: "Most evident equipment gap" }],
      majors: [{ zh: "机电一体化技术", en: "Mechatronics" }, { zh: "电子信息工程技术", en: "Electronic Information Engineering" }, { zh: "数控技术", en: "CNC Technology" }, { zh: "工业机器人技术", en: "Industrial Robotics" }]
    }
  },
  {
    id: 9,
    icon: "惠州",
    name: { zh: "惠州工程职业学院", en: "Huizhou Engineering Vocational College" },
    type: { zh: "高职专科 · 惠州", en: "Higher vocational college · Huizhou" },
    intro: { zh: "惠州唯一市属工程类高职，服务电子信息与石化装备两个万亿级集群。", en: "Huizhou's only municipal engineering college, serving its two trillion-scale electronics and petrochemical equipment clusters." },
    interns: 70,
    directions: [{ zh: "电子信息工程技术", en: "Electronic Information" }, { zh: "机械制造及自动化", en: "Mechanical Manufacturing" }, { zh: "化工装备技术", en: "Chemical Equipment" }],
    details: {
      founded: { zh: "2017 年", en: "2017" },
      students: { zh: "在校约 9,000 人", en: "~9,000 students" },
      teachers: { zh: "专任教师 430 余人", en: "430+ full-time faculty" },
      campus: { zh: "惠州惠城", en: "Huicheng, Huizhou" },
      retention: { zh: "演示 85%", en: "Demo 85%" },
      address: { zh: "惠州市惠城区三栋镇", en: "Sandong Town, Huicheng, Huizhou" },
      phone: { zh: "0752-2821-888", en: "+86 752 282 1888" },
      email: { zh: "demo@hzec.edu.cn", en: "demo@hzec.edu.cn" },
      about: { zh: "学院成立时间短，实训体系仍在建设期，设备基本靠新购与捐赠两条腿走路，对二手设备接受度最高。", en: "Founded recently and still building its training system, the college relies on both purchases and donations, giving it the highest acceptance of second-hand equipment." },
      highlights: [{ zh: "2017 年新建院校", en: "Founded in 2017" }, { zh: "实训体系在建", en: "Training system under construction" }, { zh: "服务电子信息集群", en: "Serves the electronics cluster" }, { zh: "捐赠接受流程最简", en: "Simplest donation procedure" }],
      majors: [{ zh: "电子信息工程技术", en: "Electronic Information Engineering" }, { zh: "机械制造及自动化", en: "Mechanical Manufacturing & Automation" }, { zh: "化工装备技术", en: "Chemical Equipment Technology" }, { zh: "工业机器人技术", en: "Industrial Robotics" }]
    }
  },
  {
    id: 10,
    icon: "江门",
    name: { zh: "江门职业技术学院", en: "Jiangmen Polytechnic" },
    type: { zh: "高职专科 · 江门", en: "Higher vocational college · Jiangmen" },
    intro: { zh: "珠西装备制造带上的市属高职，摩托车、五金与机电类专业为主。", en: "A municipal college on the west-bank equipment belt, focused on motorcycles, hardware and mechatronics." },
    interns: 65,
    directions: [{ zh: "机电一体化", en: "Mechatronics" }, { zh: "模具设计与制造", en: "Mould Design" }, { zh: "汽车制造与试验技术", en: "Automotive Manufacturing" }],
    details: {
      founded: { zh: "2004 年", en: "2004" },
      students: { zh: "在校约 1.1 万人", en: "~11,000 students" },
      teachers: { zh: "专任教师 560 余人", en: "560+ full-time faculty" },
      campus: { zh: "江门潮连", en: "Chaolian, Jiangmen" },
      retention: { zh: "演示 84%", en: "Demo 84%" },
      address: { zh: "江门市潮连大道 6 号", en: "No. 6 Chaolian Ave, Jiangmen" },
      phone: { zh: "0750-3725-000", en: "+86 750 372 5000" },
      email: { zh: "demo@jmpt.edu.cn", en: "demo@jmpt.edu.cn" },
      about: { zh: "学院与珠西装备制造企业合作紧密，五金与模具类课程需要大量中低端机床做基础训练，二手设备性价比最高。", en: "Closely tied to west-bank equipment makers, its hardware and mould courses need many mid-range machines for basic training, where used equipment offers the best value." },
      highlights: [{ zh: "珠西装备制造带核心", en: "Core of the west-bank equipment belt" }, { zh: "五金模具课程占比高", en: "Heavy hardware and mould content" }, { zh: "与本地摩企合作", en: "Partners include local motorcycle makers" }, { zh: "生均设备值偏低", en: "Low equipment value per student" }],
      majors: [{ zh: "机电一体化技术", en: "Mechatronics" }, { zh: "模具设计与制造", en: "Mould Design & Manufacturing" }, { zh: "汽车制造与试验技术", en: "Automotive Manufacturing" }, { zh: "数控技术", en: "CNC Technology" }]
    }
  },
  {
    id: 11,
    icon: "中山",
    name: { zh: "中山火炬职业技术学院", en: "Zhongshan Torch Polytechnic" },
    type: { zh: "高职专科 · 中山", en: "Higher vocational college · Zhongshan" },
    intro: { zh: "国家骨干高职，包装印刷、光电与装备制造专业群特色鲜明。", en: "A national backbone vocational college known for packaging, optoelectronics and equipment-manufacturing clusters." },
    interns: 80,
    directions: [{ zh: "包装工程技术", en: "Packaging Engineering" }, { zh: "光电技术应用", en: "Optoelectronics" }, { zh: "机械制造及自动化", en: "Mechanical Manufacturing" }],
    details: {
      founded: { zh: "2004 年", en: "2004" },
      students: { zh: "在校约 1.0 万人", en: "~10,000 students" },
      teachers: { zh: "专任教师 500 余人", en: "500+ full-time faculty" },
      campus: { zh: "中山火炬开发区", en: "Torch Development Zone, Zhongshan" },
      retention: { zh: "演示 88%", en: "Demo 88%" },
      address: { zh: "中山市火炬开发区博爱七路", en: "Bo'ai 7th Rd, Torch Zone, Zhongshan" },
      phone: { zh: "0760-8829-1188", en: "+86 760 8829 1188" },
      email: { zh: "demo@zstp.edu.cn", en: "demo@zstp.edu.cn" },
      about: { zh: "学院包装与印刷实训线老化明显，光电专业需要洁净与检测设备。对整线转让的自动化包装设备接受度高。", en: "Its packaging and printing lines are visibly ageing, while optoelectronics needs clean-room and inspection gear. It is receptive to complete automated packaging lines." },
      highlights: [{ zh: "国家骨干高职", en: "National backbone college" }, { zh: "包装印刷专业群省级立项", en: "Provincial packaging cluster" }, { zh: "开发区内企业密集", en: "Dense enterprise base in the zone" }, { zh: "整线接收经验", en: "Experience receiving full lines" }],
      majors: [{ zh: "包装工程技术", en: "Packaging Engineering" }, { zh: "光电技术应用", en: "Optoelectronics Technology" }, { zh: "机械制造及自动化", en: "Mechanical Manufacturing & Automation" }, { zh: "印刷媒体技术", en: "Print Media Technology" }]
    }
  },
  {
    id: 12,
    icon: "香港",
    name: { zh: "香港职业训练局 · 香港专业教育学院（IVE）", en: "VTC · Hong Kong Institute of Vocational Education (IVE)" },
    type: { zh: "高职专科 · 香港", en: "Higher vocational · Hong Kong" },
    intro: { zh: "香港最大的职业专才教育机构，工程、设计与资讯科技学科覆盖大专至高级文凭层次。", en: "Hong Kong's largest vocational education provider, covering engineering, design and IT from diploma to higher-diploma level." },
    interns: 60,
    directions: [{ zh: "机械工程", en: "Mechanical Engineering" }, { zh: "电机工程", en: "Electrical Engineering" }, { zh: "建造工程", en: "Building Engineering" }],
    details: {
      founded: { zh: "1982 年", en: "1982" },
      students: { zh: "全港 9 所院校、约 5 万名学生", en: "9 campuses, ~50,000 students" },
      teachers: { zh: "教学人员 3,000 余人", en: "3,000+ teaching staff" },
      campus: { zh: "香港 9 所院校", en: "Nine campuses across Hong Kong" },
      retention: { zh: "演示 90%", en: "Demo 90%" },
      address: { zh: "香港湾仔活道 30 号", en: "30 Wood Rd, Wan Chai, Hong Kong" },
      phone: { zh: "+852 2836 1000", en: "+852 2836 1000" },
      email: { zh: "demo@vtc.edu.hk", en: "demo@vtc.edu.hk" },
      about: { zh: "VTC 依据《物料供应及采购规例》管理资产，设备报废须走机构内部处置程序；本项目以「技术性淘汰」为口径对接其退役设备，跨境转运至大湾区院校。", en: "VTC manages assets under the Stores and Procurement Regulations, so disposal follows an internal procedure. This project approaches its retired equipment on technological-obsolescence grounds and moves it across the boundary to GBA colleges." },
      highlights: [{ zh: "香港最大职业专才教育机构", en: "Hong Kong's largest vocational provider" }, { zh: "设备按政府采购规例管理", en: "Assets under procurement regulations" }, { zh: "9 所院校跨港九新界", en: "Nine campuses across Hong Kong" }, { zh: "跨境转运需报关", en: "Cross-boundary transfer needs customs" }],
      majors: [{ zh: "机械工程技术", en: "Mechanical Engineering Technology" }, { zh: "电机工程技术", en: "Electrical Engineering Technology" }, { zh: "建造工程技术", en: "Building Engineering Technology" }, { zh: "工业设计", en: "Industrial Design" }]
    }
  },
];

const COMPANIES = [
  {
    id: 1,
    icon: "注塑",
    name: { zh: "东莞市立意精密模具有限公司", en: "Liyi Precision Mould Co., Ltd. (Dongguan)" },
    scale: { zh: "中型制造企业 · 精密模具与注塑 · 东莞长安 · 480 人 · 年营收约 2.6 亿元", en: "Mid-sized · precision moulds & moulding · Chang'an, Dongguan · 480 staff · ~RMB 260m revenue" },
    intro: { zh: "为家电与汽车配套做精密模具，服役十年的注塑机三台待处置，账面已折完。", en: "Makes precision moulds for appliance and auto tiers; three ten-year-old moulding machines are being retired and are already fully depreciated." },
    subsidyText: { zh: "设备无偿捐赠 · 我方协助出具评估报告与接收凭据", en: "Equipment donated free of charge; we prepare the appraisal report and receipt trail" },
    jobs: [
      { name: { zh: "注塑工艺实习生", en: "Moulding Process Intern" }, count: 12, duty: { zh: "跟机学习调机、参数设定与常见缺陷处理，按工单完成首件确认。", en: "Learn machine set-up, parameter settings and defect handling while following the work order to first-article approval." } },
      { name: { zh: "模具维修实习生", en: "Mould Maintenance Intern" }, count: 8, duty: { zh: "参与模具拆装、抛光与维修，学习模具寿命管理台账。", en: "Join mould disassembly, polishing and repair; learn the mould-life ledger." } },
      { name: { zh: "品质检验实习生", en: "Quality Inspection Intern" }, count: 6, duty: { zh: "使用卡尺、二次元测量关键尺寸，记录 SPC 数据。", en: "Measure critical dimensions with callipers and vision systems; record SPC data." } },
    ],
    details: {
      founded: { zh: "2008 年", en: "2008" },
      employees: { zh: "480 人", en: "480 staff" },
      subsidy: { zh: "捐赠设备评估值约 100 万元", en: "Donated equipment appraised at about RMB 1.0m" },
      conversion: { zh: "演示 78%", en: "Demo 78%" },
      address: { zh: "东莞市长安镇乌沙工业区", en: "Wusha Industrial Zone, Chang'an, Dongguan" },
      website: { zh: "www.demo-liyi-mould.com", en: "www.demo-liyi-mould.com" },
      email: { zh: "demo@liyi-mould.example", en: "demo@liyi-mould.example" },
      about: { zh: "公司 2008 年成立，专做家电与汽车内饰件的精密模具，员工 480 人，年营收约 2.6 亿元。2024 年起改用全电机与自动化产线，原有三台液压注塑机与两套模具工装闲置，账面净值已为零。企业希望以无偿捐赠方式处置，换取产教融合型企业培育资格。", en: "Founded in 2008, the firm builds precision moulds for appliance and automotive interior parts with 480 staff and about RMB 260m revenue. After switching to all-electric and automated lines from 2024, three hydraulic machines and two tooling sets sit idle at zero book value. It prefers unconditional donation in exchange for entering the industry-education cultivation pool." },
      services: [{ zh: "精密注塑模具", en: "Precision injection moulds" }, { zh: "家电结构件", en: "Appliance structural parts" }, { zh: "汽车内饰件", en: "Automotive interior parts" }],
      benefits: [{ zh: "老师傅一对一带教", en: "1-on-1 veteran mentoring" }, { zh: "提供食宿", en: "Housing and meals" }, { zh: "轮岗机会", en: "Job rotation" }, { zh: "优秀实习生优先录用", en: "Priority hiring for top interns" }]
    }
  },
  {
    id: 2,
    icon: "电子",
    name: { zh: "深圳市恒铖电子科技有限公司", en: "Hengcheng Electronics (Shenzhen)" },
    scale: { zh: "中型制造企业 · 电子组装与 SMT · 深圳宝安 · 760 人 · 年营收约 3.8 亿元", en: "Mid-sized · electronics & SMT · Bao'an, Shenzhen · 760 staff · ~RMB 380m revenue" },
    intro: { zh: "为消费电子做代工组装，两条旧 SMT 线与贴片机退役，仍可满足教学节拍。", en: "Contract assembles consumer electronics; two older SMT lines and mounters are retired yet still fast enough for teaching." },
    subsidyText: { zh: "设备无偿捐赠 · 含首年耗材与培训包", en: "Equipment donated free of charge, with a first-year consumables and training pack" },
    jobs: [
      { name: { zh: "SMT 工艺实习生", en: "SMT Process Intern" }, count: 15, duty: { zh: "学习锡膏印刷、贴片与回流曲线设定，参与首件与炉后检验。", en: "Learn solder-paste printing, mounting and reflow profiling; join first-article and post-reflow inspection." } },
      { name: { zh: "设备维护实习生", en: "Equipment Maintenance Intern" }, count: 10, duty: { zh: "跟随机修完成贴片机、印刷机的日常点检与保养。", en: "Work with maintenance on daily inspection and care of mounters and printers." } },
      { name: { zh: "制程品质实习生", en: "Process Quality Intern" }, count: 8, duty: { zh: "使用 AOI 与显微镜分析不良，输出改善建议。", en: "Analyse defects with AOI and microscopy and propose improvements." } },
    ],
    details: {
      founded: { zh: "2011 年", en: "2011" },
      employees: { zh: "760 人", en: "760 staff" },
      subsidy: { zh: "捐赠设备评估值约 120 万元", en: "Donated equipment appraised at about RMB 1.2m" },
      conversion: { zh: "演示 82%", en: "Demo 82%" },
      address: { zh: "深圳市宝安区沙井街道", en: "Shajing, Bao'an, Shenzhen" },
      website: { zh: "www.demo-hengcheng.com", en: "www.demo-hengcheng.com" },
      email: { zh: "demo@hengcheng.example", en: "demo@hengcheng.example" },
      about: { zh: "公司 2011 年成立，为品牌方做消费电子代工，员工 760 人，年营收约 3.8 亿元。2025 年导入全自动线后，原有的三星贴片机与两条半自动线退役，仍能稳定运行。企业已通过深圳市第三批产教融合型企业培育入库公示。", en: "Founded in 2011, the company contract-manufactures consumer electronics with 760 staff and about RMB 380m revenue. After introducing a fully automatic line in 2025, its older mounter and two semi-automatic lines were retired while still running reliably. It has entered Shenzhen's third batch of industry-education cultivation enterprises." },
      services: [{ zh: "消费电子代工组装", en: "Consumer electronics assembly" }, { zh: "SMT 贴装", en: "SMT mounting" }, { zh: "整机测试", en: "Device testing" }],
      benefits: [{ zh: "导师配比 1:20", en: "Mentor ratio 1:20" }, { zh: "夜班补贴", en: "Night-shift allowance" }, { zh: "技能认证支持", en: "Skill certification support" }, { zh: "转正通道", en: "Permanent conversion track" }]
    }
  },
  {
    id: 3,
    icon: "五金",
    name: { zh: "佛山市盛达金属制品有限公司", en: "Shengda Metal Products (Foshan)" },
    scale: { zh: "中型制造企业 · 钣金与冲压 · 佛山南海 · 340 人 · 年营收约 2.1 亿元", en: "Mid-sized · sheet metal & stamping · Nanhai, Foshan · 340 staff · ~RMB 210m revenue" },
    intro: { zh: "家电钣金配套厂，冲压与激光切割设备换代，旧机可用但已无产能优势。", en: "An appliance sheet-metal tier; stamping and laser-cutting equipment is being renewed, and the old machines still work but no longer compete on capacity." },
    subsidyText: { zh: "设备无偿捐赠 · 提供三年可行性文件", en: "Equipment donated free of charge, with three years of service records" },
    jobs: [
      { name: { zh: "钣金工艺实习生", en: "Sheet-Metal Process Intern" }, count: 10, duty: { zh: "学习折弯、冲压工艺与工装使用，完成简单零件加工。", en: "Learn bending, stamping and fixture use; produce simple parts." } },
      { name: { zh: "设备操作实习生", en: "Machine Operation Intern" }, count: 8, duty: { zh: "在激光切割与冲床工位轮训，学习安全规程。", en: "Rotate through laser cutting and press stations; learn safety rules." } },
      { name: { zh: "质量检验实习生", en: "Quality Inspector Intern" }, count: 6, duty: { zh: "按图纸检验尺寸与外观，记录不良数据。", en: "Inspect dimensions and appearance against drawings; log defect data." } },
    ],
    details: {
      founded: { zh: "2005 年", en: "2005" },
      employees: { zh: "340 人", en: "340 staff" },
      subsidy: { zh: "捐赠设备评估值约 85 万元", en: "Donated equipment appraised at about RMB 850k" },
      conversion: { zh: "演示 75%", en: "Demo 75%" },
      address: { zh: "佛山市南海区狮山镇", en: "Shishan, Nanhai, Foshan" },
      website: { zh: "www.demo-shengda.com", en: "www.demo-shengda.com" },
      email: { zh: "demo@shengda.example", en: "demo@shengda.example" },
      about: { zh: "公司 2005 年成立，为家电企业做钣金与冲压配套，员工 340 人。近年订单向高端机型集中，旧冲床与激光切割机无法满足精度要求，已列入退役计划。企业希望以捐赠方式处理并保留三年维保记录以便评估。", en: "Founded in 2005 and supplying sheet-metal and stamping parts to appliance makers with 340 staff, the firm now concentrates on premium models; its older presses and laser cutter can no longer meet tolerance, so they are scheduled for retirement. It wants to donate them and has kept three years of maintenance records for appraisal." },
      services: [{ zh: "钣金结构件", en: "Sheet-metal structures" }, { zh: "冲压件", en: "Stamped parts" }, { zh: "表面处理", en: "Surface finishing" }],
      benefits: [{ zh: "安全培训先行", en: "Safety training first" }, { zh: "多工位轮训", en: "Multi-station rotation" }, { zh: "班组长带教", en: "Team-leader mentoring" }, { zh: "提供住宿", en: "Housing provided" }]
    }
  },
  {
    id: 4,
    icon: "小家电",
    name: { zh: "中山市华瑞电器制造有限公司", en: "Huarui Electric Appliances (Zhongshan)" },
    scale: { zh: "中型制造企业 · 小家电整机 · 中山南头 · 520 人 · 年营收约 2.9 亿元", en: "Mid-sized · small appliances · Nantou, Zhongshan · 520 staff · ~RMB 290m revenue" },
    intro: { zh: "小家电整机制造商，注塑与总装线各有一条退役，工装完整可整线转移。", en: "A small-appliance maker retiring one moulding line and one assembly line, with complete tooling for whole-line transfer." },
    subsidyText: { zh: "设备无偿捐赠 · 工装夹具一并移交", en: "Equipment donated free of charge, fixtures transferred with it" },
    jobs: [
      { name: { zh: "装配工艺实习生", en: "Assembly Process Intern" }, count: 12, duty: { zh: "学习总装工序编排与作业指导书编制，参与效率改善。", en: "Learn assembly sequencing and work-instruction writing; join efficiency projects." } },
      { name: { zh: "注塑技术实习生", en: "Moulding Technology Intern" }, count: 10, duty: { zh: "跟机学习模具更换、调机与首件确认。", en: "Learn mould changes, machine set-up and first-article approval." } },
      { name: { zh: "来料检验实习生", en: "Incoming Inspection Intern" }, count: 6, duty: { zh: "按抽样标准检验五金与塑料件。", en: "Inspect metal and plastic parts by sampling standard." } },
    ],
    details: {
      founded: { zh: "2003 年", en: "2003" },
      employees: { zh: "520 人", en: "520 staff" },
      subsidy: { zh: "捐赠设备评估值约 95 万元", en: "Donated equipment appraised at about RMB 950k" },
      conversion: { zh: "演示 80%", en: "Demo 80%" },
      address: { zh: "中山市南头镇升辉北路", en: "Shenghui North Rd, Nantou, Zhongshan" },
      website: { zh: "www.demo-huarui.com", en: "www.demo-huarui.com" },
      email: { zh: "demo@huarui.example", en: "demo@huarui.example" },
      about: { zh: "公司 2003 年成立，主打电饭煲、电压力锅等小家电整机，员工 520 人。2024 年新厂投产后旧厂产线整体退役，注塑机与总装线设备成色较好、工装齐全，适合整线转入院校实训室。", en: "Founded in 2003, the firm makes rice cookers and pressure cookers with 520 staff. After its new plant started in 2024 the old plant's lines retired as a whole; the machines are in good condition with full tooling, suiting a whole-line transfer into a college lab." },
      services: [{ zh: "电饭煲整机", en: "Rice cookers" }, { zh: "电压力锅", en: "Pressure cookers" }, { zh: "OEM 代工", en: "OEM manufacturing" }],
      benefits: [{ zh: "工艺工程师带教", en: "Process-engineer mentoring" }, { zh: "员工食堂", en: "Staff canteen" }, { zh: "月度技能考核", en: "Monthly skill assessment" }, { zh: "优先转正", en: "Priority conversion" }]
    }
  },
  {
    id: 5,
    icon: "注塑",
    name: { zh: "惠州市立信精密注塑有限公司", en: "Lixin Precision Moulding (Huizhou)" },
    scale: { zh: "中型制造企业 · 精密注塑 · 惠州仲恺 · 300 人 · 年营收约 1.9 亿元", en: "Mid-sized · precision moulding · Zhongkai, Huizhou · 300 staff · ~RMB 190m revenue" },
    intro: { zh: "为电子信息配套的小件精密注塑厂，四台小型注塑机退役，适合做教学台位。", en: "A small-parts moulder serving electronics; four small machines are retiring and suit teaching stations." },
    subsidyText: { zh: "设备无偿捐赠 · 含模温机与干燥料斗", en: "Equipment donated free of charge, with temperature controllers and dryers" },
    jobs: [
      { name: { zh: "注塑操作实习生", en: "Moulding Operator Intern" }, count: 8, duty: { zh: "学习上下模、参数设置与首件检验。", en: "Learn mould loading, parameter setting and first-article inspection." } },
      { name: { zh: "模具保养实习生", en: "Mould Care Intern" }, count: 6, duty: { zh: "执行模具日检、清洁与防锈作业。", en: "Carry out daily mould inspection, cleaning and rust protection." } },
      { name: { zh: "生产计划实习生", en: "Production Planning Intern" }, count: 4, duty: { zh: "协助排产与物料齐套检查。", en: "Assist with scheduling and material-readiness checks." } },
    ],
    details: {
      founded: { zh: "2012 年", en: "2012" },
      employees: { zh: "300 人", en: "300 staff" },
      subsidy: { zh: "捐赠设备评估值约 70 万元", en: "Donated equipment appraised at about RMB 700k" },
      conversion: { zh: "演示 74%", en: "Demo 74%" },
      address: { zh: "惠州市仲恺高新区和畅五路", en: "Hechang 5th Rd, Zhongkai, Huizhou" },
      website: { zh: "www.demo-lixin.com", en: "www.demo-lixin.com" },
      email: { zh: "demo@lixin.example", en: "demo@lixin.example" },
      about: { zh: "公司 2012 年成立，做连接器与结构件精密注塑，员工 300 人。产品精度要求提高后，原 90 吨与 120 吨机型无法稳定保证公差，已停机待处置。企业规模小、流程短，捐赠决策由老板一人拍板。", en: "Founded in 2012 and moulding connectors and structural parts with 300 staff, the firm can no longer hold tolerance on its 90- and 120-tonne machines as precision requirements rose; they are idle and awaiting disposal. With a short chain of command, the owner decides donations alone." },
      services: [{ zh: "连接器精密件", en: "Connector parts" }, { zh: "结构件注塑", en: "Structural mouldings" }, { zh: "模具开发", en: "Mould development" }],
      benefits: [{ zh: "小班带教", en: "Small-group mentoring" }, { zh: "岗位津贴", en: "Post allowance" }, { zh: "技能等级认定", en: "Skill-level certification" }, { zh: "提供宿舍", en: "Dormitory provided" }]
    }
  },
  {
    id: 6,
    icon: "纺织",
    name: { zh: "江门市新恒纺织科技有限公司", en: "Xinheng Textile Technology (Jiangmen)" },
    scale: { zh: "中型制造企业 · 针织面料与成衣 · 江门新会 · 780 人 · 年营收约 2.4 亿元", en: "Mid-sized · knit fabric & apparel · Xinhui, Jiangmen · 780 staff · ~RMB 240m revenue" },
    intro: { zh: "针织面料与成衣一体厂，缝制车间整批设备换代，二十台直驱缝纫机仍可教学使用。", en: "An integrated knit-and-garment plant; its sewing floor was renewed in bulk and twenty direct-drive machines remain fit for teaching." },
    subsidyText: { zh: "设备无偿捐赠 · 含裁剪台与烫台", en: "Equipment donated free of charge, with cutting and pressing tables" },
    jobs: [
      { name: { zh: "服装工艺实习生", en: "Garment Technology Intern" }, count: 16, duty: { zh: "学习缝制工序与工艺单编制，完成样衣打样。", en: "Learn sewing operations and spec-sheet writing; produce sample garments." } },
      { name: { zh: "面料检测实习生", en: "Fabric Testing Intern" }, count: 6, duty: { zh: "做色牢度、缩水率与强力测试。", en: "Run colour-fastness, shrinkage and strength tests." } },
      { name: { zh: "生产管理实习生", en: "Production Management Intern" }, count: 6, duty: { zh: "跟线统计产量与在制品，参与瓶颈分析。", en: "Track output and WIP on the line; join bottleneck analysis." } },
    ],
    details: {
      founded: { zh: "2001 年", en: "2001" },
      employees: { zh: "780 人", en: "780 staff" },
      subsidy: { zh: "捐赠设备评估值约 110 万元", en: "Donated equipment appraised at about RMB 1.1m" },
      conversion: { zh: "演示 81%", en: "Demo 81%" },
      address: { zh: "江门市新会区会城街道", en: "Huicheng, Xinhui, Jiangmen" },
      website: { zh: "www.demo-xinheng.com", en: "www.demo-xinheng.com" },
      email: { zh: "demo@xinheng.example", en: "demo@xinheng.example" },
      about: { zh: "公司 2001 年成立，做针织面料与成衣出口，员工 780 人。2025 年缝制车间整体更换自动模板机，二十台直驱平缝机与两套裁剪台退役。设备完好、配件通用，是江门职院服装类专业的对口捐赠标的。", en: "Founded in 2001, the firm exports knit fabric and garments with 780 staff. After the sewing floor switched to automatic template machines in 2025, twenty direct-drive lockstitch machines and two cutting tables retired. They are complete with common parts and match Jiangmen Polytechnic's garment programmes." },
      services: [{ zh: "针织面料", en: "Knit fabric" }, { zh: "成衣代工", en: "Garment manufacturing" }, { zh: "面料开发", en: "Fabric development" }],
      benefits: [{ zh: "工艺师带教", en: "Technologist mentoring" }, { zh: "计件+保底", en: "Piece-rate with base pay" }, { zh: "宿舍与餐补", en: "Dormitory and meal allowance" }, { zh: "技能竞赛推荐", en: "Skill-competition nomination" }]
    }
  },
  {
    id: 7,
    icon: "自动化",
    name: { zh: "东莞市锐驰自动化设备有限公司", en: "Ruichi Automation Equipment (Dongguan)" },
    scale: { zh: "中型制造企业 · 自动化集成与检测设备 · 东莞松山湖 · 320 人 · 年营收约 2.8 亿元", en: "Mid-sized · automation integration & inspection · Songshan Lake, Dongguan · 320 staff · ~RMB 280m revenue" },
    intro: { zh: "做非标自动化集成，客户换代后回收的机器人工作站与其自有工装一并退役。", en: "Builds bespoke automation; robot cells recovered from customer upgrades retire together with its own fixtures." },
    subsidyText: { zh: "设备无偿捐赠 · 可提供编程培训两次", en: "Equipment donated free of charge, with two programming training sessions" },
    jobs: [
      { name: { zh: "机器人调试实习生", en: "Robot Commissioning Intern" }, count: 10, duty: { zh: "学习示教编程、I/O 配置与节拍优化。", en: "Learn teach-pendant programming, I/O configuration and cycle-time tuning." } },
      { name: { zh: "机械设计实习生", en: "Mechanical Design Intern" }, count: 6, duty: { zh: "使用三维软件做简单夹具设计与出图。", en: "Design simple fixtures and drawings in 3D CAD." } },
      { name: { zh: "电气装配实习生", en: "Electrical Assembly Intern" }, count: 8, duty: { zh: "按图纸完成控制柜接线与调试。", en: "Wire and commission control cabinets from drawings." } },
    ],
    details: {
      founded: { zh: "2010 年", en: "2010" },
      employees: { zh: "320 人", en: "320 staff" },
      subsidy: { zh: "捐赠设备评估值约 130 万元", en: "Donated equipment appraised at about RMB 1.3m" },
      conversion: { zh: "演示 84%", en: "Demo 84%" },
      address: { zh: "东莞市松山湖园区工业西路", en: "Gongye West Rd, Songshan Lake, Dongguan" },
      website: { zh: "www.demo-ruichi.com", en: "www.demo-ruichi.com" },
      email: { zh: "demo@ruichi.example", en: "demo@ruichi.example" },
      about: { zh: "公司 2010 年成立，做非标自动化与视觉检测集成，员工 320 人。为客户改造产线时回收的六轴机器人与变位机因规格不匹配闲置，成套工装完整。企业希望捐赠后能与院校共建实训课程，同时培养自己的调试人员。", en: "Founded in 2010 and integrating bespoke automation and vision inspection with 320 staff, the firm holds idle six-axis robots and positioners recovered during customer line upgrades, complete with fixtures. It wants to donate them, co-build courses and grow its own commissioning staff." },
      services: [{ zh: "非标自动化集成", en: "Bespoke automation" }, { zh: "视觉检测", en: "Vision inspection" }, { zh: "机器人工作站", en: "Robot cells" }],
      benefits: [{ zh: "工程师带教", en: "Engineer mentoring" }, { zh: "项目制学习", en: "Project-based learning" }, { zh: "出差补贴", en: "Travel allowance" }, { zh: "留用优先", en: "Priority retention" }]
    }
  },
  {
    id: 8,
    icon: "食品",
    name: { zh: "珠海市天成食品机械有限公司", en: "Tiancheng Food Machinery (Zhuhai)" },
    scale: { zh: "中型制造企业 · 食品机械与包装线 · 珠海金湾 · 310 人 · 年营收约 1.7 亿元", en: "Mid-sized · food machinery & packaging · Jinwan, Zhuhai · 310 staff · ~RMB 170m revenue" },
    intro: { zh: "食品机械制造商，自用测试线一条退役，灌装与包装段可拆解教学。", en: "A food-machine builder retiring one in-house test line; filling and packaging sections can be split for teaching." },
    subsidyText: { zh: "设备无偿捐赠 · 含控制柜与备件箱", en: "Equipment donated free of charge, with control cabinets and spares" },
    jobs: [
      { name: { zh: "机械装配实习生", en: "Mechanical Assembly Intern" }, count: 8, duty: { zh: "按图纸完成机架与传动部件装配。", en: "Assemble frames and transmission parts from drawings." } },
      { name: { zh: "机电调试实习生", en: "Electromechanical Commissioning Intern" }, count: 6, duty: { zh: "参与整机调试与故障排查。", en: "Join whole-machine commissioning and troubleshooting." } },
      { name: { zh: "售后服务实习生", en: "After-Sales Intern" }, count: 6, duty: { zh: "随工程师到客户现场做安装与培训。", en: "Attend customer sites with engineers for installation and training." } },
    ],
    details: {
      founded: { zh: "2007 年", en: "2007" },
      employees: { zh: "310 人", en: "310 staff" },
      subsidy: { zh: "捐赠设备评估值约 80 万元", en: "Donated equipment appraised at about RMB 800k" },
      conversion: { zh: "演示 76%", en: "Demo 76%" },
      address: { zh: "珠海市金湾区三灶镇", en: "Sanzao, Jinwan, Zhuhai" },
      website: { zh: "www.demo-tiancheng.com", en: "www.demo-tiancheng.com" },
      email: { zh: "demo@tiancheng.example", en: "demo@tiancheng.example" },
      about: { zh: "公司 2007 年成立，生产灌装与包装机械，员工 310 人。厂内测试线服役十年后淘汰，机械与电气部件仍完整，可直接转为院校机电与自动化专业的整线教学设备。", en: "Founded in 2007, it builds filling and packaging machinery with 310 staff. Its in-house test line was retired after ten years but mechanical and electrical parts remain complete, so it can become a whole-line teaching asset for mechatronics and automation." },
      services: [{ zh: "灌装机械", en: "Filling machinery" }, { zh: "包装线", en: "Packaging lines" }, { zh: "非标定制", en: "Custom builds" }],
      benefits: [{ zh: "整机拆解教学", en: "Whole-machine teardown teaching" }, { zh: "现场服务机会", en: "Field-service exposure" }, { zh: "技能补贴", en: "Skill allowance" }, { zh: "转正名额", en: "Conversion places" }]
    }
  },
  {
    id: 9,
    icon: "线束",
    name: { zh: "深圳市鹏程线束制造有限公司", en: "Pengcheng Wiring Harness (Shenzhen)" },
    scale: { zh: "中型制造企业 · 汽车线束 · 深圳龙岗 · 460 人 · 年营收约 2.2 亿元", en: "Mid-sized · automotive wiring harness · Longgang, Shenzhen · 460 staff · ~RMB 220m revenue" },
    intro: { zh: "汽车线束二级供应商，压接与检测设备换代，旧设备精度仍达教学要求。", en: "A tier-two harness supplier renewing crimping and test equipment whose old machines still meet teaching tolerances." },
    subsidyText: { zh: "设备无偿捐赠 · 含线束工装板 30 套", en: "Equipment donated free of charge, with 30 harness assembly boards" },
    jobs: [
      { name: { zh: "线束工艺实习生", en: "Harness Process Intern" }, count: 12, duty: { zh: "学习压接参数、剖线与端子装配工艺。", en: "Learn crimping parameters, stripping and terminal assembly." } },
      { name: { zh: "测试技术实习生", en: "Test Technology Intern" }, count: 8, duty: { zh: "使用导通测试台做线束电气检测。", en: "Run continuity testing on harness assemblies." } },
      { name: { zh: "质量管理实习生", en: "Quality Management Intern" }, count: 5, duty: { zh: "执行首件、巡检与不良品分析流程。", en: "Perform first-article, patrol and defect analysis." } },
    ],
    details: {
      founded: { zh: "2009 年", en: "2009" },
      employees: { zh: "460 人", en: "460 staff" },
      subsidy: { zh: "捐赠设备评估值约 90 万元", en: "Donated equipment appraised at about RMB 900k" },
      conversion: { zh: "演示 79%", en: "Demo 79%" },
      address: { zh: "深圳市龙岗区坪地街道", en: "Pingdi, Longgang, Shenzhen" },
      website: { zh: "www.demo-pengcheng.com", en: "www.demo-pengcheng.com" },
      email: { zh: "demo@pengcheng.example", en: "demo@pengcheng.example" },
      about: { zh: "公司 2009 年成立，为整车厂配套线束，员工 460 人。2025 年导入全自动压接机后，半自动设备与工装板退役；设备与职业院校线束实训课程高度对口，可直接对接深圳与惠州两所院校。", en: "Founded in 2009 and supplying harnesses to vehicle makers with 460 staff, the firm retired semi-automatic crimping equipment and assembly boards after installing fully automatic machines in 2025. The kit maps closely onto harness training and can go to colleges in Shenzhen and Huizhou." },
      services: [{ zh: "汽车线束", en: "Automotive harnesses" }, { zh: "线束工装", en: "Harness tooling" }, { zh: "电气测试", en: "Electrical testing" }],
      benefits: [{ zh: "工序化带教", en: "Step-by-step mentoring" }, { zh: "计件薪酬", en: "Piece-rate pay" }, { zh: "技能认证", en: "Skill certification" }, { zh: "园区宿舍", en: "Park dormitory" }]
    }
  },
  {
    id: 10,
    icon: "电镀",
    name: { zh: "佛山市南海永泰五金制品有限公司", en: "Yongtai Hardware Products (Foshan)" },
    scale: { zh: "中型制造企业 · 五金电镀与表面处理 · 佛山三水 · 390 人 · 年营收约 1.8 亿元", en: "Mid-sized · hardware & surface treatment · Sanshui, Foshan · 390 staff · ~RMB 180m revenue" },
    intro: { zh: "五金件表面处理与装配厂，环保改造后旧整流与挂镀线停用，教学可用。", en: "A hardware finishing and assembly plant; after an environmental upgrade its old rectifiers and rack line stopped and are usable for teaching." },
    subsidyText: { zh: "设备无偿捐赠 · 需随附环保合规说明", en: "Equipment donated free of charge; an environmental compliance note must accompany it" },
    jobs: [
      { name: { zh: "表面处理实习生", en: "Surface Treatment Intern" }, count: 10, duty: { zh: "学习前处理、电镀参数与膜厚检测。", en: "Learn pre-treatment, plating parameters and coating-thickness testing." } },
      { name: { zh: "设备维护实习生", en: "Maintenance Intern" }, count: 6, duty: { zh: "负责整流器与槽液循环系统点检。", en: "Inspect rectifiers and bath circulation systems." } },
      { name: { zh: "环保运行实习生", en: "Environmental Operations Intern" }, count: 6, duty: { zh: "参与废水处理站的日常运行记录。", en: "Join daily log-keeping at the wastewater station." } },
    ],
    details: {
      founded: { zh: "2004 年", en: "2004" },
      employees: { zh: "390 人", en: "390 staff" },
      subsidy: { zh: "捐赠设备评估值约 75 万元", en: "Donated equipment appraised at about RMB 750k" },
      conversion: { zh: "演示 73%", en: "Demo 73%" },
      address: { zh: "佛山市三水区乐平镇", en: "Leping, Sanshui, Foshan" },
      website: { zh: "www.demo-yongtai.com", en: "www.demo-yongtai.com" },
      email: { zh: "demo@yongtai.example", en: "demo@yongtai.example" },
      about: { zh: "公司 2004 年成立，做五金件电镀与装配，员工 390 人。2025 年完成环保技术改造，旧整流器与两条挂镀线停用。因涉及表面处理工艺，捐赠时须同时移交环保合规材料，受赠院校须具备相应实训资质。", en: "Founded in 2004, it plates and assembles hardware with 390 staff. An environmental upgrade in 2025 idled old rectifiers and two rack-plating lines. Because plating involves chemicals, the donation must travel with compliance documents and the receiving college must hold the relevant training licence." },
      services: [{ zh: "五金电镀", en: "Hardware plating" }, { zh: "表面处理", en: "Surface treatment" }, { zh: "五金装配", en: "Hardware assembly" }],
      benefits: [{ zh: "持证上岗培训", en: "Licensed-operation training" }, { zh: "环保岗位轮训", en: "Environmental rotation" }, { zh: "岗位津贴", en: "Post allowance" }, { zh: "稳定加班", en: "Steady overtime" }]
    }
  },
  {
    id: 11,
    icon: "机器人",
    name: { zh: "广州市睿达工业机器人集成有限公司", en: "Ruida Robotics Integration (Guangzhou)" },
    scale: { zh: "中型制造企业 · 机器人集成与焊装 · 广州黄埔 · 320 人 · 年营收约 2.5 亿元", en: "Mid-sized · robotics integration & welding · Huangpu, Guangzhou · 320 staff · ~RMB 250m revenue" },
    intro: { zh: "焊装线集成商，返修工位的机器人工作站整体退役，配套焊机与围栏齐全。", en: "A welding-line integrator retiring a whole rework robot cell with welders and fencing." },
    subsidyText: { zh: "设备无偿捐赠 · 含安全围栏与培训课程", en: "Equipment donated free of charge, with safety fencing and a training course" },
    jobs: [
      { name: { zh: "焊接机器人实习生", en: "Welding Robot Intern" }, count: 12, duty: { zh: "学习轨迹示教、焊接参数与工装定位。", en: "Learn path teaching, welding parameters and fixture locating." } },
      { name: { zh: "夹具设计实习生", en: "Fixture Design Intern" }, count: 6, duty: { zh: "参与焊装夹具设计与装配调试。", en: "Join welding-fixture design and set-up." } },
      { name: { zh: "安全评估实习生", en: "Safety Assessment Intern" }, count: 5, duty: { zh: "学习机器人工作站安全标准与防护配置。", en: "Learn robot-cell safety standards and guarding." } },
    ],
    details: {
      founded: { zh: "2013 年", en: "2013" },
      employees: { zh: "320 人", en: "320 staff" },
      subsidy: { zh: "捐赠设备评估值约 115 万元", en: "Donated equipment appraised at about RMB 1.15m" },
      conversion: { zh: "演示 83%", en: "Demo 83%" },
      address: { zh: "广州市黄埔区科学城", en: "Science City, Huangpu, Guangzhou" },
      website: { zh: "www.demo-ruida.com", en: "www.demo-ruida.com" },
      email: { zh: "demo@ruida.example", en: "demo@ruida.example" },
      about: { zh: "公司 2013 年成立，做汽车焊装线集成，员工 320 人。返修工位升级后，整套焊接机器人工作站退役，含变位机、焊机与安全围栏。企业愿意配套两次教师培训，并优先录用受赠院校毕业生。", en: "Founded in 2013 and integrating automotive welding lines with 320 staff, the firm retired a complete welding robot cell — positioner, welder and fencing — after upgrading its rework station. It offers two teacher-training sessions and priority hiring from the receiving college." },
      services: [{ zh: "焊装线集成", en: "Welding line integration" }, { zh: "机器人工作站", en: "Robot cells" }, { zh: "安全防护方案", en: "Safety guarding" }],
      benefits: [{ zh: "工程师带教", en: "Engineer mentoring" }, { zh: "安全标准训练", en: "Safety-standard training" }, { zh: "项目奖金", en: "Project bonus" }, { zh: "定向招聘", en: "Targeted hiring" }]
    }
  },
  {
    id: 12,
    icon: "电路板",
    name: { zh: "东莞市宏图电子科技有限公司", en: "Hongtu Electronics (Dongguan)" },
    scale: { zh: "中型制造企业 · PCB 组装与测试 · 东莞塘厦 · 880 人 · 年营收约 3.6 亿元", en: "Mid-sized · PCB assembly & test · Tangxia, Dongguan · 880 staff · ~RMB 360m revenue" },
    intro: { zh: "PCB 组装厂，测试与老化设备换代，旧测台与示波器整套退役。", en: "A PCB assembler renewing test and burn-in equipment; the old test benches and scopes retire as a set." },
    subsidyText: { zh: "设备无偿捐赠 · 含测试治具与耗材", en: "Equipment donated free of charge, with test fixtures and consumables" },
    jobs: [
      { name: { zh: "测试工程实习生", en: "Test Engineering Intern" }, count: 14, duty: { zh: "学习 ICT/FCT 测试原理与治具维护。", en: "Learn ICT/FCT principles and fixture care." } },
      { name: { zh: "SMT 设备实习生", en: "SMT Equipment Intern" }, count: 8, duty: { zh: "跟随机修完成印刷机与贴片机保养。", en: "Service printers and mounters alongside maintenance." } },
      { name: { zh: "失效分析实习生", en: "Failure Analysis Intern" }, count: 6, duty: { zh: "使用显微镜与 X-Ray 做失效定位。", en: "Locate failures with microscopy and X-ray." } },
    ],
    details: {
      founded: { zh: "2006 年", en: "2006" },
      employees: { zh: "880 人", en: "880 staff" },
      subsidy: { zh: "捐赠设备评估值约 105 万元", en: "Donated equipment appraised at about RMB 1.05m" },
      conversion: { zh: "演示 81%", en: "Demo 81%" },
      address: { zh: "东莞市塘厦镇林村", en: "Lincun, Tangxia, Dongguan" },
      website: { zh: "www.demo-hongtu.com", en: "www.demo-hongtu.com" },
      email: { zh: "demo@hongtu.example", en: "demo@hongtu.example" },
      about: { zh: "公司 2006 年成立，做 PCB 组装与整机测试，员工 880 人。2025 年测试体系升级为自动化平台，旧测试台、示波器与老化柜整套退役。企业规模接近中型上限，捐赠决策需总经理办公会通过。", en: "Founded in 2006 and doing PCB assembly and device testing with 880 staff, the firm moved to an automated test platform in 2025, retiring its benches, scopes and burn-in cabinets. Close to the upper bound of the mid-sized band, its donation needs general-manager approval." },
      services: [{ zh: "PCB 组装", en: "PCB assembly" }, { zh: "功能测试", en: "Functional testing" }, { zh: "老化试验", en: "Burn-in testing" }],
      benefits: [{ zh: "测试岗位带教", en: "Test-post mentoring" }, { zh: "夜班津贴", en: "Night allowance" }, { zh: "技能等级晋升", en: "Skill-level promotion" }, { zh: "厂内培训中心", en: "In-house training centre" }]
    }
  },
];

const EQUIPMENT = [
  {
    id: 1,
    icon: "注塑",
    name: { zh: "海天 MA1600 注塑机 ×3 台", en: "Haitian MA1600 Injection Machines ×3" },
    category: { zh: "注塑成型 · 2014 年产", en: "Injection moulding · built 2014" },
    origin: { zh: "来源：东莞立意精密模具（中型 · 480 人）", en: "Origin: Liyi Precision Mould, Dongguan (mid-sized, 480 staff)" },
    condition: { zh: "成色 7.5 成新 · 账面净值已为零", en: "75% condition · zero net book value" },
    newPrice: "¥320,000",
    price: "¥0（捐赠）",
    mentorId: 1,
    fits: [{ zh: "模具设计与制造", en: "Mould Design & Manufacturing" }, { zh: "智能制造装备技术", en: "Smart Manufacturing Equipment" }, { zh: "高分子材料", en: "Polymer Materials" }],
    desc: { zh: "锁模力 1600kN 伺服机型，含机械手接口与模温机，三台整套适合建一个注塑实训台位。", en: "1,600 kN servo machines with robot interface and temperature controllers; a set of three outfits one moulding training station." }
  },
  {
    id: 2,
    icon: "缝制",
    name: { zh: "兄弟 S-7300A 直驱缝纫机 ×20 台", en: "Brother S-7300A Direct-drive Sewing Machines ×20" },
    category: { zh: "服装缝制 · 2015 年产", en: "Garment sewing · built 2015" },
    origin: { zh: "来源：江门新恒纺织（中型 · 780 人）", en: "Origin: Xinheng Textile, Jiangmen (mid-sized, 780 staff)" },
    condition: { zh: "成色 8 成新 · 已统一保养", en: "80% condition · serviced in batch" },
    newPrice: "¥400,000（套）",
    price: "¥0（捐赠）",
    mentorId: 2,
    fits: [{ zh: "服装设计与工艺", en: "Garment Design & Technology" }, { zh: "服装智能制造", en: "Smart Apparel Manufacturing" }],
    desc: { zh: "直驱节能机型，带自动切线，20 台整套可直接布置一间服装工艺实训室。", en: "Direct-drive energy-saving models with auto trimming; a set of 20 outfits a garment lab directly." }
  },
  {
    id: 3,
    icon: "焊接",
    name: { zh: "FANUC M-10iA 焊接机器人工作站", en: "FANUC M-10iA Welding Robot Cell" },
    category: { zh: "工业机器人 · 2017 年产", en: "Industrial robot · built 2017" },
    origin: { zh: "来源：广州睿达机器人集成（中型 · 320 人）", en: "Origin: Ruida Robotics, Guangzhou (mid-sized, 320 staff)" },
    condition: { zh: "成色 8.5 成新 · 含变位机、焊机与围栏", en: "85% condition · positioner, welder and fencing" },
    newPrice: "¥300,000",
    price: "¥0（捐赠）",
    mentorId: 3,
    fits: [{ zh: "工业机器人技术", en: "Industrial Robotics" }, { zh: "焊接技术与自动化", en: "Welding & Automation" }],
    desc: { zh: "六轴焊接机器人整站，含变位机、焊机与安全围栏，可直接用于机器人编程与焊接工艺实训。", en: "A complete six-axis welding cell with positioner, welder and safety fencing, ready for robot programming and welding practice." }
  },
  {
    id: 4,
    icon: "数控",
    name: { zh: "大连机床 CAK6150 数控车床 ×2 台", en: "Dalian CAK6150 CNC Lathes ×2" },
    category: { zh: "数控加工 · 2013 年产", en: "CNC turning · built 2013" },
    origin: { zh: "来源：佛山盛达金属制品（中型 · 340 人）", en: "Origin: Shengda Metal, Foshan (mid-sized, 340 staff)" },
    condition: { zh: "成色 7 成新 · 精度满足教学", en: "70% condition · tolerance adequate for teaching" },
    newPrice: "¥120,000（单台）",
    price: "¥0（捐赠）",
    mentorId: 4,
    fits: [{ zh: "数控技术", en: "CNC Technology" }, { zh: "机械制造及自动化", en: "Mechanical Manufacturing & Automation" }],
    desc: { zh: "经济型数控车床两台，系统为广数，维修资料齐全，适合做基础车削与编程训练。", en: "Two economical CNC lathes on GSK controls with full repair documentation, suited to basic turning and programming." }
  },
  {
    id: 5,
    icon: "SMT",
    name: { zh: "三星 SM482 SMT 贴片机 ×2 台", en: "Samsung SM482 SMT Mounters ×2" },
    category: { zh: "电子制造 · 2015 年产", en: "Electronics manufacturing · built 2015" },
    origin: { zh: "来源：深圳恒铖电子（中型 · 760 人）", en: "Origin: Hengcheng Electronics, Shenzhen (mid-sized, 760 staff)" },
    condition: { zh: "成色 7.5 成新 · 含印刷机与回流炉", en: "75% condition · printer and reflow oven included" },
    newPrice: "¥450,000",
    price: "¥0（捐赠）",
    mentorId: 5,
    fits: [{ zh: "电子信息工程技术", en: "Electronic Information Engineering" }, { zh: "应用电子技术", en: "Applied Electronics" }],
    desc: { zh: "含锡膏印刷机与六温区回流炉的半自动 SMT 线，节拍适合教学，可完成完整贴装流程。", en: "A semi-automatic SMT line with paste printer and six-zone reflow oven; its cycle time suits teaching a complete mounting process." }
  },
  {
    id: 6,
    icon: "空压",
    name: { zh: "阿特拉斯 GA30 空压机系统", en: "Atlas Copco GA30 Compressor System" },
    category: { zh: "动力设备 · 2016 年产", en: "Power equipment · built 2016" },
    origin: { zh: "来源：珠海天成食品机械（中型 · 310 人）", en: "Origin: Tiancheng Food Machinery, Zhuhai (mid-sized, 310 staff)" },
    condition: { zh: "成色 8 成新 · 含储气罐与冷干机", en: "80% condition · receiver and dryer included" },
    newPrice: "¥90,000",
    price: "¥0（捐赠）",
    mentorId: 6,
    fits: [{ zh: "机电一体化技术", en: "Mechatronics" }, { zh: "设备维修与管理", en: "Equipment Maintenance & Management" }],
    desc: { zh: "螺杆空压机整套动力系统，可作为院校实训车间气源，同时用于设备点检与维护教学。", en: "A complete screw-compressor system usable as shop air and as a teaching asset for inspection and maintenance." }
  },
  {
    id: 7,
    icon: "3D打印",
    name: { zh: "工业级 3D 打印机阵列 ×6 台", en: "Industrial 3D Printer Array ×6" },
    category: { zh: "增材制造 · 2018 年产", en: "Additive manufacturing · built 2018" },
    origin: { zh: "来源：东莞锐驰自动化（中型 · 320 人）", en: "Origin: Ruichi Automation, Dongguan (mid-sized, 320 staff)" },
    condition: { zh: "成色 8 成新 · 含后处理工作台", en: "80% condition · post-processing bench included" },
    newPrice: "¥180,000（套）",
    price: "¥0（捐赠）",
    mentorId: 7,
    fits: [{ zh: "增材制造技术", en: "Additive Manufacturing" }, { zh: "工业设计", en: "Industrial Design" }],
    desc: { zh: "六台 FDM 工业机型整套转让，含后处理工作台与耗材，可支撑一个增材制造实训单元。", en: "Six industrial FDM machines transferred as a set with a post-processing bench and consumables, enough for one additive-manufacturing unit." }
  },
  {
    id: 8,
    icon: "机械手",
    name: { zh: "六轴机械手 ×4 台（上下料工装）", en: "Six-axis Robots ×4 with Load/Unload Fixtures" },
    category: { zh: "工业机器人 · 2018 年产", en: "Industrial robots · built 2018" },
    origin: { zh: "来源：东莞锐驰自动化（中型 · 320 人）", en: "Origin: Ruichi Automation, Dongguan (mid-sized, 320 staff)" },
    condition: { zh: "成色 9 成新 · 工装完整", en: "90% condition · complete fixtures" },
    newPrice: "¥200,000（套）",
    price: "¥0（捐赠）",
    mentorId: 8,
    fits: [{ zh: "工业机器人技术", en: "Industrial Robotics" }, { zh: "自动化生产线安装与调试", en: "Automated Line Installation" }],
    desc: { zh: "四台六轴机器人配上下料工装，可组成一条小型自动化产线，用于编程与联调教学。", en: "Four six-axis robots with load/unload fixtures can form a small automated line for programming and commissioning practice." }
  },
  {
    id: 9,
    icon: "加工中心",
    name: { zh: "立式加工中心 VMC850 ×2 台", en: "Vertical Machining Centres VMC850 ×2" },
    category: { zh: "数控加工 · 2012 年产", en: "CNC machining · built 2012" },
    origin: { zh: "来源：佛山盛达金属制品（中型 · 340 人）", en: "Origin: Shengda Metal, Foshan (mid-sized, 340 staff)" },
    condition: { zh: "成色 6.5 成新 · 待更换主轴轴承", en: "65% condition · spindle bearings to be replaced" },
    newPrice: "¥280,000（单台）",
    price: "¥0（捐赠）",
    mentorId: 9,
    fits: [{ zh: "数控技术", en: "CNC Technology" }, { zh: "模具设计与制造", en: "Mould Design & Manufacturing" }],
    desc: { zh: "两台立式加工中心，需更换主轴轴承后可用于铣削与模具加工教学。", en: "Two vertical machining centres; after spindle-bearing replacement they can serve milling and mould-making teaching." }
  },
  {
    id: 10,
    icon: "激光",
    name: { zh: "光纤激光切割机 1500W", en: "Fibre Laser Cutter 1,500 W" },
    category: { zh: "钣金加工 · 2017 年产", en: "Sheet-metal working · built 2017" },
    origin: { zh: "来源：佛山盛达金属制品（中型 · 340 人）", en: "Origin: Shengda Metal, Foshan (mid-sized, 340 staff)" },
    condition: { zh: "成色 8 成新 · 含冷水机与空压", en: "80% condition · chiller and air supply included" },
    newPrice: "¥260,000",
    price: "¥0（捐赠）",
    mentorId: 10,
    fits: [{ zh: "机械制造及自动化", en: "Mechanical Manufacturing" }, { zh: "钣金工艺", en: "Sheet-Metal Technology" }],
    desc: { zh: "1500W 光纤激光切割机，可切 3mm 碳钢，适合钣金下料与工艺参数教学。", en: "A 1,500 W fibre laser able to cut 3 mm mild steel, suited to blanking and parameter teaching." }
  },
  {
    id: 11,
    icon: "测试",
    name: { zh: "ICT/FCT 综合测试台 ×3 套", en: "ICT/FCT Test Benches ×3" },
    category: { zh: "电子测试 · 2016 年产", en: "Electronics test · built 2016" },
    origin: { zh: "来源：东莞宏图电子（中型 · 880 人）", en: "Origin: Hongtu Electronics, Dongguan (mid-sized, 880 staff)" },
    condition: { zh: "成色 7.5 成新 · 含测试治具", en: "75% condition · test fixtures included" },
    newPrice: "¥150,000（套）",
    price: "¥0（捐赠）",
    mentorId: 11,
    fits: [{ zh: "电子信息工程技术", en: "Electronic Information Engineering" }, { zh: "电子产品制造技术", en: "Electronics Manufacturing" }],
    desc: { zh: "三套在线测试台与治具，含示波器与可编程电源，适合电子产品测试课程。", en: "Three in-line test benches with fixtures, scopes and programmable supplies, suited to electronics test courses." }
  },
  {
    id: 12,
    icon: "包装",
    name: { zh: "自动化包装线（灌装+封箱）", en: "Automated Packaging Line (Filling + Cartoning)" },
    category: { zh: "包装与食品机械 · 2015 年产", en: "Packaging & food machinery · built 2015" },
    origin: { zh: "来源：珠海天成食品机械（中型 · 310 人）", en: "Origin: Tiancheng Food Machinery, Zhuhai (mid-sized, 310 staff)" },
    condition: { zh: "成色 7.5 成新 · 可拆解教学", en: "75% condition · can be split for teaching" },
    newPrice: "¥220,000",
    price: "¥0（捐赠）",
    mentorId: 12,
    fits: [{ zh: "机电一体化技术", en: "Mechatronics" }, { zh: "包装工程技术", en: "Packaging Engineering" }],
    desc: { zh: "灌装、旋盖与封箱三段组成的整线，可整线运行也可拆解做部件教学。", en: "A line of filling, capping and cartoning sections; runs as a whole or splits for component teaching." }
  },
];

const MENTORS = [
  {
    id: 1,
    icon: "注塑",
    name: { zh: "陈志强师傅", en: "Master Chan Chi-keung" },
    trade: { zh: "注塑工艺", en: "Injection Moulding" },
    years: 28,
    origin: { zh: "原东莞立意精密模具注塑车间主任", en: "Former moulding shop supervisor, Liyi Precision Mould" },
    courses: [{ zh: "注塑机操作与调机", en: "Machine operation & set-up" }, { zh: "模具保养与故障处理", en: "Mould care & troubleshooting" }, { zh: "工艺参数优化", en: "Process parameter optimisation" }],
    intro: { zh: "28 年注塑一线经验，带出徒弟 30 余人，擅长翘曲、缩水等疑难工艺。", en: "28 years on the moulding floor, 30+ apprentices mentored, expert in warpage, sink marks and hard process issues." }
  },
  {
    id: 2,
    icon: "缝制",
    name: { zh: "林桂芳师傅", en: "Master Lam Kwai-fong" },
    trade: { zh: "服装工艺", en: "Garment Technology" },
    years: 25,
    origin: { zh: "原江门新恒纺织高级工艺师", en: "Former senior technologist, Xinheng Textile" },
    courses: [{ zh: "衬衫与外套缝制工艺", en: "Shirt & jacket sewing" }, { zh: "服装品质检验", en: "Garment quality control" }, { zh: "产线工序编排", en: "Line process planning" }],
    intro: { zh: "25 年服装制造经验，参与多个出口订单工艺标准制定，擅长高难度工序培训。", en: "25 years in garment manufacturing, having set process standards for export orders and trained hard operations." }
  },
  {
    id: 3,
    icon: "焊接",
    name: { zh: "张国伟师傅", en: "Master Cheung Kwok-wai" },
    trade: { zh: "焊接与工业机器人", en: "Welding & Robotics" },
    years: 20,
    origin: { zh: "原广州睿达机器人集成焊接工程师", en: "Former welding engineer, Ruida Robotics" },
    courses: [{ zh: "手工焊与机器人焊接", en: "Manual & robotic welding" }, { zh: "FANUC 机器人编程", en: "FANUC robot programming" }, { zh: "焊接工艺评定", en: "Welding procedure qualification" }],
    intro: { zh: "20 年焊接与机器人应用经验，持国际焊接证书，主导过多条机器人焊接产线建设。", en: "20 years in welding and robotics with an international welding certificate; led several robot welding lines." }
  },
  {
    id: 4,
    icon: "数控",
    name: { zh: "黄建国师傅", en: "Master Wong Kin-kwok" },
    trade: { zh: "数控加工", en: "CNC Machining" },
    years: 22,
    origin: { zh: "原佛山盛达金属制品数控车间主管", en: "Former CNC shop supervisor, Shengda Metal" },
    courses: [{ zh: "数控车/铣编程", en: "CNC turning & milling programming" }, { zh: "刀具选择与管理", en: "Tool selection & management" }, { zh: "加工精度控制", en: "Machining accuracy control" }],
    intro: { zh: "22 年数控加工经验，熟悉广数、FANUC 系统，擅长用真实零件案例教学。", en: "22 years in CNC machining across GSK and FANUC controls; teaches through real part cases." }
  },
  {
    id: 5,
    icon: "SMT",
    name: { zh: "李淑仪师傅", en: "Master Lee Shuk-yee" },
    trade: { zh: "电子制造（SMT）", en: "Electronics (SMT)" },
    years: 18,
    origin: { zh: "原深圳恒铖电子 SMT 工艺主管", en: "Former SMT process supervisor, Hengcheng Electronics" },
    courses: [{ zh: "SMT 贴片工艺", en: "SMT mounting process" }, { zh: "回流焊与手工焊", en: "Reflow & hand soldering" }, { zh: "产线物料与防错管理", en: "Line material & poka-yoke" }],
    intro: { zh: "18 年电子制造经验，主导过多条 SMT 产线导入，擅长把产线规范变成实训课程。", en: "18 years in electronics manufacturing, having introduced several SMT lines and turned line rules into course content." }
  },
  {
    id: 6,
    icon: "机电",
    name: { zh: "王德发师傅", en: "Master Wong Tak-fat" },
    trade: { zh: "设备维修与机电", en: "Equipment Maintenance" },
    years: 30,
    origin: { zh: "原珠海天成食品机械设备科科长", en: "Former equipment section chief, Tiancheng Food Machinery" },
    courses: [{ zh: "设备点检与保养体系", en: "Inspection & maintenance systems" }, { zh: "空压/气动系统维护", en: "Compressed-air & pneumatics" }, { zh: "常见机电故障诊断", en: "Electromechanical fault diagnosis" }],
    intro: { zh: "30 年设备维修经验，从机修工做到设备科长，擅长把复杂的机电故障讲得通俗易懂。", en: "30 years in maintenance, rising from fitter to section chief; explains complex faults in plain language." }
  },
  {
    id: 7,
    icon: "机器人",
    name: { zh: "周师傅", en: "Master Chow" },
    trade: { zh: "自动化调试", en: "Automation Commissioning" },
    years: 22,
    origin: { zh: "原东莞锐驰自动化调试主管", en: "Former commissioning supervisor, Ruichi Automation" },
    courses: [{ zh: "六轴机器人示教编程", en: "Six-axis robot teach programming" }, { zh: "产线联调与节拍优化", en: "Line commissioning & cycle tuning" }, { zh: "安全防护配置", en: "Safety guarding configuration" }],
    intro: { zh: "22 年自动化产线调试经验，主导过多条整线交付，擅长带学生做真机联调。", en: "22 years commissioning automated lines and delivering whole-line projects; good at guiding students through live integration." }
  },
  {
    id: 8,
    icon: "机器人",
    name: { zh: "梁师傅", en: "Master Leung" },
    trade: { zh: "机械装配与夹具", en: "Assembly & Fixtures" },
    years: 25,
    origin: { zh: "原东莞锐驰自动化机械装配技师", en: "Former assembly technician, Ruichi Automation" },
    courses: [{ zh: "机械装配与调平", en: "Mechanical assembly & alignment" }, { zh: "夹具设计与制作", en: "Fixture design & build" }, { zh: "精度检测与验收", en: "Accuracy inspection & acceptance" }],
    intro: { zh: "25 年机械装配经验，对激光切割、钣金设备了如指掌，带徒弟耐心细致。", en: "25 years in mechanical assembly with deep knowledge of laser and sheet-metal equipment; a patient mentor." }
  },
  {
    id: 9,
    icon: "数控",
    name: { zh: "何师傅", en: "Master Ho" },
    trade: { zh: "模具与加工中心", en: "Moulds & Machining Centres" },
    years: 26,
    origin: { zh: "原佛山盛达金属制品模具主管", en: "Former mould supervisor, Shengda Metal" },
    courses: [{ zh: "加工中心操作与编程", en: "Machining-centre operation & programming" }, { zh: "模具结构设计", en: "Mould structure design" }, { zh: "试模与修模", en: "Mould trials & repair" }],
    intro: { zh: "26 年精密模具经验，服务过多个国际品牌项目，模具结构讲解深入浅出。", en: "26 years in precision moulds across international brand projects; explains mould structures clearly." }
  },
  {
    id: 10,
    icon: "激光",
    name: { zh: "吴师傅", en: "Master Ng" },
    trade: { zh: "钣金与激光切割", en: "Sheet Metal & Laser Cutting" },
    years: 18,
    origin: { zh: "原佛山盛达金属制品激光工段长", en: "Former laser section leader, Shengda Metal" },
    courses: [{ zh: "激光切割参数设定", en: "Laser cutting parameters" }, { zh: "钣金展开与下料", en: "Sheet-metal development & blanking" }, { zh: "设备日常维护", en: "Daily equipment care" }],
    intro: { zh: "18 年钣金加工经验，熟悉光纤激光切割全流程，能带学生从图纸做到成品。", en: "18 years in sheet-metal work with full fibre-laser know-how; takes students from drawing to finished part." }
  },
];

const MATCH_TAGS = {
  schools: {
    1: { city: "深圳", grades: ["大二", "大三"], fields: ["智能制造", "电子信息", "机器人"], expectMin: 120, expectMax: 200 },
    2: { city: "深圳", grades: ["大二", "大三"], fields: ["智能制造", "电子技术", "模具"], expectMin: 110, expectMax: 180 },
    3: { city: "广州", grades: ["大二", "大三"], fields: ["智能制造", "珠宝首饰", "汽车"], expectMin: 110, expectMax: 190 },
    4: { city: "广州", grades: ["大二", "大三"], fields: ["机电一体化", "数控", "模具"], expectMin: 110, expectMax: 180 },
    5: { city: "广州", grades: ["大二", "大三"], fields: ["轨道交通", "汽车", "机电"], expectMin: 110, expectMax: 180 },
    6: { city: "广州", grades: ["大二", "大三"], fields: ["航空机电", "电子信息", "机场运行"], expectMin: 120, expectMax: 200 },
    7: { city: "佛山", grades: ["大二", "大三"], fields: ["智能家电", "智能制造", "工业设计"], expectMin: 110, expectMax: 190 },
    8: { city: "珠海", grades: ["大二", "大三"], fields: ["智能制造", "电子信息", "机电"], expectMin: 110, expectMax: 180 },
    9: { city: "惠州", grades: ["大二", "大三"], fields: ["智能制造", "机电", "电子信息"], expectMin: 100, expectMax: 180 },
    10: { city: "江门", grades: ["大二", "大三"], fields: ["机电一体化", "智能制造", "模具"], expectMin: 100, expectMax: 170 },
    11: { city: "中山", grades: ["大二", "大三"], fields: ["智能家电", "光电", "机电"], expectMin: 100, expectMax: 170 },
    12: { city: "香港", grades: ["大二", "大三"], fields: ["机电工程", "智能制造", "数码设计"], expectMin: 90, expectMax: 160 }
  },
  companies: {
    1: { city: "东莞", grades: ["大二", "大三"], fields: ["注塑", "模具", "数控"], subsidyMin: 100, subsidyMax: 100, size: "中型" },
    2: { city: "深圳", grades: ["大二", "大三"], fields: ["电子", "电路板", "品质"], subsidyMin: 120, subsidyMax: 120, size: "中型" },
    3: { city: "佛山", grades: ["大二", "大三"], fields: ["五金", "钣金", "焊接"], subsidyMin: 85, subsidyMax: 85, size: "中型" },
    4: { city: "中山", grades: ["大二", "大三"], fields: ["小家电", "装配", "品质"], subsidyMin: 95, subsidyMax: 95, size: "中型" },
    5: { city: "惠州", grades: ["大二", "大三"], fields: ["注塑", "模具", "自动化"], subsidyMin: 70, subsidyMax: 70, size: "中型" },
    6: { city: "江门", grades: ["大二", "大三"], fields: ["纺织", "染整", "品质"], subsidyMin: 110, subsidyMax: 110, size: "中型" },
    7: { city: "东莞", grades: ["大二", "大三"], fields: ["自动化", "机械手", "电气"], subsidyMin: 130, subsidyMax: 130, size: "中型" },
    8: { city: "珠海", grades: ["大二", "大三"], fields: ["食品机械", "包装", "装配"], subsidyMin: 80, subsidyMax: 80, size: "中型" },
    9: { city: "深圳", grades: ["大二", "大三"], fields: ["线束", "电子", "汽车"], subsidyMin: 90, subsidyMax: 90, size: "中型" },
    10: { city: "佛山", grades: ["大二", "大三"], fields: ["电镀", "五金", "表处"], subsidyMin: 75, subsidyMax: 75, size: "中型" },
    11: { city: "广州", grades: ["大二", "大三"], fields: ["工业机器人", "集成", "视觉"], subsidyMin: 115, subsidyMax: 115, size: "中型" },
    12: { city: "东莞", grades: ["大二", "大三"], fields: ["电路板", "SMT", "测试"], subsidyMin: 105, subsidyMax: 105, size: "中型" }
  }
};

/* ============ 香港制造业历史（首页展示） ============ */
const HISTORY = [
  {
    zh: { t: "1950s–70s · 轻工业起飞", d: "战后香港纺织、塑胶、玩具、钟表业崛起，成为「亚洲四小龙」之一，制造业占本地生产总值一度超过三成，培养出第一代产业工人与技师。" },
    en: { t: "1950s–70s · Light Industry Take-off", d: "Post-war Hong Kong rose on textiles, plastics, toys and watches to become one of the 'Four Asian Tigers'. Manufacturing once exceeded 30% of GDP, training the first generation of industrial workers and technicians." }
  },
  {
    zh: { t: "1980s–90s · 北移珠三角", d: "改革开放后港资工厂大规模北移，「前店后厂」格局形成。香港负责接单、设计与融资，珠三角负责制造——香港与内地制造业血脉相连。" },
    en: { t: "1980s–90s · Moving North", d: "After reform and opening-up, Hong Kong capital moved production into the Pearl River Delta under the 'front shop, back factory' model — Hong Kong handled orders, design and finance while the PRD manufactured." }
  },
  {
    zh: { t: "2000s · 品牌与高端化", d: "留存下来的香港制造企业转向高端化与全球化：德昌电机的微电机、维他奶的植物蛋白饮料、GP 电池行销全球，沉淀出深厚工艺与质量体系。" },
    en: { t: "2000s · Brands & Premiumisation", d: "Surviving Hong Kong manufacturers went global and premium: Johnson Electric's micro-motors, Vitasoy's plant-protein drinks and GP batteries reached world markets, building deep process and quality systems." }
  },
  {
    zh: { t: "今天 · 再工业化与双循环", d: "香港推动新型工业化，内地转向高质量发展。大量设备进入更新周期，而技能人才缺口近 3000 万——设备与人才的双循环，正当其时。" },
    en: { t: "Today · Re-industrialisation & Dual Circulation", d: "Hong Kong pursues new industrialisation while the mainland shifts to high-quality development. A massive equipment renewal cycle meets a skilled-worker gap of nearly 30 million — the right moment for the dual circulation of equipment and talent." }
  }
];

/* ============ 政府背书（政策文件） ============ */
const POLICIES = [
  {
    no: "国发〔2024〕7 号",
    noEn: "Guofa [2024] No. 7",
    zh: { t: "大规模设备更新行动方案", d: "到 2027 年重点领域设备投资规模增长 25% 以上；明确推动高校、职业院校更新置换教学科研设备，支持废旧设备线上交易平台发展。" },
    en: { t: "Large-Scale Equipment Renewal Action Plan", d: "By 2027, equipment investment in key sectors up 25%+; explicitly supports colleges replacing teaching & research equipment and online trading platforms for used equipment." }
  },
  {
    no: "发改委 + 教育部 2024",
    noEn: "NDRC + MOE 2024",
    zh: { t: "教育领域重大设备更新实施方案", d: "职业院校实训教学设备纳入支持，地方院校按 40%–80% 比例补助；鼓励高校将更新置换出的旧设备捐赠给欠发达地区学校。" },
    en: { t: "Education-Sector Equipment Renewal Plan", d: "Vocational training equipment included with 40%–80% subsidies for local colleges; encourages donating replaced equipment to less-developed schools." }
  },
  {
    no: "2022 年新《职业教育法》",
    noEn: "Vocational Education Law (2022)",
    zh: { t: "产教融合的法定地位", d: "首次以法律形式确立产教融合、校企合作制度，明确企业参与职业教育的激励措施——企业办职教、师傅进课堂有了法律依据。" },
    en: { t: "Industry-Education Integration in Law", d: "First law to institutionalise industry-education integration, with incentives for enterprises to participate in vocational education — a legal basis for mentors in classrooms." }
  },
  {
    no: "香港新型工业化",
    noEn: "HK New Industrialisation",
    zh: { t: "再工业化与北部都会区", d: "香港政府推动新型工业化与北部都会区先进制造业用地规划，制造业回流需要大量技能人才——香港与内地职教合作空间打开。" },
    en: { t: "Re-industrialisation & Northern Metropolis", d: "The HKSAR Government advances new industrialisation and the Northern Metropolis advanced-manufacturing plan; manufacturing revival demands skilled talent — opening room for HK-mainland vocational cooperation." }
  }
];

/* ============ 真实图片映射（Unsplash 稳定外链；失效时卡片自动回退渐变底） ============ */
/* 想换图：直接改下面的 url，可填任何图片网址，或换成自己拍的图（相对路径即可） */

const U = "?auto=format&fit=crop&w=800&q=60";
const IMAGES = {
  schools: {
    1: { url: "https://images.unsplash.com/photo-1518770660439-4636190af475" + U, cap: "深圳信息职业技术学院" },
    2: { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" + U, cap: "深圳技师学院" },
    3: { url: "https://images.unsplash.com/photo-1562774053-701939374585" + U, cap: "广州番禺职业技术学院" },
    4: { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" + U, cap: "广东机电职业技术学院" },
    5: { url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3" + U, cap: "广东交通职业技术学院" },
    6: { url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492" + U, cap: "广州民航职业技术学院" },
    7: { url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" + U, cap: "顺德职业技术学院" },
    8: { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" + U, cap: "珠海城市职业技术学院" },
    9: { url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d" + U, cap: "惠州工程职业学院" },
    10: { url: "https://images.unsplash.com/photo-1565043666747-69f6646db940" + U, cap: "江门职业技术学院" },
    11: { url: "https://images.unsplash.com/photo-1553413077-190dd305871c" + U, cap: "中山火炬职业技术学院" },
    12: { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655" + U, cap: "香港专业教育学院（IVE）" }
  },
  companies: {
    1: { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" + U, cap: "东莞市立意精密模具有限公司" },
    2: { url: "https://images.unsplash.com/photo-1518770660439-4636190af475" + U, cap: "深圳市恒铖电子科技有限公司" },
    3: { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" + U, cap: "佛山市盛达金属制品有限公司" },
    4: { url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" + U, cap: "中山市华瑞电器制造有限公司" },
    5: { url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492" + U, cap: "惠州市立信精密注塑有限公司" },
    6: { url: "https://images.unsplash.com/photo-1445205170230-053b83016050" + U, cap: "江门市新恒纺织科技有限公司" },
    7: { url: "https://images.unsplash.com/photo-1565043666747-69f6646db940" + U, cap: "东莞市锐驰自动化设备有限公司" },
    8: { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff" + U, cap: "珠海市天成食品机械有限公司" },
    9: { url: "https://images.unsplash.com/photo-1553413077-190dd305871c" + U, cap: "深圳市鹏程线束制造有限公司" },
    10: { url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e" + U, cap: "佛山市南海永泰五金制品有限公司" },
    11: { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" + U, cap: "广州市睿达工业机器人集成有限公司" },
    12: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d" + U, cap: "东莞市宏图电子科技有限公司" }
  },
  equipment: {
    1: { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" + U, cap: "注塑成型" },
    2: { url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e" + U, cap: "服装缝制" },
    3: { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" + U, cap: "焊接机器人" },
    4: { url: "https://images.unsplash.com/photo-1565043666747-69f6646db940" + U, cap: "数控加工" },
    5: { url: "https://images.unsplash.com/photo-1518770660439-4636190af475" + U, cap: "SMT 电子制造" },
    6: { url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492" + U, cap: "动力与空压" },
    7: { url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" + U, cap: "增材制造" },
    8: { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" + U, cap: "六轴机械手" },
    9: { url: "https://images.unsplash.com/photo-1553413077-190dd305871c" + U, cap: "加工中心" },
    10: { url: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653" + U, cap: "激光切割" },
    11: { url: "https://images.unsplash.com/photo-1445205170230-053b83016050" + U, cap: "电子测试" },
    12: { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff" + U, cap: "包装与灌装" }
  },
  mentors: {
    1: { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" + U, cap: "" },
    2: { url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e" + U, cap: "" },
    3: { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" + U, cap: "" },
    4: { url: "https://images.unsplash.com/photo-1565043666747-69f6646db940" + U, cap: "" },
    5: { url: "https://images.unsplash.com/photo-1518770660439-4636190af475" + U, cap: "" },
    6: { url: "https://images.unsplash.com/photo-1445205170230-053b83016050" + U, cap: "" },
    7: { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" + U, cap: "" },
    8: { url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492" + U, cap: "" },
    9: { url: "https://images.unsplash.com/photo-1553413077-190dd305871c" + U, cap: "" },
    10: { url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" + U, cap: "" }
  }
};

function imgFor(kind, id) {
  var m = IMAGES[kind];
  return m && m[id] ? m[id] : null;
}

/* ============ 企业 ↔ 设备 / 技师 关联（设备与技师属于企业） ============ */
const COMPANY_LINKS = {
  1: { equipment: [1], mentors: [1] },
  2: { equipment: [5, 11], mentors: [5] },
  3: { equipment: [4, 9, 10], mentors: [4, 9, 10] },
  4: { equipment: [], mentors: [] },
  5: { equipment: [], mentors: [] },
  6: { equipment: [2], mentors: [2] },
  7: { equipment: [7, 8], mentors: [7, 8] },
  8: { equipment: [6, 12], mentors: [6] },
  9: { equipment: [], mentors: [] },
  10: { equipment: [], mentors: [] },
  11: { equipment: [3], mentors: [3] },
  12: { equipment: [], mentors: [] },
};

function equipmentOf(companyId) {
  var links = COMPANY_LINKS[companyId] || {};
  var ids = links.equipment || [];
  return EQUIPMENT.filter(function (e) { return ids.indexOf(e.id) >= 0; });
}
function mentorsOf(companyId) {
  var links = COMPANY_LINKS[companyId] || {};
  var ids = links.mentors || [];
  return MENTORS.filter(function (m) { return ids.indexOf(m.id) >= 0; });
}
