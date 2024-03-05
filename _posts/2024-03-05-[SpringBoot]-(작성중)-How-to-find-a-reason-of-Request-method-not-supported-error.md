---
# optional alternate title to replace page.title at the top of the page
alt_title: "[SpringBoot] How to find a reason of ‘Request method not supported’ Error"

# optional sub-title below the page title
sub_title: "[SpringBoot] Check RequestMappingInfoHandlerMapping"

categories:
   - SpringBoot
tags:
   - SpringBoot
   - RequestMethod
   - RequestMapping
   - RequestMappingInfoHandlerMapping
last_modified_at: 2024-03-05T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: How to find a reason of ‘Request method not supported’ Error

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - Static 리소스가 Request method ‘GET’ not supported 발생
  - RequestMapping 된 주소 찾아도 원인 못 찾겠음
  - 로그 바탕으로 RequestMappingInfoHandlerMapping.java 의 handlerNoMatch 메서드 분석
  - 확인 결과 해당 주소가 Delete URL에 매핑 
  - 해당 매핑 주소 확인해보니 Mapping 잘못한 매서드 발견    
2. 로그 및 소스 주소 첨부 필요