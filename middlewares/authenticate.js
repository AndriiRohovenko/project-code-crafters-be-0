import HttpError from '../helpers/HttpError.js';

import { verifyToken } from '../helpers/jwt.js';

import { findUserService } from '../services/authServices.js';

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw HttpError(401, 'Not authorized');

  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer')
    throw HttpError(401, 'Authoriaztion header must have Bearer type');

  const { data, error } = verifyToken(token);
  if (error) throw HttpError(401, error.message);

  const user = await findUserService({
    id: data.id,
  });

  if (!user) throw HttpError(401, 'Not authorized');

  if (!user.token) throw HttpError(401, 'User already logout');
  if (user.token !== token) throw HttpError(401, 'Invalid token');

  req.user = user;
  next();
};

export { authenticate };
export default authenticate;
