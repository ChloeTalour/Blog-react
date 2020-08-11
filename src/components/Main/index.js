import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Article from './Article';

const Main = ({ post }) => {
  const articleList = post.map((singlePost) => (
    <Article
      key={singlePost.id}
      {...singlePost}
    />
  ));

  return (
    <main className="main">
      <h1 className="main__title">Dev Of Thrones</h1>
      <section className="main__section">
        {articleList}
      </section>
    </main>
  );
};

Main.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Main;
