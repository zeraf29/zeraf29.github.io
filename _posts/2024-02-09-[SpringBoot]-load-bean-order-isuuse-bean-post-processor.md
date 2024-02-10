---
# optional alternate title to replace page.title at the top of the page
alt_title: "[SpringBoot] Load bean order isuuse (BeanPostProcessor)"

# optional sub-title below the page title
sub_title: "[SpringBoot] BeanPostProcessor - hooks into the Spring bean lifecycle to modify beans configuration"

categories:
  - SpringBoot
tags:
  - SpringBoot
  - Spring
  - Java
  - order
  - BeanPostProcessor
last_modified_at: 2024-02-09T09:40:52-05:00

# optional intro text below titles, Markdown allowed
introduction: | 
  hooks into the Spring bean lifecycle to modify beans configuration

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)

# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---

1. Issue  
  - when spring boot is boot, each beans are registred by sequentially. Normally spring boot load them each order by follow dependency injection.
    - But sometimes injected bean is not loaded before, then spring boot can't find target bean infromation.
    - I met this situation at each bean are located in different projects.
  - Example
    - Engine project has refer to EngineCommon project. 
    - Engine project has MessageAdapter Bean, and EngineCommon project has NetworkInit bean. 
    - MessageAdapter bean is injected to NetworkInit bean. 
    - Engine project has bootRun.
    - In this situation, Spring boot can't find MessageAdapter bean when NetworkInit bean is loaded while Engine project boot.
2. Reason
  - Because MessageAdapter bean will be loaded after EngineCommon project's bean are loaded first.
  - Also @Order annotation is not work for setting ordering between them.
3. Solution
  - I make a BeanPostProcessor.
  - Spring’s BeanPostProcessor gives us hooks into the Spring bean lifecycle to modify its configuration. 
  - BeanPostProcessor will be acted last step in loaded bean, and it can modify beans before regiser them to spring boot.


```
/** Engine Project **/

// MessageAdapt.java
// MessageAdapt
public class MessageAdapt{ 
}

// MessageAdaptConfiguration.java
// Bean configuration
@Configuration
public class MessageAdaptConfiguration {

    @Bean
    public MessageAdapt messageAdapt() {
        return new MessageAdapt();
    }
}

```
```
/** EngineCommon Project **/

// NetworkInit.java
// NetworkInit
public class NetworkInit{
  private MessageAdapt messageAdapt
  
  /**...omit...**/
  
  public void setNetworkInit(MessageAdapt messageAdapt){
    this.messageAdapt = messageAdapt;
  }
  
    /**...omit...**/
}

// NetworkInitConfiguration.java
// Bean configuration
@Configuration
public class NetwokInitConfiguration {

    @Bean
    public NetworkInit networkInit() {
        return new NetworkInit();
    }
    
    /** Must BeanPostProcessor is registred by bean **/
    @Bean
    public NetworkInitBeanPostProcessor networkInitBeanPostProcessor() {
      return new NetworkInitBeanPostProcessor();
    }
}

//NetworkInitBeanPostProcessor.java
//
public class NetworkInitBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if (beanName.equals("networkInit")) {
            
            MessageAdapt messageAdapt = applicationContext.getBean(MessageAdapt.class);

            ((NetworkInit) bean).setNetworkInit(messageAdapt);
        }
        return bean;
    }
}


```
4. Reference
   - https://www.baeldung.com/spring-beanpostprocessor
   - https://jaimemin.tistory.com/2028
   - https://groups.google.com/g/gwt-sl/c/SDb3hd96MZg
