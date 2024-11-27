import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', UserController.index); // Lista usuários
// router.get('/:id', UserController.show); // Lista usuário

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usurio -> POST
delete -> apaga um usuário -> DELETE
show -> mostrar um usuário -> GET
update -> atualiza um usuário -> PUT ou PATCH
*/
