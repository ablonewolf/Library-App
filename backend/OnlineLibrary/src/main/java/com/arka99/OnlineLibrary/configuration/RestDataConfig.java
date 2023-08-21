package com.arka99.OnlineLibrary.configuration;

import com.arka99.OnlineLibrary.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class RestDataConfig implements RepositoryRestConfigurer {
    private final String allowedOrigin = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
                                                     CorsRegistry cors) {
        HttpMethod[] unsupportedMethods = {
            HttpMethod.POST,
            HttpMethod.PATCH,
            HttpMethod.DELETE,
            HttpMethod.PUT};
        config.exposeIdsFor(Book.class);
        disableHttpMethods(Book.class, config, unsupportedMethods);

//        configure CORS mapping
        cors.addMapping(config.getBasePath() + "/**")
            .allowedOrigins(allowedOrigin);
    }

    private void disableHttpMethods(Class book,
                                    RepositoryRestConfiguration config,
                                    HttpMethod[] unsupportedMethods) {
        config.getExposureConfiguration()
            .forDomainType(book)
            .withItemExposure(((metdata, httpMethods) ->
                httpMethods.disable(unsupportedMethods)))
            .withCollectionExposure(((metdata, httpMethods) ->
                httpMethods.disable(unsupportedMethods)));
    }

}
