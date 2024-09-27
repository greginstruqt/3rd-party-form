var encrypt = require('./encrypt');

module.exports = {
    process_form_submission: async function (req, res) {
        userdata = {
            firstName:req.body.first_name,
            lastName:req.body.last_name,
            email:req.body.email
        };
        console.log(userdata);

        var labURL = new URL(trackLink);
        
        //Add code below this line
        

        console.log("Lab url: " + labURL.toString());
        return labURL.toString();
    }
};