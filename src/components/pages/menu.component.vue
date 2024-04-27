<script>
export default {
  name: 'Menu',
}
</script>

<template>
  <div class="notification-center">
    <h2>Notification</h2>
    <div class="notification">
      <span class="label important">Important</span>
      <div class="message">
        Your stock has run out of vehicle parts, call now to refill your stock
      </div>
    </div>
    <div class="notification">
      <span class="label medium">Medium</span>
      <div class="message">
        The client Rodrigo has sent you a message
      </div>
    </div>
    <div class="notification">
      <span class="label important">Important</span>
      <div class="message">
        Your stock has run out of vehicle parts, call now to refill your stock
      </div>
    </div>
    <div class="notification">
      <span class="label medium">Medium</span>
      <div class="message">
        The client Rodrigo has sent you a message
      </div>
    </div>
  </div>

  <div class="latest-news">
    <h2>Latest News</h2>
    <div class="notification">
      <div class="message">
        Welcome to AutoProTracker
      </div>
    </div>

  </div>
</template>

<style scoped>
.notification-center {
 /* Dark blue background */
  width: 100%;
  max-width: 1000px; /* or any max-width you prefer */
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif; /* Default font */
  transform: translate(5%,50%);
}

.notification-center h2 {
  background-color: #000; /* Black background for h2 */
  color: #2C3E50;
  padding: 10px;
  border: 2px solid; /* White border */
  margin-bottom: 20px; /* Space under the border */
  border-radius: 20px; /* Center the text */
  box-sizing: border-box; /* Includes padding and border in the element's total width */
}

.notification {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #34495E; /* Slightly lighter blue background for notification */
  padding: 10px 20px;
  margin-bottom: 10px; /* Space between notifications */
  border-radius: 5px; /* Rounded corners */
}

.label {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px; /* Rounded label */
  color: #fff;
  font-weight: bold;
}

.important {
  background-color: #E74C3C; /* Red color for important label */
}

.medium {
  background-color: #F39C12; /* Orange color for medium label */
}

.message {
  flex: 1; /* Take available space */
  margin: 0 10px; /* Space around the message */
  color: #fff;
}

.latest-news {
 /* Dark blue background */
  width: 100%;
  max-width: 1000px; /* or any max-width you prefer */
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif; /* Default font */
  transform: translate(5%,110%);
}
.latest-news h2 {
  background-color: #000; /* Black background for h2 */
  color: #2C3E50;
  padding: 10px;
  border: 2px solid; /* White border */
  margin-bottom: 20px; /* Space under the border */
  border-radius: 20px; /* Center the text */
  box-sizing: border-box; /* Includes padding and border in the element's total width */
}
</style>