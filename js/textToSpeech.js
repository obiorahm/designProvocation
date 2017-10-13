/*        function welcomeAddress(whattoSay) {
           responsiveVoice.speak(whattoSay);
        }
        window.onload = welcomeAddress;*/

        function welcomeAddress(whattoSay, callback){
        	responsiveVoice.speak(whattoSay);
        	callback;
        }

