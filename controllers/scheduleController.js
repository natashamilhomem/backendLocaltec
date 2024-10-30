const Schedule = require('../models/scheduleModel');

// Agendar produto
exports.createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create({ ...req.body, UserId: req.user.userId });
    res.status(201).json(schedule);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao agendar' });
  }
};

// Listar agendamentos do usuário
exports.getUserSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({ where: { UserId: req.user.userId }, include: 'Product' });
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
};
