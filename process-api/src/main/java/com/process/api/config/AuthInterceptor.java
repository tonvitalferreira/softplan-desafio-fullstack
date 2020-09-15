package com.process.api.config;

import com.process.api.model.User;
import com.process.api.repository.UserRepositoryImpl;
import com.process.api.service.JWTManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Service
public class AuthInterceptor extends HandlerInterceptorAdapter {

    @Autowired
    private ApplicationContext context;

    @Override
    public boolean preHandle(HttpServletRequest requestServlet, HttpServletResponse responseServlet, Object handler) throws Exception {
        if (requestServlet.getRequestURI().startsWith("/oauth")) {
            return true;
        }

        JWTManagerService jwtManager = new JWTManagerService();

        String auth = requestServlet.getHeader("Authorization");
        String token = null;

        if (auth != null && !auth.isEmpty() && auth.startsWith("Bearer")) {
            token = auth.substring("Bearer".length()).trim();
            if (!jwtManager.isValidAuthToken(token)) {
                responseServlet.setStatus(HttpStatus.UNAUTHORIZED.value());
                return false;
            }
        } else {
            responseServlet.setStatus(HttpStatus.UNAUTHORIZED.value());
            return false;
        }


        //ROUTE PERMISSIONS
        boolean unauthorized = false;
        String userName = jwtManager.getUserNameFromAuthToken(token);
        String uri = requestServlet.getRequestURI();
        String method = requestServlet.getMethod();
        UserRepositoryImpl repository = context.getBean(UserRepositoryImpl.class);
        User user = repository.getByUserName(userName);

        if (user == null) {
            unauthorized = true;
        } else if (user.getPermission().equals("ATF")) { //ALL PERMISSIONS
            unauthorized = false;
        } else if (user.getPermission().contains("A")) {
            if (containsPath(uri, "/process")) {
                if (method.equals("POST")) {
                    unauthorized = true;
                }
            } else if (containsPath(uri, "/sights")) {
                if (!method.equals("PUT") && !method.equals("GET")) {
                    unauthorized = true;
                }
            }
        } else if (user.getPermission().contains("T")) {
            if (containsPath(uri, "/users")) {
                if (!method.equals("GET")) {
                    unauthorized = true;
                }
            }
        } else if (user.getPermission().contains("F")) {
            if (containsPath(uri, "/users")) {
                if (!method.equals("GET")) {
                    unauthorized = true;
                }
            }
        }

        if (unauthorized) {
            responseServlet.setStatus(HttpStatus.UNAUTHORIZED.value());
            return false;
        }

        requestServlet.setAttribute("userName", userName);

        return true;
    }

    public boolean containsPath(String uri, String... paths) {
        boolean ret = false;
        for (String path : paths) {
            if (uri.startsWith(path)) {
                ret = true;
                break;
            }
        }
        return ret;
    }
}
