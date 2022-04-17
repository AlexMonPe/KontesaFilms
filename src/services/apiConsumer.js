export const apiConsumer = {
  loginUser: async (loginData) => {
    try {
      let loginUser = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/users/login",
        {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await loginUser.json();
    } catch (error) {
      console.log(error, "error in login user apiconsumer");
    }
  },
  createUser: async (formData) => {
    try {
      const createUser = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/users/register",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await createUser.json();
    } catch (error) {
      console.log(error, "Error in create user in apiconsumer");
    }
  },
};
