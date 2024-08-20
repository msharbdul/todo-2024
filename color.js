function generateOtp(){
    let otp =Math.floor(10000+Math.random()*90000);
    return otp;
}
console.log(generateOtp());