// lib/tailwind.js
import {create} from 'twrnc';
import styles from './tailwind.config.js';

// create the customized version...
const tailwind = create(styles); // <- your path may differ

// ... and then this becomes the main function your app uses
export {tailwind};