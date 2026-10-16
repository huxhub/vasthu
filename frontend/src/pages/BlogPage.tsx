import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CircleDashed, Droplets, Flame, Mountain, Wind } from "lucide-react";
import { blogArticles } from "./blogArticles";
import "./BlogPage.css";

const elements = [
  { name: "Earth", Icon: Mountain },
  { name: "Water", Icon: Droplets },
  { name: "Fire", Icon: Flame },
  { name: "Air", Icon: Wind },
  { name: "Space", Icon: CircleDashed }
] as const;

function CompassSymbol() {
  return <svg className="blog-hero-symbol" viewBox="0 0 200 200" fill="none" aria-hidden="true"><circle cx="100" cy="100" r="84" /><circle cx="100" cy="100" r="66" strokeDasharray="2 7" /><path d="M100 18v164M18 100h164M100 44l14 56-14 56-14-56 14-56Z" /><circle cx="100" cy="100" r="5" /><text x="100" y="10" textAnchor="middle">N</text><text x="191" y="104" textAnchor="middle">E</text><text x="100" y="198" textAnchor="middle">S</text><text x="9" y="104" textAnchor="middle">W</text></svg>;
}

export default function BlogPage() {
  return <div className="blog-page">
    <section className="blog-hero" aria-labelledby="blog-title">
      <img src="/images/hero-blog.jpg" alt="Warm architectural space with natural light" fetchPriority="high" className="no-reveal no-parallax" />
      <div className="blog-hero-shade" />
      <div className="blog-shell blog-hero-inner">
        <p className="blog-eyebrow">The journal · Vastu Phi</p>
        <h1 id="blog-title">Notes on space,<br /><em>life & intention.</em></h1>
        <p>Ideas from traditional Vastu, considered in the context of contemporary homes and everyday decisions.</p>
        <a className="blog-hero-link" href="#articles">Explore the journal <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
      <CompassSymbol />
    </section>

    <section className="blog-intro blog-shell" id="articles" aria-labelledby="blog-intro-title">
      <div><p className="blog-eyebrow">Explore / 01—03</p><h2 id="blog-intro-title">A closer look at<br /><em>the places we make.</em></h2></div>
      <p>From reading a floor plan to noticing light and movement, these short articles offer starting points for a more informed conversation about your space.</p>
    </section>

    <section className="blog-article-index blog-shell" aria-label="Articles">
      {blogArticles.map((article) => <Link className="blog-index-card" to={`/blog/${article.id}`} key={article.id}>
        <div className="blog-index-image"><img src={article.image} alt={article.alt} loading="lazy" /></div>
        <div className="blog-index-content">
          <div className="blog-index-meta"><span>{article.number} / {article.category}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
          <h3>{article.title}</h3>
          <p>{article.intro}</p>
          <span className="blog-index-action">Read article <ArrowRight size={18} aria-hidden="true" /></span>
        </div>
      </Link>)}
    </section>

    <section className="blog-elements" aria-label="The five elements in Vastu">
      <div className="blog-shell"><p className="blog-eyebrow">A traditional language of space</p><div className="blog-elements-row">
        {elements.map(({ name, Icon }) => <div className="blog-element" key={name}><Icon size={31} strokeWidth={1.15} aria-hidden="true" /><span>{name}</span></div>)}
      </div></div>
    </section>

    <section className="blog-cta"><div className="blog-shell blog-cta-inner">
      <div><p className="blog-eyebrow">Begin with a conversation</p><h2>Your space has<br /><em>its own story.</em></h2></div>
      <div><p>Bring your questions, a floor plan, or simply the idea you are exploring. Sunandha’s consultation begins with understanding what matters to you.</p><Link to="/contact">Book a consultation <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
    </div></section>
  </div>;
}
