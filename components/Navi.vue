<template>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navflex">
        <nuxt-link class="navbar-item" :to="{name: 'index'}">datepicker</nuxt-link>
        <nuxt-link class="navbar-item" :to="{name: 'counter'}">Counter</nuxt-link>
        <nuxt-link class="navbar-item" :to="{name: 'appointment'}">Your Appointment</nuxt-link>

      <!-- <b-field>
            <b-switch
                v-model="lightMode"
                passive-type='is-dark'
                type='is-warning'>
                {{ lightMode ? "Light Mode" : "Dark Mode" }}
            </b-switch>
        </b-field> -->
    </div>
    </nav>
</template>

<script>
export default{
    datat(){
        return{
            lightMode: false
        }
    }
}
</script>

<style>
    .navflex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav{
        margin-bottom: 15px;
    }

</style>