window.onload = () => {

    const clear = function () {
        ctx.clearRect(0, 0, 2000, 1000);
    }

    const drawCircle = function () {
        ctx.beginPath();
        ctx.arc(500, 500, 140, 0, 2 * Math.PI);
        ctx.stroke();
    }

    const drawNums = function () {
        [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2].map((num, idx) => {
            let radians = (Math.PI / 6) * idx;
            let x = Math.cos(radians) * 120 + 500;
            let y = Math.sin(radians) * 120 + 500;
            ctx.fillText(num, x, y);
        });

    }

    const drawLine = function (radians, length) {
        ctx.beginPath();
        const x = Math.cos(radians) * -1 * length + 500;
        const y = Math.sin(radians) * -1 * length + 500;
        ctx.moveTo(500, 500);
        ctx.lineTo(x, y);
        ctx.stroke();
    };

    const canvas = document.getElementById("canv");
    let ctx = canvas.getContext("2d");

    setInterval(() => {
        clear();
        const date = new Date();
        const secs = date.getSeconds();
        const secradians = ((Math.PI / 30) * secs) + (Math.PI / 2);

        const mins = date.getMinutes();
        const minradians = ((Math.PI / 30) * mins + (Math.PI / 1800) * secs) + (Math.PI / 2);

        let hrs = date.getHours();
        if (hrs > 12) hrs -= 12;

        const hrsradians = ((Math.PI / 6) * hrs + (Math.PI / 1800) * mins) + (Math.PI / 2);

        drawCircle();
        drawNums();
        drawLine(secradians, 100);
        drawLine(minradians, 95);
        drawLine(hrsradians, 60);

    }, 1000);

};


