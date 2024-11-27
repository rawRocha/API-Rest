import multer from 'multer';
import multerConfig from '../config/multer';
import Aluno from '../models/Aluno';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        if (!aluno_id) {
          return res.status(400).json({
            errors: ['Missing ID'],
          });
        }

        const aluno = await Aluno.findByPk(aluno_id);

        if (!aluno) {
          return res.status(400).json({
            errors: ['ID Aluno not found'],
          });
        }

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: e.errors.map((erro) => erro.message),
        });
      }
    });
  }
}

export default new ImageController();
