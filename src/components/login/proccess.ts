export const login = (generateToken:any,data:any) => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const userDataJson = JSON.parse(userData);
      const user = userDataJson.find((user: any) => user.email === data.email);
      if (user) {
        if (user.password === data.password) {
          alert("Login successful");
          const sessionData = generateToken(user);
          localStorage.setItem("userSession", JSON.stringify(sessionData));
          alert("Login successful");
        } else {
          alert("Password is incorrect");
        }
      } else {
        alert("User not found");
      }
    } else {
      alert("User not found");
    }
}