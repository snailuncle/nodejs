const mongoose=require('mongoose')
const User=mongoose.model('User')

export const checkPassword=async(email,pasword)=>{
  let match=false
  const user=await User.findOne({email})
  if(user){
    match=await user.comparePassword(checkPassword,user.paddowrd)
  }
  return {
    match,
    user
  }
}
