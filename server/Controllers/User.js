import usersModal from "../Modules/User.js";
export const createuser = async (req, res, next) => {
  console.log("all details", req.body);
  const { email } = req.body;
  try {
    const emailcheck = new usersModal({ email });
    if (emailcheck) {
      res.json({
        status: "error",
        error: false,
        message: "Email is already exist !",
      });
    } else {
      const newuser = new usersModal(req.body);
      newuser.save();

      if (newuser) {
        res.json({
          status: "ok",
          success: true,
          message: "Add user Successfully!",
        });
      }
    }
  } catch (error) {
    res.send(error);
    next(error);
  }
};

export const getuser = async (req, res) => {
  try {
    const user = await usersModal.find();
    if (user) {
      res.send(user);
    } else {
      res.send("Query issues");
    }
  } catch (error) {
    res.send(error);
    next(error);
  }
};
