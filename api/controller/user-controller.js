export const userController = async (req, res) => {
    try {
      res.send("User Controller");
    } catch (error) {
      console.log("Error in User", error.message);
    }
  };
  