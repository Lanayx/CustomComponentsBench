  customElements.define('widget-vue', wrap(Vue, {
    template: '<p>{{ message }}, {{ prop1 }}, {{prop2}}, {{prop3}}<button>Web</button></p>',
    props: [
        'prop1',
        'prop2',
        'prop3'
    ],
    data() {
            return {
                message: 'Hello WebComponent2!'
            }
        },
  }))