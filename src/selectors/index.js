/* eslint-disable import/prefer-default-export */
export const getPostsByCategory = (category, postData) => {
  let filteredPosts = postData;
  if (category !== 'Accueil') {
    filteredPosts = postData.filter((post) => post.category === category);
  }
  return filteredPosts;
};

// Cherche un post qui a le slug en parametre
export const getPostBySlug = (posts, slug) => posts.find((post) => post.slug === slug);
