---
# optional alternate title to replace page.title at the top of the page
alt_title: "[SpringBoot] 경합 데이터 처리 테스트"

# optional sub-title below the page title
sub_title: "[SpringBoot] "

categories:
   - SpringBoot
tags:
   - SpringBoot
   - Transactional
   - AOP
last_modified_at: 2024-03-07T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: 

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - Executors 확인필요
   - ExecutorService
   - Executors.newFixedThreadPool
  - @Synchronized 확인필요
   - 동시 콜이 많은 매서드에 대해 @Synchronized 하니 경합 처리가 효율적으로 바뀜
   - 해당 매서드 내부에는 executorService.submit 으로 쓰레드 처리를 함
  - @Transient 선언
   - 앞서 선안한 engineExecutors(): ExecutorService = Executors.newFixedThreadPool 에 대해, 의존 주입 시 @Transient 선언  
   - 직렬화 제외 ?
  - 전체적으로 서로 어떻게 맞물려 경합 처리 해결인지 확인 필요