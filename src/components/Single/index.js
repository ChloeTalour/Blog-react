import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getPostBySlug } from 'src/selectors';

import './styles.scss';

const Single = ({ posts }) => {
  const { slug } = useParams();
  // const foundPost = posts.find((post) => post.slug === slug);
  const { title, category, content } = getPostBySlug(posts, slug);
  return (
    <article className="single">
      <h2 className="single__title">{title}</h2>
      <div className="single__category">{category}</div>
      <p className="single__content">{content}</p>
    </article>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Single;
