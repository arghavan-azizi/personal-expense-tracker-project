const user_key = "usrs";
const current_user_key = "currentUserId";

export function registerUser(username, email, password) {
  const users = JSON.parse(localStorage.getItem(user_key)) || [];
  //check email
  const emailExist = users.find((user) => user.email === email);
  if (emailExist) {
    return { success: false, message: "Email already exists" };
  }
  //create new user
  const newUser = {
    id: Date.now(),
    name: username,
    email: email,
    password: password,
  };
  //save use
users.push(newUser)
localStorage.setItem(user_key,JSON.stringify(users));

//login after register
localStorage.setItem(current_user_key,newUser.id)
return {success:true}
}
