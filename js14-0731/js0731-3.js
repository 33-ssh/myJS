<<<<<<< HEAD
// 建立一個存放選取結果的倍數
let result = "";
// 取得送出按鈕
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否左鍵一下
//  add by shan on 2404.07.31

myBtn.addEventListener('click', () => {

    // 取得下拉式方塊
    let myCity = document.querySelector('#city');
    // 使用迴圈，逐一檢查是否被選取 =>selected
        for(let i=0; i<myCity.length;i++){
            if(myCity[i].selected) {
                if(myCity[i].value == "") {
                    result = '尚未選取縣市'
                } else {
                    result = myCity[i].value;
                }
                break;
            }
        }
        console.log('縣市:'+ result);
    });

    // for (let i = 0; i < myCity.length; i++) {
    //     if (myCity[i].selceted) {
    //         if (myCity[i].value == "") {
    //             result = '尚未選取縣市'
    //         } else {
    //             result = myCity[i].value;
    //         }
    //         break;
    //     }
    // }
    // console.log('縣市:' + result);
// });
=======
// 建立一個存放選取結果的倍數
let result = "";
// 取得送出按鈕
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否左鍵一下
//  add by shan on 2404.07.31

myBtn.addEventListener('click', () => {

    // 取得下拉式方塊
    let myCity = document.querySelector('#city');
    // 使用迴圈，逐一檢查是否被選取 =>selected
        for(let i=0; i<myCity.length;i++){
            if(myCity[i].selected) {
                if(myCity[i].value == "") {
                    result = '尚未選取縣市'
                } else {
                    result = myCity[i].value;
                }
                break;
            }
        }
        console.log('縣市:'+ result);
    });

    // for (let i = 0; i < myCity.length; i++) {
    //     if (myCity[i].selceted) {
    //         if (myCity[i].value == "") {
    //             result = '尚未選取縣市'
    //         } else {
    //             result = myCity[i].value;
    //         }
    //         break;
    //     }
    // }
    // console.log('縣市:' + result);
// });
>>>>>>> 7d665d037b9f9a799ee4dbfd19c3fe0f39dd6f05
