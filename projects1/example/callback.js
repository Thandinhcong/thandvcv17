const LoadScript = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        callback(script);
    };
    script.onload = function () {
        callback(new Error("load fail"));
    };
    document.head.append(script); //taoj ra ther head chua the script
}
LoadScript("http://deverloper.mozilla.org", function (error, script) {
    if (error) {
        console.log("load fail");
    } else {
        console.log(script);
    }
})  