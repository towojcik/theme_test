import './js/utils';
import QuantitySelectorPlugin from './js/plugins/quantity-selector-plugin-override.js';

const PluginManager = window.PluginManager;

// Plugin override example
PluginManager.override('QuantitySelector', QuantitySelectorPlugin, '[data-quantity-selector]');
