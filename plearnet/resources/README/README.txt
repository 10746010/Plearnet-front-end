把.html 轉換成.vue

view資料夾底下的.vue檔案當成是想要被看到的畫面

而這個畫面裡面的功能(例如按鈕) 放在components資料夾底下

例如user.html檔案 跟 views資料夾底下的User.vue檔案當成是想要被看到的畫面

我希望在User.vue可以看到user.html的畫面
而user.html的功能可以分成options(點選到其他頁面的按鈕的功能)
以及content(例如Like頁面的文字)

那就會在Vue的components的資料夾底下建立檔案叫做 某某.vue(例如Button.vue檔案 是放options的功能的，以及 Like.vue是放Like這個頁面的文字的)

然後我在Button.vue這個檔案裡的Style只負責這些按鈕的css、Like.vue只負責這個Like頁面的css (只為了方便管理)

然後在views資料夾底下創建某某.vue檔案(把Button.vue和Like.vue這兩個檔案import到這個某某.vue畫面上)




因為我看history 和 like兩個畫面的左半部一樣，然後右半部長得很像
原本可能history 和 like有兩個一樣的class名稱都叫做content的東西，然後需要分別設定兩次.content的css
所以我把content這個class放在views資料夾底下的User.vue裡 這樣只會需要設定一次的css就行了
如果histroy和 like 之後右半部的畫面長的不一樣的話，class名稱也可以更改(例如a,b)
然後在各自底下的.vue檔案的Style裡設定css(把Views.vue裡的User.vue的content刪掉就行了)
 
