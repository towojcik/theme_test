import template from './sw-cms-el-config-custom-text.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-el-config-custom-text', {
  template,

  mixins: [
    Mixin.getByName('cms-element'),
  ],

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('custom-text');
    },

    onBlur(content) {
      this.emitChanges(content);
    },

    onInput(content) {
      this.emitChanges(content);
    },

    emitChanges(content) {
      if (content !== this.element.config.content.value) {
        this.element.config.content.value = content;
        this.$emit('element-update', this.element);
      }
    },
  },
});
