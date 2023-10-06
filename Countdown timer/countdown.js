let deadline = new Date(
    "oct 31, 2023 23:59:59"
).getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(
        t / (1000 * 60 * 60 * 24)
    );
    let hours = Math.floor(
        (t % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    let minutes = Math.floor(
        (t % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor(
        (t % (1000 * 60)) / 1000
    );

    document.getElementById("day")
        .innerHTML = days;
    document.getElementById("hour")
        .innerHTML = hours;
    document.getElementById("minute")
        .innerHTML = minutes;
    document.getElementById("second")
        .innerHTML = seconds;

    if (t < 0) {
        clearInterval(x);
        document.getElementById(
            "demo"
        ).innerHTML = "TIME UP";
        document.getElementById(
            "day"
        ).innerHTML = "0";
        document.getElementById(
            "hour"
        ).innerHTML = "0";
        document.getElementById(
            "minute"
        ).innerHTML = "0";
        document.getElementById(
            "second"
        ).innerHTML = "0";
    }
}, 1000);