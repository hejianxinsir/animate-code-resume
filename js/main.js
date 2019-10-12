var css1 = `
/* 首先，去掉默认样式 */

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* 来个左侧展示卡片 */

body > #leftCode{
	position: fixed;
	left: 0;
	top: 0;
	overflow: hidden;

	border: 1px solid rgba(0,0,0,0.1);
	background: rgba(0,0,0,0);
	color: black;
	width: 49%;
	height: 99vh;
	border-radius: 3px;
	padding: 7px 28px;
	margin: 5px 5px;
}

/* 然后使用 prism 库高亮代码 */
.token.selector{
	color: #690;
}
.token.property{
	color: #905;
}
.token.function{
	color: #DD4A68;
}

/* 接下来添加呼吸效果 */

#leftCode{
	animation: breath 1.5s infinite alternate-reverse; 
}

/* 然后生成右边的卡片 */
body > #resumePaper{
	position: fixed;
	right: 0;
	top: 0;
	overflow: hidden;
	color: white;
	background: black;
	border: 1px solid rgba(0,0,0,0.7);
	width: 49%;
	height: 99vh;
	border-radius: 3px;
	padding: 7px 28px;
	margin: 5px 5px;
}
`

var css2 = `
# 大家好，我叫 Janson，来自喜马拉雅山山顶。
- 这是我的电话
- 这是我的邮箱
- 这是我的微信
- 这是我的钱
- 需要的话都能给你

# 大家好，我叫 Janson，来自喜马拉雅山山顶。
- 这是我的电话
- 这是我的邮箱
- 这是我的微信
- 这是我的钱
- 需要的话都能给你

# 大家好，我叫 Janson，来自喜马拉雅山山顶。
- 这是我的电话
- 这是我的邮箱
- 这是我的微信
- 这是我的钱
- 需要的话都能给你

# 大家好，我叫 Janson，来自喜马拉雅山山顶。
- 这是我的电话
- 这是我的邮箱
- 这是我的微信
- 这是我的钱
- 需要的话都能给你

# 大家好，我叫 Janson，来自喜马拉雅山山顶。
- 这是我的电话
- 这是我的邮箱
- 这是我的微信
- 这是我的钱
- 需要的话都能给你

# 大家好，我叫 Janson，来自喜马拉雅山山顶。
- 这是我的电话
- 这是我的邮箱
- 这是我的微信
- 这是我的钱
- 需要的话都能给你
`

writeCode('', css1, ()=>{
	console.log(1)
	createPaper(()=>{
		console.log(2)
	})
})

function writeCode(prefix, css, fn){
	var n = 0
	var leftCode = document.querySelector('#leftCode')
	var styleCode = document.querySelector('#styleCode')
	var id = setTimeout(function fnTime(){
		n += 1
		leftCode.innerHTML = Prism.highlight(prefix + css.slice(0,n), Prism.languages.css, 'css');
		styleCode.innerHTML = prefix + css.slice(0,n)
		leftCode.scrollTop = leftCode.scrollHeight
		if( n < css.length){
			setTimeout(fnTime,10)
		}else{}
		fn && fn.call()
	},10)
}

function createPaper(fn){
	var div = document.createElement('div')
	div.id = 'resumePaper'
	var content = document.createElement('pre')
	content.className = 'content'
	div.appendChild(content)
	document.body.appendChild(div)
	fn && fn.call()
}

// function writeMarkdown(fn){
// 	var domCode = document.querySelector('.content')

// 	fn && fn.call()
// }



