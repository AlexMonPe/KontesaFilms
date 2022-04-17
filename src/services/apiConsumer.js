export const apiConsumer = {
    loginUser: async (loginData) => {
        try{
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
              loginUser = await loginUser.json();
              return loginUser
        }catch(error){
            console.log(error, 'error in login user apiconsumer')
        }
    }
}