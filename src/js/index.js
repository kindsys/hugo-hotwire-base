// eslint-disable-next-line no-unused-vars
import * as Turbo from '@hotwired/turbo';
import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

const application = Application.start();
const context = require.context('./controllers', true, /\.js$/);

application.load(definitionsFromContext(context));

console.log(1);

// JS Goes here - ES6 supported

// Say hello
console.log('🦊 Hello! Edit me in src/index.js');
