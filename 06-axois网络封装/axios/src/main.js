import Vue from "vue";
import App from "./App";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

axios.defaults.baseURL = "http://152.136.185.210:7878/api/hy66";
axios.defaults.timeout = 5000;

axios({
  url: "/home/multidata",
  method: "get"
}).then(res => {
  // console.log(res);
});

axios({
  url: "/home/data",
  // 专门针对get请求的参数拼接
  params: {
    type: "pop",
    page: 1
  }
}).then(res => {
  // console.log(res);
});

axios
  .all([
    axios({
      url: "/home/multidata",
      method: "get"
    }),
    axios({
      url: "/home/data",
      // 专门针对get请求的参数拼接
      params: {
        type: "sell",
        page: 5
      }
    })
  ])
  .then(
    axios.spread((res1, res2) => {
      // console.log(res1);
      // console.log(res2);
    })
  );

// 一般用的时候,我们是创建一个axios示例,对应一个baseURL
const instance1 = axios.create({
  baseURL: "http://152.136.185.210:7878/api/hy66",
  timeout: 5000
});
instance1({
  url: "/home/multidata",
  method: "get"
}).then(res => {
  // console.log(res);
});

//使用封装的request网络请求,为什么进行封装,假如某一天axios突然不维护了,
//我们也必须跟着更换axios,如果我们将属于axios的请求封装起来,
//可以很好的将axios换成其他的网络请求工具(XHR,vue-resource)

import { request } from "./network/request";

// request(
//   {
//     url: "/home/multidata"
//   },
//   res => {
//     console.log("success");
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   }
// );

request({
  url: "/home/multidata"
})
  .then(res => {
    console.log("success");
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
