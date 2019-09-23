export default {
  form: [{ 
    "name": "性别", 
    "required": true, 
    "type": "Radio", 
    "radioList": [
      { 
        "name": "男" 
      }, 
      { 
        "name": "女" 
      }
    ],
    "value": "男"
  }, 
  { 
    "name": "姓名", 
    "required": true, 
    "type": "Input",
    "value": '阿发'
  }, 
  { 
    "type": "Datepicker", 
    "name": "日期", 
    "required": true 
  }],
  table: [
    { 
      "name": "测试表格", 
      "list": [
        { "name": "姓名", "type": "Input" }, 
        { "name": "性别", "type": "Input" }
      ],
      "row": [
        {
          parameter1: '林',
          parameter2: '女'
        }
      ] 
    }, {
      "name": "测试表格2",
      "list": [
        { "name": "挺好", "type": "Input" },
        { "name": "是的", "type": "Input" }
      ],
      "row": [
        {
          parameter1: '不好',
          parameter2: '不是'
        }
      ]
    }
  ]
}