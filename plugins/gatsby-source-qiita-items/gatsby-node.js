const axios = require(`axios`)

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const res = await axios.get("https://qiita.com/api/v2/items")

  res.data.forEach(val => {
    const node = {
      title: val.title
    }

    createNode(node)
  })

  // You're done, return.
  return;
}
