---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Kotlin] Data class - Mybatis mapping"

# optional sub-title below the page title
sub_title: "[Kotlin] "

categories:
  - Linux
tags:
  - Linux
  - Shell
  - bashrc
  - bash
  - ksh
  - zsh
last_modified_at: 2021-07-12T11:06:52-05:00

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
1. Data class에 전체 파라미터가 들어간 생성자를 호출 -> 자바 파라미터 자릿수 오버 에러 
Invalid methodparameters method attribute length in class file

2. 안에 변수 설정 -> 마이바티스 생성자 매핑 에러 (마이바티스는 아무것도 없는 클래스가 기본 필요)
3.  최소 선언 생성자 설정 -> 아무것도 없는 생성자 생성 (JVM은 기본 생성자의 파라미터의 디폴트 값이 다 있을 경우, 

https://discuss.kotlinlang.org/t/kotlin-and-mybatis-association/3907/3
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jinopia&logNo=220409329622
