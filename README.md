# virgule.js

Generate cool virgule fade-in animations for a piece of text  

为一段文本生成酷炫的斜杠淡入动画  

## Usage

```
npm i virgule-js
```

```javascript
const virgule = require('virgule-js')

let virguleList = virgule(text);

// return: a list 
/*
eg: Hello World! => 
[
  '/',            '//',           '///',
  '////',         '/////',        '///// ',
  '///// /',      '///// //',     '///// ///',
  '///// ////',   '///// /////',  '///// //////',
  'F//// //////', 'PE/// //////', 'YKZ// //////',
  'SV40/ //////', 'VGIPF //////', 'R9MBI //////',
  'E4PPO K/////', 'QVYN7 21////', '2VR5Y FKA///',
  'KB1PA 2BHO//', 'I9H3V CDRD4/', '5P3UL DG6YJM',
  'HEZE0 1N3KEU', 'HeVXE 4NL1LC', 'HelA8 PH8N9X',
  'HellM N1JKFK', 'Hello IXS0YI', 'Hello NOX2GE',
  'Hello wD3XNV', 'Hello woDIXB', 'Hello worVUF',
  'Hello worl3W', 'Hello world2', 'Hello world!'
]
*/
```

## Example

```javascript
const text = 'Generate cool virgule fade-in animations for a piece of text'
const num = 10

const virglueText = virgule(text,num)

let i = 0

let timer = setInterval(()=>{
    process.stdout.write(virglueText[i]+'\r')
    i++
    if (i >= virglueText.length) {
        console.log(virglueText.pop())
        clearInterval(timer)
    }
},25)
```
