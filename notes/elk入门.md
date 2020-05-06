# ElasticSearch

## 什么是ElasticSearch

ElasticSearch 是一个分布式的，RESTful 风格的搜索和数据分析引擎。
简单来说，ElasticSearch 是一个存储器，使用其自定义的DLS查询语言，能够很快获得我们想要的数据。

## 如何部署ElasticSearch

mac 上部署

1. 在[ES官网](https://www.elastic.co/cn/start)上下载对应的包。
2. 在解压缩的后的包中执行bin/elasticsearch。
3. `curl http://localhost:9200/` 确定是否启动了es

## ElasticSearch 实现原理