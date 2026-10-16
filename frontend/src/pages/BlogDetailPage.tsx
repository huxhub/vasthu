import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogArticles } from "./blogArticles";
import "./BlogPage.css";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const article = blogArticles.find((item) => item.id === slug);

  if (!article) {
    return <div className="blog-page blog-detail-missing blog-shell"><p className="blog-eyebrow">Journal</p><h1>Article not found.</h1><Link to="/blog">Return to the journal <ArrowRight size={18} aria-hidden="true" /></Link></div>;
  }

  const related = blogArticles.filter((item) => item.id !== article.id);

  return <div className="blog-page blog-detail-page">
    <header className="blog-detail-heading blog-shell">
      <p className="blog-eyebrow">{article.number} / {article.category}</p>
      <h1>{article.title}</h1>
      <p>{article.intro}</p>
    </header>

    <figure className="blog-detail-image"><img src={article.image} alt={article.alt} className="no-parallax" fetchPriority="high" /></figure>

    <article className="blog-detail-reading blog-shell" aria-labelledby="detail-reading-title">
      <aside><p className="blog-eyebrow">The journal / {article.number}</p><span className="blog-detail-rail-line" aria-hidden="true" /></aside>
      <div>
        <h2 id="detail-reading-title">A closer look.</h2>
        {article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <div className="blog-detail-endmark" aria-hidden="true">✧</div>
        <Link className="blog-article-link" to="/contact">Discuss your space <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>

    <section className="blog-detail-related" aria-labelledby="related-title">
      <div className="blog-shell">
        <div className="blog-detail-related-heading"><div><p className="blog-eyebrow">Continue reading</p><h2 id="related-title">More from the journal.</h2></div><Link to="/blog">View all articles <ArrowRight size={17} aria-hidden="true" /></Link></div>
        <div className="blog-article-index">
          {related.map((item) => <Link className="blog-index-card" to={`/blog/${item.id}`} key={item.id}>
            <div className="blog-index-image"><img src={item.image} alt={item.alt} loading="lazy" /></div>
            <div className="blog-index-content"><div className="blog-index-meta"><span>{item.number} / {item.category}</span><ArrowUpRight size={20} aria-hidden="true" /></div><h3>{item.title}</h3><span className="blog-index-action">Read article <ArrowRight size={18} aria-hidden="true" /></span></div>
          </Link>)}
        </div>
      </div>
    </section>
  </div>;
}
