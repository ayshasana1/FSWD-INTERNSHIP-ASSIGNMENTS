/* 
how do websites update dynamically

traditional website:
1.click link-> entire page will reload
2.slow user experience
3. hard to manage UI


React: is a JS library for building UI
created by facebook
used in facebook news feed

why react?
1.component based architecture:UI will be diveded into diff blocks
2. virtual DOM - creates copy of memory, compare old vs new, updates only changed parts
3.Reusable and maintainable code

if you build food delivery app what components would you have create?


SPA - Singlr Page Application
a web app that loads one HTML page and dynamically updates content without full reload


traditional vs SPA


traditional(multi page) -  new html request, page reload, slower
SPA - loads once, js handles routing, no full reload
ex: gmail, youtube

how SPA works?
1.browser loads index.html
2. react loads js bundles
3.componnts render dynamically 
4.rounting handled internally


how to setup react application
1.node js installed
    node -v
    npm -v

2. create react app using vite
    nmp create vite@latest myapp

    react 
    js

3. cd myapp
4. npm i
5. npm run dev


what is JSX?
JS XML

it allows html inside JS
const ele = <h1> hello</h1>;


rules:
1.must return single parent element
ex: return{
    <h1>hello</h1>
    <p>hi<p/>
}

correct way:

return{
    <div>
    <h1>hello</h1>
    <p>hi<p/>
    </div>
}

2. use class name instead of class
ex:
<div className='box'>hello</div>

3. use {} or js inside jsx
const name ='sana';
return <h1>hello {name}</h1>


*/

