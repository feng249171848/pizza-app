// 改变属性的状态
// 将Menu组件中请求到的数据放入state
export const setMenuItems = (state,data) => {
  state.menuItems = data;
}
// 将Admin组件中需要删除的对象匹配到state，在menuItems属性中删除，进行状态的更新
export const removeMenuItems = (state,data) => {
  state.menuItems.forEach((item,index) => {
    if(item == data){
      state.menuItems.splice(index,1)
    }
  })
}
// 将新添加的pizza Push到属性menuItems中
export const pushToMenuItem = (state,data) => {
  state.menuItems.push(data)
}
// 更改用户状态信息
export const userStatus = (state,user) => {
  if(user){
    state.currentUser = user;
    state.isLogin = true
  }else{
    state.currentUser = null;
    state.isLogin = false
  }
}