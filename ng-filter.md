一，内置的过滤器
1，uppercase，lowercase大小转换

{{ "lower cap string" | uppercase }}   //结果：LOWER CAP STRING
{{ "TANK is GOOD" | lowercase }}     //结果：tank is good

｜这里的竖线是一种管道功能，如果对linux比较熟悉的话，这块的｜根linux的管道功能，基本是一样的
2，json格式化
{{ {foo: "bar", baz: 23} | json }}  //结果：{ "foo": "bar", "baz": 23 }
注意：bza没格式前是没有双引号的，格式化后就转换成了json数据了。
3，date格式化

{{ 1304375948024 | date }}             //结果：May 3, 2011
{{ 1304375948024 | date:"MM/dd/yyyy @ h:mma" }}   //结果：05/03/2011 @ 6:39AM
{{ 1304375948024 | date:"yyyy-MM-dd hh:mm:ss" }}  //结果：2011-05-03 06:39:08
4，number格式化

{{ 1.234567 | number:1 }}  //结果：1.2
{{ 1234567 | number }}    //结果：1,234,567
5，currency货币格式化

{{ 250 | currency }}         //结果：$250.00
{{ 250 | currency:"RMB ￥ " }}    //结果：RMB ￥ 250.00
6，filter查找

{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | filter:'s'}}  //查找含有有s的行

//上例结果：[{"age":12,"id":11,"name":"sunm xing"},{"age":44,"id":12,"name":"test abc"}]

{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | filter:{'name':'iphone'} }}  //查找name为iphone的行

//上例结果:[{"age":20,"id":10,"name":"iphone"}]
7，limitTo字符串，对像的截取

{{ "i love tank" | limitTo:6 }}      //结果：i love
{{ "i love tank" | limitTo:-4 }}     //结果：tank

{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | limitTo:1 }}   //结果：[{"age":20,"id":10,"name":"iphone"}]
8，orderBy对像排序

{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | orderBy:'id':true }}    //根id降序排

{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | orderBy:'id' }}      //根据id升序排