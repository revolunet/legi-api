const routes = require("express").Router();

const map = require("unist-util-map");

// extract basic text structure
const getStructure = tree =>
  map(tree, node => ({
    children: node.children,
    type: node.type,
    id: node.data.id,
    titre_ta: node.data.titre_ta || node.data.titre
  }));

routes.get("/code/:code/structure", async (req, res) => {
  const data = require(`../../../codes/${req.params.code}.json`);
  res.json(getStructure(data));
});

module.exports = routes;
