import {
  HERO_DATA,
  CORVENTO_ECOSYSTEM,
  ABOUT_DATA,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
  COMPLETE_CREDENTIAL_ARCHIVE,
  FeaturedProject,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  SkillGroup,
} from "./portfolioData";

export type Language = "en" | "si";

export const UI_LABELS = {
  en: {
    roleShort: "Software Engineer & Entrepreneur",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      ventures: "Ventures",
      skills: "Skills",
      credentials: "Credentials",
      contact: "Contact",
    },
    workWithKevin: "Hire Me",
    workWithKevinFull: "Work With Kevin",
    resumeBtn: "Resume",
    downloadResumeBtn: "Download Resume",
    downloadOfficialCv: "Download Resume",
    emailCopied: "Email Copied!",
    copied: "Copied",
    copy: "Copy",
    photoLabel: "Photo",
    heroCards: {
      uniBadge: "Undergraduate",
      uniTitle: "BIT @ UCSC",
      uniSub: "University of Colombo",
      schoolBadge: "Secondary Education",
      schoolTitle: "Isipathana College",
      schoolSub: "Prefect • House Captain • Rugby",
      founderBadge: "Founder & Lead Dev",
      founderTitle: "Corvento Tech",
      founderSub: "DanumaAI & 116K+ Media Network",
      flagshipBadge: "Flagship AI Product",
      flagshipTitle: "DanumaAI Platform",
      flagshipSub: "5,000+ Downloads • 2,000+ Students",
    },
    heroRolePrefix: "Full-Stack Software Engineer,",
    heroRoleHighlight: "AI Systems Builder & Tech Entrepreneur",
    aboutBadge: "Biography & Personal Story",
    personalProfileBadge: "Personal Profile",
    journeyHeading: "Journey & Evolution (2013 — 2026)",
    expBadge: "Career & Leadership",
    expHeading: "Work Experience",
    expSub:
      "Software engineering, venture leadership, digital broadcast operations, and international client delivery.",
    projBadge: "Software Engineering & Products",
    projHeading: "Featured Projects",
    projSub:
      "Production AI platforms, full-stack web applications, custom booking engines, and community infrastructure.",
    techArchBtn: "Architecture",
    venturesBadge: "Entrepreneurship, Media & Creative Studio",
    venturesHeading: "Corvento Technologies Ecosystem",
    whatsappHeading: "Owned WhatsApp Broadcast Network",
    whatsappSub:
      "Managed daily under Corvento Technologies — delivering academic resources, university guidance, and digital media to 74,000+ followers.",
    whatsappTotalBadge: "74,000+ Subscribers",
    openWhatsappBtn: "Open Channel",
    graphicBadge: "Graphic Design & Adobe Creative Suite",
    graphicHeading: "Graphic Design & Branding Portfolio",
    graphicDesc:
      "Backed by an Academic Merit Scholarship & Diploma in Graphic Designing & Multimedia (ATARI City Campus) and ITD Institute certification — crafting brand logos, posters, social media campaigns, and UI assets.",
    graphicBtn: "View Design Portfolio",
    videoBadge: "Video Production, Motion Graphics & Reels",
    videoHeading: "Corvento Tech YouTube & Reel Edits",
    videoDesc:
      "Certified in Adobe Premiere Pro and Adobe After Effects (PSD Academy) — producing high-retention short-form reels, motion graphics, and tech content for @corventotech and digital clients.",
    videoBtn: "Watch on YouTube",
    skillsBadge: "Technical & Creative Stack",
    skillsHeading: "Skills & Technologies",
    credBadge: "Degrees, Certifications & Honours",
    credHeading: "Education, Diplomas & Achievements",
    credSub:
      "University undergraduate studies, Pearson Assured & accredited diplomas, university coding certificates, and national competition & athletic honours.",
    credTabs: {
      all: "All",
      diplomas: "Degrees & Diplomas",
      certificates: "Certificates",
      awards: "Honours & Sports",
      registry: "Full Archive",
    },
    diplomasHeading: "University Education & Accredited Diplomas",
    certsHeading:
      "Professional Certificates (UoM CODL, CodeXpress, PSD, ITD & ESOFT)",
    awardsHeading:
      "Honours, Competitions, Sports & Volunteering",
    awardCatLabels: {
      competition: "Award & Competition",
      sports: "Athletics & Sports",
      volunteering: "Volunteering",
    },
    registryBadge: "Complete Verified Index (2013 — 2026)",
    registryHeading:
      "All Documented Diplomas, Transcripts, Certificates & Awards",
    contactBannerBadge: "Open for Engineering Roles & Projects",
    contactBannerTitle:
      "Looking to hire a Full-Stack / AI Engineer or Creative Technologist?",
    contactBannerSub:
      "Download my official Resume or connect directly via WhatsApp, email, or LinkedIn.",
    directContactBadge: "Direct Contact",
    directContactTitle: "Let's Build Something Extraordinary.",
    emailLabel: "Email Address",
    phoneLabel: "Direct Phone & WhatsApp",
    formTitle: "Send a Direct Message",
    formName: "Your Name",
    formNamePlaceholder: "e.g. Sarah Jenkins",
    formOrg: "Company / Team",
    formOrgPlaceholder: "e.g. Acme Engineering",
    formType: "Opportunity / Inquiry Type",
    formMessage: "Message",
    formMessagePlaceholder: "Tell me about the role, team, or project...",
    formSubmit: "Send Message",
    designPortfolio: "Design Portfolio",
  },
  si: {
    roleShort: "Software Engineer සහ Entrepreneur",
    nav: {
      about: "මා ගැන",
      experience: "අත්දැකීම්",
      projects: "Projects",
      ventures: "Ventures",
      skills: "Skills",
      credentials: "සුදුසුකම්",
      contact: "සම්බන්ධ වන්න",
    },
    workWithKevin: "Hire Me",
    workWithKevinFull: "Kevin සමඟ වැඩ කරන්න",
    resumeBtn: "Resume",
    downloadResumeBtn: "Download Resume",
    downloadOfficialCv: "Download Resume",
    emailCopied: "Email එක Copy වුණා!",
    copied: "Copy වුණා",
    copy: "Copy",
    photoLabel: "Photo",
    heroCards: {
      uniBadge: "උපාධි අපේක්ෂක",
      uniTitle: "BIT @ UCSC",
      uniSub: "කොළඹ විශ්වවිද්‍යාලය (UCSC)",
      schoolBadge: "පාසල් අධ්‍යාපනය",
      schoolTitle: "ඉසිපතන විද්‍යාලය, කොළඹ",
      schoolSub: "ශිෂ්‍ය නායක • නිවාස නායක • Rugby",
      founderBadge: "Founder & Lead Dev",
      founderTitle: "Corvento Tech",
      founderSub: "DanumaAI සහ 116K+ Media ජාලය",
      flagshipBadge: "ප්‍රධාන AI නිර්මාණය",
      flagshipTitle: "DanumaAI Platform",
      flagshipSub: "5,000+ Downloads • සිසුන් 2,000+",
    },
    heroRolePrefix: "Full-Stack Software Engineer,",
    heroRoleHighlight: "AI Systems නිර්මාණකරු සහ Tech Entrepreneur",
    aboutBadge: "මගේ කතාව සහ පෞද්ගලික තොරතුරු",
    personalProfileBadge: "පෞද්ගලික තොරතුරු",
    journeyHeading: "2013 සිට 2026 දක්වා මගේ ගමන්මඟ",
    expBadge: "වෘත්තීය අත්දැකීම් සහ නායකත්වය",
    expHeading: "වෘත්තීය අත්දැකීම් (Work Experience)",
    expSub:
      "Software Engineering, තාක්ෂණික ව්‍යාපාර මෙහෙයවීම, Digital Media ජාල කළමනාකරණය සහ ජාත්‍යන්තර Freelance ව්‍යාපෘති.",
    projBadge: "Software Engineering සහ ප්‍රධාන නිර්මාණ",
    projHeading: "ප්‍රධාන මෘදුකාංග ව්‍යාපෘති (Featured Projects)",
    projSub:
      "සජීවීව ක්‍රියාත්මක වන AI පද්ධති, Full-Stack Web Apps, Custom Booking Systems සහ මා විසින් ගොඩනැගූ පෙර ව්‍යාපෘති.",
    techArchBtn: "Architecture",
    venturesBadge: "ව්‍යවසායකත්වය, Digital Media සහ Creative Studio",
    venturesHeading: "Corvento Technologies ජාලය",
    whatsappHeading: "Corvento යටතේ ක්‍රියාත්මක වන WhatsApp Channels ජාලය",
    whatsappSub:
      "Corvento Technologies යටතේ දිනපතා කළමනාකරණය කරන, 74,000+ කට අධික සිසුන් සහ පරිශීලකයින් පිරිසක් සිටින අධ්‍යාපනික සහ Digital Media ජාලය.",
    whatsappTotalBadge: "74,000+ Subscribers",
    openWhatsappBtn: "WhatsApp Channel",
    graphicBadge: "Graphic Design සහ Adobe Creative Suite",
    graphicHeading: "Graphic Design සහ Branding නිර්මාණ එකතුව",
    graphicDesc:
      "ATARI City Campus හි Merit Scholarship සහ 1-Year Graphic Designing Diploma එක මෙන්ම ITD Institute සහතිකය සහිතව නිර්මාණය කළ Brand Logos, Posters, Social Media Campaigns සහ UI නිර්මාණ.",
    graphicBtn: "Graphic Design Portfolio බලන්න",
    videoBadge: "Video Editing, Motion Graphics සහ Reels",
    videoHeading: "Corvento Tech YouTube සහ Reel Edits",
    videoDesc:
      "PSD Academy හි Adobe Premiere Pro සහ Adobe After Effects සහතික ලත් සංස්කාරකවරයෙකු ලෙස @corventotech YouTube නාලිකාව සහ විවිධ ව්‍යාපාර සඳහා නිර්මාණය කළ Reels සහ Motion Graphics.",
    videoBtn: "YouTube නාලිකාව බලන්න",
    skillsBadge: "තාක්ෂණික සහ නිර්මාණාත්මක කුසලතා",
    skillsHeading: "භාවිතා කරන තාක්ෂණයන් (Skills & Tech Stack)",
    credBadge: "අධ්‍යාපන සුදුසුකම්, ඩිප්ලෝමා සහ ජයග්‍රහණ",
    credHeading: "අධ්‍යාපනය, ඩිප්ලෝමා සහ ජයග්‍රහණ",
    credSub:
      "විශ්වවිද්‍යාල උපාධි අධ්‍යාපනය, Pearson Assured ඩිප්ලෝමා, මොරටුව විශ්වවිද්‍යාලයේ (UoM CODL) සහතික පත්‍ර, සහ ජාතික මට්ටමේ තරඟ හා ක්‍රීඩා ජයග්‍රහණ.",
    credTabs: {
      all: "සියල්ල",
      diplomas: "උපාධි සහ ඩිප්ලෝමා",
      certificates: "සහතික පත්‍ර",
      awards: "තරඟ සහ ක්‍රීඩා",
      registry: "සම්පූර්ණ නාමාවලිය",
    },
    diplomasHeading: "විශ්වවිද්‍යාල අධ්‍යාපනය සහ පිළිගත් ඩිප්ලෝමා",
    certsHeading:
      "වෘත්තීය සහතික පත්‍ර (UoM CODL, CodeXpress, PSD, ITD සහ ESOFT)",
    awardsHeading:
      "තරඟ ජයග්‍රහණ, ක්‍රීඩා (Taekwondo / Rugby / Chess) සහ ස්වේච්ඡා සේවා",
    awardCatLabels: {
      competition: "තරඟ ජයග්‍රහණ",
      sports: "ක්‍රීඩා ජයග්‍රහණ",
      volunteering: "ස්වේච්ඡා සේවා",
    },
    registryBadge: "සම්පූර්ණ ලේඛනගත සහතික නාමාවලිය (2013 — 2026)",
    registryHeading:
      "සියලුම ඩිප්ලෝමා, Transcripts, සහතික පත්‍ර සහ ජයග්‍රහණ",
    contactBannerBadge: "Software Engineering රැකියා සහ ව්‍යාපෘති සඳහා විවෘතයි",
    contactBannerTitle:
      "ඔබේ ආයතනයට හෝ ව්‍යාපෘතියට Full-Stack / AI Developer කෙනෙක් සොයනවාද?",
    contactBannerSub:
      "මගේ නිල Resume එක Download කරගන්න, නැතහොත් WhatsApp, Email හෝ LinkedIn හරහා සෘජුවම මා හා සම්බන්ධ වන්න.",
    directContactBadge: "සෘජුවම සම්බන්ධ වන්න",
    directContactTitle: "අපි විශිෂ්ට නිර්මාණයක් ගොඩනගමු.",
    emailLabel: "විද්‍යුත් තැපෑල (Email)",
    phoneLabel: "දුරකථන සහ WhatsApp",
    formTitle: "පණිවිඩයක් යොමු කරන්න",
    formName: "ඔබේ නම",
    formNamePlaceholder: "උදා: කසුන් පෙරේරා",
    formOrg: "ආයතනය / කණ්ඩායම",
    formOrgPlaceholder: "උදා: ABC Tech",
    formType: "අවශ්‍යතාවය / ව්‍යාපෘති වර්ගය",
    formMessage: "පණිවිඩය",
    formMessagePlaceholder: "ඔබේ රැකියා අවස්ථාව හෝ ව්‍යාපෘතිය ගැන කෙටියෙන් සඳහන් කරන්න...",
    formSubmit: "පණිවිඩය යවන්න",
    designPortfolio: "Design Portfolio",
  },
};

const SI_HERO_OVERRIDES = {
  greeting: "ආයුබෝවන්, මම",
  status: "Software Engineering සහ Full-Stack අවස්ථා සඳහා විවෘතයි",
  location: "කොළඹ, ශ්‍රී ලංකාව",
  tagline:
    "මම ශ්‍රී ලංකාවේ කොළඹ සිට සිසුන් සහ ව්‍යාපාර සඳහා නවීන වෙබ් අඩවි (Websites), ජංගම දුරකථන යෙදුම් (Mobile Apps), AI අධ්‍යාපනික මෙවලම් සහ අධ්‍යාපනික මාධ්‍ය ජාලයන් නිර්මාණය කරමි.",
  portraits: [
    {
      src: "/KevinPortrait.jpg",
      title: "Kevin Bandara",
      caption: "Full-Stack Software Engineer සහ Corvento Technologies නිර්මාතෘ",
      objectPosition: "center 24%",
    },
    {
      src: "/MyPic-opt.jpg",
      title: "Kevin Bandara — BMICH කොළඹ",
      caption: "අධ්‍යාපනික සහ වෘත්තීය ඇගයීම් උළෙල (BMICH)",
      objectPosition: "28% 20%",
    },
  ],
  telemetry: [
    {
      value: "250K+",
      label: "මුළු App සහ Bot පරිශීලකයින්",
      detail: "MemoAI, DanumaAI සහ වෙබ් අඩවි හරහා",
    },
    {
      value: "116K+",
      label: "සිසු අධ්‍යාපනික ජාලය",
      detail: "WhatsApp 74K+ සහ Telegram 42K+ සිසුන්",
    },
    {
      value: "5,000+",
      label: "DanumaAI App Downloads",
      detail: "Google Play Store, Website සහ Telegram Bot",
    },
    {
      value: "2,000+",
      label: "සක්‍රීය DanumaAI සිසුන්",
      detail: "දිනපතා Study Notes සහ Past-Paper උදව්",
    },
    {
      value: "7+",
      label: "උපාධි සහ ඩිප්ලෝමා",
      detail: "UCSC BIT, Pearson ESOFT, ATARI සහ Oxborn",
    },
    {
      value: "48",
      label: "සහතික පත්‍ර සහ ජයග්‍රහණ",
      detail: "මොරටුව සරසවිය, CodeXpress, PSD සහ ක්‍රීඩා",
    },
  ],
};

const SI_ABOUT_OVERRIDES = {
  headline:
    "සිසුන්ට සහ සමාජයට ප්‍රයෝජනවත් මෘදුකාංග, AI අධ්‍යාපනික මෙවලම් සහ ඩිජිටල් නිර්මාණ බිහිකරන තරුණ නිර්මාණකරුවෙක්.",
  paragraphs: [
    "මම R.M. Kevin Sharada Bandara (රත්නායක මුදියන්සේලාගේ කෙවින් ශාරද බණ්ඩාර). කොළඹ පදිංචි මෘදුකාංග නිර්මාණකරුවෙක් (Full-Stack Software Developer), AI නිර්මාණකරුවෙක්, Graphic හා Video Designer කෙනෙක් සහ තරුණ ව්‍යවසායකයෙක්. මේ වන විට කොළඹ විශ්වවිද්‍යාලයේ පරිගණක අධ්‍යයනාංශයේ (UCSC) Bachelor of Information Technology (BIT) උපාධිය හදාරන අතර, සිසුන්ට සහ ආයතනවලට ප්‍රායෝගිකව ප්‍රයෝජනවත් වන Websites, Mobile Apps සහ AI මෙවලම් නිර්මාණය කිරීම මගේ ප්‍රධාන කාර්යයයි.",
    "මගේ තාක්ෂණික ගමන ආරම්භ වුණේ කොළඹ ඉසිපතන විද්‍යාලයේ පාසල් අධ්‍යාපනය ලබන කාලයේදීමයි. එහිදී පාසල් ICT හා Robotics සංගමයේ ක්‍රියාකාරී සාමාජිකයෙකු ලෙස කටයුතු කරමින් FUTURA '23 ICT තරඟාවලියේ ප්‍රථම ස්ථානය සහ ICBT හි පැවති AI & Robotics තරඟාවලියෙන් සිසුන් 500 කින් 8 වන ස්ථානය දිනා ගැනීමට මට හැකි වුණා. ඊට අමතරව පාසල් Rugby ක්‍රීඩකයෙකු ලෙසත්, Chess සහ චිත්‍ර තරඟ ජයග්‍රාහකයෙකු ලෙසත් කටයුතු කළ මම ලෝක ටයිකොන්ඩෝ මූලස්ථානයෙන් (Kukkiwon) 1st Poom Black Belt එකද හිමිකර ගත්තා. 2020 වසරේදී Asteroid Technologies ආරම්භ කරමින් BlackWolf Minecraft ක්‍රීඩා සර්වරය ගොඩනැගූ මම, පසුව Lycoryx Technologies යටතේ 250,000+ කට අධික පිරිසක් භාවිතා කළ MemoAI නිර්මාණය කළා.",
    "වර්තමානයේ මා විසින් පිහිටුවූ Corvento Technologies ආයතනය හරහා ශ්‍රී ලාංකික සිසුන්ගේ අධ්‍යාපනයට උදව් වන DanumaAI පද්ධතිය (Website, Google Play Store App — 5,000+ downloads සහ Telegram Bot — සක්‍රීය සිසුන් 2,000+) මෙන්ම, සිසුන් 116,000+ ක් සිටින WhatsApp (74,000+) සහ Telegram (42,000+) අධ්‍යාපනික නාලිකා ජාලයත් මෙහෙයවනු ලබනවා. මීට අමතරව Quizzygram හි Senior Web Developer ලෙසත්, Past Papers Wiki හි Sales & Operations Manager සහ Booking System Developer ලෙසත්, MAOS Office හි Digital Operations Coordinator ලෙසත්, Fiverr සහ Upwork හි Freelance නිර්මාණකරුවෙකු ලෙසත් කටයුතු කරමි.",
  ],
  profileFacts: [
    { label: "සම්පූර්ණ නම", value: "R.M. Kevin Sharada Bandara" },
    { label: "මුලකුරුවලින් කියැවෙන නම", value: "රත්නායක මුදියන්සේලාගේ (Rathnayaka Mudiyanselage)" },
    { label: "උපන් දිනය", value: "2007 නොවැම්බර් 06" },
    { label: "පදිංචිය", value: "කොළඹ, ශ්‍රී ලංකාව" },
    { label: "විශ්වවිද්‍යාල අධ්‍යාපනය", value: "BIT @ UCSC (University of Colombo)" },
    { label: "පාසල් අධ්‍යාපනය", value: "ඉසිපතන විද්‍යාලය, කොළඹ" },
    { label: "ආරම්භ කළ ආයතනය", value: "Corvento Technologies" },
    { label: "භාෂා හැකියාව", value: "සිංහල සහ ඉංග්‍රීසි (Fluent)" },
  ],
  pillars: [
    {
      code: "01 • Websites, Apps & AI",
      title: "වෙබ් අඩවි, Mobile Apps සහ AI මෙවලම්",
      description:
        "සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවලින් පහසුවෙන් භාවිතා කළ හැකි වෙබ් අඩවි, Google Play Store Android Apps සහ AI අධ්‍යාපනික මෙවලම් නිර්මාණය කිරීම.",
    },
    {
      code: "02 • Education & Communities",
      title: "Corvento සහ 116K+ සිසු ජාලය",
      description:
        "DanumaAI පද්ධතිය සහ දිනපතා සිසුන් 116,000+ කට පාඩම් සටහන් හා විභාග තොරතුරු ලබා දෙන WhatsApp හා Telegram නාලිකා මෙහෙයවීම.",
    },
    {
      code: "03 • Design, Video & Freelance",
      title: "Graphic Design, Video සහ Freelance",
      description:
        "Photoshop, Illustrator, Premiere Pro, After Effects සහ Figma හරහා Graphic Design, Video Reels සහ ජාත්‍යන්තර Fiverr/Upwork ව්‍යාපෘති සිදු කිරීම.",
    },
  ],
  milestones: [
    {
      year: "2013 – 2020",
      title: "පාසල් ජයග්‍රහණ, Chess, Rugby සහ Taekwondo Black Belt",
      subtitle: "ඉසිපතන විද්‍යාලය, Kukkiwon, DGD Chess Club සහ IWMS",
      detail:
        "IWMS ඉංග්‍රීසි කථන හා ලිඛිත විභාග 11 ක් සමත් වීම, DGD Chess තරඟාවලි ජයග්‍රහණ සහ Coaching Award දිනා ගැනීම, Seylan Bank චිත්‍ර තරඟයෙන් 3 වන ස්ථානය, ඉසිපතන විද්‍යාලයේ Rugby ක්‍රීඩා කිරීම සහ Kukkiwon 1st Poom Taekwondo Black Belt එක හිමිකර ගැනීම.",
    },
    {
      year: "2020 – 2022",
      title: "Asteroid Technologies සහ BlackWolf Minecraft Server",
      subtitle: "පළමු තාක්ෂණික නිර්මාණය සහ Online Gaming ප්‍රජාව",
      detail:
        "Asteroid Technologies ආරම්භ කරමින් BlackWolf Minecraft ක්‍රීඩා සර්වරය නිර්මාණය කිරීම — සර්වර් කළමනාකරණය සහ ක්‍රීඩක ප්‍රජාවක් මෙහෙයවීම පිළිබඳ මුල්ම අත්දැකීම.",
    },
    {
      year: "2022 – 2024",
      title: "Pearson ඩිප්ලෝමා, මොරටුව විශ්වවිද්‍යාලයේ සහතික සහ ICT ජයග්‍රහණ",
      subtitle: "ESOFT Metro Campus, University of Moratuwa සහ ඉසිපතන විද්‍යාලය",
      detail:
        "ESOFT හි Pearson Assured Software Engineering, IT සහ English ඩිප්ලෝමා ලබා ගැනීම; මොරටුව විශ්වවිද්‍යාලයේ (UoM CODL) Python, Front-End සහ Web Design සහතික ලබා ගැනීම; FUTURA '23 ප්‍රථම ස්ථානය සහ ICBT AI & Robotics තරඟයෙන් 8 වන ස්ථානය දිනා ගැනීම.",
    },
    {
      year: "2022 – Apr 2025",
      title: "Lycoryx Technologies සහ MemoAI පරිශීලකයින් 250,000+ දක්වා වර්ධනය",
      subtitle: "Discord Communities 2,157+ සහ Web Dashboard",
      detail:
        "Lycoryx Technologies යටතේ MemoAI නිර්මාණය කර Discord සර්වර් 2,157+ ක සාමාජිකයින් 250,000+ ක් දක්වා ව්‍යාප්ත කිරීම (අධික AI සර්වර් පිරිවැය හේතුවෙන් 2025 අප්‍රේල් මස නතර කරන ලදී).",
    },
    {
      year: "2025 – වර්තමානය",
      title: "Senior Web Developer, Past Papers Wiki සහ නිර්මාණකරණ ඩිප්ලෝමා",
      subtitle: "Quizzygram, Past Papers Wiki, CodeXpress, PSD Academy සහ ATARI",
      detail:
        "Quizzygram හි Senior Web Developer ලෙසත්, Past Papers Wiki හි Sales & Operations Manager (සහ Booking පද්ධතියේ නිර්මාතෘ) ලෙසත් එක්වීම; CodeXpress (Laravel), PSD Academy (Premiere Pro & After Effects) සහ ATARI City Campus (Graphic Design Scholarship Diploma) සම්පූර්ණ කිරීම.",
    },
    {
      year: "2026 – වර්තමානය",
      title: "Corvento Technologies, DanumaAI, MAOS Office සහ UCSC BIT උපාධිය",
      subtitle: "5,000+ App Downloads, 116K+ සිසු ජාලය සහ විශ්වවිද්‍යාල අධ්‍යාපනය",
      detail:
        "Corvento Technologies යටතේ DanumaAI (Website, Play Store 5,000+ downloads සහ Telegram Bot සිසුන් 2,000+) දියත් කිරීම, WhatsApp හා Telegram අධ්‍යාපනික ජාලය 116,000+ දක්වා පුළුල් කිරීම, MAOS Office හි Digital Operations Coordinator ලෙස කටයුතු කිරීම සහ UCSC හි BIT උපාධිය හැදෑරීම.",
    },
  ],
};

const SI_CORVENTO_OVERRIDES = {
  lineage: [
    {
      era: "2020 – 2022 • ආරම්භක අවධිය",
      name: "Asteroid Technologies",
      logo: "/AsteroidTechLogo.jpg",
      secondaryLogo: "/BlackWolfMC-Logo.jpg",
      status: "ආරම්භය",
      desc: "2020 වසරේදී BlackWolf Minecraft ක්‍රීඩා සර්වරය සහ මුල්කාලීන වෙබ් නිර්මාණ සඳහා මා ආරම්භ කළ පළමු තාක්ෂණික නාමය.",
    },
    {
      era: "2022 – 2025 • AI ව්‍යාප්ති අවධිය",
      name: "Lycoryx Technologies",
      logo: "/LycoryxTech.jpg",
      status: "AI වර්ධනය",
      desc: "Discord සර්වර් 2,157+ ක සාමාජිකයින් 250,000+ ක් භාවිතා කළ MemoAI පද්ධතිය සහ DanumaAI හි පළමු සංස්කරණය නිර්මාණය කළ අවධිය.",
    },
    {
      era: "2025 – වර්තමානය • ප්‍රධාන ආයතනය",
      name: "Corvento Technologies",
      logo: "/CorventoTechLogo.jpg",
      status: "වත්මන් ප්‍රධාන ආයතනය",
      desc: "DanumaAI (Website, Google Play Store සහ Telegram Bot), @corventotech YouTube/Reels සහ සිසුන් 116,000+ ක් සිටින WhatsApp හා Telegram අධ්‍යාපනික ජාලය මෙහෙයවන ප්‍රධාන ආයතනය.",
    },
  ],
  channels: [
    {
      id: "achievers-hub",
      name: "Achievers Hub",
      sinhalaName: "අධ්‍යාපනික පියස",
      followers: "28K+ Followers",
      url: "https://whatsapp.com/channel/0029Vb6OtjqGufIqshtuIM3C",
      logo: "/AchieversHub.jpg",
      category: "අධ්‍යාපනික සහ පාඩම් සටහන්",
      description:
        "ශ්‍රී ලාංකික සිසුන්ට දිනපතා පාඩම් සටහන්, විභාග උපදෙස් සහ තාක්ෂණික දැනුම ලබා දෙන ප්‍රධාන නාලිකාව.",
    },
    {
      id: "lanka-diaries",
      name: "Lanka Diaries",
      followers: "20K+ Followers",
      url: "https://whatsapp.com/channel/0029VbAe5k0AInPoph6EFQ34",
      logo: "/LankaDiaries.jpg",
      category: "සාමාන්‍ය දැනුම සහ තොරතුරු",
      description:
        "ශ්‍රී ලංකාවේ සහ ලෝකයේ වැදගත් තොරතුරු, සාමාන්‍ය දැනුම සහ දිනපතා ඩිජිටල් විශේෂාංග බෙදාගන්නා නාලිකාව.",
    },
    {
      id: "sarasavi-sihinaya",
      name: "Sarasavi Sihinaya",
      sinhalaName: "සරසවි සිහිනය",
      followers: "17K+ Followers",
      url: "https://whatsapp.com/channel/0029ValZ7iP4tRrzE8m4s21g",
      logo: "/SarasaviSihinaya.jpg",
      category: "උසස් පෙළ සහ සරසවි මාර්ගෝපදේශ",
      description:
        "විශ්වවිද්‍යාල ප්‍රවේශය ඉලක්ක කරගත් උසස් පෙළ (A/L) සිසුන් සඳහා පාඩම් උපදෙස් සහ අභිප්‍රේරණය ලබා දෙන නාලිකාව.",
    },
    {
      id: "sarasavi-pin-bima",
      name: "Sarasavi Pin Bima",
      sinhalaName: "සරසවි පින් බිම",
      followers: "9K+ Followers",
      url: "https://whatsapp.com/channel/0029Vai0gVe59PwJw0F3IS2g",
      logo: "/SarasaviPinBima.jpg",
      category: "සරසවි සිසු ප්‍රජාව",
      description:
        "සරසවි අපේක්ෂක සිසුන් සඳහා විශ්වවිද්‍යාල තොරතුරු, ශිෂ්‍යත්ව විස්තර සහ පාඩම් ක්‍රමවේද බෙදාගන්නා එකතුව.",
    },
  ],
};

export function getLocalizedPortfolio(lang: Language) {
  if (lang === "en") {
    return {
      ui: UI_LABELS.en,
      hero: HERO_DATA,
      corvento: CORVENTO_ECOSYSTEM,
      about: ABOUT_DATA,
      skills: SKILL_GROUPS,
      projects: FEATURED_PROJECTS,
      experience: EXPERIENCE_DATA,
      education: EDUCATION_DATA,
      achievements: ACHIEVEMENTS_DATA,
      registry: COMPLETE_CREDENTIAL_ARCHIVE,
    };
  }

  // Sinhala localized version with natural, easy-to-understand explanations
  const siProjects: FeaturedProject[] = FEATURED_PROJECTS.map((p) => {
    if (p.id === "danuma-ai") {
      return {
        ...p,
        title: "DanumaAI — ශ්‍රී ලාංකික සිසුන් සඳහා AI අධ්‍යාපනික සහායකයා",
        subtitle:
          "Corvento Technologies නිර්මාණයක් • Website, Google Play Store App සහ Telegram Bot",
        role: "නිර්මාතෘ සහ ප්‍රධාන Developer",
        period: "2026 – වර්තමානය",
        statusBadge: "සජීවීව ක්‍රියාත්මකයි (Live)",
        overview:
          "Corvento Technologies යටතේ ශ්‍රී ලාංකික සිසුන් වෙනුවෙන් නිර්මාණය කළ AI අධ්‍යාපනික පද්ධතියයි. වෙබ් අඩවිය (danumaai.lk), Google Play Store හි Android App එක (5,000+ downloads) සහ Telegram Bot (@DanumaAI_Bot) හරහා දැනට සක්‍රීය සිසුන් 2,000+ කට සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවලින් කෙටි සටහන් (Study Notes) සකසා ගැනීමටත්, පසුගිය විභාග ප්‍රශ්නවලට පියවරෙන් පියවර පිළිතුරු ලබා ගැනීමටත් උදව් කරයි.",
        highlights: [
          "Website, Google Play Store Android App (5,000+ downloads) සහ Telegram Bot යන අංශ තුනෙන්ම සිසුන්ට නොමිලේ සහ පහසුවෙන් භාවිතා කළ හැක.",
          "සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවලින් විෂය කරුණු විමසීමට, කෙටි සටහන් සකසා ගැනීමට සහ ප්‍රශ්න පත්‍රවල ඡායාරූප යොමු කර පිළිතුරු ලබා ගැනීමට සිසුන් 2,000+ කට උදව් කරයි.",
          "ගුරුවරුන්ට තම පන්ති පිළිබඳ තොරතුරු අදාළ ශ්‍රේණියේ සහ විෂයයේ සිසුන් වෙත පෙන්විය හැකි විශේෂ පහසුකමක්ද ඇතුළත් කර ඇත.",
        ],
      };
    }
    if (p.id === "quizzygram") {
      return {
        ...p,
        title: "Quizzygram — ඔන්ලයින් අධ්‍යාපනික සහ Quiz වෙබ් අඩවිය",
        subtitle:
          "සජීවී සිසු කතාබහ (Chats), සාකච්ඡා මණ්ඩප (Forums), Channels සහ Quiz තරඟාවලි",
        role: "Senior Web Developer",
        period: "2025 – වර්තමානය",
        overview:
          "ලංකාවේ ප්‍රමුඛතම අධ්‍යාපනික Telegram ප්‍රජාවක් වන Educational Channel SL (සිසුන් 42,000+) සමඟ සම්බන්ධිත Quizzygram (quizzygram.com) වෙබ් අඩවියේ Senior Web Developer ලෙස කටයුතු කරමින්, සිසුන්ට එකිනෙකා සමඟ පාඩම් සාකච්ඡා කිරීමට, ප්‍රශ්න ඇසීමට සහ සජීවී Quiz තරඟාවලි සඳහා සහභාගී වීමට අවශ්‍ය පහසුකම් නිර්මාණය කරන ලදී.",
        highlights: [
          "සිසුන්ට විෂය කරුණු සාකච්ඡා කිරීම සඳහා සජීවී Chat කාමර, Channels සහ ප්‍රශ්නෝත්තර Forums නිර්මාණය කිරීම.",
          "විභාග පෙරහුරුව වඩාත් උද්යෝගිමත් කිරීමට කාලය මැන බලන Quizzes සහ සජීවී ලකුණු පුවරු (Leaderboards) ගොඩනැගීම.",
          "දුරකථන සහ පරිගණක දෙකෙන්ම ඉතා වේගවත්ව ක්‍රියාත්මක වන ලෙස වෙබ් අඩවිය වැඩිදියුණු කිරීම.",
        ],
      };
    }
    if (p.id === "past-papers-wiki") {
      return {
        ...p,
        title: "Past Papers Wiki — දැන්වීම් වෙන්කරවා ගැනීමේ (Booking) පද්ධතිය",
        subtitle: "PastPapers.Wiki සඳහා නිර්මාණය කළ අභ්‍යන්තර Booking පද්ධතිය සහ ඔන්ලයින් අලෙවි කටයුතු",
        role: "Full-Stack Developer සහ Sales Manager",
        period: "2025 – වර්තමානය",
        overview:
          "ලංකාවේ සිසුන් 140,000+ කට අධික පිරිසක් භාවිතා කරන Past Papers Wiki (pastpapers.wiki) හි ඔන්ලයින් ප්‍රශ්න පත්‍ර අලෙවි කටයුතු මෙහෙයවන අතරතුර, ආයතනයේ ගුරුවරුන්ගේ දැන්වීම් කාලසටහන් පහසුවෙන් වෙන්කරවා ගැනීම සඳහා නිර්මාණය කළ අභ්‍යන්තර (Internal) Booking පද්ධතියයි.",
        highlights: [
          "එකම දිනයක හෝ වේලාවක දැන්වීම් දෙකක් වැරදීමකින් වෙන්වීම වළක්වන ස්වයංක්‍රීය Booking සහ Scheduling වෙබ් පද්ධතියක් නිර්මාණය කිරීම.",
          "දිවයින පුරා සිසුන් වෙත පසුගිය විභාග ප්‍රශ්න පත්‍ර සහ අධ්‍යාපනික පොත්පත් බෙදාහැරීමේ හා පාරිභෝගික සේවා කටයුතු මෙහෙයවීම.",
        ],
      };
    }
    if (p.id === "kev-thash-sweet-treats") {
      return {
        ...p,
        title: "Kev & Thash Sweet Treats — සිංහල සහ ඉංග්‍රීසි කේක් ඇණවුම් කිරීමේ වෙබ් අඩවිය",
        subtitle:
          "සිංහල/ඉංග්‍රීසි භාෂා දෙකෙන්ම ක්‍රියාත්මක වන සහ WhatsApp හරහා ඇණවුම් කළ හැකි වෙබ් අඩවිය",
        role: "Full-Stack Developer",
        period: "2025 – වර්තමානය",
        overview:
          "සිංහල සහ ඉංග්‍රීසි භාෂා දෙකෙන්ම ඉතා පහසුවෙන් කේක් වර්ග සහ මිල ගණන් පරීක්ෂා කර, එක ක්ලික් එකකින් කෙලින්ම WhatsApp හරහා ඇණවුම් යොමු කළ හැකි නවීන ව්‍යාපාරික වෙබ් අඩවියකි.",
        highlights: [
          "ඕනෑම පාරිභෝගිකයෙකුට ජංගම දුරකථනයෙන් ඉතා පහසුවෙන් සිංහල හෝ ඉංග්‍රීසි භාෂාවෙන් මෙනුව බැලීමට හැකි ලෙස නිර්මාණය කර ඇත.",
          "තෝරාගත් කේක් ඇණවුම ස්වයංක්‍රීයව WhatsApp පණිවිඩයක් ලෙස ආයතනය වෙත යැවීමේ පහසුකම ඇතුළත් කර ඇත.",
        ],
      };
    }
    if (p.id === "memo-ai") {
      return {
        ...p,
        title: "MemoAI — Discord AI Chatbot සහ වෙබ් පද්ධතිය",
        subtitle:
          "Discord සර්වර් 2,157+ ක සාමාජිකයින් 250,000+ ක් භාවිතා කළ AI පද්ධතිය (2022 – 2025 අප්‍රේල්)",
        role: "නිර්මාතෘ සහ ප්‍රධාන Developer",
        period: "2022 – 2025 අප්‍රේල්",
        statusBadge: "2025 අප්‍රේල් මස නතර කරන ලදී (අධික AI සර්වර් පිරිවැය නිසා)",
        overview:
          "Lycoryx / Corvento Technologies යටතේ ගොඩනැගූ, Discord සර්වර් 2,157+ ක සාමාජිකයින් 250,000+ කට අධික පිරිසක් ප්‍රශ්න ඇසීමට සහ AI පින්තූර නිර්මාණය කර ගැනීමට භාවිතා කළ AI Bot පද්ධතියයි. අධික පරිශීලක පිරිසක් සමඟ ඇති වූ ඉහළ AI සර්වර් පිරිවැය හේතුවෙන් 2025 අප්‍රේල් මස මෙහෙයුම් අවසන් කරන ලදී.",
        highlights: [
          "සර්වර් 2,157+ ක සාමාජිකයින් 250,000+ කට එකවර AI පණිවිඩ සහ පින්තූර ලබා දිය හැකි ලෙස පද්ධතිය ගොඩනැගීම.",
          "Discord ගිණුම හරහා ලොග් වී AI භාවිතා කළ හැකි වෙබ් අඩවියක් (Web Playground) නිර්මාණය කිරීම.",
        ],
      };
    }
    if (p.id === "blackwolf-mc") {
      return {
        ...p,
        title: "BlackWolf Minecraft Server — Multiplayer ක්‍රීඩා සර්වරය",
        subtitle:
          "ක්‍රීඩකයින් රැසකට එකවර ක්‍රීඩා කළ හැකි Minecraft Server ජාලය සහ Discord ප්‍රජාව",
        role: "නිර්මාතෘ සහ Server Administrator (Asteroid Technologies)",
        period: "2020 – 2022",
        statusBadge: "පෙර ක්‍රියාත්මක වූ ව්‍යාපෘතියකි",
        overview:
          "2020 වසරේදී Asteroid Technologies යටතේ මා විසින් ආරම්භ කළ පළමු තාක්ෂණික ව්‍යාපෘතියයි. ක්‍රීඩකයින්ට ඔන්ලයින් සම්බන්ධ වී ක්‍රීඩා කළ හැකි BlackWolf Minecraft සර්වරය සහ එහි Discord ප්‍රජාව මින් කළමනාකරණය කරන ලදී.",
        highlights: [
          "Linux සර්වර් සකස් කිරීම, ක්‍රීඩා Plugins එක් කිරීම සහ සර්වරයේ ආරක්ෂාව හා වේගය පවත්වා ගැනීම.",
          "Discord හරහා ක්‍රියාකාරී ක්‍රීඩක පිරිසක් එකතු කරගනිමින් ඔන්ලයින් ආයතනයක් මෙහෙයවීමේ මුල්ම අත්දැකීම ලබා ගැනීම.",
        ],
      };
    }
    return p;
  });

  const siExperience: ExperienceItem[] = EXPERIENCE_DATA.map((exp) => {
    if (exp.id === "corvento") {
      return {
        ...exp,
        role: "Founder සහ Lead Developer",
        period: "2020 – වර්තමානය",
        location: "කොළඹ, ශ්‍රී ලංකාව",
        description:
          "DanumaAI අධ්‍යාපනික පද්ධතිය (Website, Play Store App, Telegram Bot), @corventotech YouTube/Reels සහ සිසුන් 116,000+ ක් සිටින WhatsApp හා Telegram අධ්‍යාපනික ජාලය මෙහෙයවන ප්‍රධාන ආයතනය ආරම්භ කර පවත්වාගෙන යාම.",
        achievements: [
          "Website, Google Play Store (5,000+ downloads) සහ Telegram Bot හරහා සක්‍රීය සිසුන් 2,000+ කට පාඩම් වැඩවලට උදව් කරන DanumaAI නිර්මාණය කිරීම.",
          "දිනපතා පාඩම් සටහන් බෙදාහරින නිල WhatsApp Channels 4 ක් (74,000+ followers) සහ Telegram අධ්‍යාපනික ජාලයන් (42,000+ සිසුන්) කළමනාකරණය කිරීම.",
          "මීට පෙර MemoAI නිර්මාණය කර Discord සර්වර් 2,157+ ක සාමාජිකයින් 250,000+ ක් දක්වා වර්ධනය කිරීම (2022 – 2025 අප්‍රේල්).",
        ],
      };
    }
    if (exp.id === "maos-office") {
      return {
        ...exp,
        role: "Digital Operations Coordinator",
        period: "2026 ඔක්තෝබර් – වර්තමානය",
        location: "Remote • Part-Time",
        description:
          "MAOS Office (Magical Accounting Online School) හි ගිණුම්කරණ (Accounting) සිසුන් සඳහා දිනපතා පාඩම් සටහන්, පන්ති තොරතුරු සහ විභාග නිවේදන නිල WhatsApp නාලිකා හරහා බෙදාහැරීම.",
        achievements: [
          "නිල අධ්‍යාපනික WhatsApp Channels 3 ක් හරහා දිනපතා පාඩම් සටහන් සහ පන්ති විස්තර සිසුන් වෙත යොමු කිරීම.",
          "විභාග නිවේදන සහ අධ්‍යයන තොරතුරු නිසි වේලාවට සිසුන් වෙත ලබා දීමට සම්බන්ධීකරණය කිරීම.",
        ],
      };
    }
    if (exp.id === "quizzygram") {
      return {
        ...exp,
        role: "Senior Web Developer",
        period: "2025 – වර්තමානය",
        location: "Remote • Part-Time",
        description:
          "Educational Channel SL (සිසුන් 42,000+) Telegram ප්‍රජාව සමඟ සම්බන්ධිත Quizzygram (quizzygram.com) ඔන්ලයින් අධ්‍යාපනික සහ Quiz වෙබ් අඩවියේ ප්‍රධාන Web Development කටයුතු මෙහෙයවීම.",
        achievements: [
          "සිසුන්ට පාඩම් සාකච්ඡා කිරීමට සජීවී Chat පහසුකම්, Forums, Channels සහ Quiz තරඟාවලි වෙබ් අඩවිය තුළ නිර්මාණය කිරීම.",
          "විභාග කාලසීමාවන්හිදී සිසුන් විශාල පිරිසකට එකවර බාධාවකින් තොරව Quizzes කිරීමට හැකි ලෙස වෙබ් අඩවියේ වේගය වැඩිදියුණු කිරීම.",
        ],
      };
    }
    if (exp.id === "paperwikipedia") {
      return {
        ...exp,
        role: "Sales & Operations Manager + Booking System Developer",
        period: "2025 – වර්තමානය",
        location: "Remote • Part-Time",
        description:
          "දිවයින පුරා සිසුන් සඳහා පසුගිය විභාග ප්‍රශ්න පත්‍ර ඔන්ලයින් අලෙවි කිරීමේ කටයුතු මෙහෙයවන අතරතුර, ආයතනයේ දැන්වීම් වෙන්කරවා ගැනීමේ (Booking) වෙබ් පද්ධතිය නිර්මාණය කිරීම.",
        achievements: [
          "Past Papers Wiki හරහා දිවයින පුරා සිසුන්ගේ ප්‍රශ්න පත්‍ර ඇණවුම්, පාරිභෝගික සහාය සහ බෙදාහැරීමේ කටයුතු මෙහෙයවීම.",
          "ගුරුවරුන්ගේ දැන්වීම් කාලසටහන් පහසුවෙන් වෙන්කරවා ගැනීම සඳහා ආයතනයේ අභ්‍යන්තර Booking වෙබ් පද්ධතිය නිර්මාණය කිරීම.",
        ],
      };
    }
    if (exp.id === "freelance") {
      return {
        ...exp,
        role: "Freelance Web Developer සහ Graphic Designer",
        period: "2022 – වර්තමානය",
        location: "Remote • Self-Employed",
        description:
          "Fiverr, Upwork සහ දේශීය/විදේශීය සේවාදායකයින් සඳහා නවීන වෙබ් අඩවි, Online Stores, Brand Logos, පෝස්ටර් නිර්මාණ සහ Video Reel සංස්කරණ සිදු කිරීම.",
        achievements: [
          "Next.js, React, Node.js සහ Laravel භාවිතා කරමින් දේශීය හා විදේශීය ආයතන සඳහා වෙබ් අඩවි නිර්මාණය කිරීම.",
          "Kev & Thash Sweet Treats වැනි සිංහල/ඉංග්‍රීසි භාෂා දෙකෙන්ම ක්‍රියාත්මක වන ව්‍යාපාරික වෙබ් අඩවි නිර්මාණය කිරීම.",
          "Figma, Adobe Photoshop, Illustrator, Premiere Pro සහ After Effects භාවිතයෙන් Logos, පෝස්ටර් සහ Video Reels නිර්මාණය කිරීම.",
        ],
      };
    }
    return exp;
  });

  const siSkills: SkillGroup[] = SKILL_GROUPS.map((g) => {
    const subMap: Record<string, string> = {
      "languages-frameworks": "Full-Stack Web සහ Mobile Apps නිර්මාණය",
      "ai-engineering": "RAG පද්ධති, Vector Search සහ Multimodal AI",
      "backend-distributed": "APIs, Queues, Real-Time Chat සහ Bot පද්ධති",
      "databases-auth": "Cloud Databases, Authentication සහ ආරක්ෂාව",
      "devops-tooling": "Deployment, Play Console සහ Server කළමනාකරණය",
      "uiux-creative":
        "Premiere Pro, After Effects, Photoshop සහ Graphic Design (Certified)",
    };
    return {
      ...g,
      subtitle: subMap[g.id] || g.subtitle,
    };
  });

  const siEducation: EducationItem[] = EDUCATION_DATA.map((e) => {
    const detailsMap: Record<string, string> = {
      "ucsc-bit":
        "කොළඹ විශ්වවිද්‍යාලයේ පරිගණක අධ්‍යයනාංශයේ (UCSC) Bachelor of Information Technology (BIT) උපාධිය හැදෑරීම (2026 – 2029).",
      "isipathana-al":
        "කොළඹ ඉසිපතන විද්‍යාලයෙන් උසස් පෙළ (Technology Stream: ICT English Medium, SFT, ET) සහ සාමාන්‍ය පෙළ (ICT English Medium ඇතුළුව A සාමාර්ථ 4 ක් සහ B සාමාර්ථ 4 ක්). පාසල් Rugby ක්‍රීඩක (2016–2018) සහ ICT/Robotics සංගමයේ ක්‍රියාකාරී සාමාජික.",
      "esoft-se-diploma":
        "Pearson Assured Diploma in Software Engineering (DTEC, 2023) සහ Assured Diploma in Information Technology (DITEC, Oct 2023) යන ඩිප්ලෝමා ද්විත්වය සහ නිල Academic Transcript පත්‍රය.",
      "esoft-english-diploma":
        "2024 පෙබරවාරි 28 දින පිරිනමන ලද Pearson Assured Diploma in English — උසස් ඉංග්‍රීසි සන්නිවේදනය සහ වෘත්තීය ලේඛන කුසලතා.",
      "atari-graphic-diploma":
        "ATARI City Campus හි Academic Merit Scholarship ශිෂ්‍යත්වය යටතේ හැදෑරූ වසරක Graphic Designing & Multimedia Diploma පාඨමාලාව සහ Level 02 Academic Transcript පත්‍රය.",
      "oxborn-spoken-english":
        "Oxborn College වෙතින් හැදෑරූ වෘත්තීය ඉංග්‍රීසි කථන සහ සන්නිවේදන ඩිප්ලෝමා පාඨමාලාව.",
      "english-7-boxes":
        "Dr. Lakshitha Prasad යටතේ හැදෑරූ Diploma in English 7 Boxes පාඨමාලාව (2026).",
      "iwms-english-series":
        "Institute of Western Music & Speech (IWMS) මගින් පවත්වන ලද Spoken & Written English විභාග 11 ක් (Preliminary, Elementary, Graded, Transitional සහ Grade One) විශිෂ්ට ලෙස සමත් වීම (2016 – 2019).",
      "uom-frontend":
        "මොරටුව විශ්වවිද්‍යාලයේ (CODL) Front-End Web Development සහතික පත්‍රය — නවීන UI නිර්මාණය සහ JavaScript.",
      "uom-python":
        "මොරටුව විශ්වවිද්‍යාලයේ (CODL) Python for Beginners සහතික පත්‍රය — Python Programming, Data Structures සහ Backend මූලධර්ම.",
      "uom-web-design":
        "මොරටුව විශ්වවිද්‍යාලයේ (CODL) Web Design for Beginners සහතික පත්‍රය — HTML5, CSS3 සහ Web Layout නිර්මාණය.",
      "codexpress-laravel":
        "CodeXpress Academy වෙතින් ලබාගත් Laravel Web Development සහතික පත්‍රය — PHP/Laravel MVC, REST Routing සහ SQL Databases.",
      "psd-premiere-pro":
        "PSD Academy වෙතින් නිල Academic Transcript සහිතව ලබාගත් Video Editing (Adobe Premiere Pro) සහතික පත්‍රය (2025 අගෝස්තු).",
      "psd-after-effects":
        "PSD Academy වෙතින් නිල Academic Transcript සහිතව ලබාගත් Adobe After Effects Motion Graphics සහතික පත්‍රය (2025 දෙසැම්බර්).",
      "itd-photoshop":
        "ITD Institute SL වෙතින් ලබාගත් Adobe Photoshop සහ Graphic Design වෘත්තීය සහතික පත්‍රය.",
      "esoft-it-cert":
        "ESOFT Metro Campus වෙතින් 2022 දෙසැම්බර් 25 දින ලබාගත් Certificate in Information Technology සහතික පත්‍රය.",
    };
    return {
      ...e,
      details: detailsMap[e.id] ? [detailsMap[e.id]] : e.details,
    };
  });

  const siAchievements: AchievementItem[] = ACHIEVEMENTS_DATA.map((a) => {
    const hiMap: Record<string, string> = {
      "atari-scholarship":
        "අධ්‍යාපනික සහ නිර්මාණාත්මක කුසලතා වෙනුවෙන් ATARI City Campus වෙතින් පිරිනමන ලද නිල ශිෂ්‍යත්ව සහතිකය (Certificate of Scholarship).",
      "ai-robotics-icbt":
        "ICBT Campus හිදී පැවති AI & Robotics තරඟාවලියෙන් තරඟකරුවන් 500 ක් අතරින් 8 වන ස්ථානය දිනා ගැනීම.",
      "futura-23-winner":
        "කොළඹ ඉසිපතන විද්‍යාලයීය FUTURA '23 ICT & Robotics Quiz තරඟාවලියේ ප්‍රථම ස්ථානය (Winner) දිනා ගැනීම.",
      "apeiro-21":
        "Kingswood Research Unit මගින් සංවිධානය කළ Apeiro '21 පාසල් අතර තරඟාවලියේ හොඳම 50 දෙනා (Top 50) අතරට තේරී පත්වීම.",
      "stellata-rotaract":
        "Rotaract (RY 2025/26) මගින් සංවිධානය කළ Stellata 3.0 Article Writing තරඟාවලියේ ඇගයීමට ලක්වීම.",
      "ada-derana-media":
        "අද දෙරණ (Ada Derana) සහ ඉසිපතන විද්‍යාලය එක්ව පැවැත්වූ New Media & Digital Broadcast වැඩමුළුව සාර්ථකව නිම කිරීම (2023 අගෝස්තු).",
      "taekwondo-belt":
        "ලෝක ටයිකොන්ඩෝ මූලස්ථානය (Kukkiwon) සහ ශ්‍රී ලංකා ටයිකොන්ඩෝ සංගමය මගින් පිරිනමන ලද 1st Poom Black Belt එක ඇතුළුව නිල සහතික 7 ක් (Yellow, Green, Blue, Red, 1st RTC Open Championship, 1st Gup සහ 1st Poom).",
      "chess-achievements":
        "DGD Chess Club තරඟාවලි වලදී 2nd Runner-Up (2018 ඔක්තෝබර්), 8 වන ස්ථානය සහ Chess Coaching Award ඇතුළු සහතික පත්‍ර 5 ක් හිමිකර ගැනීම.",
      "seylan-art":
        "Seylan Bank චිත්‍ර තරඟයෙන් 3 වන ස්ථානය (2018), BOC හා අධ්‍යාපන අමාත්‍යාංශයේ Little Picasso තරඟය (2018) සහ ඉසිවර සිත්තම් ප්‍රදර්ශනය (2013).",
      "isipathana-rugby":
        "කොළඹ ඉසිපතන විද්‍යාලයීය Rugby කණ්ඩායම නියෝජනය කිරීම (2016–2018) සහ නිවාසාන්තර ක්‍රීඩා උළෙලේ ජයග්‍රහණ.",
      "plantara-25":
        "කොළඹ විශ්වවිද්‍යාලයේ විද්‍යා පීඨ Rotaract සමාජය මගින් පැළ 300 ක් රෝපණය කිරීම සඳහා දියත් කළ Project 'PLANTARA'25' පාරිසරික ව්‍යාපෘතියට දායක වීම.",
    };
    return {
      ...a,
      highlight: hiMap[a.id] || a.highlight,
    };
  });

  return {
    ui: UI_LABELS.si,
    hero: {
      ...HERO_DATA,
      ...SI_HERO_OVERRIDES,
    },
    corvento: {
      ...CORVENTO_ECOSYSTEM,
      ...SI_CORVENTO_OVERRIDES,
    },
    about: {
      ...ABOUT_DATA,
      ...SI_ABOUT_OVERRIDES,
    },
    skills: siSkills,
    projects: siProjects,
    experience: siExperience,
    education: siEducation,
    achievements: siAchievements,
    registry: COMPLETE_CREDENTIAL_ARCHIVE,
  };
}
