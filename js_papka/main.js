
  
//   var  ar = [1,2,3,4,6,7,5,8,9];
// var b;
// var a=prompt(b);
// var l=0;
//          for( i = 0; i < 9; i++ ){
//              for( j = 0; j < 9; j++ ){
//                 if( ( ar[i] + ar[j] == a ) && (  ar[i] < ar[j] ) ) 
//                 {
//                     console.log("[", ar[i] , ",", ar[j], "]") ;
//                     l++;
//                 }
//             }
//         }

//         if( l== 0) console.log (a, ' ga teng yigindi mavjud emas');
// //  alert (ar[b]);

let s=1;
let a = prompt("a=");
if(a<0) {
    alert("manfiy sonni faktoryali mavjud emas!")
}
else if(a == 0) {
    alert(1);
}
else{
    for(i=1; i<=a; i++)
    {
        s*=i;
    }
    alert(s);
}

// console.log(Math.floor(s))