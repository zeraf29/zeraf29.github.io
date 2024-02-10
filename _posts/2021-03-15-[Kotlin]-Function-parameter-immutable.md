---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Kotlin] Function parameters are Immutable"

# optional sub-title below the page title
sub_title: "[코틀린] 함수 파라미터는 불변(val)"

categories:
  - kotlin
tags:
  - kotlin
  - function
  - parameters
  - immutable
  - val
  - var
  - mutable
  - 변수
last_modified_at: 2021-03-15T23:25:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
    Why Kotlin's function parameters are Immutable?

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
코틀린에서 함수의 파라미터는 val, 즉 상수(불변) 값이다. 이렇게 만든 이유는 아래와 같다고 한다. 
> 사용자들이 함수 파라미터를 pass by reference 로 혼동함(코틀린에서는 pass by reference 미지원, pass by value만 지원) 
> 파라미터 값을 변경하는 것은 좋은 코딩 습관이 아님.  

In the Kotlin, Function parameters are val(Immutable). The reasons why are, 
>People confused function parameters are "pass by reference". (Kotlin is not supported "pass by reference", only support "pass by value") 
>mutating parameters is no good coding style.


[Reference]
- https://blog.jetbrains.com/kotlin/2013/02/kotlin-m5-1/