# virgule.js

Generate cool virgule fade-in animations for a piece of text

为一段文本生成酷炫的斜杠淡入动画

## Usage

```
npm i virgule-js
```

```javascript
const virgule = require("virgule-js");

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

### Nodejs

```javascript
const text = "Generate cool virgule fade-in animations for a piece of text";
const num = 10;

const virglueText = virgule(text, num);

let i = 0;

let timer = setInterval(() => {
  process.stdout.write(virglueText[i] + "\r");
  i++;
  if (i >= virglueText.length) {
    console.log(virglueText.pop());
    clearInterval(timer);
  }
}, 25);
```

### Frontend

```javascript
async function virgule(element, text, interval) {
    let vir = (await import('virgule-js')).default;
    let targetList = vir(text);
    let doneTime = 0;
    let virguleTimer = setInterval(() => {
        doneTime++;
        element.innerHTML = targetList[doneTime - 1];
        if (doneTime == targetList.length) {
            clearInterval(virguleTimer);
        }
    }, interval);
}
```

### React(Nextjs)

```javascript
// @/components/Virgule.jsx
'use client';

import React, { useEffect, useRef } from 'react';

const Virgule = ({ text, interval = 20, inline = false, timeout }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const loadVirgule = async () => {
            let vir = (await import('virgule-js')).default;
            let targetList = vir(text);
            let doneTime = 0;
            let virguleTimer = setInterval(() => {
                doneTime++;
                if (elementRef.current) {
                    elementRef.current.innerHTML = targetList[doneTime - 1];
                }
                if (doneTime === targetList.length) {
                    clearInterval(virguleTimer);
                }
            }, interval);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        loadVirgule();
                    }, timeout);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [text, interval, inline, timeout]);

    return inline ? <span ref={elementRef}>/</span> : <div ref={elementRef}>/</div>;
};

export default Virgule;
```

```javascript
import Virgule from '@/components/Virgule';

<Virgule text={'Hello World'} interval={20} timeout={1500} inline={false}/>

// text: 显示的文字
// interval: 每个文字显示的时间
// timeout：用户看到此元素几毫秒后开始动画
// inline: 是否为行内元素，true为span，false为div
```

## Minify

```
npm run minify
```
