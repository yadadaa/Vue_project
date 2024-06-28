# Vue_project
vue项目的练习
        └─ 6.21
        ├─ 6.22

# 6.21 

​    git 没有配置user.name和user.email
​    在终端执行 
​              $ git config --global user.name yedadaa
​              $ git config --global user.email yjd404.my@qq.com
​    验证
​        $ git config user.name
​        $ git config user.email

# 6.22

​    ``<script src="vue.js">
​      Vue.config.devtools = true;
​    </script>`
​    `<!-- 导入开发者在线vue -->`
​    `<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>``
​    vue devtools拓展只有导入在线vue.js才能使用

    直接app.data.seen访问不到值 app.seen却可以 
    后来发现app._data.seen可以
    
    Vue.component('todoing-todo',{template:'<li>这是一个代办项目</li>'}) 显示为空
    因为Vue实例没有挂载到HTML元素上 
    <div id="app">
        <!-- Vue组件将会被渲染在这里 -->
        <todoing-todo></todoing-todo>
    </div>

​    ![Vue 实例生命周期](./assets/lifecycle.png)

##    指令

Mustache {{}} 文本插值

​    **v-once**：执行一次性插值

​    **v-html**：直接作为HTML代码作为实际HTML解析并显示出来

​    **v-bind**：作用于HTML attribute上

<div v-bind:id="dynamicId"></div>

​    	布尔值attribute存在意味着值为true

```
<a v-bind:href="url">...</a>
```

​    	接收参数

​	     缩写：

```
		    <a :href="url">...</a>
```

```
    		<a :[key]="url"> ... </a>
```

**v-on**：监听DOM事件

​	    缩写：

```
<!-- 完整语法 --><a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>

```

# 6.23

### 动态参数

```
<a v-on:[eventName]="doSomething"> ... </a>
```

当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`

语法约束：某些字符，如空格和引号是无效，避免使用大写字符来命名键名

```
<!-- 这会触发一个编译警告 --><a v-bind:['foo' + bar]="value"> ... </a>
```

浏览器会把 attribute 名全部强制转为小写

## 计算属性

#### 计算属性缓存vs方法

计算属性：首次访问时才会计算，并且在后续访问中会被缓存起来，直到依赖项发生变化时才重新计算。

方法：每次被调用时都会执行其中的代码

#### 计算属性vs侦听属性（watch）

使用计算属性可以简化模板中的逻辑，使得模板更加清晰和易于维护。

#### setter

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：

```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
 }
```

现在再运行 `vm.fullName = 'John Doe'` 时，setter 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

# 6.24

## 绑定HTML Class

**v-bind：class**

传入对象，动态切换class

```
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

```
data: {  isActive: true,  hasError: false}
```

```
结果：
<div class="static active"></div>
```

绑定的数据对象不必内联定义在模板里：

```
<div v-bind:class="classObject"></div>
```

```
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

也可以在这里绑定一个返回对象的计算属

**数组**

```
<div v-bind:class="[activeClass, errorClass]"></div>
```

```
data: {  activeClass: 'active',  errorClass: 'text-danger'}
```

```
渲染为
<div class="active text-danger"></div>
```

三元表达式：

```
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`，但是只有在 `isActive` 是 truthy[[1\]](https://v2.cn.vuejs.org/v2/guide/class-and-style.html#footnote-1) 时才添加 `activeClass`

当在一个自定义组件上使用 `class` property 时，这些 class 将被添加到该组件的根元素上面。

## 绑定内联样式

v-bind：style

**对象**

驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名

```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```
data: {
  activeColor: 'red',
  fontSize: 30
}
```

```
<div v-bind:style="styleObject"></div>
```

```
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

**数组**

```
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

# 条件渲染

**v-if**

用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

> 在 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 中，**truthy**（真值）指的是在[布尔值](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)上下文中，转换后的值为 `true` 的值。被定义为[假值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)以外的任何值都为真值。（即所有除 `false`、`0`、`-0`、`0n`、`""`、`null`、`undefined` 和 `NaN` 以外的皆为真值）。

## 在 <template> 元素上使用 v-if 条件渲染分组

```
<template v-if="ok">
	<h1>Title</h1>
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
</template>
```

最终的渲染结果将不包含 `<template>` 元素。

**v-show**

```
<h1 v-show="ok">Hello!</h1>
```

始终渲染，只是选择展不展示出来

注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。

# 列表渲染

**v-for**

基于一个**数组**来渲染一个列表

```
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

```
<div v-for="item of items"></div>
```

用 `v-for` 来遍历一个**对象**的 property。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute：

`<div v-for="item in items" v-bind:key="item.id">`

`  <!-- 内容 -->`  

`</div>`

# 6.25

## 显示过滤或排序过后结果

```
使用计算属性：
<li v-for="n in evenNumbers">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

```
使用方法
<ul v-for="set in sets">
  <li v-for="n in even(set)">{{ n }}</li>
</ul>
data: {
  sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

在<template>上使用v-for 来重复渲染一段包含多个元素的内容

```
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

### 监听事件

**v-on**

v-on：click=“函数名或者表达式”

在内联语句处理器中访问原始的 DOM 事件

可以用特殊变量 `$event` 把它传入方法，以便你可以访问事件的属性（比如 `event.target`）

```
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
	Submit
</button>

// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

### 事件修饰符

- `.stop`

```
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>
```

- `.prevent`

```
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
```

*<!-- 修饰符可以串联 -->*
<a v-on:click.stop.prevent="doThat"></a>

```
*<!-- 只有修饰符 -->*
<form v-on:submit.prevent></form>
```

- `.capture`

```
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
```

- `.self`

```
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

- `.once`

```
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

- `.passive`

```
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">
	...
</div>
```

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

### 按键修饰符

*<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->*
<input v-on:keyup.enter="submit">

直接将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符

如果按键名是 `PageDown`，那么在 Vue.js 中的修饰符应该写成 `pagedown`。

```
<input v-on:keyup.page-down="onPageDown">
```

# 6.26

# 表单绑定

**v-model**

表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。

`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

**文本**

```
<input v-model="message" placeholder="edit me">
<p>
	Message is: {{ message }}
</p>
```

**多行文本**

```
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

**复选框**

```
单个复选框
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

```
多个复选框
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>


new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```

- `id`：用于通过`for`属性将标签与复选框关联起来。

- `value`：指定复选框在选中时将添加到`checkedNames`数组中的值。

- `v-model="checkedNames"`：这个指令将复选框绑定到Vue.js中的`checkedNames`数组。当复选框被选中或取消选中时，Vue.js会自动更新`checkedNames`数组。

**单选按钮**

```
<div id="example-4">  
	<input type="radio" id="one" value="One" v-model="picked"> 
	<label for="one">One</label>
	<br>
	<input type="radio" id="two" value="Two" v-model="picked">
	<label for="two">Two</label>
	<br>
	<span>Picked: {{ picked }}</span>
</div>

new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```

**选择框**

```
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>

new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

```
多选（绑定一个数组）
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>

new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```

```
用v-for渲染动态选项
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>

new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

## **值绑定**

`v-bind` 实现把值绑定到 Vue 实例的一个动态 property 上

### 单选按钮

```
<input type="radio" v-model="picked" value="a">
```

- `value="a"`：指定这个单选按钮的值为`"a"`。这意味着当用户选择了这个单选按钮时，`picked`属性的值会被设置为`"a"`。

```
<input type="radio" v-model="pick" v-bind:value="a">

// 当选中时
vm.pick === vm.a
```

- `v-model="pick"`：使用`v-model`指令将单选按钮与Vue实例中的`pick`属性进行双向绑定。这表示`pick`属性会跟踪用户选择的单选按钮的值。

- `v-bind:value="a"`：使用`v-bind`指令动态地将`a`变量的值绑定到单选按钮的`value`属性上。这样做可以根据Vue实例中的数据动态设置单选按钮的值。

### 选择框的选项

```
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>

// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

- `v-bind:value="{ number: 123 }"`：使用 `v-bind:value` 动态地将选项的值设置为一个对象字面量 `{ number: 123 }`。这意味着当用户选择这个选项时，`selected` 属性会被设置为 `{ number: 123 }` 这个对象。

## 修饰符

.**lazy**

```
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```

- `v-model.lazy="msg"`：这里使用了 `.lazy` 修饰符，它告诉Vue.js在处理输入元素时监听 `change` 事件而不是默认的 `input` 事件。这样做可以延迟数据更新，直到用户完成输入并且移出输入框或按下回车键。

.**number**

```
<input v-model.number="age" type="number">
```

.trim

```
<input v-model.trim="msg">
```

自动过滤用户输入的首尾空白字符

# 组件

```
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

<div id="components-demo">
  <button-counter></button-counter>
</div>

new Vue({ el: '#components-demo' })
```

### 组件复用

每用一次组件，就会有一个它的新**实例**被创建。

### data必须是一个函数

**一个组件的 `data` 选项必须是一个函数**

因此每个实例可以维护一份被返回对象的独立的拷贝：

次组件实例化时，Vue.js都会调用这个函数来返回一个新的数据对象副本，确保每个实例都有独立的`count`属性，而不是共享一个`count`属性。

### 单个根元素

```
<h3>{{ title }}</h3>
<div v-html="content"></div>
```

如果你在模板中尝试这样写，Vue 会显示一个错误，并解释道 **every component must have a single root element (每个组件必须只有一个根元素)**。

将模板的内容包裹在一个父元素内，来修复这个问题

```
<div class="blog-post"> 
	<h3>{{ title }}</h3>
	<div v-html="content"></div>
</div>
```

# 6.28

## 监听子组件事件

一些功能可能要求我们和父级组件进行沟通

例如我们可能会引入一个辅助功能来放大博文的字号，同时让页面的其它部分保持默认的字号。

```
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [/* ... */],
    postFontSize: 1
  }
})

它可以在模板中用来控制所有博文的字号：
<div id="blog-posts-events-demo">
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></blog-post>
  </div>
</div>
```

现在我们在每篇博文正文之前添加一个按钮来放大字号：

```
<div id="app1">
    <blog-post  v-bind:post-font-size="postFontSize" @enlarge-text="enlargeText"></blog-post>
</div>
  <script>
    Vue.component('blog-post', {
      props: ['postFontSize'],
      template: `
        <div class="blog-post" :style="{ fontSize: postFontSize + 'em' }">
          <h3>{{postFontSize}}</h3>
          <p>12345</p>
          <button  @click="$emit('enlarge-text')"> 
            Enlarge text
          </button>
         
        </div>
      ` 
    })

    let app = new Vue({
      el:'#app1',
      data:{
        postFontSize: 1
      } ,
      methods: {
        enlargeText() {
        this.postFontSize += 0.1; // 每次点击增加字体大小
    }
  },
    })
  </script>
```

- 通过调用内建的 `$emit` 方法来触发（或“发出”）一个事件
- 将 DOM 元素的 `post-font-size` 属性绑定到 Vue 实例的 `postFontSize` 数据属性上。

**在 HTML 中，属性名是不区分大小写的，但是在 JavaScript 中，变量名是区分大小写的。**

Vue 的 prop 是以 JavaScript 的命名规则来定义的，所以当使用 DOM 模板时，需要将驼峰命名（CamelCase）的 prop 转换为<u>短横线命名（kebab-case）</u>。

- 所以其实是将 DOM 元素的 `postFontSize` 属性绑定到 Vue 实例的 `postFontSize` 数据属性上。
- `@enlarge-text="enlargeText"` 是一个事件监听器的简写形式，它监听 `enlarge-text` 事件，并在该事件发生时调用 `enlargeText` 方法。

###  `$emit` 方法

子组件可以通过调用内建的 `$emit` 方法来触发（或“发出”）一个事件。这允许子组件向父组件或更高级别的组件通信

```
this.$emit('event-name', optionalPayload);
```

`optionalPayload` 是可选的，它可以是任何你希望传递给事件监听器的数据。

我们可以通过 `$event` 访问到被抛出的这个值：**！！！这边好像有问题**

```
<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```

或者，如果这个事件处理函数是一个方法：

```
<blog-post
  ...
  v-on:enlarge-text="onEnlargeText"
></blog-post>
```

那么这个值将会作为第一个参数传入这个方法：

```
methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

## 组件上使用v-model

```
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```

为了让它正常工作，这个组件内的 `<input>` 必须：

- 将其 `value` attribute 绑定到一个名叫 `value` 的 prop 上

- 在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出

```ht
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

<div id="app">
  <custom-input v-model="searchText"></custom-input>
</div

<script>
  let app = new Vue({
    el: '#app',
    data: {
      searchText: '' // 初始化 searchText 数据
    }
  })
</script>
```

- 在 `custom-input` 组件中，我们将 `value` 属性绑定到 `<input>` 的 `value` 属性上，并监听 `input` 事件，当输入框内容发生变化时，触发 `input` 事件并传递当前输入框的值。

- 在上面的示例中，`<custom-input>` 组件被用作 `v-model` 的目标，它会自动将 `searchText` 绑定到 `custom-input` 组件的 `value` 属性，并监听组件内部的 `input` 事件。

## 通过插槽分发内容

```vue
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

## 动态组件

```html
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>
```

在上述示例中，`currentTabComponent` 可以包括

- 已注册组件的名字，或
- 一个组件的选项对象

这个 attribute 可以用于常规 HTML 元素，但这些元素将被视为组件，这意味着所有的 attribute **都会作为 DOM attribute 被绑定**。对于像 `value` 这样的 property，若想让其如预期般工作，你需要使用 [`.prop` 修饰器](https://v2.cn.vuejs.org/v2/api/#v-bind)。

## 局部注册组件

```javascript
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
```

