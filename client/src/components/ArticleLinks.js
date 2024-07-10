import React from 'react';
import './ArticleLinks.css';

function ArticleLinks() {
  return (
    <div className="articles-box">
      <div className="articles-section">
        <h2>Artigos</h2>
        <ul>
          <li><a href="/articles/1">Artigo 1</a></li>
          <li><a href="/articles/2">Artigo 2</a></li>
          <li><a href="/articles/3">Artigo 3</a></li>
          {/* Adicione mais links de artigos conforme necessário */}
        </ul>
      </div>
    </div>
  );
}

export default ArticleLinks;
