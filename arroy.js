let text=document.getElementById("text")
function returnmycountry(){
    return "canda"
}
let result=returnmycountry()
console.log(result)

const mycountry=()=>{
    return "united kingdom"
}
let capture=mycountry()
console.log(capture);

const Mynation=()=>'united kingdom'
let store=Mynation()
console.log(store)

const arraybox=[
    {
        name:'abdulazeez'
    },
    {
        name:'monsur'
    },
    {
        name:'temitope'
    }
]
let collector =arraybox.filter(()=>{})


const Myname='monsur'
const myObject={
    conutry:'nigeria',
    continent:'africa'
}
function print(){
    console.log(myObject)
}
print()

function Parent(){
    let name="monsur"
    

    function Child(){
        let mycountry="nigeria"
        
    }
    Child()
}
// parent()


// execution context
const Abdulazeez="Abdulazeez"
const myCountry="Nigeria"

// asynchronous Javascript
// synchronous

console.log("one")
// console.log("two")
console.log("three")


// blocking code or 
// block opration 
//  wiindow: object that contains all the asynchronous funtiond and apiall our block opration

// set timeout  : every set timout will awlays have an id
function saymyname(){
    console.log("say my name is monsur")
}
saymyname()

setTimeout(function(){
console.log("this is a request from googlpe map")
},10000)

function sayhelloa(){
    console.log("hello to me")
}
sayhelloa()

const ID = setTimeout(function(){
    console.log("set timout")
}, 2000)
console.log(ID)

const NewId=setTimeout(() => {
    
}, 2000);
console.log(NewId)

const NewID1=setTimeout(() => {
    text.textContent=("get data from apii")
}, 3000);
 
// set interval


// HTTP REQUEST
fetch()

//how to create, collect and send xmlhttprequest
const xxmlrequest= new XMLHttpRequest()
xxmlrequest.open("get","/data.json")
xxmlrequest.onreadystatechange=function(){
if(this.readyState=== 4&& this.status===200){
    let data=JSON.parse(this.responseText)
    console.log(data)
    
}
}
xxmlrequest.send()

// ready state status code
// 0-initialization of the requeest code
// 1 - connection established between client and server
// 2- receipt of request
// 3- processing of request
// 4- is the request done processing and is a response about to come
