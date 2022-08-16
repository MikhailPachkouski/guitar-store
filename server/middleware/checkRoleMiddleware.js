const jwt = require('jsonwebtoken');

module.exports = (role) => {
	return (req, res, next) => {
		if (req.method === 'OPTIONS') {
			next();
		}
		try {
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				res.status(401).json({message: 'Пользователь не авторизован'});
			}
			const decoded = jwt.verify(token, process.env.SECRET);
			console.log(decoded);
			if (decoded.role !== role) {
				res.status(403).json({message: 'Нет доступа'});
			}
			req.user = decoded;
			next();
		} catch (error) {
			res.status(401).json({message: 'Пользователь не авторизован'});
		}
	};
}