# webWorker
webWorker

# index.html
```

<div style="width:100px;height:100px;background-color:red;"></div>
 
<script type="text/javascript">
	var worker= new Worker('worker.js');
worker.postMessage(40);
worker.onmessage=function(event){
    var data=event.data;
    console.log(data)
};
worker.οnerrοr=function(event){
    console.log(event.fileName,event.lineo,event.message);
}
</script>

```

# worker.js
```

self.onmessage = function (event) {
    var data = event.data;
    var ans = fibonacci(data);
    this.postMessage(ans);
};
 
function fibonacci(n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
}
```
