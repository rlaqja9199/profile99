import React from 'react';
import { FiArrowUpRight, FiMail, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'BARON', type: 'Tailor Shop', image: `${process.env.PUBLIC_URL}/images/baron1.webp`,
    ko: { description: '테일러숍 특유의 클래식한 분위기는 남기고, 옷과 서비스가 먼저 눈에 들어오도록 만든 쇼핑몰입니다.', role: '개인 프로젝트 · 기획 / 디자인 / 개발', outcome: '상품 탐색과 관리자 기능을 한 서비스 안에 구현' },
    en: { description: 'An online tailor shop that keeps a classic mood while putting its products and services first.', role: 'Solo project · Planning / Design / Development', outcome: 'Built product browsing and admin features as one connected service' },
    stack: ['React', 'Node.js', 'MySQL', 'CSS'], url: 'https://rlaqja9199.github.io/tailorshop/'
  },
  {
    name: 'REHOME', type: 'Furniture Shop', image: `${process.env.PUBLIC_URL}/images/rehome.webp`,
    ko: { description: '복잡하게 꾸미기보다 가구를 편하게 둘러볼 수 있는 화면을 만드는 데 집중했습니다.', role: '2인 팀 · 프론트엔드 / UI', outcome: '상품을 찾기 쉬운 카테고리와 화면 흐름 구성' },
    en: { description: 'A furniture shop focused on making products easy and comfortable to browse.', role: 'Team of 2 · Frontend / UI', outcome: 'Created clear categories and a simple product browsing flow' },
    stack: ['PHP', 'JavaScript', 'MySQL', 'CSS'], url: 'https://rlaqja9199.github.io/ReHome/'
  },
  {
    name: 'W WEDDING', type: 'Dress Shop', image: `${process.env.PUBLIC_URL}/images/wwedding.webp`,
    ko: { description: '웨딩드레스가 돋보이는 여백과 이미지 구성을 고민하며 만든 쇼핑몰입니다.', role: '2인 팀 · 프론트엔드 / 디자인', outcome: '상품 화면과 관리자 기능을 함께 구현' },
    en: { description: 'A wedding dress shop designed around generous space and image-led product presentation.', role: 'Team of 2 · Frontend / Design', outcome: 'Built the storefront and its supporting admin features' },
    stack: ['React', 'Node.js', 'MySQL', 'CSS'], url: 'https://rlaqja9199.github.io/dress_shopt_client/'
  },
  {
    name: 'THUMBNAIL MAKER', type: 'Creative Tool', image: `${process.env.PUBLIC_URL}/images/thumbnailmaker.webp`,
    ko: { description: '글자와 이미지를 바꿔가며 썸네일을 빠르게 만들어볼 수 있는 작은 편집 도구입니다.', role: '개인 프로젝트 · 프론트엔드', outcome: '수정한 내용이 바로 보이는 편집 화면 구현' },
    en: { description: 'A small editing tool for quickly creating thumbnails by combining text and images.', role: 'Solo project · Frontend', outcome: 'Created an editor with immediate visual feedback' },
    stack: ['React', 'JavaScript', 'CSS'], url: 'https://rlaqja9199.github.io/thumbnail-maker/'
  }
];

const content = {
  ko: {
    hero: '막연한 아이디어라도 괜찮습니다. 필요한 모습을 함께 정리하고, 직접 써볼 수 있는 제품으로 만듭니다.',
    viewWork: '프로젝트 보기', aboutLink: '저에 대해 알아보기', mapLabel: '제품 개발 역량 다이어그램',
    workNote: '기존 포트폴리오에서 이어온 작업들', openSite: '사이트 열기', projectImage: '프로젝트 화면',
    aboutNote: '아이디어를 실제 제품으로 옮기는 사람', aboutTitle: ['필요하다고', '생각한 것을', '함께 만듭니다.'],
    about: [
      '안녕하세요, 김범입니다. 머릿속에만 있던 아이디어가 실제 화면에서 움직이는 순간을 좋아합니다.',
      '원하는 것이 아직 정확한 문장으로 정리되지 않아도 괜찮습니다. 이야기를 나누며 꼭 필요한 부분을 찾고, 먼저 써볼 수 있는 모습으로 빠르게 옮깁니다.',
      '화면만 그럴듯하게 만드는 데서 끝내지 않습니다. 프론트엔드부터 서버, 데이터, AI, 배포까지 필요한 부분을 이어 붙여 실제로 쓸 수 있는 제품을 만듭니다.',
      '혼자 답을 정해두기보다 함께 만들고, 써보고, 고치면서 더 나은 답을 찾아갑니다.'
    ],
    processNote: '생각에서 출시까지', process: [['DISCOVER','무엇이 필요한지 함께 정리합니다.'],['DESIGN','쓰기 편한 흐름과 화면을 그립니다.'],['BUILD','눈앞에서 움직이는 제품으로 만듭니다.'],['SHIP','직접 써보고 더 나은 모습으로 고칩니다.']],
    capabilityNote: '앞으로 함께 만들 때 사용할 기술', capabilities: [
      ['01','PRODUCT','Figma · UX Flow · Design System','만들기 전에 무엇이 꼭 필요한지부터 정리합니다.'],
      ['02','FRONTEND','Next.js · React · TypeScript · Tailwind CSS','화면 크기에 상관없이 빠르고 편하게 쓸 수 있는 웹을 만듭니다.'],
      ['03','BACKEND','Node.js · PostgreSQL · Prisma · REST API','서비스가 실제로 움직이는 데 필요한 데이터와 기능을 연결합니다.'],
      ['04','AI & DATA','OpenAI API · RAG · Supabase · Vector Search','AI가 보여주기용에 그치지 않고 실제 일을 덜어주도록 연결합니다.'],
      ['05','DELIVERY','Vercel · Docker · GitHub Actions · Monitoring','만든 뒤에도 안정적으로 쓰고 고칠 수 있도록 배포와 운영을 챙깁니다.']
    ],
    contact: '아직 정리되지 않은 아이디어라도 편하게 보내주세요.', backTop: '맨 위로 ↑'
  },
  en: {
    hero: 'A rough idea is enough. We can shape what you need together and turn it into something you can actually use.',
    viewWork: 'VIEW PROJECTS', aboutLink: 'MORE ABOUT ME', mapLabel: 'Product development capabilities diagram',
    workNote: 'Projects carried over from my original portfolio', openSite: 'Open website', projectImage: 'project screen',
    aboutNote: 'Turning ideas into working products', aboutTitle: ['I help make', 'what you need', 'actually happen.'],
    about: [
      "Hi, I'm Kim Beom. I enjoy the moment when an idea that lived only in someone's head starts moving on a real screen.",
      "You don't need to have everything figured out. We can talk through the idea, find what truly matters, and quickly turn it into something you can try.",
      "I don't stop at a polished interface. I connect the frontend, server, data, AI, and deployment needed to make the product genuinely useful.",
      'Instead of pretending to know the perfect answer from the start, I prefer to build, test, and improve it together.'
    ],
    processNote: 'From first thought to launch', process: [['DISCOVER','We clarify what the product really needs.'],['DESIGN','I map a clear and comfortable experience.'],['BUILD','The idea becomes a working product.'],['SHIP','We try it, learn, and make it better.']],
    capabilityNote: 'The toolkit I recommend for building together', capabilities: [
      ['01','PRODUCT','Figma · UX Flow · Design System','We decide what matters before writing code.'],
      ['02','FRONTEND','Next.js · React · TypeScript · Tailwind CSS','Fast, responsive interfaces that feel good on every screen.'],
      ['03','BACKEND','Node.js · PostgreSQL · Prisma · REST API','The data and services needed to make the product work.'],
      ['04','AI & DATA','OpenAI API · RAG · Supabase · Vector Search','Practical AI features that save effort instead of just looking impressive.'],
      ['05','DELIVERY','Vercel · Docker · GitHub Actions · Monitoring','Reliable deployment and a setup that stays easy to improve.']
    ],
    contact: "Send me the idea even if it isn't fully formed yet.", backTop: 'BACK TO TOP ↑'
  }
};

export default function Main({ language }) {
  const c = content[language];
  return <main>
    <section className="hero section-shell" id="top">
      <div className="hero-copy"><span className="eyebrow">FULL-STACK PRODUCT BUILDER</span><h1>I BUILD PRODUCTS,<br/><em>END TO END.</em></h1><p>{c.hero}</p><div className="hero-actions"><a className="button primary" href="#work">{c.viewWork} <FiArrowUpRight/></a><a className="text-link" href="#about">{c.aboutLink}</a></div></div>
      <div className="system-map" aria-label={c.mapLabel}><span className="scribble product-note">product<br/>thinking ↘</span><div className="node user">USER<br/>EXPERIENCE</div><div className="connector vertical"/><div className="node-row"><div className="node blue">FRONTEND</div><div className="node green">BACKEND</div><div className="node orange">DATA</div><div className="node violet">AI</div></div><div className="connector vertical lower"/><div className="node deploy">DEPLOYMENT</div><span className="scribble ship-note">→ ship it</span></div>
    </section>

    <section className="section-shell work-section" id="work"><div className="section-heading"><span>SELECTED PRODUCTS</span><small>{c.workNote}</small></div><div className="project-grid">{projects.map((p,i)=>{const text=p[language];return <article className="project-card" key={p.name}><a href={p.url} target="_blank" rel="noreferrer" className="project-image" aria-label={`${p.name} ${c.openSite}`}><img src={p.image} alt={`${p.name} ${c.projectImage}`} loading="lazy" decoding="async"/><span>{String(i+1).padStart(2,'0')} <FiExternalLink/></span></a><div className="project-body"><div className="project-title"><h3>{p.name}</h3><span>{p.type}</span></div><p className="project-description">{text.description}</p><dl><div><dt>ROLE</dt><dd>{text.role}</dd></div><div><dt>OUTCOME</dt><dd>{text.outcome}</dd></div><div><dt>STACK</dt><dd className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</dd></div></dl></div></article>})}</div></section>

    <section className="about section-shell" id="about"><div className="section-heading"><span>ABOUT</span><small>{c.aboutNote}</small></div><div className="about-grid"><div><span className="scribble">make it happen.</span><h2>{c.aboutTitle[0]}<br/>{c.aboutTitle[1]}<br/><em>{c.aboutTitle[2]}</em></h2></div><div className="about-copy">{c.about.map(p=><p key={p}>{p}</p>)}</div></div></section>

    <section className="process section-shell"><div className="section-heading"><span>HOW I BUILD</span><small>{c.processNote}</small></div><ol>{c.process.map(([title,description],i)=><li key={title}><span>{i+1}</span><b>{title}</b><p>{description}</p></li>)}</ol></section>
    <section className="capabilities section-shell" id="capabilities"><div className="section-heading"><span>CAPABILITIES</span><small>{c.capabilityNote}</small></div><div className="capability-grid">{c.capabilities.map(([n,title,stack,description])=><article key={title}><span>{n}</span><h3>{title}</h3><b>{stack}</b><p>{description}</p></article>)}</div></section>
    <section className="contact section-shell" id="contact"><div><span className="scribble">next project?</span><h2>HAVE AN IDEA?<br/><em>LET'S MAKE IT REAL.</em></h2><p>{c.contact}</p></div><div className="contact-links"><span className="contact-label">EMAIL</span><a href="mailto:rlaqja9199@naver.com"><FiMail/> rlaqja9199@naver.com</a></div></section>
    <footer className="section-shell"><span>© 2026 KIM BEOM</span><span>FULL-STACK PRODUCT BUILDER</span><a href="#top">{c.backTop}</a></footer>
  </main>;
}
