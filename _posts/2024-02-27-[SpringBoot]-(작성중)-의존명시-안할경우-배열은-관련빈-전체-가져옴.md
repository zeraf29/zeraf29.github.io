---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Gradle] IntelliJ can not gradle build project online mode in closed network"

# optional sub-title below the page title
sub_title: "[SpringBoot](작성중) @Qualifier로 의존 대상 명시 안할 경우, 해당 타입 전체를 배열로 가져와버림."

categories:
   - Gradle
tags:
   - Gradle
   - IntelliJ
last_modified_at: 2024-02-27T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: 작성중

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - Action 을 상속받는 클래스를 5개 구현하여 각각 빈으로 등록.
  - d2Action 빈을 생성하여 위에서 생성한 a,b,c 빈을 배열로 만들어 등록 (Action[] d2Action)
  - Flow 빈에서 Action[] d2Action 으로 의존 받으니, Action 상속받은 5개 빈 전부 가져옴
  - @Qualifier로 명시를 해주니 의도한 3개만 가져옴
2. 재현 및 증적 테스트 필요      