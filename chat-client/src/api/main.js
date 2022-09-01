const fs = require('fs')

const content = 'test'

fs.writeFile('/Users/lixinzhuo/vue3-socket-chat/template.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})