const express = require('express');

const TreesService = require('./../services/tree.service').default;

const router = express.Router();
const service = new TreesService();

router.get('/', (req, res) => {
  const trees = service.find();

  res.json(trees);

  /*
  res.json([
    {
      1: {
        label: 'root',
        children: [
          {
            2: {
              label: 'ant',
              children: []
            },
            3: {
              label: 'bear',
              children: []
            },
            7: {
              label: 'frog',
              children: []
            },
          }
        ]
      }
    }
  ]);
  */
});

router.post('/', (req, res) => {
  const { parent, label } = req.body;

  const data = service.create(parent, label);

  res.status(201).json({
    ...data,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  //check if there is not children
  if (id == 999) {
    res.status(422).json({
      message: `node ${id} has children`,
    });
  } else {

    res.json({
      id,
      message: `node ${id} was deleted`,
    });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req;
  ///check if the param is OK
  const key = 'current-id';

  if (!(key in req.query)) {
    res.status(422).json({
      id,
      message: "format1 params is incorrect"
    });
  } else {
    const currentId = req.query[key];

    res.json({
      id,
      "current-id": currentId,
    });
  }
});


module.exports = router;
