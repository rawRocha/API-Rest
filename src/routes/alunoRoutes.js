import { Router } from 'express';
import AlunoController from '../controllers/AlunosController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', loginRequired, AlunoController.store);
router.put('/:id', loginRequired, AlunoController.update);
router.delete('/:id', loginRequired, AlunoController.delete);
router.get('/:id', AlunoController.show);

export default router;
