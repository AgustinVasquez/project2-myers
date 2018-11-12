//package com.ex.mvcs.config;
//
//import com.ex.mvcs.aspect.UserLoginRequestInterceptor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class UserLoginMVCConfig implements WebMvcConfigurer {
//
//    @Autowired
//    private UserLoginRequestInterceptor userLoginRequestInterceptor;
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(userLoginRequestInterceptor)
//                .addPathPatterns("/**/userlogin/**/");
//    }
//}
