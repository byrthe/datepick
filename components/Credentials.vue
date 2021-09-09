<template>
    <section>
        <b-field>
            <b-input v-model="name"
                    placeholder="Your Name"
                    type="name"
                    icon-pack="fas"
                    icon="envelope"
                    >
            </b-input>
        </b-field>        
        <b-field>
            <b-input v-model="email"
                placeholder="Email"
                type="email"
                icon-pack="fas"
                icon="envelope">
            </b-input>
        </b-field>
        <b-button>Submit</b-button>
    </section>
</template>

<script>

export default{
    computed: {
          name: {
            /* By default get() is used */
            get() {
            return this.$store.state.name
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateName', value)
            }
        },
        email: {
            /* By default get() is used */
            get() {
            return this.$store.state.email
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateEmail', value)
            }
        }
    },
}
</script>