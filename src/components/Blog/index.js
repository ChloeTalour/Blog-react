/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
import { Route, Switch, Redirect } from 'react-router-dom';
// import menuData from 'src/data/categories';
// import postData from 'src/data/posts';
import { getPostsByCategory } from 'src/selectors';
import axios from 'axios';

import Single from 'src/components/Single';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadData = () => {
    setLoading(true);

    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
      .then((response) => {
        setPosts(response.data);
      })
      // On gère la réponse en erreur avec .catch()
      .catch((error) => {
        console.log(error);
      })
      // Dans tout les cas, on passera par finally
      .finally(() => {
        console.log('finally');
        setLoading(false);
      });
  };

  // const loadCategories = () => {
  //   setLoading(true);

  //   axios.get('https://oclock-open-apis.now.sh/api/blog/categories')
  //     .then((response) => {
  //       setCategories(response.data);
  //     })
  //     // On gère la réponse en erreur avec .catch()
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     // Dans tout les cas, on passera par finally
  //     .finally(() => {
  //       console.log('finally');
  //       setLoading(false);
  //     });
  // };

  const fetchCategoriesEffect = () => {
    const options = {
      method: 'get',
      url: 'https://oclock-open-apis.now.sh/api/blog/categories',
    };

    axios(options)
      .then((response) => {
        console.log('response ', response);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log('eorro ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // useEffect permet d'intéragir dans le cycle de vie du composant, à la manière
  // des méthodes de class componentDidMount, componentDidUpdate, componantWillAmount
  // On éxécute dans la fonction de callback à chaque rendu du composant
  // useEffect(() => {
  //   console.log('equivalent cDM et cDU');
  // });

  // On éxécute la fonction de callback uniquement au 1er rendu
  // useEffect(() => {
  //   console.log('cDM');
  // }, []);

  // on exécute la fonction de callback à chaque rendu SI la valeur de la dépendance a
  // changé. On passe toujours dans le callback au 1e rendu
  // useEffect(() => {
  //   console.log('loading à changé');
  // }, [loading]);
  useEffect(() => {
    loadData();
    fetchCategoriesEffect();
  }, []);

  return (
    <div className="blog">
      <Header categories={categories} />
      {loading && <Spinner />}
      {!loading && (
      <Switch>
        {categories.map(({ route, label }) => (
          <Route key={route} path={route} exact>
            <Main post={getPostsByCategory(label, posts)} />
          </Route>
        ))}
        <Route path="/post/:slug" exact>
          <Single posts={posts} />
        </Route>
        <Redirect from="/jquery" to="/autre" />
        <NotFound />
      </Switch>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
