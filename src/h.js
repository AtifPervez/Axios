let s = ["h","e","l","l","o"]
const reverse=(s)=>{
   let start=0
   let end=s.length-1
   while(start<end){
        s[start]=s[start]+s[end]
        s[end]=s[start]-s[end]
        s[start]=s[start]-s[end]
        start++
        end--
      }
return s



}
console.log(reverse(s));