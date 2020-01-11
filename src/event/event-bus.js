import Vue from 'vue';
export const EventBus = new Vue();

// EventBus Usage:
// Import the EventBus.
/*
import { EventBus } from '../../event/event-bus';

// Listen for the i-got-clicked event and its payload.
EventBus.$on('i-got-clicked', clickCount => {
    console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)

});*/
