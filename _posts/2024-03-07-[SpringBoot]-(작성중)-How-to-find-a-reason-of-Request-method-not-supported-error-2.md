---
# optional alternate title to replace page.title at the top of the page
alt_title: "[SpringBoot] In progress… @Transactional and AOP, in Spring boot"

# optional sub-title below the page title
sub_title: "[SpringBoot] @Transactional and AOP, in Spring boot"

categories:
   - SpringBoot
tags:
   - SpringBoot
   - Transactional
   - AOP
last_modified_at: 2024-03-07T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: How to find a reason of ‘Request method not supported’ Error

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - 플젝으로 시간 없어서 글을 제대로 못 쓰고 있음
  - 까먹지 않게 흔적이라도 미리 남겨둠. 나중에 다시 정리
  - Spring boot 에서 @Transactional 을 실행 클래스의 내부에 걸면 동작 안함 -> AOP. 테스트 필요
  - 외부 클래스로 생성해서 콜해야 함.    
2. 로그 및 소스 주소 첨부 필요
3. 참고 정보
  - https://blogshine.tistory.com/291
  - https://wave1994.tistory.com/178
  - https://mybatis.org/spring/ko/transactions.html
  - https://ojava.tistory.com/m/207