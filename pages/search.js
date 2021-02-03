import React, {useEffect} from 'react';
import styled from 'styled-components';
import Layout from '../layouts/default';

const Search = props => {

  useEffect(() => {
    const fnSearch = function () {
      if (document.readyState === 'complete') {
        google.search.cse.element.render(
          {
            div: "container__search",
            attributes: {
              queryParameterName: "searching"
            },
            tag: 'search'
          });
      } else {
        google.setOnLoadCallback(function () {
          google.search.cse.element.render(
            {
              div: "container__search",
              attributes: {
                queryParameterName: "searching"
              },
              tag: 'search'
            });
        }, true);
      }
    };

    window.__gcse = {
      parsetags: 'explicit',
      callback: fnSearch
    };

    (function () {
      const cx = '017992490955603903113:fa05l2ocvds';
      const gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  },[]);

  const TitleSearch = styled.h1`
    text-align: center;
    margin: 15px 0;
    font-size: 40px;
    @media (min-width: 760px) {
      font-size: 80px;
    }
  `;

  return <Layout>
    <TitleSearch>Buscador</TitleSearch>
    <div className="gcse-searchbox" id="container__search" />
  </Layout>
}

export default Search;
