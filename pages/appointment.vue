<template>
  <div class="column">
    <h1>Your Appointment</h1>
    <section>
        Name {{name}}<br>
        Email {{email}}<br>
        Date {{datetime}}<br>
        <button @click="sendConfirmation">Confirm appointment</button>
    </section>
  </div>
</template>

<script>
// import store from '@/store/index'
export default {
    computed: {
        name () {
            return this.$store.state.name
        },
        email () {
            return this.$store.state.email
        },
        datetime () {
            return this.$store.state.datetime
        }
    },
    methods: {
        sendConfirmation(){
            console.log('gonna send an email')
        },
    }
}
</script>