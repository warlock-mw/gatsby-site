import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from '@/scss/qiita.module.scss';

const List = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInternalQiitaItems {
          edges {
            node {
              title
              url
              user {
                id
              }
            }
          }
        }
      }
    `
  );

  const { edges } = data.allInternalQiitaItems;
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
              <td>{node.user.id}</td>
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