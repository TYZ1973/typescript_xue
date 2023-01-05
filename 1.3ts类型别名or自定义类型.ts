// 当某些类型比较复杂或者说比较麻烦，且要被多次使用时

type CustomArray = (number | string)[]

let ar1 : CustomArray =[1,2,3,'c','cc','ss']
//上下方式相同
let ar2 : (number | string)[] =[1,2,3,'dd','dd','dd']


