package com.process.api;

import com.process.api.model.User;
import com.process.api.repository.UserRepositoryImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ProcessApiApplication {

    private static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(ProcessApiApplication.class, args);

        UserRepositoryImpl repository = applicationContext.getBean(UserRepositoryImpl.class);

        User adm = new User();
        adm.setFullName("ADM");
        adm.setUserName("adm");
        adm.setPasswordHash("123");
        adm.setPermission("ATF");
        repository.save(adm);

        User triator = new User();
        triator.setFullName("Triator");
        triator.setUserName("triator");
        triator.setPasswordHash("123");
        triator.setPermission("T");
        repository.save(triator);

        User finalizator = new User();
        finalizator.setFullName("Finalizator");
        finalizator.setUserName("finalizator");
        finalizator.setPasswordHash("123");
        finalizator.setPermission("F");
        repository.save(finalizator);

    }

}
