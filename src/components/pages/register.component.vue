<script>
export default {
  name: "register",
}
</script>
<template>
  <div class="signup-container">
    <div class="signup-form">
      <h2 class="signup-title">Get Started</h2>
      <p class="signup-subtitle">Start now</p>
      <form>
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" class="form-input" placeholder="Enter your name" />

        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" placeholder="Enter your email" />

        <label for="direction" class="form-label">Direction</label>
        <input type="text" id="direction" class="form-input" placeholder="Enter your direction" />

        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-input" placeholder="Enter your password" />

        <div class="terms-agreement">
          <input type="checkbox" id="terms" class="terms-checkbox" />
          <label for="terms" class="terms-label">
            <span>I agree to the </span>
            <a href="#" class="terms-link">terms &amp; policy</a>
          </label>
        </div>

        <button type="submit" class="signup-button">Signup</button>
      </form>

      <div class="separator">Or</div>

      <div class="social-signup">
        <button class="google-signup">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/abc306830b47d40cb9f2a62a84cf29ab36d439effc5df71ffa076fd8df4d92b3?apiKey=1d5a055b405c4711959c9d4d4f91b216&" alt="Google logo" class="social-logo" />
          <span>Sign in with Google</span>
        </button>
        <button class="apple-signup">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2298acba75fb8032950140889257908daee3895dc375cb79be967cbf23c293?apiKey=1d5a055b405c4711959c9d4d4f91b216&" alt="Apple logo" class="social-logo" />
          <span>Sign in with Apple</span>
        </button>
      </div>

      <p class="signin-link">
        Have an account? <a href="#">Sign In</a>
      </p>
    </div>

    <div class="signup-image">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/566c1d7d7cba2ccfcdf76146c28dd813f7f488db2fe02f8159c688272179fd55?apiKey=1d5a055b405c4711959c9d4d4f91b216&" alt="" class="signup-bg" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fba05227dc56fd7e9c4fe17947407256eb6c2885a8f6545f356d4f6a4f726d9e?apiKey=1d5a055b405c4711959c9d4d4f91b216&" alt="Signup illustration" class="signup-illustration" />
    </div>
  </div>
</template>

<style scoped>
.signup-container {
  background-color: #181a27;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 79px 0 0 80px;
}

@media (max-width: 991px) {
  .signup-container {
    flex-wrap: wrap;
    padding-left: 20px;
  }
}

.signup-form {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  margin: auto 0;
}

.signup-title {
  font: 32px Poppins, sans-serif;
}

.signup-subtitle {
  margin-top: 35px;
  font: 16px Poppins, sans-serif;
}

.form-label {
  font-family: Poppins, sans-serif;
  margin-top: 14px;
}

@media (max-width: 991px) {
  .form-label {
    margin-left: 5px;
  }
}

.form-input {
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  color: #d9d9d9;
  padding: 9px 10px;
  font: 10px Poppins, sans-serif;
}

@media (max-width: 991px) {
  .form-input {
    margin-left: 5px;
    padding-right: 20px;
  }
}

.terms-agreement {
  display: flex;
  align-items: center;
  margin-top: 23px;
  gap: 6px;
  font-size: 9px;
}

.terms-checkbox {
  width: 9px;
  height: 10px;
  border-radius: 2px;
}

.terms-label {
  font-family: Poppins, sans-serif;
}

.terms-link {
  text-decoration: underline;
  color: #fff;
}

.signup-button {
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #000;
  margin-top: 32px;
  width: 100%;
  padding: 9px;
  font: 700 13px Poppins, sans-serif;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 991px) {
  .signup-button {
    margin-left: 5px;
    padding: 0 20px;
  }
}

.separator {
  background-color: #fff;
  align-self: center;
  margin-top: 31px;
  color: #000;
  padding: 0 3px;
  font: 9px Poppins, sans-serif;
}

.social-signup {
  display: flex;
  margin-top: 47px;
  gap: 19px;
  font-size: 12px;
}

@media (max-width: 991px) {
  .social-signup {
    margin-top: 40px;
  }
}

.google-signup,
.apple-signup {
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 4px 20px;
  background: none;
  color: #fff;
  font-family: Poppins, sans-serif;
  cursor: pointer;
}

.social-logo {
  width: 24px;
  margin-right: 10px;
}

.signin-link {
  color: #0f3dde;
  font-family: Poppins, sans-serif;
  align-self: center;
  margin-top: 32px;
}

.signin-link a {
  color: #0f3dde;
}

.signup-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 1001px;
  padding: 48px 60px 80px;
}

@media (max-width: 991px) {
  .signup-image {
    max-width: 100%;
    padding: 0 20px;
  }
}

.signup-bg {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.signup-illustration {
  width: 500px;
  max-width: 100%;
}
</style>