export default {
  form: [{
      "name": "性别",
      "required": true,
      "type": "Radio",
      "showType": "line",
      "radioList": [{
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
      "showType": "half",
      "value": '阿发'
    },
    {
      "type": "Datepicker",
      "name": "日期",
      "showType": "line",
      "required": true
    }
  ],
  table: [{
    "name": "测试表格",
    "list": [{
        "name": "姓名",
        "type": "Input"
      },
      {
        "name": "性别",
        "type": "Input"
      }
    ],
    "row": [{
      parameter1: '林',
      parameter2: '女'
    }]
  }, {
    "name": "测试表格2",
    "list": [{
        "name": "挺好",
        "type": "Input"
      },
      {
        "name": "是的",
        "type": "Input"
      }
    ],
    "row": [{
      parameter1: '不好',
      parameter2: '不是'
    }]
  }],
  uploadImgList: [{
    name: "你的照片",
    type: "Img",
    value: [{
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }, {
      name: 'food2.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }],
    keys: 134354544,
    required: true,
  },{
    name: "我的照片",
    type: "Img",
    value: [],
    keys: 134354534,
    required: true,
  }]
}