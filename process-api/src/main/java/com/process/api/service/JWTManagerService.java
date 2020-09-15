package com.process.api.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.process.api.util.DateTime;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class JWTManagerService {
    private final int tokenExpiresInMinutes = 60;

    private final String secret = "tonzera1331";

    private Algorithm getAlgorithm() {
        return Algorithm.HMAC256(secret);
    }

    public boolean isValidAuthToken(String authToken) {
        boolean ret = false;
        try {
            JWTVerifier verifier = JWT.require(getAlgorithm()).build();
            verifier.verify(authToken);
            ret = true;
        } catch (JWTDecodeException | TokenExpiredException ex) {
            ret = false;
        }

        return ret;
    }

    public String generateAuthToken(String userName, String passwordHash, Long idUser) {
        String token = null;
        try {
            Algorithm algorithm = getAlgorithm();
            token = JWT.create()
                    .withJWTId(UUID.randomUUID().toString())
                    .withClaim("userName", userName)
                    .withClaim("passwordHash", passwordHash)
                    .withExpiresAt(DateTime.getCurrentTimePlusMinutes(tokenExpiresInMinutes))
                    .sign(algorithm);

        } catch (JWTCreationException exception) {
            token = null;
        }

        return token;
    }

    public String getUserNameFromAuthToken(String authToken) {
        String userName = null;

        try {
            JWTVerifier verifier = JWT.require(getAlgorithm()).build();
            DecodedJWT decodedJWT = verifier.verify(authToken);
            userName = decodedJWT.getClaim("userName").asString();
        } catch (JWTDecodeException | TokenExpiredException ex) {
            userName = null;
        }

        return userName;
    }
}
