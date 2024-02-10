var store = [{
        "title": "루프에서 변수 선언 위치에 대한 궁금중",
        "excerpt":"결론부터 말하자면 단순 지역 변수 선언의 경우 스코프 범위가 적게 하도록 루프안에 선언. 루프 안에서 new class()등을 통한 객체 생성이 있을 경우 메모리 효율(GC효율)을 위해 루프 밖으로. In my conclousion If you need local variables which only use in loop, recomend declaring variables in loop for reducing scope. If you...","categories": ["java"],
        "tags": ["java","gc","loop","variables","memory","자바","GC","메모리","루프","변수"],
        "url": "/java/%EB%A3%A8%ED%94%84%EC%97%90%EC%84%9C-%EB%B3%80%EC%88%98-%EC%84%A0%EC%96%B8-%EC%9C%84%EC%B9%98%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B6%81%EA%B8%88%EC%A4%91/",
        "teaser": null
      },{
        "title": "기본형 변수와 참조형 변수 정리",
        "excerpt":"결론부터 말하자면 기본형 타입: 8가지(boolean, byte, shrot, int, long, char, float, double), 기본값 O, Null 없음. Stack에 저장 참조형 타입: 기본형 타입 외의 나머지 전부. 기본값 없음. Null 존재, Heap 메모리에 저장. In my conclousion Primitive Type: 8 things(boolean, byte, short, int, long, char, float, double), default value O, Not...","categories": ["java"],
        "tags": ["java","primitive","primitive type","기본형 타입","변수","variable","reference","reference type","참조형 타입"],
        "url": "/java/%EA%B8%B0%EB%B3%B8%ED%98%95-%EB%B3%80%EC%88%98%EC%99%80-%EC%B0%B8%EC%A1%B0%ED%98%95-%EB%B3%80%EC%88%98-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[algorithm] Reverse Integer",
        "excerpt":"1.기본로직 끝 자리 숫자부터 하나씩 꺼내온다(pop) 꺼내온 숫자를 맨 앞자리에 넣는다(push) 해당 과정을 반복하며, 정수 범위 초과 시 멈춘다. 2.주요원리 x%10 은 해당 시점의 끝자리 수를 나타낸다, (%10 은 10을 나눈 나머지, 즉 마지막 자릿수를 의미) rev10 은 넘겨받은 자릿수를 한 자리씩 앞으로 옮긴다.(10을 할수록 10의 자리씩 앞으로 옮겨진다.) 그러므로...","categories": ["algorithm"],
        "tags": ["kotlin","algorithm","코틀린","알고리즘","leetcode"],
        "url": "/algorithm/Algorithm-reverse-Integer/",
        "teaser": null
      },{
        "title": "[kotlin] Function Parameter Immutable",
        "excerpt":"코틀린에서 함수의 파라미터는 val, 즉 상수(불변) 값이다. 이렇게 만든 이유는 아래와 같다고 한다. 사용자들이 함수 파라미터를 pass by reference 로 혼동함(코틀린에서는 pass by reference 미지원, pass by value만 지원) 파라미터 값을 변경하는 것은 좋은 코딩 습관이 아님. In the Kotlin, Function parameters are val(Immutable). The reasons why are, People confused...","categories": ["kotlin"],
        "tags": ["kotlin","function","parameters","immutable","val","var","mutable","변수"],
        "url": "/kotlin/Kotlin-Function-parameter-immutable/",
        "teaser": null
      },{
        "title": "[algorithm] Palindrome Number",
        "excerpt":"1.기본로직 끝 자리 숫자를 하나씩 꺼내온다(%10). 중간까지 꺼낸다(while(originNumber &gt; revertedNumber)). 비교 값이 같을 경우 Palindrome(originNumber==revertedNumber   originNumber==(revertedNumber/10)) 2.주요원리 originNumber%10 은 해당 시점의 끝자리 수를 나타낸다, (%10 은 10을 나눈 나머지, 즉 마지막 자릿수를 의미) revertedNumber10 은 넘겨받은 자릿수를 한 자리씩 앞으로 옮긴다.(10을 할수록 10의 자리씩 앞으로 옮겨진다.) 그러므로 revertedNumber10+originNumber 앞서...","categories": ["algorithm"],
        "tags": ["kotlin","algorithm","코틀린","알고리즘","leetcode"],
        "url": "/algorithm/Algorithm-Palindrome-Number/",
        "teaser": null
      },{
        "title": "Logstash Plugin Bundle Install Update 오류",
        "excerpt":"결론부터 말하자면 1) JRUBY 설정 필요 (윈도우 사용자는 정신건강을 위해 WSL을 통한 우분투 사용 추천) 2) 환경변수 설정 필요 In my conclousion 1) Setting your rvm to use JRUBY (If you are Windows user, I recommend to use WSL with Ubuntu for saving your metal energy) 2) Setting ENV variables...","categories": ["Logstash"],
        "tags": ["Logstash","ruby","jruby","plugin","github"],
        "url": "/logstash/Logstash-Plugin-bundle-install-update-%EC%98%A4%EB%A5%98/",
        "teaser": null
      },{
        "title": "[linux] Source ~.bashrc Shopt Not Found 2",
        "excerpt":"Data class에 전체 파라미터가 들어간 생성자를 호출 -&gt; 자바 파라미터 자릿수 오버 에러 Invalid methodparameters method attribute length in class file 안에 변수 설정 -&gt; 마이바티스 생성자 매핑 에러 (마이바티스는 아무것도 없는 클래스가 기본 필요) 최소 선언 생성자 설정 -&gt; 아무것도 없는 생성자 생성 (JVM은 기본 생성자의 파라미터의 디폴트 값이...","categories": ["Linux"],
        "tags": ["Linux","Shell","bashrc","bash","ksh","zsh"],
        "url": "/linux/Linux-source-~.bashrc-shopt-not-found-2/",
        "teaser": null
      },{
        "title": "[linux] Source ~.bashrc Shopt Not Found 3",
        "excerpt":"결론부터 말하자면         왜 네티 채널 버퍼 사이즈가 1024?   통신 사이즈가 1024 초과할 경우 사용법   동적 초과일 경우 - ? https://groups.google.com/g/netty-ko/c/4oH_LCRSIDU https://groups.google.com/g/netty-ko/c/_HBGErvTkiE https://netty.io/wiki/user-guide-for-4.x.html#wiki-h3-11 https://m.blog.naver.com/tommybee/221973845360 https://stackoverflow.com/questions/26662990/bytebuf-initial-capacity-size  ","categories": ["Linux"],
        "tags": ["Linux","Shell","bashrc","bash","ksh","zsh"],
        "url": "/linux/Linux-source-~.bashrc-shopt-not-found-3/",
        "teaser": null
      },{
        "title": "[linux] Source ~.bashrc Shopt Not Found",
        "excerpt":"결론부터 말하자면 1) Bash쉘을 안쓰는데 ~/.bashrc에 적용 하면 오류 발생 2) 사용하는 쉘에 맞는 파일에 적용 필요(kshrc, zshrc 등) 증상 ~/.bashrc에 변수 설정(export VAR=VALUE)을 한 후 터미널 재 접속을 해도 적용이 안됨 또는 source ~/.bashrc 명령 시 shopt: not found [No such file or directory] 에러가나옴 원인 사용하고 있는 쉘이...","categories": ["Linux"],
        "tags": ["Linux","Shell","bashrc","bash","ksh","zsh"],
        "url": "/linux/Linux-source-~.bashrc-shopt-not-found/",
        "teaser": null
      },{
        "title": "[java] postconstruct",
        "excerpt":"결론부터 말하자면         postConstruct, afterPropertieSet 차이구분   PostConstruct  완료전에 기동 완료 안됨?   In my conclousion     1)       Case    -s /bin/bash)  ","categories": ["Linux"],
        "tags": ["Linux","Shell","bashrc","bash","ksh","zsh"],
        "url": "/linux/Java-postConstruct/",
        "teaser": null
      },{
        "title": "[logstash] Jdbc Rowid Where in Clause",
        "excerpt":"결론부터 말하자면 1) Bash쉘을 안쓰는데 ~/.bashrc에 적용 하면 오류 발생 2) 사용하는 쉘에 맞는 파일에 적용 필요(kshrc, zshrc 등) 증상 ~/.bashrc에 변수 설정(export VAR=VALUE)을 한 후 터미널 재 접속을 해도 적용이 안됨 또는 source ~/.bashrc 명령 시 shopt: not found [No such file or directory] 에러가나옴 원인 사용하고 있는 쉘이...","categories": ["Linux"],
        "tags": ["Linux","Shell","bashrc","bash","ksh","zsh"],
        "url": "/linux/Logstash-jdbc-rowid-where-in-clause/",
        "teaser": null
      },{
        "title": "[linux] Print Array Values Each Line In Bash Shell",
        "excerpt":"   Purpose            Split String by delimiter and save them to array. Then print each values.           Solution                     string=“word1,word2,word3”  array=(${string//,/ }) # Split using comma as delimiter  for element in “${array[@]}”; do   echo “$element”  done                          ","categories": ["Linux"],
        "tags": ["Linux","Shell","bashrc","bash","ksh","zsh"],
        "url": "/linux/Linux-print-array-values-each-line-in-bash-shell/",
        "teaser": null
      },{
        "title": "[springboot] Actuator Dependency And Swagger Stater 3.0.0 Conflict",
        "excerpt":"Issue When I use both Actuator and Swagger in a project, I met below error message ERROR org.springframework.boot.SpringApplication: Application run failed org.springframework.context.ApplicationContextException: Failed to start bean ‘documentationPluginsBootstrapper’ - Environment Spring boot: 2.7.17 Spring Actuator: Same version with Spring boot Spring fox swagger: 3.0.0 io.springfox:springfox-swagger2:3.0.0 io.springfox:springfox-swagger-ui:3.0.0 io.springfox:springfox-boot-starter:3.0.0 Reason Swagger and Actuator,...","categories": ["SpringBoot"],
        "tags": ["SpringBoot","Spring","Java","SpringFox","Swagger","Actuator"],
        "url": "/springboot/SpringBoot-Actuator-dependency-and-Swagger-Stater-3.0.0-conflict/",
        "teaser": null
      },{
        "title": "[springboot] Load Bean Order Isuuse Bean Post Processor",
        "excerpt":"Issue when spring boot is boot, each beans are registred by sequentially. Normally spring boot load them each order by follow dependency injection. But sometimes injected bean is not loaded before, then spring boot can’t find target bean infromation. I met this situation at each bean are located in different...","categories": ["SpringBoot"],
        "tags": ["SpringBoot","Spring","Java","order","BeanPostProcessor"],
        "url": "/springboot/SpringBoot-load-bean-order-isuuse-bean-post-processor/",
        "teaser": null
      },{
        "title": "[linux] What Is Different Between Su And Sudo",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/Linux-what-is-different-between-su-and-sudo/",
        "teaser": null
      }]
