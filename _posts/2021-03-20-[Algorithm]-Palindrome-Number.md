---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Algorithm] Palindrome Number"

# optional sub-title below the page title
sub_title: "[알고리즘] Palindrome Number (앞뒤가 똑같은 숫자인지 체크)"

categories:
  - algorithm
tags:
  - kotlin
  - algorithm
  - 코틀린
  - 알고리즘
  - leetcode
  -
last_modified_at: 2021-03-20T14:25:52-05:00

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
- 끝 자리 숫자를 하나씩 꺼내온다(%10).
- 중간까지 꺼낸다(while(originNumber > revertedNumber)). 
- 비교 값이 같을 경우 Palindrome(originNumber==revertedNumber||originNumber==(revertedNumber/10))

2.주요원리
- originNumber%10 은 해당 시점의 끝자리 수를 나타낸다, (%10 은 10을 나눈 나머지, 즉 마지막 자릿수를 의미)
- revertedNumber*10 은 넘겨받은 자릿수를 한 자리씩 앞으로 옮긴다.(*10을 할수록 10의 자리씩 앞으로 옮겨진다.)
- 그러므로 revertedNumber*10+originNumber 앞서 넘겨받은 앞자릿수(앞서 뒷자리가 된 수)를 앞으로 옮긴 후 다음 수를 더하는 수순이 된다.(*10은 앞 자리로 옮기는 역활)
- while(originNumber > revertedNumber) 을 반복함으로써, originNumber의 중간 위치까지만 값을 추출한다(Palindrome 비교를 위해선 중간 위치까지만 비교하면 된다.)
ex1) 1221 -> 21 까지 추출 후 값 비교 (originNumber==revertedNumber)
ex2) 12321 -> 가운데 3은 중앙값이므로 비교 불필요, 21까지 추출 후 앞의 12랑 비교 (originNumber==(revertedNumber/10)

1. Basic Logic
- Get a last number at each steps. (%10)
- Get numbers until midle position.
- If comparaing numbers are same, it's palindrome.

2. Main principle
- originNumber%10 is return last position number at each time.
- revertedNumber*10 is make the number(x%10) move to forward at each step. (Every *10 return by the tenth digit forward)
- Do "while(originNumber > revertedNumber)" loutine, get numbers until originNumber's middle postion. (Only need to comapre until middle postion for checking palindrome)
ex1) 1221 -> Get and compare until number 21  (originNumber==revertedNumber)
ex2) 12321 -> 3 is middle numbeer, so we don't have to extract it. Until get number 21, compare with 12 which located in forward position (originNumber==(revertedNumber/10)

3.Source Code
``` kotlin
class Solution {
    fun isPalindrome(x: Int): Boolean {
        //Minus number is not palindrome
        //Also %10==0 and x=!0 is not palindrome (ex: 10, 450)
        if(x<0 || (x%10==0 && x!=0)) return false;
        
        var revertedNumber:Int = 0;
        var originNumber:Int = x;
        //keep deviding x by 10
        //until x will be less than or same with revertedNumber
        //(Compare half digits)
        
        while(originNumber > revertedNumber){    
            //every each step, end of number move to forward
            revertedNumber = revertedNumber*10 + originNumber%10;
            //target number forward
            originNumber/=10; 
        }
        //compare between revertedNumber and x 
        //case 1. originNumber==revertedNumber
        // : ex) 1221 
        //when originNumber=12, revertedNumber =12(last 21 reverted) 
        //-> originNumber==revertedNumber
        //case 2. originNumber==(revertedNumber/10)
        // : ex) 12321
        //when originNumber=12, revertedNumber=123(last 321 reverted)
        //-> originNumber==revertedNumber (middle number 3 is not matter)
        return originNumber==revertedNumber||originNumber==(revertedNumber/10);
    }
}
```
