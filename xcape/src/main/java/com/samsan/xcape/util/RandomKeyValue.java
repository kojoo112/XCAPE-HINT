package com.samsan.xcape.util;

public class RandomKeyValue {
    /*
     *  create randomKeyValue
     */

    public static String randomKey(){
        String chars = "0AKU1BLV2CMW3DNX4EOY5FPZ6GQ7HR8IS9JT";
        int charsLength = 5;
        String randomString = "";
        for(int i=0; i<charsLength; i++){
            int randomNumber = (int) Math.floor(Math.random() * charsLength);
            randomString += chars.substring(randomNumber, randomNumber+1);
        }

        return randomString;
    }
}
