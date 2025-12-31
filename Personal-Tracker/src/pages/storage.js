export const user_key = "usrs";
export const current_user_key = "currentUserId";

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
  users.push(newUser);
  localStorage.setItem(user_key, JSON.stringify(users));

  //login automaticlly after register
  localStorage.setItem(current_user_key, newUser.id);
  return { success: true };
}

// singIn user
export function singInUser(email, password) {
  const users = JSON.parse(localStorage.getItem(user_key)) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem(current_user_key, user.id);
    return { success: true, message: "Login successful" };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
}


//logOut user
export function logOut() {
  localStorage.removeItem(current_user_key);
}
