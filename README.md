<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Nginx

## location

- location /aaa 根据前缀匹配
- location ^~ /aaa 根据前缀匹配，优先级更高
- location = /aaa 精准匹配
- location ~ /aaa/.*html 正则匹配
- location ~* /aaa/.*html 正则匹配，而且不区分大小写

## 反向代理

## 负载均衡

- 轮询：默认方式。
- weight：在轮询基础上增加权重，也就是轮询到的几率不同。
- ip_hash：按照 ip 的 hash 分配，保证每个访客的请求固定访问一个服务器，解决 session 问题。
- fair：按照响应时间来分配，这个需要安装 nginx-upstream-fair 插件。
- url_hash：按照访问的 url 的 hash 结果分配，使每个 url 定向到同一个后端服务器，可以解决后端缓存问题。
- least_conn：将请求分配给当前连接数最少的服务器。

## 缓存

## 安全

## 语法

### 条件判断操作符
相等判断：=和!=用于比较两个字符串是否相等或不相等。   
例如：if ($request_uri = "/index.html") {... }

正则表达式匹配：~和~*用于正则表达式匹配，~区分大小写，~*不区分大小写。    
例如：if ($http_host ~* "^www\.(.*)\.com$") {... }

文件存在判断：-f和!-f用于判断文件是否存在或不存在。   
例如：if (-f /etc/nginx/conf.d/special.conf) {... }

目录存在判断：-d和!-d用于判断目录是否存在或不存在。   
例如：if (-d /var/www/html/special) {... }


## 流量染色的作用
灰度发布：在新功能上线前，可以只对部分用户或请求应用新功能，通过流量染色技术将这部分请求标记并导向新版本的服务，以此评估新功能的实际表现，降低直接全量上线的风险。

A/B测试：对于界面设计、功能优化等场景，通过流量染色将用户分为不同的组，每组用户看到不同的版本，以此收集数据对比分析，决定最终采用哪个版本。

故障排查：在系统出现故障时，可以通过流量染色快速定位问题范围，只将特定标记的请求路由到包含调试信息的服务实例，避免对所有用户造成影响。

性能监控：对特定染色标记的请求进行性能监控，如响应时间、错误率等，帮助开发者及时发现并优化性能瓶颈。