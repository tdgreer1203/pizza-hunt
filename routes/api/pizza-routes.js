const { getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza } = require('../../controllers/pizza-controller');

const router = require('expres').Router();

router.route('/').get(getAllPizza).post(createPizza);

router.route('/:id').get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;