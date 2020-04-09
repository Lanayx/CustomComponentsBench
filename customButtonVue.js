Vue.component('widget-vue', {
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data() {
    return {
      message: 'Hello VueComponent!'
    }
  },
  template: '<p>{{ message }}, {{ prop1 }}, {{prop2}}, {{prop3}}<button>Vue</button></p>'
});