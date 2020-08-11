/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

const Article = ({
  title, category, excerpt, slug,
}) => {
  const createMarkUp = () => {
    const clean = DOMPurify.sanitize(excerpt, { ALLOWED_TAGS: ['em', 'strong'] });
    return {
      __html: clean,
    };
  };

  return (
    <div className="article">
      <Link to={`/post/${slug}`}>
        <article>
          <h2 className="article__title">{title}</h2>
          <p className="article__category">{category}</p>
          <p className="article__excerpt" dangerouslySetInnerHTML={createMarkUp()} />
        </article>
      </Link>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Article;
