const array=[
    {
        name:'monsur',
        country:'nigeria'
    },
    {
        name:'temitope',
        country:'nigeria'
    }
]
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(array)
    })
}).then((data)=>{
    return data[0]
}).then((newdata)=>{
    let country=newdata.country
    return country
    console.log(newdata)
})
