
<script>
export default {
  name: 'Clientlist',
}
</script>

<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <div class="div-4">Client list</div>
        <div class="div-5"><button>Add client</button></div>
      </div>
      <div class="div-6">
        <div class="div-7">
          <div class="column">
            <div class="div-8">
              <div class="div-9">
                <div class="column-2">
                  <div class="div-10">
                    <img
                        loading="lazy"
                        srcSet="src/assets/img/persona1.png"
                        class="img"
                    /><img
                      loading="lazy"
                      srcSet="src/assets/img/persona2.png"
                      class="img-2"
                  />
                  </div>
                </div>
                <div class="column-3">
                  <div class="div-11">
                    <div class="div-12">Name: Jose</div>
                    <div class="div-13">Last name: Rodriguez Corral</div>
                    <div class="div-14">
                      <div class="div-15"><button>Edit</button></div>
                      <div class="div-16"><button>Delete</button></div>
                    </div>
                    <div class="div-17">Name: Jose Eduardo</div>
                    <div class="div-18">Last name: Torres Peralta</div>
                    <div class="div-19">
                      <div class="div-20"><button>Edit</button></div>
                      <div class="div-21"><button>Delete</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-4">
            <div class="div-22">
              <div class="div-23">
                <div class="column-5">
                  <div class="div-24">
                    <img
                        loading="lazy"
                        srcSet="src/assets/img/persona3.png"
                        class="img-3"
                    /><img
                      loading="lazy"
                      srcSet="src/assets/img/persona4.png"
                      class="img-4"
                  />
                  </div>
                </div>
                <div class="column-6">
                  <div class="div-25">
                    <div class="div-26">
                      <div class="div-27">Name: Jose</div>
                      <div class="div-28">Last name: rodriguez Benavides</div>
                    </div>
                    <div class="div-29">
                      <div class="div-30"><button>Edit</button></div>
                      <div class="div-31"><button>Delete</button></div>
                    </div>
                    <div class="div-32">
                      <div class="div-33">Name: Laura</div>
                      <div class="div-34">Last name: Peralta Cifuentes</div>
                    </div>
                    <div class="div-35">
                      <div class="div-36"><button>Edit</button></div>
                      <div class="div-37"><button>Delete</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  padding: 66px 60px 0;
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
  padding: 80px 70px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-3 {
  display: flex;
  margin-top: 70px;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-4 {
  color: #000;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 80px Roboto Mono, sans-serif;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    font-size: 40px;
  }
}

@media (max-width: 991px) {
  .div-5 {
    padding: 0 20px;
  }
}
.div-6 {
  margin: 95px 0 86px;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
    margin: 40px 0;
  }
}
.div-7 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-7 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-8 {
  flex-grow: 1;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-9 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-9 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 42%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-10 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-10 {
    margin-top: 40px;
  }
}
.img {
  aspect-ratio: 1.05;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 50%;
}
.img-2 {
  aspect-ratio: 1.03;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 46px;
}
@media (max-width: 991px) {
  .img-2 {
    margin-top: 40px;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 58%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-11 {
  display: flex;
  margin-top: 26px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #000;
  font-weight: 500;
}
@media (max-width: 991px) {
  .div-11 {
    margin-top: 40px;
  }
}
.div-12 {
  font-family: Roboto Mono, sans-serif;
}
.div-13 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 60px;
}
@media (max-width: 991px) {
  .div-13 {
    margin-top: 40px;
  }
}
.div-14 {
  display: flex;
  margin-top: 9px;
  align-items: start;
  gap: 7px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
}
@media (max-width: 991px) {
  .div-14 {
    white-space: initial;
  }
}

@media (max-width: 991px) {
  .div-15 {
    white-space: initial;
    padding: 0 20px;
  }
}

button{
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  justify-content: center;
  padding: 22px 49px;
  color: #ffffff;

}


@media (max-width: 991px) {
  .div-16 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-17 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 103px;
}
@media (max-width: 991px) {
  .div-17 {
    margin-top: 40px;
  }
}
.div-18 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 61px;
}
@media (max-width: 991px) {
  .div-18 {
    margin-top: 40px;
  }
}
.div-19 {
  display: flex;
  margin-top: 9px;
  align-items: start;
  gap: 7px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
}
@media (max-width: 991px) {
  .div-19 {
    white-space: initial;
  }
}

@media (max-width: 991px) {
  .div-20 {
    white-space: initial;
    padding: 0 20px;
  }
}

@media (max-width: 991px) {
  .div-21 {
    white-space: initial;
    padding: 0 20px;
  }
}
.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}
.div-22 {
  flex-grow: 1;
}
@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-23 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-23 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 42%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-24 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-24 {
    margin-top: 24px;
  }
}
.img-3 {
  aspect-ratio: 0.99;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
.img-4 {
  aspect-ratio: 0.93;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 33px;
}
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 58%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.div-25 {
  display: flex;
  margin-top: 26px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #000;
  font-weight: 500;
}
@media (max-width: 991px) {
  .div-25 {
    margin-top: 40px;
  }
}
.div-26 {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 44px 0 15px;
}
@media (max-width: 991px) {
  .div-26 {
    padding-right: 20px;
  }
}
.div-27 {
  font-family: Roboto Mono, sans-serif;
}
.div-28 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 60px;
}
@media (max-width: 991px) {
  .div-28 {
    margin-top: 40px;
  }
}
.div-29 {
  display: flex;
  margin-top: 9px;
  align-items: start;
  gap: 7px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
}
@media (max-width: 991px) {
  .div-29 {
    white-space: initial;
  }
}

@media (max-width: 991px) {
  .div-30 {
    white-space: initial;
    padding: 0 20px;
  }
}

@media (max-width: 991px) {
  .div-31 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-32 {
  display: flex;
  margin-top: 104px;
  flex-direction: column;
  align-items: start;
  padding: 0 68px 0 15px;
}
@media (max-width: 991px) {
  .div-32 {
    padding-right: 20px;
    margin-top: 40px;
  }
}
.div-33 {
  font-family: Roboto Mono, sans-serif;
}
.div-34 {
  font-family: Roboto Mono, sans-serif;
  margin-top: 60px;
}
@media (max-width: 991px) {
  .div-34 {
    margin-top: 40px;
  }
}
.div-35 {
  display: flex;
  margin-top: 10px;
  align-items: start;
  gap: 7px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
}
@media (max-width: 991px) {
  .div-35 {
    white-space: initial;
  }
}

@media (max-width: 991px) {
  .div-36 {
    white-space: initial;
    padding: 0 20px;
  }
}

@media (max-width: 991px) {
  .div-37 {
    white-space: initial;
    padding: 0 20px;
  }
}
</style>