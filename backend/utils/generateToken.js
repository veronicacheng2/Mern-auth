import jwt from "jsonwebtoken";

// the way jwt works is to add something to the payload, in this case, we want to add the userId to the payload
const generateToken = (res, userId) => {
  // sign token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // save the token in cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // the site has to be https
    sameSite: "strict", // prevent csrf attack
    maxAge: 30 * 24 * 60 * 60 * 1000, // when will it expire
  });
};

export default generateToken;
