/**
 * Created by cyz on 2017/8/19.
 */
'use strict';
let arr=['s','a','s','b','a',1,'1',1];
console.log(arr);
console.log('去重结果为：')
main(arr);
function main(collection){
    let result =[];
    collection.map((item)=>{
        if(!result.includes(item)){
            result.push(item)
        }
    })
    console.log(result);
}