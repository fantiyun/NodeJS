#  短视频管理服务

## 一、服务功能介绍
1. 用户（频道）系统
   - 登录
   - 注册
   - 个人中心
   - 个人资料管理
2. 视频系统
    - 视频上传
    - 视频管理（修改名称、描述等）
    - 视频热门推荐
3. 交互系统
   - 点赞
   - 收藏
   - 关注频道
   - 提供自己的频道供别人关注


## 二、服务逻辑导图
- [Project-Prchitecture-Map.mmd](Project-Prchitecture-Map.mmd)


## 三、Node 实现服务器逻辑梳理
1. 使用 Node 创建一个 HTTP 的服务器，并能能够接受到客户端发来的请求
2. 获取到客户端具体的请求数据，并根据不同的请求数据进行处理
3. 将处理之后的结果，响应到客户端，并断开本次链接