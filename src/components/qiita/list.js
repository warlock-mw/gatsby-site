import React from 'react';
import { graphql } from 'gatsby';

const List = ({data}) => {
  return (
    <div>
      <p><button type="button" onClick={handle.updateListAsync}>データ取得</button></p>

      {data.postList.length > 0 ? (
        <table className={styles.QiitaTable}>
          <thead>
            <tr>
              <th>ユーザー</th>
              <th>タイトル</th>
              <th>ページ</th>
          </tr>
          </thead>
          <tbody>
            {data.postList.map((v, i) => (
              <tr key={i}>
                <td>{v.user}</td>
                <td>{v.title}</td>
                <td><a href={v.url} target="_blank" rel="noopener noreferrer">ページ</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>データがありません</p>
      )}
    </div>
  );
}

export const query = graphql`
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
`;