package com.arka99.OnlineLibrary.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Base64;
import java.util.HashMap;

public class ExtractJWT {
    public static String extractValueFromPayload(String token, String extraction) {

//      replace the initial Bearer text in the token with empty string
        token.replace("Bearer ", "");
//      break up the token into several chunks
        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
//      decode the payload in the token
        String payloadString = new String(decoder.decode(chunks[1]));
        HashMap<String, Object> payloadMap;
//      create a map from the payload string
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            payloadMap = objectMapper.readValue(payloadString, HashMap.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
//      if the map has the key then return it; otherwise return null
        if (payloadMap.containsKey(extraction)) {
            return payloadMap.get(extraction).toString();
        }
        return null;
    }
}
