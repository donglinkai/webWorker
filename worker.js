
self.onmessage = function (event) {
    var data = event.data;
    var ans = fibonacci(data);
    this.postMessage(ans);
};
 
function fibonacci(n) {
    try {
        return (n > 0 ? arguments.callee(n - 1) : n )+ n;
    } catch (error) {
        console.error(error, n)
    }
}