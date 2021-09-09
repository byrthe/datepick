<template>
    <section class="section flexcol">
        <h1>{{datetime}}</h1>
        
        <b-datetimepicker 
        v-model="datetime" 
        inline
        rounded
        placeholder="Click to select..."
        :datepicker="{ showWeekNumber }"
        :timepicker="{ enableSeconds }"
        horizontal-time-picker
        >
            
        </b-datetimepicker>
        
        <h1>{{datetime}}</h1>
            <div class="flexrow">
                <button class="button is-primary" @click="datetime = new Date()">
                    <span>Today</span>
                </button>

                <button class="button is-danger" @click="datetime = null">
                    <span>Clear</span>
                </button>

                <button class="button is-success" @click="submitdate = datetime">
                    <span>Submit</span>
                </button>
            </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            showWeekNumber: false,
            enableSeconds: false,
            submitdate: null
        }
    },
    computed: {
          datetime: {
            /* By default get() is used */
            get() {
            return this.$store.state.datetime
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateDate', value)
            }
          }
    },
    methods: {
         
    }
}
</script>

<style>

</style>
