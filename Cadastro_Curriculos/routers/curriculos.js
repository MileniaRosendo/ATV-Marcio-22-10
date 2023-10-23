const express = require('express');
const router = express.Router();
const db = require('../db'); 


router.get('/curriculos', async (req, res) => {
  try {
    const curriculos = await db.query('SELECT * FROM curriculum'); 
    res.json(curriculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/curriculos', async (req, res) => {
  const { first_name, last_name, email, phone_number, address, experience, skills } = req.body;

  try {
    const newCurriculum = await db.one(
      'INSERT INTO curriculum (first_name, last_name, email, phone_number, address, experience, skills) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [first_name, last_name, email, phone_number, address, experience, skills]
    );

    res.status(201).json(newCurriculum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/curriculos/:id', async (req, res) => {
  const curriculumId = req.params.id; // Obtém o ID do currículo a ser atualizado
  const { first_name, last_name, email, phone_number, address, experience, skills } = req.body;

  try {
    const updatedCurriculum = await db.oneOrNone(
      'UPDATE curriculum SET first_name = $1, last_name = $2, email = $3, phone_number = $4, address = $5, experience = $6, skills = $7 WHERE id = $8 RETURNING *',
      [first_name, last_name, email, phone_number, address, experience, skills, curriculumId]
    );

    if (updatedCurriculum) {
      res.json(updatedCurriculum);
    } else {
      res.status(404).json({ message: 'Currículo não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/curriculos/:id', async (req, res) => {
  const curriculumId = req.params.id; // Obtém o ID do currículo a ser excluído

  try {
    const deletedCurriculum = await db.result('DELETE FROM curriculum WHERE id = $1', [curriculumId]);

    if (deletedCurriculum.rowCount === 1) {
      res.json({ message: 'Currículo excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Currículo não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
