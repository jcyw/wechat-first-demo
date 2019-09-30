// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  var arr = [
    {id : 1, name : 'jc'},
    {id : 2, name : 'yw'}
  ]
  for(i = 0;i < arr.length ; i++)
  {
    await db.collection('data').add({
      data: {
        ...arr[i],
        addtime: db.serverDate()
      }
    }).then(res => {
      console.log("插入成功")
    }).catch(err => {
      console.log("插入失败")
    })
  }
  
}