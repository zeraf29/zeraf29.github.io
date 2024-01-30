---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Logstash] In linux bash shell, After split string using parameter expansion, how to print array’s values each line?"

# optional sub-title below the page title
sub_title: "[Linux] Split using comma as delimiter "

categories:
  - Linux
tags:
  - Linux
  - Shell
  - bashrc
  - bash
  - ksh
  - zsh
last_modified_at: 2024-01-30T20:06:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
    Linux - Split String by delimiter and save them to array. Then print each values. 

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

1. Purpose  
  - Split String by delimiter and save them to array. Then print each values.
2. Solution
  - ```
string=“word1,word2,word3” 
array=(${string//,/ }) # Split using comma as delimiter 
for element in “${array[@]}”; do 
	echo “$element” 
done
```
