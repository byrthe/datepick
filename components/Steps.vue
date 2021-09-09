<template>
    <section class="container">
        
        <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="hasNavigation"
            :icon-next="nextIcon"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">
            <b-step-item step="1" label="Info" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Info</h1>
                So you got re-directed here to book an appointment<br>
                the counter is at {{counter}}
                <Credentials />
            </b-step-item>

            <b-step-item step="2" label="Pick a date" :clickable="isStepsClickable">
                <div class="flexi">
                    <h1 class="title has-text-centered">Pick a date</h1>
                    <Calendar />
                </div>
            </b-step-item>

            <b-step-item step="3" label="Fun" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Add something</h1>
            </b-step-item>

            <b-step-item step="4" label="Send!" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Send!</h1>
                Lorem ipsum dolor sit amet.
            </b-step-item>

            <template
                v-if="customNavigation"
                #navigation="{next}">
                
                <b-button
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Next
                </b-button>
            </template>

        </b-steps>
    </section>

</template>

<script>

import Credentials from '~/components/Credentials.vue'
import Calendar from '~/components/Calendar.vue'

    export default {
        components: {
            Credentials,
            Calendar,

        },
        data() {
            return {
                activeStep: 0,

                showSocial: false,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: false,

                hasNavigation: true,
                customNavigation: true,
                isProfileSuccess: false,

                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'compact'
            }
        },
        computed: {
            counter(){
                return this.$store.state.counter
            }
        },
    }
</script>

<style>

</style>
