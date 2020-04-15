const axios = require(`axios`)

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions
  const res = await axios.get("https://qiita.com/api/v2/items")

  res.data.forEach(val => {
    const node = {
      id: createNodeId(getUniqueStr()),
      internal: {
        contentDigest: createContentDigest(val),
        mediaType: "application/json",
        type: "internal__qiita_items",
        content: JSON.stringify(val),
      },
      title: val.title,
    }
  
    createNode(node)
  });

  return;
}

function getUniqueStr(myStrong) {
  const strong = 1000;

  if (myStrong) {
    strong = myStrong;
  }

  return new Date().getTime().toString(16) + Math.floor(strong*Math.random()).toString(16);
 }