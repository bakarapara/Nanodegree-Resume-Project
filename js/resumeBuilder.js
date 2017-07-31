// JSON
//==========================================================================

// BIO
//==========================================================================

var bio = {
    "name": "Rasim Rakhmanov",
    "role": "UI designer and developer",
    "contacts": {
            "mobile": "+994 55 757 96 06",
            "email": "rasim@magnum.az",
            "github": "http://github.com/rakhmanovr",
            "twitter": "@rasim_rakhmanov",
            "location": "Moscow, Russia"
    },
    "welcomeMessage": "Maecenas tristique a dui ut varius. Etiam a purus porttitor, lobortis ipsum ac, finibus nibh. Ut tempor sed metus vitae sagittis. Mauris nec elementum sem.",
    "skills": ["Graphic Design", "UI/UX", "Photography", "HTML/CSS", "Java Script"],
    "biopic": "images/me.jpg",
};


// EDUCATION
//==========================================================================

var education = {
    "schools": [{
            "name": "Baku Slavic University Lyceum",
            "location": "Baku, Azerbaijan",
            "degree": "General Education",
            "majors": [],
            "dates": "1998-2001",
            "url": "www.bsuhl.edu.az"
        },
        {
            "name": "Freie Universität Berlin",
            "location": "Berlin, Germany",
            "degree": "B.Sc. Software Engineering",
            "majors": ["Mathematics", "Engineering"],
            "dates": "2001-2004",
            "url": "www.fu-berlin.de"
        }
    ],
    "onlineCourses": [{
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};


// WORK
//==========================================================================
var work = {
    "jobs": [{
            "employer": "MEQA studio",
            "title": "Web designer",
            "location": "Rome, Italy",
            "dates": "2004-2006",
            "description": "Nam eget sodales enim. Praesent elementum massa sed ante feugiat sagittis. Cras leo diam, vehicula quis tellus nec, efficitur varius nisl."
        },
        {
            "employer": "McCann-Ericson",
            "title": "Graphic Designer",
            "location": "London, UK",
            "dates": "2006-2008",
            "description": "Sed vehicula imperdiet nisl, at sodales ipsum tristique a. Quisque suscipit nec diam ac blandit."
        },
        {
            "employer": "Unibank",
            "title": "Lead UI designer",
            "location": "Moscow, Russia",
            "dates": "2008-2011",
            "description": "Nam eget sodales enim. Praesent elementum massa sed ante feugiat sagittis. Cras leo diam, vehicula quis tellus nec, efficitur varius nisl."
        },
        {
            "employer": "MAGNUM agency",
            "title": "Digital director",
            "location": "Warsaw, Poland",
            "dates": "2011-2017",
            "description": "Vestibulum id orci lectus. Donec vitae nunc ipsum. Pellentesque malesuada eros id cursus venenatis."
        }
    ]
};

// PROJECTS
//==========================================================================

var projects = {

    "projects": [{
            "title": "2010 Unibank Annual Report",
            "dates": "2010",
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            "images": ["http://magnum.az/coding/2/images/work1_1x.jpg", "http://magnum.az/coding/2/images/work2_1x.jpg"]
        },
        {
            "title": "Unibank website",
            "dates": "2010",
            "description": "Nam iaculis lorem nec velit aliquet, non maximus libero gravida. Nulla sit amet tortor velit.",
            "images": ["http://magnum.az/coding/2/images/work1_1x.jpg", "http://magnum.az/coding/2/images/work2_1x.jpg"]
        },
        {
            "title": "Muganbank 2012 Annual Report",
            "dates": "2012",
            "description": "Pellentesque malesuada eros id cursus venenatis. Sed aliquam ornare ex. Nulla ut blandit urna. Nunc finibus lorem ut lacus congue dignissim.",
            "images": ["http://magnum.az/coding/2/images/work1_1x.jpg", "http://magnum.az/coding/2/images/work2_1x.jpg"]
        },
        {
            "title": "Port Baku Mall website",
            "dates": "2015",
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            "images": ["http://magnum.az/coding/2/images/work1_1x.jpg", "http://magnum.az/coding/2/images/work2_1x.jpg"]
        }
    ]
};


// END OF JSON
//==========================================================================
//==========================================================================
//==========================================================================
//==========================================================================



// FUNCTIONS
//==========================================================================


bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    var formattedContactEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedContactGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedContactEmail)
        .append(formattedContactMobile)
        .append(formattedContactGithub)
        .append(formattedContactLocation);
}


work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerWorkTitle);

        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedJobDates);

        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedJob = formattedJobLocation + formattedJobDescription;
        $(".work-entry:last").append(formattedJob);
    }
}


projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectYear = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectYear);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);
        if (projects.projects[i].images.length > 0) {
            for (var g = 0; g < projects.projects[i].images.length; g++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[g]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}


education.display = function() {
    education.schools.forEach(function(item, i) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

        var educationTitle = formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree;
        $(".education-entry:last").append(educationTitle);
        $(".education-entry:last").append(formattedSchoolDates);

        education.schools[i].majors.forEach(function(item, z) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[z]);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(item, x) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title).replace("#", education.onlineCourses[x].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
        var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineSchoolTitle);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
        $(".education-entry:last").append(formattedOnlineDates);

    });
}

// CALL FUNCTIONS
//==========================================================================

bio.display();
work.display();
projects.display();
education.display();


// CLICKS
//==========================================================================

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


// MAP
//==========================================================================

$("#mapDiv").append(googleMap);
