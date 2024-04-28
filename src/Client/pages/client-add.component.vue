<script>
export default {
  name: 'ClientAdd',
}
</script>
<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">New client</div>
      <div class="div-4">
        <input type="text" id="nombre" name="nombre" placeholder="Account name">
      </div>
      <div class="div-5">
        <input type="text" id="nombre" name="nombre" placeholder="Account last name">
      </div>
      <div class="div-6"><button>Search</button></div>
      <div class="div-7">
        <div class="div-8">Account found</div>
        <img
            loading="lazy"
            srcSet="/src/assets/img/check.png"
            class="img"
        />
      </div>
      <div class="div-9">Chosen account: Jose Rodriguez Corral</div>
      <div class="div-10">
        <input type="text" id="nombre" name="nombre" placeholder="Automotive">
      </div>
      <div class="div-11"><button>Add client</button></div>
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
.img {
  aspect-ratio: 1.2;
  object-fit: auto;
  object-position: center;
  width: 46px;
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

@media (max-width: 991px) {
  .div-11 {
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