export const validateRegistration = (req, res, next) => {
  const { name, email, phone, password } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/; // allows only letters and spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  if (!nameRegex.test(name))
    return res
      .status(400)
      .json({ error: "Invalid name. Only letters and spaces are allowed." });
  if (!emailRegex.test(email))
    return res.status(400).json({ error: "Invalid email" });
  if (!phoneRegex.test(phone))
    return res.status(400).json({ error: "Invalid phone number" });
  if (!passwordRegex.test(password))
    return res.status(400).json({ error: "Weak password" });

  next();
};


