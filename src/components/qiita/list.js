import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from '@/scss/qiita.module.scss';

const List = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInternalQiita {
          edges {
            node {
              user {
                alternative_id
              }
              title
              url
            }
          }
        }
      }
    `
  );

  const edges = data.allInternalQiita.edges.filter(
    ({ node }) => node.title !== null
  );

  return (
    <div>
      <table className={styles.QiitaTable}>
        <thead>
          <tr>
            <th>ユーザー</th>
            <th>タイトル</th>
            <th>ページ</th>
          </tr>
        </thead>
        <tbody>
          {edges.map(({ node }, i) => (
            <tr key={i}>
              <td>{node.user.alternative_id}</td>
              <td>{node.title}</td>
              <td>
                <a href={node.url} target="_blank" rel="noopener noreferrer">
                  ページ
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;