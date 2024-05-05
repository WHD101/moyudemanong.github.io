window.onload = function() {  
    var canvas = document.getElementById('canvas');  
    var ctx = canvas.getContext('2d');  
  
    // 监听窗口大小变化以更新canvas尺寸  
    window.addEventListener('resize', resizeCanvas);  
  
    function resizeCanvas() {  
        canvas.height = window.innerHeight;  
        canvas.width = window.innerWidth;  
        initDrops();  
    }  
  
    // 初始化drops数组和绘制函数  
    function initDrops() {  
        var texts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');  
        var fontSize = 16;  
        var columns = canvas.width / fontSize;  
        var drops = [];  
  
        for (var x = 0; x < columns; x++) {  
            drops[x] = 1; // 初始化每一列的起始位置  
        }  
  
        function draw() {  
            // 清除画布  
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  
            ctx.fillRect(0, 0, canvas.width, canvas.height);  
  
            // 文字颜色  
            ctx.fillStyle = randColor();  
            ctx.font = fontSize + 'px Microsoft YaHei'; // 字体  
  
            // 逐行输出文字  
            for (var i = 0; i < drops.length; i++) {  
                var text = texts[Math.floor(Math.random() * texts.length)];  
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);  
  
                // 更新位置，如果超出边界或随机条件满足则重置位置  
                if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {  
                    drops[i] = 0;  
                }  
  
                drops[i]++;  
            }  
        }  
  
        function randColor() {  
            var r = Math.floor(Math.random() * 256);  
            var g = Math.floor(Math.random() * 256);  
            var b = Math.floor(Math.random() * 256);  
            return "rgb(" + r + "," + g + "," + b + ")";  
        }  
  
        // 初始绘制和开始定时器  
        draw();  
        setInterval(draw, 50); // 下落速度  
    }  
  
    // 初始化canvas尺寸和drops数组  
    resizeCanvas();  
    window.addEventListener('resize', function() {  
        canvas.height = window.innerHeight;  
        canvas.width = window.innerWidth;  
        // 可能需要重新初始化或重置drops数组（取决于你的实现）  
    });  
  
    // 初始设置canvas大小  
    canvas.height = window.innerHeight;  
    canvas.width = window.innerWidth;  
};