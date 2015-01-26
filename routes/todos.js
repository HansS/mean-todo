/**
 * Created by Hans on 26.01.2015.
 */
var express = require('express');
var router = express.Router();

var todoController = require('../controllers/todocontroller');

/* GET users listing. */
router.post('/',todoController.post);

router.get('/',todoController.get);

router.put('/:id',todoController.update);

router.get('/:id',todoController.show);

router.delete('/:id',todoController.delete);

module.exports = router;
