---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Kafka][Cassandra] Setting different config files by host name"

# optional sub-title below the page title
sub_title: "[Kafka][Cassandra] Using config option"

categories:
   - SpringBoot
tags:
   - SpringBoot
   - Transactional
   - AOP
last_modified_at: 2024-03-07T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: Setting Kafka and Cassandra’s config file for each host name

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - 플젝으로 시간 없어서 글을 제대로 못 쓰고 있음
  - 까먹지 않게 흔적이라도 미리 남겨둠. 나중에 다시 정리
  - Kafka 및 카산드로 기동 시, 각각 Config 옵션에서 호스트 이름 별 다른 파일을 설정
  - Kafka: bin/kafka-server-start.sh -daemon “config/server$PROFILE.properties”
  - Cassandra: 0Dcassandra.config=file:///cassandra/conf/cassandra$PROFILE.yml -p cassandra.pid 1>/dev/null 2>&1 

