---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Logstash] Plugin 오픈 소스 Bundle install/update 오류"

# optional sub-title below the page title
sub_title: "[Logstash] Plugin open source Bundle install/update error"

categories:
  - Linux
tags:
  - Linux
  - Shell
  - bashrc
  - bash
  - ksh
  - zsh
last_modified_at: 2021-05-26T11:06:52-05:00

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
결론부터 말하자면
> 1) Bash쉘을 안쓰는데 ~/.bashrc에 적용 하면 오류 발생 
> 2) 사용하는 쉘에 맞는 파일에 적용 필요(kshrc, zshrc 등)

1. 증상
  - ~/.bashrc에 변수 설정(export VAR=VALUE)을 한 후 터미널 재 접속을 해도 적용이 안됨 
  - 또는 source ~/.bashrc 명령 시 shopt: not found [No such file or directory] 에러가나옴
2. 원인
  - 사용하고 있는 쉘이 bash가 아님
3. 해결방법
  - 사용하고 있는 쉘에 맞는 파일에 설정
    1. 콘솔에 echo $SHELL 명령 
    2. 콘솔에 표시된 쉘에 맞는 쉘 파일에 환경변수 등록
      - /bin/ksh: ksh 쉘 -> ~/.kshrc
      - /bin/zsh: zsh 쉘 -> ~/.zshrc
      - /bin/bash: bash 쉘 -> ~/.bashrc
    3. 콘솔 종료 후 재접속 또는 source {shell file}로 적용(예: source~/.kshrc)  
- 사용하고 있는 쉘을 교체   
    1. chsh -l 명령으로 쉘 종류 확인 
    2. chsh -s /path/to/bash 명령으로 bash 쉘로 변경(예: chsh -s /bin/bash)



In my conclousion  
> 1) Your linux does not use bash shell.  
> 2) Setting shell file on your environment or change your linux shell what you want

1. Case  
  - Not adjusting environemnt variable after setting on ~/.bashrc file(export VAR=VALUE). Even thought you reconnect terminal.  
  - Or source ~/.bashrc command show error message :shopt: not found [No such file or directory]"
2. Reason
  - Your linux does not use bash shell
3. Solution
  - Setting environment variable on shell file which your linux use.
    1. Command echo $SHELL on console terminal 
    2. Setting environment variables on file which console display after "echo $Shell" command
      - /bin/ksh: ksh -> ~/.kshrc
      - /bin/zsh: zsh -> ~/.zshrc
      - /bin/bash: bash -> ~/.bashrc
  - Reconnect terminal or command "source {shell file}"(ex: source~/.kshrc)  
  - Change your linux shell  
    1. checking your linux shell by command "chsh -l"  
    2. command "chsh -s /path/to/bash" for changing your linux shell to bash shell(ex: chsh -s /bin/bash)
