<template>
   <div>
         <div class="container main">
            <div class="row">
               <a href="#" v-if="!isSession" v-on:click="isHiddenLogin = false, isHiddenRegister=true">Login</a>
               <a href="#" v-if="!isSession" v-on:click="isHiddenRegister = false, isHiddenLogin=true">Register</a>
               <a href="#" v-if="isSession" v-on:click="isSession = false">Logout</a>
            </div>
            <div class="row">
               <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <register v-if="!isHiddenRegister" @register="registerOutput($event)" ref="modalRegister"></register>
                  <loginM ref="modalLogin" v-if="!isHiddenLogin" @login="loginOutput($event)" ></loginM>
                  <dashboard v-if="isSession" ref="modalDashboard"></dashboard>
               </div>
            </div>
         </div>
   </div>
</template>
<style>
.main {
   align-items: center;
   height: 100vh;
}
</style>

<script>
   import modalRegister from "./user/register";
   import modalLogin from "./user/login";
   import modalDashboard from "./user/dashboard";
   // import modalForgot from "./user/";

   export default {
      data() {
        return {
            isHiddenLogin: true,
            isHiddenRegister: true,
            isSession: false,
        }
      },
      components: {
            "register": modalRegister,
            "loginM": modalLogin,
            "dashboard": modalDashboard
      },
      mounted() {
            this.loginOutput();
            // debugger;
            // if (data.status == 200) {
            //    this.isSession = true;
            // }
         
      },
      method: {
         // registerOutput(data) {
         //    debugger;
         //    if (data.status == 201) {
         //       console.log('ss');
         //    }
         // },
         // loginOutput: function() {
         loginOutput() {
            // debugger;
            if (data && data.status == 200) {
               this.isSession = true;
            }
         }
      }  
    }
</script>
