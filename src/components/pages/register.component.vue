<script>
export default {
  name: "register",
}
</script>
<template>
  <div class="register-container">
    <form class="register-form">
      <h1>Get Started</h1>
      <p>Start now</p>

      <div class="input-group">
        <input type="text" placeholder="Enter your name" required>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Enter your email" required>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Enter your direction" required>
      </div>

      <div class="input-group">
        <input type="password" placeholder="Enter your password" required>
      </div>

      <div class="remember-me">
        <input type="checkbox" id="remember">
        <label for="remember">I agree to the terms & policy</label>
      </div>

      <button type="submit">Signup</button>

      <div class="social-login">
        <button type="button" class="google-login">Sign up with Google</button>
        <button type="button" class="apple-login">Sign up with Apple</button>
      </div>

      <div class="signup">
        Have an account? <a>Sign In</a>
      </div>
    </form>


  </div>
  <div class="image">
    <img src="../../assets/vue.svg">
  </div>
</template>

<style scoped>
.image{
  position: absolute; /* Absolute position within a relative container */
  left: 0; /* Align to the left */
  top: 0; /* Align to the top */
  bottom: 0; /* Align to the bottom */
  right: 50%; /* Set the right position to half of the viewport */
  background-size: cover; /* Cover the entire area of the container */
  z-index: 1; /* Below the form */
  transform: translateX(120%);
}
.register-container {
  color: #fff;
  width: 400px;
  margin: 0; /* Remove margin to stick to the left */
  padding: 20px;
  border-radius: 10px;
  font-family: 'Arial', sans-serif;
  position: fixed; /* Position it absolutely relative to the body or parent container */
  left: 0; /* Align it to the left */
  top: 50px;
  transform: translate(70%,30%);
  z-index: 2;
}


.input-group {
  margin-bottom: 1em;
  position: relative;
}

.input-group input {
  width: 95%;
  padding: 10px;
  margin-bottom: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group .forgot-password {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #666;
  font-size: 0.75em;
}

.remember-me {
  margin-bottom: 1em;
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 0.5em;
}

.remember-me label {
  margin: 0;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  margin-bottom: 1em;
}

button[type="submit"]:hover {
  background-color: #333;
}

.social-login {
  margin-bottom: 1em;
}

.social-login button {
  width: calc(50% - 4px);
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 8px;
  cursor: pointer;
}

.social-login button:last-child {
  margin-right: 0;
}

.google-login {
  background-color: #db4437;
  color: white;
}

.apple-login {
  background-color: #000;
  color: white;
}

.signup {
  text-align: center;
}

.signup a {
  color: #0077cc;
}
</style>