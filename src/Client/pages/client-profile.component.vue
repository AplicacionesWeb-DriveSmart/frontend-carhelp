
<script>
export default {
  name: 'ClientProfile',
}
</script>


<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">Client profile</div>
      <div class="div-4">
        <div class="div-5">
          <div class="column">
            <img
                loading="lazy"
                srcSet="../../assets/img/persona1.png"
                class="img"
            />
          </div>
          <div class="column-2">
            <div class="div-6">
              <div class="div-7">Name: Jose</div>
              <div class="div-8">Last name: Rodriguez Corral</div>
              <div class="div-9">Number: +51 945 756 677</div>
              <div class="div-10">e-mail: jose@gmail.com</div>
              <div class="div-11">Automotive: AutoVip</div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-12">
        <div class="div-13"><button>Edit client</button></div>
        <div class="div-14"><button>Delete client</button></div>
      </div>
      <div class="div-15"><button>Vehicle list</button></div>
    </div>
  </div>
</template>



<style scoped>
.div {
  background-color: #181a27;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 73px 69px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-3 {
  color: #000;
  margin: 54px 0 0 31px;
  font: 500 80px Roboto Mono, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-4 {
  margin-top: 34px;
  width: 925px;
  max-width: 100%;
}
.div-5 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-5 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 61%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.img {
  aspect-ratio: 1.27;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 50%;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img {
    max-width: 100%;
    margin-top: 40px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 39%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-6 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-6 {
    margin-top: 40px;
  }
}
.div-7 {
  font-family: Roboto Mono, sans-serif;
}
.div-8 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 54px;
}
@media (max-width: 991px) {
  .div-8 {
    margin-top: 40px;
  }
}
.div-9 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 52px;
}
@media (max-width: 991px) {
  .div-9 {
    margin-top: 40px;
  }
}
.div-10 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 60px;
}
@media (max-width: 991px) {
  .div-10 {
    margin-top: 40px;
  }
}
.div-11 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 54px;
}
@media (max-width: 991px) {
  .div-11 {
    margin-top: 40px;
  }
}
.div-12 {
  display: flex;
  width: 556px;
  max-width: 100%;
  gap: 16px;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  margin: 145px 0 0 90px;
}
@media (max-width: 991px) {
  .div-12 {
    flex-wrap: wrap;
    margin-top: 40px;
  }
}

@media (max-width: 991px) {
  .div-13 {
    padding: 0 20px;
  }
}

@media (max-width: 991px) {
  .div-14 {
    padding: 0 20px;
  }
}

@media (max-width: 991px) {
  .div-15 {
    margin: 40px 0 0 10px;
    padding: 0 20px;
  }
}

.div-15 button{
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  justify-content: center;
  padding: 22px 49px;
  color: #ffffff;
  margin: 47px 0 0 90px;
}

button{
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  justify-content: center;
  padding: 22px 49px;
  color: #ffffff;

}



</style>
