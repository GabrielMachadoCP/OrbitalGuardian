import { useEffect, useRef } from 'react'
import './App.css'

/* ── Starfield Canvas ── */
function Starfield() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.00015 + 0.00005,
      opacity: Math.random() * 0.6 + 0.2,
    }))

    let t = 0
    function draw() {
      t += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const s of stars) {
        const flicker = 0.7 + 0.3 * Math.sin(t * 0.05 + s.x * 100)
        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 220, 255, ${s.opacity * flicker})`
        ctx.fill()
        s.y += s.speed
        if (s.y > 1) { s.y = 0; s.x = Math.random() }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas className="stars-canvas" ref={ref} />
}

/* ── Data ── */
const techStack = [
  'Cloud Computing', 'Microsoft Azure', 'DevSecOps', 'GitHub Actions',
  'Azure App Service', 'Azure Key Vault', 'Application Insights',
  'CI/CD Pipeline', 'Engenharia de Dados', 'Inteligência Artificial',
  'Visão Computacional', 'Automação', 'Machine Learning', 'IoT Espacial',
]

const monitorCards = [
  {
    icon: '📡',
    title: 'Rastreamento em Tempo Real',
    desc: 'Utiliza dados de telemetria e redes de sensores para acompanhar objetos em órbita com precisão de milissegundos.',
  },
  {
    icon: '⚠️',
    title: 'Classificação de Risco',
    desc: 'Algoritmos de IA analisam trajetórias e probabilidades de colisão, classificando cada objeto em 3 níveis de risco orbital.',
  },
  {
    icon: '🛰️',
    title: 'Apoio à Decisão Operacional',
    desc: 'Gera alertas automatizados e recomendações de manobra para operadores de satélites ativos em órbita baixa.',
  },
]

const odsData = [
  {
    num: '9',
    title: 'Inovação e Infraestrutura',
    desc: 'Fomenta infraestrutura digital robusta e inovação tecnológica para o ecossistema espacial sustentável.',
  },
  {
    num: '11',
    title: 'Cidades e Comunidades Sustentáveis',
    desc: 'Garante conectividade satelital contínua, essencial para cidades inteligentes e serviços críticos.',
  },
  {
    num: '13',
    title: 'Ação Contra a Mudança do Clima',
    desc: 'Monitoramento orbital preserva satélites de sensoriamento remoto usados em ações climáticas globais.',
  },
]

const teamMembers = [
  { name: 'Integrante 1', rm: 'RM000000' },
  { name: 'Integrante 2', rm: 'RM000001' },
  { name: 'Integrante 3', rm: 'RM000002' },
  { name: 'Integrante 4', rm: 'RM000003' },
  { name: 'Integrante 5', rm: 'RM000004' },
]

/* ── App ── */
export default function App() {
  return (
    <>
      <Starfield />

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#home">ORBITAL<span>·</span>GUARDIAN</a>
        <ul className="nav-links">
          <li><a href="#problema">Problema</a></li>
          <li><a href="#monitoramento">Monitoramento</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#ods">ODS</a></li>
          <li><a href="#equipe">Equipe</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-orbit" />
        <div className="hero-inner">
          <div className="hero-badge">▶ SISTEMA ATIVO · ÓRBITA MONITORADA</div>
          <h1>
            <span className="line1">ORBITAL</span><br />
            <span className="line2">GUARDIAN</span><br />
            <span className="line3">AI</span>
          </h1>
          <p className="hero-desc">
            Plataforma conceitual de monitoramento inteligente de lixo espacial.
            Rastreamento, análise de risco e apoio operacional para a sustentabilidade da órbita terrestre.
          </p>
          <a className="hero-cta" href="#problema">EXPLORAR MISSÃO →</a>
        </div>
      </section>

      <div className="divider" />

      {/* PROBLEMA */}
      <section id="problema" className="problem">
        <div className="problem-inner">
          <div className="problem-text">
            <div className="section-label">// 01 · O PROBLEMA</div>
            <h2 className="section-title">
              A Órbita Terrestre<br /><span>Está em Risco</span>
            </h2>
            <p>
              Desde o início da era espacial, mais de <strong>36.000 objetos rastreáveis</strong> acumularam-se
              em órbita terrestre — entre satélites inativos, estágios de foguetes e fragmentos
              de colisões anteriores.
            </p>
            <p>
              O aumento acelerado de megaconstelações como Starlink intensifica esse cenário.
              Uma colisão em cadeia pode desencadear a <strong>Síndrome de Kessler</strong>: um efeito cascata
              que tornaria órbitas inteiras inutilizáveis por séculos.
            </p>
            <p>
              A <strong>NASA, ESA e JAXA</strong> já investem bilhões em programas de monitoramento e
              mitigação de detritos. O Orbital Guardian AI se posiciona como ferramenta de
              apoio a essa infraestrutura crítica global.
            </p>
          </div>
          <div className="problem-stats">
            <div className="stat-card">
              <span className="stat-num">36K+</span>
              <span className="stat-label">Objetos rastreáveis em órbita</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">6K+</span>
              <span className="stat-label">Satélites ativos em operação</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">27.000</span>
              <span className="stat-label">km/h — velocidade orbital média</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">$630B</span>
              <span className="stat-label">Economia espacial global em 2023</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* MONITORAMENTO */}
      <section id="monitoramento">
        <div className="monitoring-inner">
          <div className="section-label">// 02 · MONITORAMENTO ORBITAL</div>
          <h2 className="section-title">
            Como o <span>Orbital Guardian</span><br />Protege a Órbita
          </h2>
          <div className="monitoring-grid">
            {monitorCards.map((c, i) => (
              <div className="monitor-card" key={i}>
                <div className="monitor-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="tech">
        <div className="tech-inner">
          <div className="section-label">// 03 · STACK TECNOLÓGICO</div>
          <h2 className="section-title">Tecnologias <span>Aplicadas</span></h2>
          <p style={{ color: 'var(--muted)', marginBottom: '0', fontSize: '1rem', maxWidth: 560 }}>
            A solução integra as principais tecnologias estudadas ao longo do curso,
            implementadas sobre infraestrutura cloud com práticas de DevSecOps.
          </p>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <div className="tech-chip" key={i}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* DASHBOARD */}
      <section id="dashboard">
        <div className="dashboard-inner">
          <div className="section-label">// 04 · DASHBOARD ORBITAL</div>
          <h2 className="section-title">Status da <span>Órbita</span> em Tempo Real</h2>
          <div className="dash-grid">
            <div className="dash-card">
              <span className="dash-num">+36.000</span>
              <span className="dash-label">Objetos Rastreados</span>
            </div>
            <div className="dash-card">
              <span className="dash-num">+6.000</span>
              <span className="dash-label">Satélites Ativos</span>
            </div>
            <div className="dash-card warn">
              <span className="dash-num">3</span>
              <span className="dash-label">Níveis de Risco Orbital</span>
            </div>
            <div className="dash-card green">
              <span className="dash-num">3</span>
              <span className="dash-label">ODS Conectados: 9, 11 e 13</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ODS */}
      <section id="ods" className="ods">
        <div className="ods-inner">
          <div className="section-label">// 05 · OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL</div>
          <h2 className="section-title">Impacto <span>Global</span> da Missão</h2>
          <div className="ods-grid">
            {odsData.map((o, i) => (
              <div className="ods-card" key={i}>
                <div className="ods-num">{o.num}</div>
                <div>
                  <h3>ODS {o.num} · {o.title}</h3>
                  <p>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EQUIPE */}
      <section id="equipe">
        <div className="team-inner">
          <div className="section-label">// 06 · EQUIPE</div>
          <h2 className="section-title">Engenheiros <span>da Missão</span></h2>
          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{m.name.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
                <div className="team-info">
                  <div className="name">{m.name}</div>
                  <div className="rm">{m.rm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">ORBITAL GUARDIAN AI</div>
        <div className="footer-info">
          FIAP · Engenharia de Software · 4º Ano<br />
          Global Solution 2026 · Indústria Espacial
        </div>
      </footer>
    </>
  )
}
