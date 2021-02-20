import express from 'express';
import listAll from '../controllers/providers/listAll';
import create from '../controllers/providers/create';

const router = express.Router();

router.get('', listAll);
router.post('', create);

export default router;
