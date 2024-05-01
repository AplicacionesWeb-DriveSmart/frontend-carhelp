<script>
import {ClientService} from "../../carhelp/services/client.service";
export default {
  data() {
    return {
      client: null,
      clientService: null
    };
  },
  created() {
    this.clientService = new ClientService();
    const clientId = this.$route.params.id;
    this.clientService.getById(clientId).then(response => {
      this.client = response.data;
    });
  },
  methods: {
    onCancel() {
      this.$router.go(-1);
    }
  }
}
</script>
<template>
  <div v-if="client">
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <div class="div-4">Are you sure you want to delete the client?</div>
          <div class="div-5">
            <div class="div-6">
              <div class="column">
                <div class="div-7">
                  <div class="div-8">
                    <div class="textbox">Name: {{client.name}}</div>
                    <div class="textbox2">Phone: {{client.phone}}</div>
                  </div>
                  <div class="div-9"><button>Confirm</button></div>
                </div>
              </div>
              <div class="column-2">
                <div class="div-10">
                  <div class="textbox">E-mail: {{ client.email }}</div>
                  <div class="textbox2">Address: {{client.address}}</div>
                  <div class="div-11"><button @click="onCancel">Cancel</button></div>
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
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-3 {
  display: flex;
  width: 636px;
  max-width: 100%;
  flex-direction: column;
  margin: 83px 0 302px;
}
@media (max-width: 991px) {
  .div-3 {
    margin: 40px 0;
  }
}
.div-4 {
  border-radius: 30px;
  background-color: #b2c3d3;
  color: #000;
  justify-content: center;
  padding: 18px 57px;
  font: 500 20px Roboto Mono, sans-serif;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    padding: 0 24px 0 20px;
  }
}
.div-5 {
  margin-top: 46px;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-6 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-6 {
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
.div-7 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-7 {
    margin-top: 40px;
  }
}
.div-8 {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  padding: 0 16px;
}


@media (max-width: 991px) {
  .div-10 {
    margin-top: 40px;
  }
}

@media (max-width: 991px) {
  .div-9 {
    margin-top: 40px;
    white-space: initial;
    padding: 0 25px 0 20px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-10 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #000;
  font-weight: 500;
}
@media (max-width: 991px) {
  .div-10 {
    margin-top: 40px;
  }
}

@media (max-width: 991px) {
  .div-11 {
    white-space: initial;
    margin: 40px 0 0 10px;
    padding: 0 20px;
  }
}
button{
  margin-top: 50px;
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  justify-content: center;
  padding: 22px 49px;
  color: #ffffff;
}


.textbox {
  width: 120%;
  border: none;
  font-family: Roboto Mono, sans-serif;
 }

.textbox2 {
  margin-top: 56px;
  width: 120%;
  border: none;
  font-family: Roboto Mono, sans-serif;
}


</style>