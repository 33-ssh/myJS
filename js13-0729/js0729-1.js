// 取得元素節點node
// 根據id屬性
// let myjs = document.getElementById('js');
// console.log(typeof myjs);
// console.log(myjs.textContent);
// console.log(document.querySelector('#js').textContent);

// 根據html標籤
// let myLi = document.getElementsByTagName('li');
// console.log(myLi);
// 取出css
// console.log(myLi.item(1).textContent);
// console.log(myLi[1].textContent);

// 顯示所有的li (篩選機制)
// for(let i=0;i<myLi.length;i++){
//     console.log(myLi.item(i).textContent);
//     console.log(myLi[i].textContent);
// }


// console.log('---querySelector---')
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('h1').textContent);
// console.log('---getElementsByTagName---');
// console.log(document.getElementsByTagName('h1').item(0).textContent);
// console.log(document.getElementsByTagName('h1')[0].textContent);

// 使用類別名稱
// let mySubjects = document.getElementsByClassName('subjects');
// console.log(mySubjects);

// for (let i = 0; i < mySubjects.length; i++) {
//     console.log(mySubjects.item(i).textContent);
//     console.log(mySubjects[i].textContent);
// }

// 顯示指定的內容=>html
// console.log(mySubjects['css'].textContent);

// 取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li子元素中的p
let myP = document.querySelector('li>p');
console.log(myP);
console.log(myP[0].textContent);

// 取得li子元素中的div底下的p
let myDivP = document.querySelectorAll('li>div>p');
console.log(myDivP[0].textContent);