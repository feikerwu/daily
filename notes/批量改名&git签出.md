### 批量改名

将所有的png后缀文件改为jpg后缀
``` bash
rename 's/\.png/\.jpg/' *
```

### git 从commit签出

直接reset即可，不需要添加soft
```bash
git reset HEAD^
```