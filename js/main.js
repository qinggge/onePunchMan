! function () {
    let animationSpeed = 10
    speed.onchange = function(e){
        animationSpeed = e.currentTarget.value
    }
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, animationSpeed)
            } else {
                fn && fn.call()
            }
        }, animationSpeed)
    }

    let code = `/*
    *  面试官，您好！
    * 
    *  我叫「 朱煌 」，拥有两年Web前端开发经验！
    * 
    *  很高兴您能抽出宝贵的时间来查看我的作品！
    * 
    *  这是我在空余时间做的一个CSS作品！
    * 
    *  希望您会喜欢！
    * 
    *  现在，我们开始吧！
    */


    /* 首先，初始化样式以及设置背景。 */


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        background: linear-gradient(to bottom, #92DAE1, #FFF);
        overflow: hidden;
    }
    
    .wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    /* 接下来，画一颗椭圆的卤蛋（？） */

    .head {
        width: 208px;
        height: 308px;
        border: 3px solid black;
        border-top-left-radius: 48% 42%;
        border-top-right-radius: 48% 42%;
        border-bottom-left-radius: 50% 54%;
        border-bottom-right-radius: 50% 54%;
        background: #E2B5A0;
        position: relative;
    }
    
    /* 需要两只耳朵 */
    
    .head::before,
    .head::after {
        content: '';
        display: block;
        position: absolute;
        top: 135px;
        width: 40px;
        height: 75px;
        border: 3px solid #0C0807;
        background: #E2B5A0;
        border-top-left-radius: 100% 120%;
        border-top-right-radius: 100% 120%;
        border-bottom-right-radius: 90% 120%;
        border-bottom-left-radius: 90% 120%;
        z-index: -2;
    }
    
    .head::before {
        left: -18px;
        transform: rotate(-18deg);
    }
    
    .head::after {
        right: -18px;
        transform: rotate(18deg);
    }
    
    /* 给耳朵添加一点细节 */

    .ear {
        width: 16px;
        height: 28px;
        border: 2px solid black;
        position: absolute;
        top: 50%;
        z-index: -1;
        border: 2px solid #0C0807;
        border-bottom: 0;
        border-top-left-radius: 100% 120%;
        border-top-right-radius: 100% 120%;
    }
    
    .ear.left {
        left: -10px;
        transform: rotate(-10deg);
    }
    
    .ear.right {
        right: -10px;
        transform: rotate(10deg);
    }
    
    /* 光头总是会反光的 */

    .blink {
        width: 25px;
        height: 45px;
        background: #F2DCCB;
        position: absolute;
        border-radius: 50%;
        right: 30px;
        top: 40px;
        transform: rotate(-25deg);
    }
    
    /* 画两只呆滞无神的眼睛 */

    .eye {
        width: 57px;
        height: 30px;
        border: 2px solid black;
        background: #EAE6E3;
        position: absolute;
        top: 45%;
        background: #EAE6E3;
        border-top-left-radius: 70% 40%;
        border-top-right-radius: 70% 40%;
        border-bottom-right-radius: 60% 80%;
        border-bottom-left-radius: 60% 80%;
    }
    
    .eye.left {
        left: 25px;
    }
    
    .eye.right {
        right: 25px;
    }
    
    .eye::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: black;
        border: 1px solid black;
        border-radius: 100%;
        position: absolute;
        top: 8px;
    }
    
    .eye.left::after {
        right: 18px;
    }
    
    .eye.right::after {
        left: 18px;
    }
    
    .eye::before {
        content: '';
        display: block;
        width: 45px;
        height: 2px;
        position: absolute;
        top: -20px;
        border: 2px solid black;
        border-bottom: none;
        border-top-left-radius: 50% 98%;
        border-top-right-radius: 50% 98%;
    }
    
    .eye.left::before {
        right: 0;
    }
    
    .eye.right::before {
        left: 0;
    }
    
    .nose {
        position: absolute;
        height: 67px;
        width: 2px;
        left: 47%;
        top: 45%;
        border: 2px solid black;
        border-left: none;
        box-shadow: -1px 0px 5px 2px #A97462;
        border-top-right-radius: 98% 50%;
        border-bottom-right-radius: 98% 50%;
    }
    
    .nose::before {
        content: '';
        display: block;
        width: 1px;
        height: 1px;
        background: black;
        border: 1px solid black;
        border-radius: 100%;
        position: absolute;
        bottom: -7px;
        left: 4px;
        box-shadow: -3px -2px 5px 3px #A97462;
    }
    
    .nose::after {
        content: '';
        display: block;
        position: absolute;
        border-width: 5px 3px 5px 5px;
        border-color: transparent;
        border-right-color: black;
        border-style: solid;
        border-radius: 20px 30px 30px 40px;
        bottom: -10px;
        left: -4px;
        transform: rotate(-34deg);
    }
    
    .mouse {
        position: absolute;
        bottom: 20%;
        left: 50%;
        margin-left: -16px;
        background: #B07B6F;
        width: 33px;
        height: 12px;
        border: 2px solid black;
        border-radius: 50% / 0 0 100% 100%;
    }
    `
    writeCode('', code)
}.call()