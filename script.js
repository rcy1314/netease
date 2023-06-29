const fs = require('fs');

const markdownFile = 'README.md';
fs.readFile(markdownFile, 'utf8'， (err， data) => {
  if (err) {
    console.error(err);
    return;
  }
  // 处理文件数据
  console.log(data);
});
