package com.ezgibuseisik.todolistmyfinals.configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI getOpenAPIMethod() {
        return new OpenAPI().info(new Info()
                .title("Analyst Software Developer Ezgi Buse Işık")
                .version("V1.0.0")
                .description("Spring Boot & React Js & Devops")
                .termsOfService("Software INC")
                .contact(new Contact()
                        .name("Ezgi Buse Işık")
                        .email("ezgibuse159@gmail.com")
                        .url("https://github.com/ezgibuse-akkaya")
                )
                .license(new License()
                        .name("licence INC xyz")
                        .url("https://github.com/ezgibuse-akkaya")
                )
        );
    }
}
