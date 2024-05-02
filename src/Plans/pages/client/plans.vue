<template>
  <div class="container">
      <div class="plans-container">
        <div class="basic-plan">
          <div class="basic-plan-content">
            <div>
              <h3>Plan Basic</h3>
              <p>$9.99 / month</p>
            </div>
            <div>
              <ul class="benefits-list">
                <li>Customer Management</li>
                <li>Customer Vehicle Management</li>
                <li>Chat with clients</li>
              </ul>
            </div>
            <button class="join-button">Join Now</button>
          </div>
        </div>
        <div class="standard-plan">
          <div class="standard-plan-content">
            <div>
              <h3>Plan Standard</h3>
              <p>$15.99 / month</p>
            </div>
            <div>
              <ul class="benefits-list">
                <li>Customer Management</li>
                <li>Customer Vehicle Management</li>
                <li>Chat with clients</li>
                <li>Invoice Management</li>
              </ul>
            </div>
            <button class="join-button">Join Now</button>
          </div>
        </div>
        <div class="premium-plan">
          <div class="premium-plan-content">
            <div class="plan-header">
              <h3>Plan Premium</h3>
              <p>$22.99 / month</p>
            </div>
            <div class="benefits-list">
              <ul>
                <li>Customer Management</li>
                <li>Customer Vehicle Management</li>
                <li>Chat with clients</li>
                <li>Invoice Management</li>
                <li>Stock Inventory of workshop things</li>
              </ul>
            </div>
              <button class="join-button">Join Now</button>
          </div>
        </div>
      </div>
  </div>
</template>



<style scoped>
.container {
  background-color: #d7dce0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 103px 60px;
}
.plans-container {
  gap: 100px;
  display: flex;
}

.basic-plan, .standard-plan, .premium-plan {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
}
.basic-plan-content, .standard-plan-content, .premium-plan-content {
  background-color: #b2c3d3;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #fff;
  font-weight: 500;
  width: 100%;
  padding: 80px 60px 34px;
  align-items: center;
  font-family: Roboto Mono, monospace;
  font-size: 20px;
}
h3{
  color: black;
}
p{
  color: #4f66bb;
  font-weight: bold;
}
.benefits-list {
  color:black;
  margin-bottom: 50px;
}
.join-button{
  border-radius: 30px;
  background-color: #486276;
  width: 90%;
  font-size: medium;
  cursor:pointer;
  margin-top: auto;
}
</style>
<script setup lang="ts">
</script>