const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class UserController {
	async registration(req, res, next) {
		const {email, password, role} = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Не указан email или password'))
		}
		const condidate = await User.findOne({where: {email}})
		if (condidate) {
			return next(ApiError.badRequest('Пользователь с таким email уже зарегистрирован'))
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const user = await User.create({email, role, password: hashPassword})
		const basket = await Basket.create({userId: user.id})
		const token = jwt.sign(
			{id: user.id, email: user.email, role: user.role},
			process.env.SECRET,
			{expiresIn: '24h'}
			)
			return res.json(token)
	}

	async login(req, res, next) {
		const {email, password} = req.body
		const user = await User.findOne({where: {email}})
		if (!user) {
			return next(ApiError.internal('Пользователь не найден'))
		}
		const comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Неверный пароль'))
		}
		const token = jwt.sign(
			{id: user.id, email: user.email, role: user.role},
			process.env.SECRET,
			{expiresIn: '24h'}
			)
			return res.json(token)
	}

	async check(req, res, next) {
		const token = jwt.sign(
			{id: req.user.id, email: req.user.email, role: req.user.role},
			process.env.SECRET,
			{expiresIn: '24h'}
			)
			return res.json(token)
	}
}

module.exports = new UserController();
