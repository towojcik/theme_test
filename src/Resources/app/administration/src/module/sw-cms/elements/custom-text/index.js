import './component';
import './config';
import './preview';

const configuration = {
  name: 'custom-text',
  label: 'sw-cms.elements.custom-text.label',
  component: 'sw-cms-el-custom-text',
  configComponent: 'sw-cms-el-config-custom-text',
  previewComponent: 'sw-cms-el-preview-custom-text',
  defaultConfig: {
    content: {
      source: 'static',
      value: `
        <h2>Lorem Ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      `.trim(),
    },
    verticalAlign: {
      source: 'static',
      value: null,
    },
  },
};

Shopware.Service('cmsService').registerCmsElement(configuration);
