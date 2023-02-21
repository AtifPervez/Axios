# Axios
# ::::GET API:::::


API SETU URL=> https://apisetu.gov.in/directory/api/cowin/

# Get States:-
https://cdn-api.co-vin.in/api/v2/admin/location/states

# Get list of districts:-
https://cdn-api.co-vin.in/api/v2/admin/location/districts/{states_id}

# Get Vaccination session by districtId and with date:-
https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=664&date=14-02-2023

where district_id and date is in query params
 - district_id=664
 - date=31-03-2022

 # Get Vaccination sessions by with pin and date :-

 https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin

 - Example:-
 https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=208002&date=14-02-2022

where pincode and date is in query params
 - pincode=208002
 - date=14-02-2022

# :::::::::POST API::::::::::

https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP





# Assingment

WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

GOTO http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further Create API's to do each of the following: - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid= (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error ..also use HTTP only and not HTTPS) - then change the above to get the temperature only( of London) - Sort the cities ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature result should look something like this [ {city:"London", temp: 280}, {city:"Moscow", temp: 290}, {city:"Bangalore", temp: 301.2}, ....... ]

Axios POST request assignment

     1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
     2. Pick a memeId you want (Eg 129242436) for the POST request
     3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
     template_id <meme_id>
     text0 <text you want as a caption>
     text1 <optional>
     username chewie12345
     password meme@123

     4. Return a response with a body like this
     "data": {
             "url": "https://i.imgflip.com/5mvxax.jpg",
             "page_url": "https://imgflip.com/i/5mvxax"
         }