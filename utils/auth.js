import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorizationHeader.slice(7).trim(); // Remove 'Bearer ' from the beginning
  console.log(token);
  console.log(process.env.JWT_SECRET_KEY);
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Invalid token" });
    }
    req.decodedID = decoded.custID;
    // console.log(decoded.custID);
    if (req.params.id !== String(decoded.custID)) {
      return res.status(403).send({
        msg: "Access denied!,  You are not authorized to perform this action.",
      });
    }

    next(); // Continue to the next middleware or route handler
  });
};
