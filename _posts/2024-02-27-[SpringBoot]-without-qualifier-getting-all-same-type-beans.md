---
# optional alternate title to replace page.title at the top of the page
alt_title: "[SpringBoot] if not set target name by @Qualifier, Spring boot is getting all same type beans"

# optional sub-title below the page title
sub_title: "[SpringBoot] if not set target name by @Qualifier, Spring boot is getting all same type beans ."

categories:
   - SpringBoot
tags:
   - Java
   - SpringBoot
   - Qualifier
   - Bean
last_modified_at: 2024-03-30T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: qualifier

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - Setting beans which implemented(or extended) Action interface(class).
    ![Qualifier]({{"/assets/img/posts/qualifier/qualifier_1.png"| relative_url}})
  - Registered Actions bean for saving beans implemented(or extended) Action interface(class).
    ![Qualifier]({{"/assets/img/posts/qualifier/qualifier_2.png"| relative_url}})
  - by BeanPostProcessor, Put specific beans(a_Actions, b_Actions, c_Action. These are implement Action).
    ![Qualifier]({{"/assets/img/posts/qualifier/qualifier_3.png"| relative_url}})
  - Make ActionStarter bean which being DI of Actions bean. 
  - If not qualifier Actions bean name while DI, ActionStarter bean is getting all same type beans(DI bean type)
    ![Qualifier]({{"/assets/img/posts/qualifier/qualifier_4.png"| relative_url}}) 
2. Test Source
  - https://github.com/zeraf29/Spring_Boot_Qualifier_Test