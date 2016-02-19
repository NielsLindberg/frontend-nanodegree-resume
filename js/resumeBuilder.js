
var bio = {
    "name" : "Niels Lindberg-Poulsen",
    "age" : 26,
    "role" : "Jester",
    "welcomeMessage" : "Hello 2 u, I am l33t Gam3r",
    "contacts" : {
        "email" : "eighthourcream@gmail.com",
        "github" : "https://github.com/NielsLindberg",
        "location" : "Copenhagen, Nørrebro, Denmark"
    },
    "bioPic" : "http://oi66.tinypic.com/ndm13n.jpg",
    "skills" : ["SQL", "ETL", "ELit3Gam3r"],

    displaySkills: function () {
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = "";

            for (i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
             $("#skills").append(formattedSkill);
            }
        }
    }
}

var education = {
    "schools" : [
        {
            "name" : "Frederiksberg Gymnasium",
            "location" : "Copenhagen, Frederiksberg, Denmark",
            "degree" : "Gymnasium",
            "major" : ["Mathematics", "Physics", "Computer Science"]
        },
        {   "name" : "Copenhagen Business School",
            "location" : "Copenhagen, Frederiksberg, Denmark",
            "degree" : "Bachelor",
            "major" : "Business and Administration"
        }
    ]
}

var work = {
    "jobs" : [
        {
            "company" : "Nordea Markets",
            "team" : "Projects, Reporting & Production",
            "title" : "Assistant Analyst",
            "start" : "19/01/2013",
            "end" : "30/01/2016",
            "location" : "Copenhagen, Christianshavn, Denmark",
            "description" : "lorem blabla"
        },
        {
            "company" : "Nordea Markets",
            "team" : "Business Development",
            "title" : "Assistant Analyst",
            "start" : "19/01/2013",
            "end" : "30/01/2016",
            "location" : "Copenhagen, Christianshavn, Denmark",
            "description" : "lorem blabla"
        },
        {
            "company" : "Nordea",
            "team" : "Corporate Actions",
            "title" : "Temp. Employee",
            "start" : "19/01/2013",
            "end" : "30/01/2016",
            "location" : "Copenhagen, Høje Taastrup, Denmark",
            "description" : "lorem blabla"
        }
    ],
    displayWork : function () {
        for (position in this.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",this.jobs[position].company);
            var formattedTitle = HTMLworkTitle.replace("%data%",this.jobs[position].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[position].start + " - " + this.jobs[position].end);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[position].description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);

        }
    }

}

var projectsobject = {
    "projects" : [
        {
            "name" : "Polymer Stuff",
            "projectPictures" : ["http://placehold.it/200x100", "http://placehold.it/200x100"],
            "start" : "19/01/2013",
            "end" : "30/01/2016",
            "description" : "Was testing out polymer framework"
        },
        {
            "name" : "Portfolio Stuff",
            "projectPictures" : ["http://placehold.it/200x100", "http://placehold.it/200x100"],
            "start" : "19/01/2013",
            "end" : "30/01/2016",
            "description" : "Was testing out polymer framework"
        },
        {
            "name" : "Food blog Stuff",
            "projectPictures" : ["http://placehold.it/200x100", "http://placehold.it/200x100"],
            "start" : "19/01/2013",
            "end" : "30/01/2016",
            "description" : "Was testing out polymer framework"
        }
    ],
    displayProjects : function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedDates = HTMLprojectDates.replace("%data%",this.projects[project].start+ " - " + this.projects[project].end);
            var formattedTitle = HTMLprojectTitle.replace("%data%",this.projects[project].name);
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            var formattedImage = "";

            for (i = 0; i < this.projects[project].projectPictures.length; i++) {
                formattedImage = formattedImage + HTMLprojectImage.replace("%data%", this.projects[project].projectPictures[i]);
            }

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            $(".project-entry:last").append(formattedImage);

        }
    }
}

var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").append(formattedBioPic);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMessage);
$("#mapDiv").append(googleMap);

work.displayWork();
projectsobject.displayProjects();
bio.displaySkills();



