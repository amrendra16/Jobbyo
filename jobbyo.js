
var connection = require('./connection');
var express = require('express');
var mysql = require('mysql');
var { render } = require('ejs');
var bodyparser = require('body-parser');
var job = express();
var cookieparser=require('cookie-parser');
const session=require('express-session');
job.use(session({secret:'dygjadhfgsudSYFUSU5557'}));
job.use(cookieparser());
job.use(session({secret:"Shhs,it is a secret !"}));

job.use(bodyparser.json());
job.use(bodyparser.urlencoded({ extended: true }));

var port =1300;


job.set('view engine', 'ejs');
job.use(express.static('public'));
job.use(express.static('uploads'));
 


job.get('/', (req, res) => {

    res.render("landing");

})
job.get('/', (req, res) => {

    res.render("Home");

})
job.get('/about', (req, res) => {

    res.render("about");

})
job.get('/job', (req, res) => {

    res.render("jobmain");

})
job.get('/help', (req, res) => {

    res.render("help1");

})
job.get('/registration', (req, res) => {

    res.render("reg");

})
job.get('/accontjob', (req, res) => {

    res.render("accntjob");

})
job.get('/bankjob', (req, res) => {

    res.render("bankjob");

})
job.get('/javajob', (req, res) => {

    res.render("java");

})
job.get('/mktjob', (req, res) => {

    res.render("marketingjob");

})
job.get('/datascincejob', (req, res) => {

    res.render("datascienejob");

})
job.get('/seojob', (req, res) => {

    res.render("seojob");

})
job.get('/teachjob', (req, res) => {

    res.render("teajob");

})
job.get('/netjob', (req, res) => {

    res.render("networkingjob");

})
job.get('/softejob', (req, res) => {

    res.render("softwareeng");

})
job.get('/bpojob', (req, res) => {

    res.render("BPO");

})
job.get('/animationjob', (req, res) => {

    res.render("animationjob");

})

//  /apply page ke action ka naam
job.get('/apply', (req, res) => {
                    //file name
    res.render("applyjob");

})
job.get('/workhome', (req, res) => {

    res.render("workhome");

})
job.get('/recentjob', (req, res) => {

    res.render("recentjob");

})



job.get('/dashboard', (req, res) => {

    if(req.session.email!=null)
{

    res.render("./adminZone/dashboard");
}
else
{
    res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
}

})

job.get('/enqmng', (req, res) => {


    if(req.session.email!=null)
    {
    
        // res.render("./adminZone/Addjob");

        connection.query("select * from enquiry",(error,result)=>{
            if(result.length>0)
            {
                res.render("./adminZone/enqmng",{title:'Enquiry Management', data:result});
            }
            else
            {
                throw error;
            }
        
        })
    }
    else
    {
        res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
    }
    

// res.render("./adminZone/enqmng");
})


job.get('/addjob', (req, res) => {

    if(req.session.email!=null)
    {
    
        res.render("./adminZone/Addjob");
    }
    else
    {
        res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
    }
    

})
job.get('/applyusermng', (req, res) => {


    if(req.session.email!=null)
    {
        connection.query("select * from applyjob ",(error , result)=>{
            if(error) throw error;
            res.render("./adminZone/applyusermng",{title:'Apply User Management', data:result});
        })
    
    }
    else
    {
        res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
    }
    
    // res.render("./adminZone/dashboard");

        

})


job.get('/login', (req, res) => {


    res.render("./adminZone/login");

})
job.get('/password', (req, res) => {


    if(req.session.email!=null)
    {
    

        res.render("./adminZone/password");
    }
    else
    {
        res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
    }
    

})
job.get('/usermng', (req, res) => {

    if(req.session.email!=null)
    {
        connection.query("select * from ragistration",(error,result)=>{
            if(result.length>0)
            {
                res.render("./adminZone/usermng",{title:'User Management', data:result});
            }
            else
            {
                throw error;
            }
        
        })
    
    
    }
    else
    {
        res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
    }
    


})

// get action job managment...............
job.get('/jobmng', (req, res) => {
    if(req.session.email!=null)
    {
      connection.query("select * from add_job",(error,result)=>{
            if(result.length>0)
            {
                res.render("./adminZone/jobmng",{title:'Job Management', data:result});
            }
            else
            {
                throw error;
            }
        
        })
        
    }
    else
    {
        res.end("<script> alert('First Login then goto Next Zone');window.location.href='/login'</script>")
    }
        // res.render("./adminZone/jobmng");

})

// get action close here................................

// post action help
job.post("/ahelp", (req, res) => {
    //get all values from body
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;       //inputfield name se fname lname email mob msg
    var mob = req.body.mob;
    var msg = req.body.msg;

    // insert data into database                            // var names
    connection.query("insert into enquiry values(?,?,?,?,?)", [fname, lname, email, mob, msg], (error, result) => {

        if (error) {
            throw error;
        }
        else {
            res.end("<script>alert('Thanks ! Your Query is submitted as soon as we Contact You ');window.location.href='/help'</script>");
        }

    })

})
// post action end here........


// post action apply job start here.................


job.post('/apply',(req,res)=>{
    var name=req.body.name;
    var jobt=req.body.jobtitle;    //name,jobtitle,email,mob page me input tag naam
    var email=req.body.email;
    var mobail=req.body.mob;

    //match email from ragistration
    connection.query("select * from ragistration where email=?",[email],(error,result)=>{

        if(result.length>0){
            connection.query("insert into applyjob values(?,?,?,?,?)",[,name,jobt,email,mobail],(error,result)=>{

                if(error){
                    throw error;
                    }
                    else{
                        res.end("<script> alert('Thanks! you have applied Successfully');window.location.href='/job'</script>");
                    }
            })
        }
        else{
            res.end("<script>alert('you can not apply for job becouse you are not registered');window.location.href='/registration'</script>");

        }
    })
})


// post action apply job end here................ 


// add job start............

job.post("/add", (req, res) => {
    //get all values from body
    var jobtitle = req.body.jobtitle;
    var qualification= req.body.qualification;
    var salary = req.body.salary;
    var textarea = req.body.textarea;       //inputfield name se fname lname email mob msg
    

    // insert data into database                            // var names
    connection.query("insert into add_job values(?,?,?,?)", [jobtitle, qualification, salary, textarea], (error, result) => {

        if (error) {
            throw error;
        }
        else {
            res.end("<script>alert('Thanks ! Your Query is submitted as soon as we Contact You ');window.location.href='/addjob'</script>");
        }

    })

})

// add job end here...........



//for latest job  start here..............................................................

job.get("/latestjobs",(req,res)=>{

    connection.query("select * from add_job ",(error,result)=>{
        if(error)
        {
            throw error;
        }
        else{

            res.render("letestjob",{data:result});
        }

    })
})










// latest job  end here........................................

//post action Admin login start here............
job.post("/alogin", (req, res) => {

    var em = req.body.email;
    var pd = req.body.password;
    connection.query("select * from admin_login where adid= ? and passwd = ? ", [em, pd], function (error, result, fields) {

        if (result.length > 0) {

            //set value into session

          req.session.email=em;

            res.end("<script> alert ('welcome to Dashboard');window.location.href='/dashboard'</script>");
        }
        else {
            res.end("<script>alert('invailid userId or Password');window.location.href='/login'</script>");
        }
        res.end();
    })
})
//post action admin login end here...................



//registration form with file upload
//file upload cade from here

var multer = require('multer');
var myfile = "";
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');

    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
        myfile = file.originalname;
    }
});
var upload = multer({ storage: storage }).single('rescv');



job.post('/regpost', (req, res) => {
    
    upload(req, res, function (error) {
        
        var fname, lname, email, mob, street, city, state, quali, gender, password, resume;
        fname = req.body.fname;
        lname = req.body.lname;
        email = req.body.email;
        mob = req.body.mob;
        street = req.body.add;
        city = req.body.city;
        state = req.body.state;
        qual = req.body.qual;
        gender = req.body.gnd;
        password = req.body.pwd;
        resume = myfile;

        if(error) {
            throw error;
        }
        else {
            connection.query("insert into ragistration values(?,?,?,?,?,?,?,?,?,?,?)", [fname, lname, email, mob, street, city, state, qual, gender, password, resume], (error, result) => {
                if(error){
                    throw error;
                }
                else{
                    res.end("<script> alert('Thanks for Registration into my Portal');window.location.href='/'</script>");
                }
                
                
            })
        }
    })
})

// registration end here

// change password start here....................
 
job.post("/changep",(req,res)=>{
    var npass=req.body.new;
    var cpass=req.body.confirm;
    if(npass==cpass)
    {
   connection.query("update admin_login set passwd= ?",[npass],(error,result)=>{
 
    if(error)
    {
 throw error;
    }
    else{
       res.end("<script>alert(' Password updated ');window.location.href='/login'</script>");
    }
   })
    }
    else
    {
       res.end("<script>alert('Paasword is not matched ');window.location.href='/password'</script>")
    }
 })



// change password end here................



// for rating start.........................
job.get("/rating",(req,res)=>{

    res.render("rating");
})
//rating close..................................

// post action of review start.................

job.post("/userreview",(req,res)=>{

    var name=req.body.name;
    var star=req.body.hdnstar;
    var mob=req.body.mob;

    connection.query("insert into star values(?,?,?)",[name,star,mob],(error,result)=>{

        if(error){
            throw error;
        }
        else{
            res.end("<script> alert('thanks for review'); window.location.href='/rating'</script>");
        }
    })
})




// post action of review end.................





//logout start here.............

job.get('/logout',function(req,res){
    req.session.destroy();
    res.end("<script>alert('Logout');window.location.href='/login'</script>")
  })


//logout end here...................



job.listen(port, (error) => {
    if (error)
    throw error;
    else
        console.log("server start %d", port);
})