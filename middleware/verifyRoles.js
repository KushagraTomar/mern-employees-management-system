const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    console.log("roles", result);
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
