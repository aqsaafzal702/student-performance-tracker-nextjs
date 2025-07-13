import jwt from 'jsonwebtoken';

export async function authMiddleware(req) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return { error: 'No token, authorization denied', status: 401 };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { user: decoded };
  } catch (err) {
    return { error: 'Token is not valid', status: 401 };
  }
}