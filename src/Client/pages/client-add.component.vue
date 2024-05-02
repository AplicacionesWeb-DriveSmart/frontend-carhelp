<script>
export default {
  data() {
    return {
      name: '',
      lastname: '',
      automotive: ''
    };
  },
  methods: {
    search() {
      // Aquí va tu lógica para buscar el cliente
    },
    addClient() {
      // Aquí va tu lógica para agregar el cliente
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
}
</script>

<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">New client</div>
      <div class="div-4">
        <input type="text" id="name" name="name" placeholder="Account name" v-model="name">
      </div>
      <div class="div-5">
        <input type="text" id="lastname" name="lastname" placeholder="Account last name" v-model="lastname">
      </div>
      <div class="div-6"><button @click="search">Search</button></div>
      <div class="div-7">
        <div class="div-8">Account found</div>
      </div>
      <div class="div-9">Chosen account: Not selected yet</div>
      <div class="div-10">
        <input type="text" id="automotive" name="automotive" placeholder="Automotive" v-model="automotive">
      </div>
      <div class="div-11">
        <div class="div-12"><button @click="addClient">Add client</button></div>
        <div class="div-13"><button @click="onCancel">Cancel</button></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div {
  background-color: #181a27;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  padding: 80px 60px 0;
}
@media (max-width: 991px) {
  .div {
    padding: 0 20px;
  }
}
.div-2 {
  background-color: #406378;
  display: flex;
  width: 100%;
  max-width: 1418px;
  flex-direction: column;
  align-items: start;
  padding: 80px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-3 {
  margin-top: 56px;
  font: 80px Roboto Mono, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-4 input {
  font-family: Roboto Mono, sans-serif;
  border-radius: 30px;
  background-color: #b2c3d3;
  width: 636px;
  max-width: 100%;
  align-items: start;
  justify-content: center;
  margin: 79px 0 0 18px;
  padding: 20px 11px;
  border: none;
}

@media (max-width: 991px) {
  .div-4 {
    padding-right: 20px;
    margin-top: 40px;
  }
}
.div-5 input {
  font-family: Roboto Mono, sans-serif;
  border-radius: 30px;
  background-color: #b2c3d3;
  width: 636px;
  max-width: 100%;
  align-items: start;
  justify-content: center;
  margin: 17px 0 0 18px;
  padding: 18px 11px;
  border: none;
}
@media (max-width: 991px) {
  .div-5 {
    padding-right: 20px;
  }
}

@media (max-width: 991px) {
  .div-6 {
    margin: 40px 0 0 9px;
    padding: 0 20px;
  }
}
.div-7 {
  display: flex;
  gap: 9px;
  margin: 18px 0 0 29px;
}
@media (max-width: 991px) {
  .div-7 {
    margin-left: 10px;
  }
}
.div-8 {
  font-family: Roboto Mono, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
}
.div-9 {
  font-family: Roboto Mono, sans-serif;
  font-size: 16px;
  border-radius: 30px;
  background-color: #b2c3d3;
  width: 636px;
  max-width: 100%;
  align-items: start;
  justify-content: center;
  margin: 51px 0 0 18px;
  padding: 18px 11px;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
  }
}
.div-10 input {
  font-family: Roboto Mono, sans-serif;
  border-radius: 30px;
  background-color: #b2c3d3;
  width: 636px;
  max-width: 100%;
  align-items: start;
  justify-content: center;
  margin: 119px 0 0 18px;
  padding: 18px 11px;
  border: none;
}
@media (max-width: 991px) {
  .div-10 {
    padding-right: 20px;
    margin-top: 40px;
  }
}

.div-11{
  display: flex;
}

@media (max-width: 991px) {
  .div-12 {
    margin-left: 9px;
    padding: 0 20px;
  }
}
@media (max-width: 991px) {
  .div-13 {
    margin-left: 9px;
    padding: 0 20px;
  }
}
button {
  margin-top: 24px;
  margin-left: 19px;
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  justify-content: center;
  padding: 22px 49px;
  color: #ffffff;
}

input:focus {
  outline: none;
}

</style>