import { sample } from 'lodash';

// From https://whatdoestrumpthink.com/api-docs/index.html
import allQuotes from './quotes.json';

function getPersonalQuote(name) {
  return name + ' ' + sample(allQuotes.messages.personalized);
}

function getGenericQuote() {
  return sample(allQuotes.messages['non_personalized']);
}

export function getQuote(name) {
  /*
   Use setTimeout and new Promise to simulate a AJAX call using
   a Promise-compliant library like fetch.
   */
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(name ? getPersonalQuote(name) : getGenericQuote());
    }, 200);
  });
}
