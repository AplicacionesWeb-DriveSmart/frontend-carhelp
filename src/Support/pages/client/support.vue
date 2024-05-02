<script setup>

</script>

<template>
  <div class="general-container">
    <div class="query-container">
      <pv-card class="pv-card-query-container">
        <template #content>
          <div>
            <h1>How can we help you?</h1>
            <select class="select-container">
              <option class="option-item" disabled selected>Seleccione una opcion</option>
              <option class="option-item">Option 1</option>
              <option class="option-item">Option 2</option>
              <option class="option-item">Option 3</option>
            </select>
            <input class="input-container" placeholder="Write your query"/>
            <textarea class="text-area-container" placeholder="Description of the issue"></textarea>
            <div class="attach-container">
              <button class="button-files">
                <p>Attach files (optional)</p>
                <img class="attach-image" src="https://cdn-user-icons.flaticon.com/40884/40884761/1714623454257.svg?token=exp=1714624355~hmac=d2803f703c07b35b6ba5b20708304ba8" alt="Clip image">
              </button>
            </div>
            <div class="ticket-button-container">
              <button class="button-ticket">
                <label class="label-ticket">CREATE A TICKET</label>
              </button>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
    <div class="info-container">
      <div class="pv-card-info-container">
        <p>Support</p>
        <div class="info-contact">
          <div class="info-contact-phone">
            <img class="info-phone-image" src="https://cdn-user-icons.flaticon.com/40884/40884761/1714628751866.svg?token=exp=1714629652~hmac=11703a40f37bb7720854f5e0bf98155f" alt="Phone icon">
            <h1>+51-929292</h1>
          </div>
          <div class="info-contact-mail">
            <img class="info-mail-image" src="https://cdn-user-icons.flaticon.com/40884/40884761/1714629436364.svg?token=exp=1714630337~hmac=e14ae37e0ebc47aab3ea794aa34d5332" alt="Mail-icon">
            <h1>soportevip@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.general-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.query-container {
  grid-column: 1/2;
}
.info-container {
  grid-column: 2/3;
}
.pv-card-info-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  height: 400px;
  font-family: Roboto Mono, monospace;
  background-color: transparent;
  color: #FFFFFF;
  margin: 50px;
  border: none;
  outline: none;
}
.pv-card-info-container p {
  font-size: 72px;
  font-weight: bold;
  margin-left: 30px;
  margin-bottom: 15px;
}
.pv-card-query-container {
  width: 90%;
  height: auto;
  font-family: Roboto Mono, monospace;
  background-color: #002E43;
  color: #FFFFFF;
  margin: 50px;
  padding: 0 20px;
}
.select-container {
  font-size: large;
  margin-left: 20px;
  margin-top: 10px;
  width: 90%;
  height: auto;
  padding: 15px;
  font-family: Roboto Mono, monospace;
  background-color: #D9D9D9;
  border-radius: 10px;
}
.input-container{
  font-size: large;
  margin-left: 20px;
  margin-top: 20px;
  width: 90%;
  height: auto;
  padding: 15px;
  font-family: Roboto Mono, monospace;
  background-color: #D9D9D9;
  border-radius: 10px;
}
.text-area-container{
  font-size: large;
  margin-left: 20px;
  margin-top: 20px;
  width: 90%;
  height: 200px;
  padding: 15px;
  font-family: Roboto Mono, monospace;
  background-color: #D9D9D9;
  border-radius: 10px;
}
.button-files{
  display: flex;
  align-items: center;
  border:none;
  padding:0;
  margin-left:20px;
  cursor: pointer;
  width: auto;
  height: auto;
}
p{
  margin-left: 0;
  margin-top: 15px;
  margin-right: 10px;
  font-size: medium;
  font-family: Roboto Mono, monospace;
}
.attach-image{
  width: 20px;
  height: auto;
}
.ticket-button-container{
  text-align: right;
}
.button-ticket{
  padding: 15px 10px;
  background-color: #D7DCE0;
  font-family: Roboto Mono, monospace;
  font-size: large;
  color: black;
  border-radius: 12px;
  cursor: pointer;
}
.info-contact{
  display: flex;
  flex-direction: column;
  margin-top:0;
}
.info-phone-image, .info-mail-image {
  width: 50px;
  margin-right: 10px;
}
.info-contact-phone, .info-contact-mail{
  display: flex;
  font-size: large;
}
</style>