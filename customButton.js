Vue.customElement('widget-vue', {
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data() {
    return {
      message: 'Hello WebComponent!'
    }
  },
  template: '<p>{{ message }}, {{ prop1 }}, {{prop2}}, {{prop3}}<button>Web</button></p>'
});