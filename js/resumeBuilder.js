//Generic function to display the different data in the different js objects.
var displayStuff = function(parentContainer, sectionContainer, parentObject, sectionArray, outerTemplate) {
    "use strict";
    //Loop through all sectionArray objects
    sectionArray.forEach(function(arrayObject) {

        //for each sectionArray object append a DOM section
        $(parentContainer).append(outerTemplate);

        //Loop over all htmlTemplates
        parentObject.htmlInnerTemplates.forEach(function(concatObject) {
            var formattedDom = '';

            //loop over all keys in htmlTemplates objects
            Object.keys(concatObject).forEach(function(concatObjectKey) {

                //if key matches a key in arrayObject create dom to append
                if (arrayObject.hasOwnProperty(concatObjectKey)) {

                    //in case the data is an array add a dom element for each value in it
                    var currentValue = arrayObject[concatObjectKey];
                    if (currentValue.constructor === Array) {
                        currentValue.forEach(function(arrayObjectValue) {
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

displayStuff('#header', '#header', bio, bio.headerInfo, '');
displayStuff('#header', '#skills', bio, bio.skillsInfo, bio.htmlOuterSkills);
displayStuff('#education', '.education-entry:last', education, education.schools, education.htmlOuterTemplate);
displayStuff('#education', '.education-entry:last', education, education.onlineCourses, education.htmlOuterTemplate);
displayStuff('#workExperience', '.work-entry:last', work, work.jobs, work.htmlOuterTemplate);
displayStuff('#projects', '.project-entry:last', projects, projects.projectsInfo, projects.htmlOuterTemplate);

$('#mapDiv').append(googleMap);
