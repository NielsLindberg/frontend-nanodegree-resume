"use strict";

var bio;
var education;
var work;
var projects;
var placeholderText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
        'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

//Generic function to display the different data in the different js objects. (was probably alittle overkill)
var displayStuff = function (parentContainer, sectionContainer, parentObject, sectionArray, outerTemplate) {

    //Loop through all sectionArray objects
     sectionArray.forEach(function (arrayObject) {

        //for each sectionArray object append a DOM section
        $(parentContainer).append(outerTemplate);

            //Loop over all htmlTemplates
            parentObject.htmlInnerTemplates.forEach(function (concatObject) {
                var formattedDom = '';

                //loop over all keys in htmlTemplates objects
                Object.keys(concatObject).forEach( function(concatObjectKey) {

                    //if key matches a key in arrayObject create dom to append
                    if (arrayObject.hasOwnProperty(concatObjectKey)) {

                        //in case the data is an array add a dom element for each value in it
                        var currentValue = arrayObject[concatObjectKey];
                        if(currentValue.constructor === Array) {
                            currentValue.forEach( function(arrayObjectValue) {
                                formattedDom = formattedDom + concatObject[concatObjectKey].replace('%data%', arrayObjectValue);
                            });

                        //else just add the dom element once
                        } else {
                            formattedDom = formattedDom + concatObject[concatObjectKey].replace('%data%', currentValue);
                        }
                    }
                 });

            //append to current section **Order of htmlTemplates controls order of appending to DOM**
            $(sectionContainer).append(formattedDom);
        });
    });
};

bio = {
    htmlOuterSkills: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
    htmlInnerTemplates: [
            {
                biopic: '<img src="%data%" class="biopic">'
            },
            {
                name: '<h1 id="name">%data%</h1>'
            },
            {
                role: '<span>%data%</span><hr>'
            },
            {
                welcomeMessage: '<span class="welcome-message">%data%</span>'
            },
            {
                contactGeneric: '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>'
            },
            {
                mobile: '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>'
            },
            {
                email: '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>'
            },
            {
                twitter: '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>'
            },
            {
                github: '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>'
            },
            {
                blog: '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>'
            },
            {
                location: '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>'
            },
            {
                skills: '<li class="flex-item"><span class="white-text">%data%</span></li>'
            }
    ],
    headerInfo: [
            {
            biopic: 'http://oi66.tinypic.com/ndm13n.jpg',
            name: 'Niels Lindberg-Poulsen',
            role: 'Jester',
            welcomeMessage: 'Hello 2 u, I am l33t Gam3r'
            }
    ],
    contactInfo: [
            {
                mobile: '+4527490778',
                email: 'eighthourcream@gmail.com',
                github: 'https://github.com/NielsLindberg',
                location: 'Copenhagen, Nørrebro, Denmark'
            }
    ],
    skillsInfo: [
            {
                skills: ['SQL', 'ETL', 'ELit3Gam3r']
            }
    ],

    displayHeader: function () {
        displayStuff('#header', '#header', bio, bio.headerInfo, '');
        displayStuff('#header', '#skills', bio, bio.skillsInfo, bio.htmlOuterSkills);
    }
};

education = {
    htmlOuterTemplate: '<div class="education-entry"></div>',
    htmlInnerTemplates: [
                {
                    school: '<a href="#">%data%',
                    title: ' - %data%</a>'
                },
                {
                    name: '<a href="#">%data%',
                    degree: ' - %data%</a>'
                },
                {
                    dates: '<div class="date-text">%data%</div>'
                },
                {
                    location: '<div class="location-text">%data%</div>'
                },
                {
                    major: '<em><br>Major: %data%</em>'
                }
            ],
    schools: [
        {
            name: 'Frederiksberg Gymnasium',
            location: 'Copenhagen, Frederiksberg, Denmark',
            degree: 'Gymnasium',
            major: 'Mathematics, Physics, Computer Science',
            dates: '01/01/2009 - 01/01/2015',
            url: 'http://www.frberg-gym.dk/'
        },
        {
            name: 'Copenhagen Business School',
            location: 'Copenhagen, Frederiksberg, Denmark',
            degree: 'Bachelor',
            major: 'Business and Administration',
            dates: '01/01/2009 - 01/01/2015',
            url: 'http://www.cbs.dk/'
        },
        {
            name: 'Luleå Technical University',
            location: 'Luleå, Sweden',
            degree: 'Bachelor Courses',
            major: 'Java, C#, Introductory Web Development, Introductory Web Development (CMS), Knowledge Management',
            dates: '18/01/2016 - 31/06/2016 (expected)',
            url: 'http://www.ltu.se'
        },
        {
            name: 'Örebro University',
            location: 'Örebro, Sweden',
            degree: 'Bachelor Courses',
            major: 'Programming in C',
            dates: '18/01/2016 - 31/06/2016 (expected)',
            url: 'http://www.oru.se'
        }
    ],

    onlineCourses: [
        {
            title: 'Front-end Web Developer',
            school: 'Udacity',
            date: '10/02/2016 - 31/06/2016 (expected)',
            url: 'http://www.udacity.com'
        }
    ],
    displayEducation: function () {
        displayStuff('#education', '.education-entry:last', education, education.schools, education.htmlOuterTemplate);
        displayStuff('#education', '.education-entry:last', education, education.onlineCourses, education.htmlOuterTemplate);
    }
};

work = {
    htmlOuterTemplate: '<div class="work-entry"></div>',
    htmlInnerTemplates: [
            {
                employer: '<a href="#">%data%',
                title: ' - %data%</a>'
            },
            {
                dates: '<div class="date-text">%data%</div>'
            },
            {
                location: '<div class="location-text">%data%</div>'
            },
            {
                description: '<p><br>%data%</p>'
            }
        ],

    jobs: [
        {
            employer: 'Nordea Markets',
            title: 'Assistant Analyst',
            dates: '19/01/2013 - 30/01/2016',
            location: 'Copenhagen, Christianshavn, Denmark',
            description: placeholderText
        },
        {
            employer: 'Nordea Markets',
            title: 'Assistant Analyst',
            dates: '19/01/2013 - 30/01/2016',
            location: 'Copenhagen, Christianshavn, Denmark',
            description: placeholderText
        },
        {
            employer: 'Nordea Markets',
            title: 'Assistant Analyst',
            dates: '19/01/2013 - 30/01/2016',
            location: 'Copenhagen, Christianshavn, Denmark',
            description: placeholderText
        }
    ],
    displayWork: function () {
        displayStuff('#workExperience', '.work-entry:last', work, work.jobs, work.htmlOuterTemplate);
    }
};

projects = {
    htmlOuterTemplate: '<div class="project-entry"></div>',
    htmlInnerTemplates: [
            {
                title: '<a href="#">%data%</a>'
            },
            {
                dates: '<div class="date-text">%data%</div>'
            },
            {
                description: '<p><br>%data%</p>'
            },
            {
                images: '<img src="%data%">'
            }
        ],

    'projectsInfo': [
        {
            title: 'Polymer Stuff',
            dates: '19/01/2013 - 30/01/2016',
            description: placeholderText,
            images: ['http://placehold.it/200x100', 'http://placehold.it/200x100']
        },
        {
            title: 'Polymer Stuff',
            dates: '19/01/2013 - 30/01/2016',
            description: placeholderText,
            images: ['http://placehold.it/200x100', 'http://placehold.it/200x100']
        },
        {
            title: 'Polymer Stuff',
            dates: '19/01/2013 - 30/01/2016',
            description: placeholderText,
            images: ['http://placehold.it/200x100', 'http://placehold.it/200x100']
        }
    ],

    displayProjects: function() {
        displayStuff('#projects', '.project-entry:last', projects, projects.projectsInfo, projects.htmlOuterTemplate);
    }
};

bio.displayHeader();
work.displayWork();
projects.displayProjects();
education.displayEducation();
$('#mapDiv').append(googleMap);