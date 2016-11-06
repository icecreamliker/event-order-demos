# Event Order

DOM supports two event types, **Capture** and **Bubble**.    

**Capture**:  Event from the most imprecise object (document) start to trigger, and then to the most accurate object (target)    ---- **[imprecise --> accurate]**  /  **[parent --> child]**     

**Bubble**:  Event from the most accurate object (target) start to trigger, and then to the most imprecise object (document)    ---- **[accurate --> imprecise]**  /  **[child --> parent]**     

**DOM Event Flow:**  

when trigger the element, it will start the **event capture** from the most **parent** object, until the event is triggered to the **target**. Then, from the **target** to start **event bubble**, until the event is triggered to the **document**.【①】      

**But, when two types exist at the same time, the order of trigger depends on the order of definition.**【②】 

When you bind event listener, you can use capture or bubble:    

**element.addEventListener(type, function, useCapture)；**   

**useCapture** === true (Event Cpature)    

**useCapture** === false (Event Bubble) [default]      

### Demo1

**Click outer** --- [outer bubble --> outer capture]    

> There is only the outer target, so the order depends on the order of definition， see ①    

**Click inner** --- [outer capture --> inner bubble --> inner capture --> outer bubble]    

> The event capture trigger from outer， so *outer capture* first. then go to the inner, from ① we can know, the order depends on the order of definition, so *inner bubble --> inner capture* next. Then start event bubble to the parent element, so the last is *outer bubble*.

### Demo2

**Click outer** --- [outer capture --> outer capture]

**Click inner** --- [outer capture --> outer capture --> inner capture --> inner capture]

> useCapture === true, without doubt, the event capture trigger from outer to inner

### Demo3

**Click outer** --- [outer bubble --> outer bubble]

**Click inner** --- [inner bubble --> inner bubble]
> useCapture === false, without doubt, the event bubble trigger from inner to outer

### Demo4

The difference between addEventListener and on[Type] (eg. onClick):    

**on[Type] use bubble, and when on[Type] on the same element, behind will cover front.** Such as:    

```javascript
btn1Obj.addEventListener("click",method1,false);  
btn1Obj.addEventListener("click",method2,false);  
btn1Obj.addEventListener("click",method3,false);
//method1 --> method2 --> method3 
```
```javascript
document.getElementById("btn").onclick = method1;  
document.getElementById("btn").onclick = method2;  
document.getElementById("btn").onclick = method3;
//only method3 triggered
```
**Click outer** --- [outer bubble --> outer capture --> outer onclick]    

> so the order depends on the order of definition, so *outer bubble --> outer capture --> outer onclick*. onclick is same to addEventListener('click', function, false) 【③】    

**Click inner** --- [outer capture --> inner bubble --> inner capture --> inner onclick --> outer bubble --> outer onclick]    

> The event capture trigger from outer， so *outer capture* first. Then go to the inner, the order depends on the order of definition, so *inner bubble --> inner capture --> inner onclick*, see ③, onclick is same to addEventListener('click', function, false). Then the event bubble to outer, on outer, the order depends on the order of definition, so *outer bubble --> outer onclick*.

### Demo5

**Click outer** --- [outer bubble --> outer capture --> outer onclick]

> see ①, the order depends on the order of definition

**Click inner** --- [outer capture --> inlineFn inner called --> inner bubble --> inner capture --> outer bubble --> outer onclick]

> The event capture trigger from outer， so *outer capture* first. Then go to the inner, the order depends on the order of definition, so *inlineFn inner called --> inner bubble --> inner capture*.Then the event bubble to outer, on outer, the order depends on the order of definition, so *outer bubble --> outer onclick*.

**tip:** If we uncomment the code, like that:     
```javascript
// inner.onclick = function() {
//   console.log('inner onclick');
// };

to 

inner.onclick = function() {
  console.log('inner onclick');
};
```

**Click inner** --- [outer capture --> inner bubble --> inner capture --> inner onclick --> outer bubble --> outer onclick]

**the behind onclick cover the front onclick**