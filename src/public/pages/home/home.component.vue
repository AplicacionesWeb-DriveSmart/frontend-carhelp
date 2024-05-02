<script setup>
</script>

<template>
  <div class="container-home">
    <div class="content-notification">
      <div class="home">
        <div class="home-titles"><p>Notification</p></div>
        <div class="content-information-home">
          <div class="information-home">
            <p>Your stock has run out of vehicle parts, call now to refill your stock</p>
          </div>
          <div class="information-home">
            <p>Your stock has run out of vehicle parts, call now to refill your stock</p>
          </div>
          <div class="information-home">
            <p>The client Rodrigo has sent you a message</p>
          </div>
        </div>
      </div>

    </div>
    <div class="content-last-news">
      <div class="home">
        <div class="home-titles">
          <p>Last News</p>
        </div>
        <div class="content-information-home">
          <div class="information-home">
            <p>Welcome to AutoPro Tracker</p>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<style scoped>
.container-home {
  background-color: #181a27;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.content-notification {
  width: 80%;
}

.home {
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.home-titles {
  display: flex;
  align-items: center;
  font-size: 20px;
  background-color: black;
  height: 50px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.home-titles p{
  margin-left: 20px;
}


.content-last-news {
  margin-top: 100px;
  width: 80%;
}

.information-home {
  width: 100%;
  display: flex;
  height: 50px;
  background-color: #6A90A9;
  border-bottom: 2px solid white;
}

.information-home p{
  margin-top: 10px;
  margin-left: 20px;
}

.content-information-home {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}
</style>