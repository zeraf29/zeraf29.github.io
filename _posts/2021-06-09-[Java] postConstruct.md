---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Logstash] JDBC 플러그인에서 where in 조건 사용하기"

# optional sub-title below the page title
sub_title: "[Linux] source ~/.bashrc command return >> shopt: not found"

categories:
  - Linux
tags:
  - Linux
  - Shell
  - bashrc
  - bash
  - ksh
  - zsh
last_modified_at: 2021-05-26T11:06:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
    Linux - Bashrc에 등록한 환경변수가 적용 안될때, 또는 "source ~/.bashrc" 실행 시 "shopt: not found [No such file or directory]" 오류 발생

# optional call to action links
#actions:
#  - label: "Learn More"
#    icon: github  # references name of svg icon, see full list below
#    url: "http://url-goes-here.com"
#  - label: "Download"
#    icon: download  # references name of svg icon, see full list below
#    url: "http://url-goes-here.com"

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)

# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---
결론부터 말하자면
> 

1. postConstruct, afterPropertieSet 차이구분
2. PostConstruct  완료전에 기동 완료 안됨?

In my conclousion  
> 1)

1. Case  
  -s /bin/bash)
