# Google Translation API
A free and unlimited API for Google Translate.

## Feautres
- Auto language detection.
- More suggesstions for translated text.
- Language correction.
- Spelling correction.

## Installation

```sh-session
npm install anuki-translate
yarn add anuki-translate
```

## Import files

CommonJs
```js
const translate = require('anuki-translate');
```
HTML CDN
```html
<script src="https://unpkg.com/anuki-translate"></script>
```

## Examples
Translate text to specify language.
```js
translate('Hello!', {
  to: 'fr' // Translating from English to French.
}).then(data => {
  console.log(data.text); // Salut!
});
```

## Returns
```js
data = {
  text: 'Salut!', // translated text
  to: { // translation information
    language: { // detected language information
      iso: 'fr', // language iso code
      name: 'French', // language name
      nativeName: 'français, langue française' // language native name
    },
    suggesstions: ['Salut!', 'Bonjour!'] // more translation suggests
  },
  from: { // inputed data
    text: 'Hello!',
    language: { // translated from language
      iso: 'en',
      name: 'English',
      nativeName: 'English'
    }
  }
}
```