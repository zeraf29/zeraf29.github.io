---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Logstash] Plugin 오픈 소스 Bundle install/update 오류"

# optional sub-title below the page title
sub_title: "[Logstash] Plugin open source Bundle install/update error"

categories:
  - Logstash
tags:
  - Logstash
  - ruby
  - jruby
  - plugin
  - github
last_modified_at: 2021-05-03T11:06:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
    Logstash plugin open source compile error(plugin development environment setting)

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
> 1) JRUBY 설정 필요 (윈도우 사용자는 정신건강을 위해 WSL을 통한 우분투 사용 추천)
> 2) 환경변수 설정 필요 

In my conclousion  
> 1) Setting your rvm to use JRUBY (If you are Windows user, I recommend to use WSL with Ubuntu for saving your metal energy)  
> 2) Setting ENV variables

- 테스트 대상(Test Target): logstash-integration-jdbc
- URL: https://github.com/logstash-plugins/logstash-integration-jdbc


![Image Alt 에러1](/assets/images/posts/20210503_1.PNG)
1.에러 메시지: "Could not find gem 'logstash-devutils' in any of the gem sources listed in your Gemfile."
-원인: Logstash Plugin은 jRUBY를 사용하므로 rvm에서 jruby 설치 후 대상 엔진 변경이 필요
-비고: 윈도우즈에서는 jruby 인식이 잘 안되는 현상 발생. 가급적 WSL을 통한 우분투에서 rvm 설치 및 컴파일 권장
-Cause: Logstash Plugin is based on jRUBY. So you have to set rvm to use jruby
-E.T.C: In windows, setting jruby was not easy for me. I recommend to use WSL with Ubuntu and set rvm.
![Image Alt 에러1해결](/assets/images/posts/20210503_2.PNG)






![Image Alt 에러2](/assets/images/posts/20210503_3.PNG)
2.에러 메시지: "Bundler could not find compatible versions for gem "logstash-core""
-원인: 플러그인 컴파일 시, Logstash의 Core등의 주요 파일들을 사용. 환경변수 설정을 통한 Logstash 정보 등록 필요(Gemfile 참고)
-방법(우분투 기준)
>1) export LOGSTASH_PATH=[Logstash 설치경로]
>2) export LOGSTASH_SOURCE=1
-Cause: For compiling plugin, you need to set directory location Logstash installed (Check Gemfile)
-How(Ubuntu): 
>1) export LOGSTASH_PATH=[Logstash Directory]
>2) export LOGSTASH_SOURCE=1
![Image Alt 에러2해결](/assets/images/posts/20210503_4.PNG)

