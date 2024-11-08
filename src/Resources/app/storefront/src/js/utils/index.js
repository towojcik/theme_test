import AccordionHandlerPlugin from './accordion-handler';

const PluginManager = window.PluginManager;

// Plugin register example example
PluginManager.register('AccordionHandlerPlugin', AccordionHandlerPlugin, '[data-js-accordion-handler]');
