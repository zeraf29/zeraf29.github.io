---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Algorithm] Reverse Integer"

# optional sub-title below the page title
sub_title: "[알고리즘] Reverse Integer (정수값 역순처리)"

categories:
  - algorithm
tags:
  - kotlin
  - algorithm
  - 코틀린
  - 알고리즘
  - leetcode
last_modified_at: 2021-03-16T18:25:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
    알고리즘 문제 풀이_Reverse Integer

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
1.기본로직
- 끝 자리 숫자부터 하나씩 꺼내온다(pop)
- 꺼내온 숫자를 맨 앞자리에 넣는다(push)
- 해당 과정을 반복하며, 정수 범위 초과 시 멈춘다.

2.주요원리
- x%10 은 해당 시점의 끝자리 수를 나타낸다, (%10 은 10을 나눈 나머지, 즉 마지막 자릿수를 의미)
- rev*10 은 넘겨받은 자릿수를 한 자리씩 앞으로 옮긴다.(*10을 할수록 10의 자리씩 앞으로 옮겨진다.)
- 그러므로 rev*10+pop은 앞서 넘겨받은 앞자릿수(앞서 뒷자리가 된 수)를 앞으로 옮긴 후 다음 수를 더하는 수순이 된다.(*10은 앞 자리로 옮기는 역활)
- 각 단계별 값들은 Integer범위 안에 있는지 확인 해야함(오버플로우 체크)
- Integer Min값은 -2^31 = -2,147,483,648 이다. 그러므로 /10의 값이 -8을 미만인지 오버플로우 이다.(/10을 하면 
마지막 수의 값이므로, 해당 값과 최소값 비교를 진행)
- Integer Max 값인 2^31 - 1 = 2,147,483,647 도 마찬가지로 /10이7을 넘기는지 체크 함. 
- 상기 조건을 체크하면서 tail 을 roof 으로 옮기는 작업을 진행함

1. Basic Logic
- Get a last number at each steps. (Pop)
- And then move to one forward step a number which was got before step.
- Keep doing this routine until the number is exceeded

2. Main principle
- x%10 is return last position number at each time.
- rev*10 is make the number(x%10) move to forward at each step. (Every *10 return by the tenth digit
- The numbers are must checkd about they are located within Integer length at every step. 
- Integer Min number is -2^31 = -2,147,483,648. So if /10 result is less then -8, it mean overflow.
- Integer Max number is 2^31 - 1 = 2,147,483,647. If /10 result is over 7, it mean overflow. 
- Keep doing upper tasks every step.

3.Source Code
``` kotlin
class Solution {
    fun reverse(x: Int): Int {
        /*
        //pop operation:
        // x is origin number
        pop = x % 10;
        x /= 10;
        ex) x= 132, 132%10 = 2, 132/10 = 13
            13%10 = 3, 13/10 = 1 ...
            
        //push operation:
        //var rev: Int = 0;
        temp = rev * 10 + pop;
        rev = temp; 
        ex) pop=2, temp = 0*10+2 = 2 = rev,
            pop=3, temp = 2*10+3 = 23 = rev,
            pop=1, temp = 23*10+1 = 231 = rev = return
            
        //For checking overflow cause Int range is [-2^31 = -2,147,483,648, 2^31 - 1 = 2,147,483,647]
        if rev > Integer.MAX_VALUE/10 > Overflow cause it already over than last number, 7
        if rev == Integer.MAX_VALUE/10, check pop>7 or not. if pop <= 7, it's not overflow. 
        */
        var target:Int = x
        var rev:Int = 0
        while(target!=0){
            var pop:Int = target%10;
            target /= 10;
            if(rev>Int.MAX_VALUE/10 || (rev==Int.MAX_VALUE/10 && pop>7)) return  0;
            if(rev<Int.MIN_VALUE/10 || (rev==Int.MIN_VALUE/10 && pop<-8)) return 0;
            
            rev = rev*10+pop;
        }
        return rev;
    }
}

```
