---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Gradle] IntelliJ can not gradle build project online mode in closed network"

# optional sub-title below the page title
sub_title: "[Gradle] Change gradle version from gradle-bin.zip to gradle-all.zip"

categories:
   - Gradle
tags:
   - Gradle
   - IntelliJ
last_modified_at: 2024-02-23T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: When you build project made by gradle wrapper in closed network, you need to change gradle version from gradle-bin to gradle-all in gradle-wrapper.properties.

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
- When I try to build project made by gradle wrapper in closed network, IntelliJ can't do it. 
   - Environemnt
     - Closed network (Bank site: can't access internet)
     - Manage dependency files by Nexus solution. Gradle has to connect to Nexus repositories url. 
     - For using connect Nexus repositories, Intelli J is set online mode.
2. Reason
   - Intelli J needs the gradle-src.zip for checking version before building project. 
     - If local gradle doesn't have -src files, Intelli J try to download them from internet. 
   - After checking version, Intelli J use gradle-bin.zip for building project 
   - In closed network, you have to use gradle-all.zip for success gradle build by upper process. 
3. Solution
   - Place gradle-all.zip file in distributionPath
   - Set gradle-wrapper.properties like below
 

```
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
# for online
# distributionUrl=https\://services.gradle.org/distributions/gradle-6.9.2-bin.zip
# for offline
#distributionUrl=dists/gradle-6.9.2-bin.zip
distributionUrl=dists/gradle-6.9.2-all.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists

```

4. Reference
   - https://github.com/gradle/gradle/issues/18249
   - https://youtrack.jetbrains.com/issue/KTIJ-21810
   - https://intellij-support.jetbrains.com/hc/en-us/community/posts/16134282733074-Intelli-J-keep-trying-download-gradle-src-zip-despite-of-setting-local-gradle?page=1

