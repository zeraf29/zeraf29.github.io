---
# optional alternate title to replace page.title at the top of the page
alt_title: "[SpringBoot] Actuator dependency and Swagger Stater 3.0.0 conflict"

# optional sub-title below the page title
sub_title: "[SpringBoot] ERROR org.springframework.boot.SpringApplication: Application run failed
org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'"

categories:
  - SpringBoot
tags:
  - SpringBoot
  - Spring
  - Java
  - SpringFox
  - Swagger
  - Actuator
last_modified_at: 2024-01-31T10:06:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
    Make a bean for solving conflict between Actuator and Swagger 

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)

# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---

1. Issue  
  - When I use both Actuator and Swagger in a project, I met below error message
    - ERROR org.springframework.boot.SpringApplication: Application run failed
      org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'
  - Environment
    - Spring boot: 2.7.17
    - Spring Actuator: Same version with Spring boot
    - Spring fox swagger: 3.0.0
      - io.springfox:springfox-swagger2:3.0.0
      - io.springfox:springfox-swagger-ui:3.0.0
      - io.springfox:springfox-boot-starter:3.0.0
2. Reason
  - Swagger and Actuator, they two are access endpoint in spring boot. So they have conflict of dependency each other.
  - Springfox swagger assume that Spring MVC use to Ant-based path matcher. But Upper Spring MVC 2.6.x is changed from Ant-based path matcher to PathPattern-based matcher. 
  - Both two make this error
3. Solution
  - Put below option under application.yml
```
spring:
  mvc:
    pathmatch:
      matching-strategy: ant_path_matcher
```
  - And then, Regist BeanPostProcessor bean for SpringfoxHandler like below example
```
@Configuration
public class Config {
@Bean
public static BeanPostProcessor springfoxHandlerProviderBeanPostProcessor() {
return new BeanPostProcessor() {

            @Override
            public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
                if (bean instanceof WebMvcRequestHandlerProvider || bean instanceof WebFluxRequestHandlerProvider) {
                    customizeSpringfoxHandlerMappings(getHandlerMappings(bean));
                }
                return bean;
            }

            private <T extends RequestMappingInfoHandlerMapping> void customizeSpringfoxHandlerMappings(List<T> mappings) {
                List<T> copy = mappings.stream()
                        .filter(mapping -> mapping.getPatternParser() == null)
                        .collect(Collectors.toList());
                mappings.clear();
                mappings.addAll(copy);
            }

            @SuppressWarnings("unchecked")
            private List<RequestMappingInfoHandlerMapping> getHandlerMappings(Object bean) {
                try {
                    Field field = ReflectionUtils.findField(bean.getClass(), "handlerMappings");
                    field.setAccessible(true);
                    return (List<RequestMappingInfoHandlerMapping>) field.get(bean);
                } catch (IllegalArgumentException | IllegalAccessException e) {
                    throw new IllegalStateException(e);
                }
            }
        };
    }
```
4. Reference
   - https://dkswnkk.tistory.com/672
