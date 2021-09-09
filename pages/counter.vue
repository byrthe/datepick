<template>
  <div class="column">
    <h1>Counter</h1>
    <section>
        counter: {{counter}}
      <button @click="addone">increase</button>
      <button @click="takeone">decrease</button>
    </section>

  </div>
</template>

<script>
// import store from '@/store/index'
export default {
    computed: {
      counter () {
        return this.$store.state.counter
          }
    },
    methods: {
        addone(){
        this.$store.dispatch('increment')
        },
        takeone(){
        this.$store.dispatch('decrement')
        }
    }
}
</script>