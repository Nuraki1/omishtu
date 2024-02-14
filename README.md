
   HTTP and HTTPS
   --------------
     - HTTP:  Hyper Text Transfer Protocol
              is a common language to communicate between client and servers
              includes words like (GET, POST, PUT, DELETE)


                        Request    (msg sent by browser)
                        ------->    
            Browser                 server
                        <-------   
                        Response     (msg sent by server):
                        
                          -  HTTP status message ( https://www.w3schools.com/tags/ref_httpmessages.asp )
                          -  HTML
                          check on: (https://example.com/)  



                     Functionality                   eg. Facebook

          GET    : Get an html file                  Recieve the Feed
          POST   : Send over data to server/DB       Create new user and add it to DB
          PUT    : Send over data & update           Edit over a post or a comment
          DELETE : Delete over a data in server      Remove user or some post/ comment


          Ways of Sending Data to a server:
          --------------------------------
             - Query String (GET method) 
             - Form Data / Body of the request (POST method)
             - JSON Payload (POST or PUT method) : Multiple data in Structured way 
                                                   eg. user = {name:"Ak", pw:"123" }

                                                here JSON.stringify and JSON.parse are come to work
   

                  N.B JSON: javascript object notation
                            Syntax for storing and exchanging of data
                               (XML can also used but not good alternative)

             #  With JSON you can now grab the contents of the <input> in a form and submit 
                those with JSON instead of as a form data.     


 AJAX
 -----

              Problem: when ever a page is updated, the entire page must be loaded (navig, sidebar ... ) 

             - Based on "XML http request object " sends request to the server
             - Break through on reducing refresing of an entire page through response
             - Quicked page updateas 
             - Less data is downloaded in each update/ less wasted bandwidth       


             syntax: fetch('url').then(response => response.json()).then(data)   

            
 Promises
 --------
                    