"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

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

exports. default = new HomeController();
