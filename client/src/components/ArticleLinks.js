import React from 'react';
import './ArticleLinks.css';

function ArticleLinks() {
  return (
    <div className="articles-section">
      <h2>Artigos Recentes</h2>
      <ul>
        <li>
          <a href="/articles/1">Artigo 1</a>
          <div className="article-meta">Autor: João Silva | Data: 01/07/2023</div>
        </li>
        <li>
          <a href="/articles/2">Artigo 2</a>
          <div className="article-meta">Autor: Maria Souza | Data: 15/06/2023</div>
        </li>
        <li>
          <a href="/articles/3">Artigo 3</a>
          <div className="article-meta">Autor: Pedro Oliveira | Data: 10/05/2023</div>
        </li>
        {/* Adicione mais links de artigos conforme necessário */}
      </ul>
    </div>
  );
}

export default ArticleLinks;
