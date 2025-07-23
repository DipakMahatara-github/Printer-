function feedbackForm()
                        {
                            var firstName = document.forms["messageForm"]["fname"].value;
                            var lastName = document.forms["messageForm"]["lname"].value;
                            
                            var gender = document.forms["messageForm"]["genderDetails"].value;
                            var messageDetails = document.forms["messageForm"]["message"].value;
                                //alert(messageDetails);
                                if (firstName =="" || lastName =="")
                                {
                                alert("Empty fields are present!!! Please enter the values...");
                                }
                                else
                                {
                                alert("Thank you for your feedback!!!");
                                }
                         }