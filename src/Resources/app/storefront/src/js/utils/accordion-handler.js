import Plugin from 'src/plugin-system/plugin.class';

export default class AccordionHandlerPlugin extends Plugin {
  _init() {
    const accordionContent = this.el.querySelector('.js-accordion-content');

    this.el.addEventListener('click', () => accordionContent.classList.toggle('accordion-hidden'));
  }
}
