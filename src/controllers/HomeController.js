import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    /* const novoAluno = await Aluno.create({
      nome: 'Jonh',
      sobrenome: 'Rock',
      email: 'Jonh@gmail.com',
      idade: 45,
      peso: 55,
      altura: 1.50,
    }); */
    res.json('ok');
  }
}

export default new HomeController();
