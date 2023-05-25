import db from "./db.js";

const authMiddleware = async (req, res, next) => {
  const sessionId = req.cookies.session_id;

  if (!sessionId) {
    res.status(401).json({ message: "Unauthorized1" });
    return;
  }

  const { rows } = await db.query(
    "SELECT * FROM sessions WHERE session_id = $1",
    [sessionId]
  );

  const session = rows[0];

  if (!session || new Date() > session.expires_at) {
    // could add a check for is_valid here (example: if (!session || !session.is_valid)
    // would need to add a column to the sessions table
    res.status(401).json({ message: "Unauthorized2" });
    return;
  }

  res.locals.user_id = session.user_id;

  next();
};

export default authMiddleware;
