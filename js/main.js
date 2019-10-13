var css1 = `
/* 首先，去掉默认样式 */

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: all 1s;
}
ul, ol, li{
	list-style: none;
}

/* 来个左侧展示卡片 */

body > #leftCode{
	color: black;
	width: 49%;
	height: 97vh;

	position: fixed;
	top: 0;
	left: 0;
	margin: 7px 7px; 
	padding-left: 21px;
	border: 1px solid rgb(0,0,0,0.3); 
	overflow: hidden;
	background: white;
	border-radius: 3px;
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
	color: white;
	bakcground: rgb(0,0,0,0.7);
	width: 49%;
	height: 97vh;

	position: fixed;
	right: 0;
	top: 0;
	margin: 7px 14px;
	padding-top: 14px;
	padding-left: 35px;

	overflow: auto;
	background: #2e2e2e;
	border-radius: 3px;
}

#resumePaper > .content{
	width: 100%;
	height: 100%;
	overflow: auto;
}

#resumePaper h1{
	font-size: 24px;
	padding: 12px 0;
}
#resumePaper ul li{
	padding: 5px 27px;
}

/* 最后用一个牛逼的库: marked.js 把 markdown 转为 HTML */



`

var markdownBody = `
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

var css2 = `
/* 以上，谢谢观看 */
`

writeCode('', css1, ()=>{
	createPaper(()=>{
		writeMarkdown(markdownBody,()=>{
			convartMarkdownToHMTL(()=>{
				writeCode(css1, css2, ()=>{
					console.log('completed')
				})	
			})			
		})
	})
})

function writeCode(prefix, css, fn){
	var n = 0
	var leftCode = document.querySelector('#leftCode')
	var styleCode = document.querySelector('#styleCode')
	var id = setInterval(function(){
		n += 1
		leftCode.innerHTML = Prism.highlight(prefix + css.slice(0,n), Prism.languages.css, 'css');
		styleCode.innerHTML = prefix + css.slice(0,n)
		leftCode.scrollTop = leftCode.scrollHeight
		if(n >= css.length){
			window.clearInterval(id)
			fn && fn.call()	
		}	
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

function writeMarkdown(markdown,fn){
	var n = 0
 	var domCode = document.querySelector('#resumePaper > .content')
	var id = setInterval(function(){
		n += 1
		domCode.innerHTML = markdown.slice(0,n)
		domCode.scrollTop = domCode.scrollHeight
		if(n >= markdown.length){
			window.clearInterval(id)
			fn && fn.call()	
		}	
	},10)
}

function convartMarkdownToHMTL(fn){
	var domContent = document.querySelector('#resumePaper > .content')
	var div = document.querySelector('div')
	div.claddName = 'html markdownBody'
	div.innerHTML = marked(markdownBody)	
	domContent.replaceWith(div)
	fn && fn.call()
}

