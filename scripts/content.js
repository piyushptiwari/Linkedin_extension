
var url = "";
var username= "";
const todoresp = {todo: "showPageAction"};


chrome.runtime.sendMessage(todoresp);
main();




// function main() {
    
 
//     var sliderInnerHTMLString = "\
//     <!-- HEADER IS HERE -->\
//     <div id='sheader'>\
//     <div id='sheaderheader'></div>\
//     <div id='deepscancontainer'>\
//     <label id='deepscanlabel' for='deepscan'>Deepscan?<input type='checkbox' name='deepscan' id='deepscan' value='deepscan'/></label>\
//     </div>\
//     <div class='internal_button sticky_buttons' id='clear_text_button'>Clear Text?</div>\
//     <br/>\
//     </div>\
//     <br/>\
//     \
//     \
//     <!-- THE BODY CONTAINER IS HERE -->\
//     <div id='sbodycontainer'>\
//     <br/>\
//     <br/>\
//     <span style='font-size: 10px'><i>This textbox extracts if you scroll the slider menu.</i></small>\
//     <textarea id='basicprofile'></textarea>\
//     <br/>\
//     <h2> Education Section </h2>\
//     <br/>\
//     <textarea id='educationtext'></textarea>\
//     <br/>\
//     <div class='internal_button' id='education_extract_button'>Extract Education</div>\
//     <hr/>\
//     \
//     <h2> Experience Section </h2>\
//     <br\>\
//     <textarea id='experiencetext'></textarea>\
//     <br/>\
//     <div class='internal_button' id='experience_extract_button'>Extract Work Ex</div>\
//     <hr/>\
//     <h2> Licenses and Certifications </h2>\
//     <br/>\
//     <textarea id='certificationstext'></textarea>\
//     <br/>\
//     <div class='internal_button' id='certification_extract_button'>Extract Certifications</div>\
//     \
//     <hr>\
//     <h2> Skills </h3>\
//     <br/>\
//     <textarea id='skillstext'></textarea>\
//     <br/>\
//     <div class='internal_button' id='skills_extract_button'>Extract Skills</div>\
//     <div id='savepdf'>Save PDF</div>\
//     </div>\
//     \
//     \
//     <!-- THE FOOTER IS HERE -->\
//     <div id='sfooter'><hr/>\
//     <div class='internal_button' id='save_profile_data_button'>Save Profile Data</div>\
//     </div>\
//     ";


//     sliderGen(sliderInnerHTMLString);

    
//     chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//       if(msg.todo == "toggle") {
//         slider();
//       }
//     });
    
    
//   //run savePDF option
//   document.getElementById('savepdf').addEventListener("click", savePDF);

//   //Clear text button action
//   document.getElementById('clear_text_button').addEventListener("click", function() {
//     var ids = ['basicprofile', 'educationtext', 'experiencetext', 'skillstext', 'certificationstext' ];
//     for(var i=0; i<ids.length; i++) {
//         document.getElementById(ids[i]).value = "";
//       }
//   });



//   document.getElementById("slider").onscroll = function () {
//     printName();
//     document.getElementById('basicprofile').value = JSON.stringify(extract());
//   }

  
//   document.getElementById('certification_extract_button').addEventListener("click", extractCert);
//   document.getElementById('skills_extract_button').addEventListener("click", extractSkills);
//   document.getElementById('experience_extract_button').addEventListener("click", extractExperience);
//   document.getElementById('education_extract_button').addEventListener("click", extractEducation);


  
//   document.getElementById('save_profile_data_button').addEventListener("click", saveProfileData);

// } 

// function main() {
//   var sliderInnerHTMLString = "\
//   <!-- HEADER IS HERE -->\
//   <div id='sheader'>\
//   <div id='sheaderheader'></div>\
//   <div id='deepscancontainer'>\
//   <label id='deepscanlabel' for='deepscan'>Deepscan?<input type='checkbox' name='deepscan' id='deepscan' value='deepscan'/></label>\
//   </div>\
//   <div class='internal_button sticky_buttons' id='clear_text_button'>Clear Text?</div>\
//   <br/>\
//   </div>\
//   <br/>\
//   \
//   \
//   <!-- THE BODY CONTAINER IS HERE -->\
//   <div id='sbodycontainer'>\
//   <br/>\
//   <br/>\
//   <span style='font-size: 10px'><i>This textbox extracts if you scroll the slider menu.</i></small>\
//   <textarea id='basicprofile'></textarea>\
//   <br/>\
//   <h2> Education Section </h2>\
//   <br/>\
//   <textarea id='educationtext'></textarea>\
//   <br/>\
//   <div class='internal_button' id='education_extract_button'>Extract Education</div>\
//   <hr/>\
//   \
//   <h2> Experience Section </h2>\
//   <br\>\
//   <textarea id='experiencetext'></textarea>\
//   <br/>\
//   <div class='internal_button' id='experience_extract_button'>Extract Work Ex</div>\
//   <hr/>\
//   <h2> Licenses and Certifications </h2>\
//   <br/>\
//   <textarea id='certificationstext'></textarea>\
//   <br/>\
//   <div class='internal_button' id='certification_extract_button'>Extract Certifications</div>\
//   \
//   <hr>\
//   <h2> Skills </h3>\
//   <br/>\
//   <textarea id='skillstext'></textarea>\
//   <br/>\
//   <div class='internal_button' id='skills_extract_button'>Extract Skills</div>\
//   <div id='savepdf'>Save PDF</div>\
//   </div>\
//   \
//   \
//   <!-- THE FOOTER IS HERE -->\
//   <div id='sfooter'><hr/>\
//   <div class='internal_button' id='save_profile_data_button'>Save Profile Data</div>\
//   </div>\
//   ";

//   sliderGen(sliderInnerHTMLString);

//   chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//       if (msg.todo == "toggle") {
//           slider();
//       }
//   });

//   document.getElementById('savepdf').addEventListener("click", savePDF);

//   // Clear text button action
//   document.getElementById('clear_text_button').addEventListener("click", function() {
//       var ids = ['basicprofile', 'educationtext', 'experiencetext', 'skillstext', 'certificationstext'];
//       for (var i = 0; i < ids.length; i++) {
//           document.getElementById(ids[i]).value = "";
//       }
//   });

//   document.getElementById("slider").onscroll = function() {
//       printName();
//       document.getElementById('basicprofile').value = JSON.stringify(extract());
//   }

//   document.getElementById('certification_extract_button').addEventListener("click", extractCert);
//   document.getElementById('skills_extract_button').addEventListener("click", extractSkills);
//   document.getElementById('experience_extract_button').addEventListener("click", extractExperience);
//   document.getElementById('education_extract_button').addEventListener("click", extractEducation);

//   document.getElementById('save_profile_data_button').addEventListener("click", saveProfileData);
// }


function main() {
  var sliderInnerHTMLString = "\
  <!-- HEADER IS HERE -->\
  <div id='sheader'>\
  <div id='sheaderheader'></div>\
  <div id='deepscancontainer'>\
  <label id='deepscanlabel' for='deepscan'>Deepscan?<input type='checkbox' name='deepscan' id='deepscan' value='deepscan'/></label>\
  </div>\
  <div class='internal_button sticky_buttons' id='clear_text_button'>Clear Text?</div>\
  <br/>\
  </div>\
  <br/>\
  \
  \
  <!-- THE BODY CONTAINER IS HERE -->\
  <div id='sbodycontainer'>\
  <br/>\
  <br/>\
  <span style='font-size: 10px'><i>This textbox extracts if you scroll the slider menu.</i></small>\
  <textarea id='basicprofile'></textarea>\
  <br/>\
  <h2> Education Section </h2>\
  <br/>\
  <textarea id='educationtext'></textarea>\
  <br/>\
  <div class='internal_button' id='education_extract_button'>Extract Education</div>\
  <hr/>\
  \
  <h2> Experience Section </h2>\
  <br\>\
  <textarea id='experiencetext'></textarea>\
  <br/>\
  <div class='internal_button' id='experience_extract_button'>Extract Work Ex</div>\
  <hr/>\
  <h2> Licenses and Certifications </h2>\
  <br/>\
  <textarea id='certificationstext'></textarea>\
  <br/>\
  <div class='internal_button' id='certification_extract_button'>Extract Certifications</div>\
  \
  <br>\
  <h2> Skills </h2>\
  <br/>\
  <textarea id='skillstext'></textarea>\
  <br/>\
  <div class='internal_button' id='skills_extract_button'>Extract Skills</div>\
   <br>\
  <h2> Top 3 Posts </h2>\
  <br/>\
  <textarea id='top3poststext'></textarea>\
  <br/>\
  <div class='internal_button' id='top_3_posts'>Extract top 3 Posts</div>\
   <br>\
  <h2> ALL POSTS, GOTO POSTS PAGE </h2>\
  <br/>\
  <textarea id='allpoststext'></textarea>\
  <br/>\
  <div class='internal_button' id='all_posts'>Extract All Posts</div>\
  <br/>\
  <div id='savepdf'>Save PDF</div>\
  </div>\
  \
  \
  <!-- THE FOOTER IS HERE -->\
  <div id='sfooter'><hr/>\
  <div class='internal_button' id='save_profile_data_button'>Save Profile Data</div>\
  </div>\
  ";

  sliderGen(sliderInnerHTMLString);

  chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
      if (msg.todo == "toggle") {
          slider();
      }
  });

  document.getElementById('savepdf').addEventListener("click", savePDF);

  // Clear text button action
  document.getElementById('clear_text_button').addEventListener("click", function() {
      var ids = ['basicprofile', 'educationtext', 'experiencetext', 'skillstext', 'certificationstext','top3poststext','allpoststext'];
      for (var i = 0; i < ids.length; i++) {
          document.getElementById(ids[i]).value = "";
      }
  });

  document.getElementById("slider").onscroll = function() {
      printName();
      document.getElementById('basicprofile').value = JSON.stringify(extract());
  }
  document.getElementById('basicprofile').addEventListener("click", extract);

  document.getElementById('certification_extract_button').addEventListener("click", extractCert);
  document.getElementById('skills_extract_button').addEventListener("click", extractSkills);
  document.getElementById('experience_extract_button').addEventListener("click", extractExperience);
  document.getElementById('education_extract_button').addEventListener("click", extractEducation);
  document.getElementById('top_3_posts').addEventListener("click", top3posts);
  document.getElementById('all_posts').addEventListener("click", allposts);

  document.getElementById('save_profile_data_button').addEventListener("click", saveProfileData);
}



function saveProfileData() {
  //var textBoxIds = ['basicprofile', 'educationtext', 'experiencetext', 'skillstext', 'certificationstext','top3poststext','allpoststext'];  top3poststext and allposttext are not in valid json format to download in text file hence this down text part is not working
  var textBoxIds = ['basicprofile', 'educationtext', 'experiencetext', 'skillstext', 'certificationstext'];
  console.log(textBoxIds)
  var profileData = {};
  for(var i=0; i<textBoxIds.length; i++) {
    var tempid = textBoxIds[i];
    if(tempid.includes("text"))
      tempid = tempid.replace("text", "")
    
    if(document.getElementById(textBoxIds[i]).value)
      profileData[tempid] = JSON.parse(document.getElementById(textBoxIds[i]).value);
    // else
    //   profileData[tempid] = "No data";
  }


   var filename = prompt("Enter file Name:");
   var data = new Blob([JSON.stringify(profileData)], {type: "application/json"});
   var a = document.createElement("a"), url= URL.createObjectURL(data);
   a.href = url;
   a.download = filename+".json";
   document.body.appendChild(a);
   a.click();
   setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
   }, 0);
} 

function printName() {
  var uname = document?.querySelector('div.pv-text-details__left-panel > div > h1') || document?.getElementsByClassName('artdeco-entity-lockup__title ember-view')[0] || null;
    uname = uname?.textContent || "";
    uname = getCleanText(uname);
    console.log(uname);
    document.getElementById('slider').querySelector('#sheaderheader').innerHTML = "<h1>" + uname + "</h1>";
    console.log("jjd")
    username = uname
}


function sliderGen(sliderInnerHTMLString) {
    var slider = document.createElement("div");
    slider.id = "slider";
    var sliderDivInnerHTML = sliderInnerHTMLString;

    slider.innerHTML += sliderDivInnerHTML;

    document.body.prepend(slider);
}


function slider() {
    var slider = document.getElementById("slider");

    var styler = slider.style;
    
    if(styler.width == "0px") {
        styler.width = "400px";
    } else {
        styler.width = "0px";
    }
}


// function extract() {
 
//     const profileSection = document.querySelector(".pv-top-card");
    
//     const fullNameElement = profileSection?.querySelector('h1')
//     const fullName = fullNameElement?.textContent || null
//     console.log(fullName)

//     const titleElement = profileSection?.querySelector('.text-body-medium')
//     const title = titleElement?.textContent || null;
//     console.log("Title:", title);
    

//     var tbs = profileSection?.querySelectorAll(".text-body-small")
    
//     const locationElement = ((tbs) ? tbs[1] : null)
//     var loc = locationElement?.textContent || null
//     console.log(loc)

//     const photoElement = document.querySelector(".pv-top-card-profile-picture__image") || profileSection?.querySelector('.profile-photo-edit__preview')
//     const photo = photoElement?.getAttribute('src') || null
//     console.log(photo)

//     const descriptionElement = document.querySelector('div#about')?.parentElement.querySelector('.pv-shared-text-with-see-more > div > span.visually-hidden')// Is outside "profileSection"
//     var description = descriptionElement?.textContent || null
//     console.log(description)
        
//     const url = window.location.href;
//     console.log(url)
//     var rawProfileData = {
//         fullName,
//         title,
//         loc,
//         photo,
//         description,
//         url
//     }
//     console.log(rawProfileData)

//     var profileData = {
//         // fullName: getCleanText(rawProfileData.fullName),
//         title: getCleanText(rawProfileData.title),
//         location: getCleanText(rawProfileData.loc),
//         description: getCleanText(rawProfileData.description),
//         photo: rawProfileData.photo,
//         url: rawProfileData.url
//     }
//     ///extraction of profile data ends here///
//     console.log(profileData)

//   return profileData;
// }
// function extract() {
//   const profileSection = document.querySelector(".pv-top-card");

//   const fullNameElement = profileSection?.querySelector('h1');
//   const fullName = fullNameElement?.textContent || null;
//   console.log("Full Name:", fullName);

//   const titleElement = profileSection?.querySelector('.text-body-medium');
//   const title = titleElement?.textContent || null;
//   console.log("Title:", title);

//   var tbs = profileSection?.querySelectorAll(".text-body-small");
//   const locationElement = ((tbs) ? tbs[1] : null);
//   var loc = locationElement?.textContent || null;
//   console.log("Location:", loc);

//   const photoElement = document.querySelector(".pv-top-card-profile-picture__image") || profileSection?.querySelector('.profile-photo-edit__preview');
//   const photo = photoElement?.getAttribute('src') || null;
//   console.log("Photo:", photo);

//   const descriptionElement = document.querySelector('div#about')?.parentElement.querySelector('.pv-shared-text-with-see-more > div > span.visually-hidden');
//   var description = descriptionElement?.textContent || null;
//   console.log("Description:", description);

//   const url = window.location.href;
//   console.log("URL:", url);

//   var rawProfileData = {
//       fullName,
//       title,  // Ensure the title variable is defined
//       loc,
//       photo,
//       description,
//       url
//   };

//   var profileData = {
//       fullName: getCleanText(rawProfileData.fullName),
//       title: getCleanText(rawProfileData.title),
//       location: getCleanText(rawProfileData.loc),
//       description: getCleanText(rawProfileData.description),
//       photo: rawProfileData.photo,
//       url: rawProfileData.url
//   };

//   console.log("Profile Data:", profileData);
//   document.getElementById('basicprofile').value = JSON.stringify(profileData);
//   return profileData;
// }
function extract() {
  // Assuming the profile section has a class name 'pv-top-card'
  var profileSection = document.querySelector(".pv-top-card");

  // Full Name
  //var nameElement = profileSection?.querySelector('ember-view vqpMAPBPhxwLvtcfcGjLIopcPcLXSZFvvmPUdg');
  //console.log("nameElement:", nameElement);
  // var fullName = fullNameElement?.textContent || null;
  // console.log("Full Name:", fullName);
  //var name = nameElement?.textContent?.trim() || null;
  //console.log("Full Name:", name);
  var name = username || null;
  console.log("Full Name:", name);

  
  // Location
  
  var tbs = profileSection?.querySelectorAll(".text-body-small inline t-black--light break-words");
  console.log(tbs);
  if(tbs){
    console.log("slector is incorrect")
  }
  const locationElement = tbs?.[1];
  console.log(locationElement)
  var loc = locationElement?.textContent || null;
  console.log("Location:", loc);

  const element = document.querySelector('[class$=" mt2"]'); 
  console.log("Location22:",element);

  // Photo pv-top-card_photo img
  const photo = document.querySelectorAll('img')[12].src;
  console.log("Photo:", photo);

  // Description
  const descriptionElement = document.querySelector('.text-body-medium.break-words') || document.querySelector('.pv-shared-text-with-see-more > div > span.visually-hidden');
  console.log(descriptionElement)
  var description = descriptionElement?.textContent || null;
  console.log("Description:", description);
  
  // URL
  const url = window.location.href;
  console.log("URL:", url);

  var rawProfileData = {
      name,
      loc,
      photo,
      description,
      url
  };

  var profileData = {
      name: getCleanText(rawProfileData.name),
      location: getCleanText(rawProfileData.loc),
      description: getCleanText(rawProfileData.description),
      photo: rawProfileData.photo,
      url: rawProfileData.url
  };

  console.log("Profile Data:", profileData);
  return profileData;
}  // function extract() {
//   const profileSection = document.querySelector(".pv-top-card");

 

//   // Full Name
//   const fullNameElement = profileSection.querySelector('.text-heading-xlarge');
//   const fullName = fullNameElement ? fullNameElement.textContent.trim() : null;
//   console.log("Full Name:", fullName);

//   // Location
//   const tbs = profileSection.querySelectorAll(".text-body-small");
//   const locationElement = tbs.length > 1 ? tbs[1] : null;
//   const loc = locationElement ? locationElement.textContent.trim() : null;
//   console.log("Location:", loc);

//   // Photo
//   const photoElement = profileSection.querySelector('.pv-top-card__photo img') || profileSection.querySelector('.pv-top-card-profile-picture__image');
//   const photo = photoElement ? photoElement.getAttribute('src') : null;
//   console.log("Photo:", photo);

//   // Description
//   const descriptionElement = document.querySelector('div#about')?.parentElement.querySelector('.pv-shared-text-with-see-more > div > span.visually-hidden');
//   const description = descriptionElement ? descriptionElement.textContent.trim() : null;
//   console.log("Description:", description);

//   // URL
//   const url = window.location.href;
//   console.log("URL:", url);

//   // Raw Profile Data
//   var rawProfileData = {
//       fullName,
//       loc,
//       photo,
//       description,
//       url
//   };

//   // Cleaned Profile Data
//   var profileData = {
//       fullName: getCleanText(rawProfileData.fullName),
//       location: getCleanText(rawProfileData.loc),
//       description: getCleanText(rawProfileData.description),
//       photo: rawProfileData.photo,
//       url: rawProfileData.url
//   };

//   console.log("Profile Data:", profileData);
//   return profileData;
// }

// // Helper function to clean text
// function getCleanText(text) {
//   return text ? text.replace(/\s+/g, ' ').trim() : null;
// }
// extract();




// Extract license and certifications
function extractCert() {
  var anchor1 = document.getElementById('licenses_and_certifications');
  var anchor2 = document.querySelector('.pvs-list');

  var list = null;
  var certs = [];
  

  if(anchor1) {
    anchor1 = anchor1.nextElementSibling.nextElementSibling
    list = anchor1.querySelector('ul').children;
  }

  if(anchor2 && document.getElementById('deepscan').checked && location.href.includes('certifications')) {
    list = anchor2.children;
  }

  if(list) { //if the anchor exists
    for(i=0; i<list.length; i++) {
      var elem = null;
      var firstdiv = null;
      var url = "";

      if(anchor1 && !document.getElementById('deepscan').checked) {
        //alert("anchor1");
        elem = list[i].firstElementChild.firstElementChild.nextElementSibling
                        .querySelectorAll('div');
        
        if(elem[0].querySelector('a')){
          firstdiv = elem[0].querySelector('a').children;
        } else {
          firstdiv = elem[1].children;
        }
        

        url = elem[4]?.querySelector('a')?.href || "";
        //if anchor1
      } 
      else if ((anchor1 == null) && anchor2 && document.getElementById('deepscan').checked  && location.href.includes('certifications')) {
        //alert("anchor2s");
        elem = list[i].querySelector('div > div').firstElementChild.nextElementSibling;
        firstdiv = elem.firstElementChild.firstElementChild.children;

        url = elem.firstElementChild.nextElementSibling?.querySelector('a').href || "";
      } //if anchor2
      else {
        break;
      }
      
     //var condn = (firstdiv.querySelector('a'))? 'a >' : '';
     var name = getCleanText(firstdiv[0].querySelector('span > span')?.textContent || "");
     var issuedby = getCleanText(firstdiv[1].querySelector('span > span')?.textContent || "");
     var issuedon = getCleanText(firstdiv[2]?.querySelector('span > span')?.textContent || "");
     var expiration = issuedon? issuedon.split('·')[1] : "";
     var issuedon = issuedon? issuedon.split('·')[0]?.split('Issued ')[1] || "" : "";

      

      var temp = {
        'id': i,
        'title': name,
        'issuer':issuedby,
        'date':issuedon,
        'expiration': expiration,
        'link': url
      };

      certs.push(temp);

    } //for loop to scrape through the list 
  }
  var objtemp = {
    'name': 'licenses',
    'data': certs
  }

  document.getElementById('certificationstext').value = JSON.stringify(objtemp);
} //license extraction ends here


// Extract Skills 
function extractSkills() {
  function getCleanText(text) {
    return text ? text.trim().replace(/\s\s+/g, ' ') : '';
  }

  //defining anchors (roots from where scraping starts)
  var anchor1 = document.getElementById("skills");
  var anchor2 = document.querySelector('.pvs-list');

  var list = null;
  var skills = [];
  
  if(anchor1 && !document.getElementById('deepscan').checked) {
    anchor1 = anchor1.nextElementSibling.nextElementSibling
    list = anchor1.querySelector('ul').children;
  }

  if(anchor2 && document.getElementById('deepscan').checked && location.href.includes('skills')) {
    list = anchor2.children;
  }

  if(list) { //if the anchor exists
    for(i=0; i<list.length; i++) {
      var elem = null;
      //var firstdiv = null;

      if(anchor1 && !document.getElementById('deepscan').checked) {
        //alert("anchor1");
        elem = list[i].firstElementChild.firstElementChild.nextElementSibling
                        .querySelectorAll('div');
        
        var index = 0;
        elem = getCleanText(elem[index]?.querySelector('div > span > span') || "");
        
        
      }// anchor1 ends here
      else if ((anchor1 == null) && anchor2 && document.getElementById('deepscan').checked &&
      location.href.includes('skills')) {
        elem = list[i].querySelector('div > div').firstElementChild.nextElementSibling;
        elem = elem.firstElementChild.firstElementChild.children;

        elem = getCleanText(elem[0]?.querySelector('div > span > span').textContent || "");

      } //anchor2 ends here
      else { //exit
        break;
      }

      skills.push(
        {
          'id': i,
          'title': elem
        }
      );
    } //for loop


  } //if `the list from anchor exists` condn ends here


  var objtemp = {
    'name': 'skills',
    'data': skills
  };

  document.getElementById('skillstext').value = JSON.stringify(objtemp);
} //Extraction of skills ends here











// Extract top 3 posts
function top3posts() {
  function getCleanText(text) {
    return text ? text.trim().replace(/\s\s+/g, ' ') : '';
  }

  // Define anchor (root from where scraping starts)
  var anchor = document.querySelector('.profile-creator-shared-feed-update__mini-container');
  var postElements = null;
  var postsData = [];

  // Load the profile page and find the posts section
  if (anchor) {
    postElements = document.querySelectorAll('.profile-creator-shared-feed-update__mini-container');
  }

  if (postElements) { // If posts are available in the anchor
    for (var i = 0; i < postElements.length; i++) {
      var postEl = postElements[i];

      // Extract author name and timestamp
      var authorInfo = postEl.querySelector('.feed-mini-update-contextual-description__text');
      var author = getCleanText(authorInfo ? authorInfo.textContent.split(' • ')[0] : '');
      var timestamp = getCleanText(authorInfo ? authorInfo.textContent.split(' • ')[1] : '');

      // Extract main post content
      var postContentEl = postEl.querySelector('.cbowDskhJPwxYkaYcdMCJYlwprJtiVGvcOQkY span');
      var postContent = getCleanText(postContentEl ? postContentEl.textContent : '');

      // Extract engagement metrics
      var reactionsEl = postEl.querySelector('.social-details-social-counts__reactions-count');
      var reactions = getCleanText(reactionsEl ? reactionsEl.textContent : '0');

      var commentsEl = postEl.querySelector('.social-details-social-counts__comments .social-details-social-counts__count-value span');
      var comments = getCleanText(commentsEl ? commentsEl.textContent : '0');

      var repostsEl = postEl.querySelector('.social-details-social-counts__item--right-aligned .social-details-social-counts__count-value-hover span');
      var reposts = getCleanText(repostsEl ? repostsEl.textContent : '0');

      // Extract post URL
      var postUrlEl = postEl.querySelector('.app-aware-link');
      var postUrl = postUrlEl ? postUrlEl.href : '';

      // Extract image URL (if any)
      var imageEl = postEl.querySelector('.ivm-view-attr__img-wrapper img');
      var imageUrl = imageEl ? imageEl.src : '';

      postsData.push({
        author: author,
        timestamp: timestamp,
        content: postContent,
        reactions: reactions,
        comments: comments,
        reposts: reposts,
        postUrl: postUrl,
        imageUrl: imageUrl,
      });
    }
  } else {
    console.error("No posts section found.");
  }

  var objtemp = {
    'name': 'linkedin_posts',
    'data': postsData
  };

  document.getElementById('top3poststext').value = JSON.stringify(objtemp); // Adjust 'linkedinpostsdata' ID to match your HTML
}

// To use, call the function and log the output:
console.log(top3posts());

//license extraction ends here

//certificationstext  extractCert




// Extract all posts 
function allposts() {
  function getCleanText(text) {
      return text ? text.trim().replace(/\s\s+/g, ' ') : '';
  }  
  
  // Function to click the "Show more results" button
  function loadMorePosts() {
      const loadMoreButton = document.querySelector('.scaffold-finite-scroll__load-button');

      // Check if the button exists and is visible/enabled
      if (loadMoreButton && !loadMoreButton.disabled) {
          loadMoreButton.click(); // Click the button to load more posts
          setTimeout(loadMorePosts, 1000); // Wait for a second and call the function again
      } else {
          // After all posts are loaded, run the extraction
          extractPostData();
      }
  }

  // Function to extract post data after all posts are loaded
  function extractPostData() {
      // Select the container that holds the posts
      const postsContainer = document.querySelector('.scaffold-finite-scroll__content');

      // Check if the postsContainer exists
      if (!postsContainer) {
          console.error("No posts section found");
          return; // Exit if no posts section is found
      }

      // Get all the posts
      const posts = postsContainer.querySelectorAll('.feed-shared-update-v2');

      // Array to hold post data
      const postData = [];

      // Loop through each post to extract data
      posts.forEach(post => {
          const authorElement = post.querySelector('.update-components-actor__name');
          const contentElement = post.querySelector('.update-components-text');
          const timestampElement = post.querySelector('.update-components-actor__sub-description');
          const reactionsElement = post.querySelector('.social-details-social-counts__reactions');
          const commentsElement = post.querySelector('.social-details-social-counts__comments');
          const postURL = post.querySelector('.feed-shared-update-v2__control-menu-container a');

          // Extracting details using getCleanText
          const author = getCleanText(authorElement ? authorElement.innerText : 'Unknown Author');
          const content = getCleanText(contentElement ? contentElement.innerText : 'No Content');
          const timestamp = getCleanText(timestampElement ? timestampElement.innerText : 'No Timestamp');
          const reactions = getCleanText(reactionsElement ? reactionsElement.innerText : '0 Reactions');
          const comments = getCleanText(commentsElement ? commentsElement.innerText : '0 Comments');
          const url = postURL ? postURL.href : 'No URL';

          // Push extracted data to postData array
          postData.push({
              author,
              content,
              timestamp,
              reactions,
              comments,
              url
          });
      });

      // Output the extracted data
      console.log(postData);

      // Assuming you want to store it in an HTML element
      const outputContainer = document.getElementById('allpoststext');
      outputContainer.innerHTML = postData.map(post => `
          <div>
              <h3>${post.author}</h3>
              <p>${post.content}</p>
              <p>${post.timestamp}</p>
              <p>${post.reactions}</p>
              <p>${post.comments}</p>
              <a href="${post.url}" target="_blank">View Post</a>
          </div>
      `).join('');
  }

  // Start loading more posts
  loadMorePosts();
}

// To use, call the function and log the output:
console.log(allposts());




// Extract Experience /////

// function extractExperience() {
//   //defining anchors (roots from where scraping starts)
//   var anchor1 = document.getElementById("experience");
//   var anchor2 = document.querySelector('.pvs-list');
  
//   var list = null;
//   var exp = {};
//   var roles = [];
//   var company = "";

//   if(anchor1 && !document.getElementById('deepscan').checked) {
//     anchor1 = anchor1.nextElementSibling.nextElementSibling
//     list = anchor1.querySelector('ul').children;
//   } 

//   if(anchor2 && document.getElementById('deepscan').checked && location.href.includes('experience')) {
//     list = anchor2.children;
//   } 


  
//   if(list) { //if the anchor exists
//     for(i=0; i<list.length; i++) {
//       if(document.getElementById('deepscan').checked && !location.href.includes('experience'))
//         break;
//       company = "";
//       roles = [];


//       var elem = list[i].querySelector('div > div').nextElementSibling; //for anchor 1
//       if(elem.querySelector('div > a')) {
//         // condition for multiple roles in same company
//         company = elem.querySelector('div > a > div > span > span')?.textContent || "";
//         company = getCleanText(company);

//         elem = elem.firstElementChild.nextElementSibling;
//         var elems = elem.querySelector('ul').children

//         for(j=0; j < elems.length; j++) {
          
          
//           var keke = elems[j].querySelector("div > div")?.nextElementSibling || null;
//           keke = keke?.querySelector('div > a') || null;

//           kchilds = keke.children;
//           var rname=" ", startDate=" ", endDate=" ", loc=" ";
//           for(k=0; k<kchilds.length; k++) {

//             //each role's details taken
//             if(k==0) //role name
//               rname = kchilds[k]?.querySelector('span > span').textContent || "";
//             if(k==1) //role duration
//               {
//                 var ta = kchilds[k].querySelector('span').textContent.split(/[-·]/);
//                 startDate = ta[0];
//                 endDate = ta[1];
//               }
//             if(k==2) //role location 
//               loc= kchilds[k].querySelector('span')?.textContent || ""; 
              
//            } //kloop

//             roles.push({
//               'id': j,
//               'title': getCleanText(rname),
//               'startDate': getCleanText(startDate),
//               'endDate': getCleanText(endDate),
//               'location': getCleanText(loc)  
//             });

//         } // role traversal loop


//         } else { //condition when single role in one company
//           elem = elem.querySelector('div > div > div > div');

//           echilds = elem.children;
//           var rname=" ", startDate=" ", endDate=" ", loc=" ";
//           for(k=0; k<echilds.length; k++) {

//             //each role's details taken
//             if(k==0) //role name
//               rname = echilds[k]?.querySelector('span > span').textContent || "";
//             if(k==2) //role duration
//               {
//                 var ta = echilds[k].querySelector('span').textContent.split(/[-·]/);
//                 startDate = ta[0];
//                 endDate = ta[1];
//               }
//             if(k==3) //role location 
//               loc = echilds[k].querySelector('span')?.textContent || ""; 
            
//             if(k==1) //role company title
//               company = echilds[k].querySelector('span')?.textContent || "";
//               if(company)
//                 company = company.split(/[-·]/)[0];
//            } //kloop
           

//            roles.push({
//             'id': 0,
//             'title': getCleanText(rname),
//             'startDate': getCleanText(startDate),
//             'endDate': getCleanText(endDate),
//             'location': getCleanText(loc)  
//           });



//        } //single role else condn ends


//        exp[i] ={
//         'company': company,
//         'roles': roles
//        };

//       }//for loop over 'i' for each item in anchor list
//   } // if list anchor exists condition

//  document.getElementById('experiencetext').value = JSON.stringify(exp);
// } //extract experience ends here



function extractExperience() {
  // Helper function to clean text
 

  // Defining anchors (roots from where scraping starts)
  var anchor1 = document.getElementById("experience");
  var anchor2 = document.querySelector('.pvs-list');
  
  var list = null;
  var exp = {};
  var roles = [];
  var company = "";

  if(anchor1 && !document.getElementById('deepscan').checked) {
    anchor1 = anchor1.nextElementSibling?.nextElementSibling;
    if (anchor1) {
      list = anchor1.querySelector('ul')?.children;
    }
  } 

  if(anchor2 && document.getElementById('deepscan').checked && location.href.includes('experience')) {
    list = anchor2.children;
  } 

  if(list) { // If the anchor exists
    for(var i = 0; i < list.length; i++) {
      if(document.getElementById('deepscan').checked && !location.href.includes('experience'))
        break;
      company = "";
      roles = [];

      var elem = list[i].querySelector('div > div')?.nextElementSibling; // For anchor 1
      if(elem && elem.querySelector('div > a')) {
        // Condition for multiple roles in same company
        company = getCleanText(elem.querySelector('div > a > div > span > span')?.textContent);

        elem = elem.firstElementChild?.nextElementSibling;
        var elems = elem?.querySelector('ul')?.children;

        if (elems) {
          for(var j = 0; j < elems.length; j++) {
            var keke = elems[j].querySelector("div > div")?.nextElementSibling?.querySelector('div > a');
            if (!keke) continue;

            var kchilds = keke.children;
            var rname = " ", startDate = " ", endDate = " ", loc = " ";
            for(var k = 0; k < kchilds.length; k++) {
              // Each role's details taken
              if(k == 0) // Role name
                rname = kchilds[k]?.querySelector('span > span')?.textContent || "";
              if(k == 1) { // Role duration
                var ta = kchilds[k]?.querySelector('span')?.textContent?.split(/[-·]/) || [];
                startDate = ta[0] || "";
                endDate = ta[1] || "";
              }
              if(k == 2) // Role location 
                loc = kchilds[k]?.querySelector('span')?.textContent || ""; 
            }

            roles.push({
              'id': j,
              'title': getCleanText(rname),
              'startDate': getCleanText(startDate),
              'endDate': getCleanText(endDate),
              'location': getCleanText(loc)  
            });
          }
        }
      } else { // Condition when single role in one company
        elem = elem?.querySelector('div > div > div > div');
        if (!elem) continue;

        var echilds = elem.children;
        var rname = " ", startDate = " ", endDate = " ", loc = " ";
        for(var k = 0; k < echilds.length; k++) {
          // Each role's details taken
          if(k == 0) // Role name
            rname = echilds[k]?.querySelector('span > span')?.textContent || "";
          if(k == 2) { // Role duration
            var ta = echilds[k]?.querySelector('span')?.textContent?.split(/[-·]/) || [];
            startDate = ta[0] || "";
            endDate = ta[1] || "";
          }
          if(k == 3) // Role location 
            loc = echilds[k]?.querySelector('span')?.textContent || ""; 
          if(k == 1) { // Role company title
            company = echilds[k]?.querySelector('span')?.textContent || "";
            if (company) {
              company = company.split(/[-·]/)[0];
            }
          }
        }

        roles.push({
          'id': 0,
          'title': getCleanText(rname),
          'startDate': getCleanText(startDate),
          'endDate': getCleanText(endDate),
          'location': getCleanText(loc)  
        });
      }

      exp[i] = {
        'company': company,
        'roles': roles
      };
    }
  } 

  document.getElementById('experiencetext').value = JSON.stringify(exp);
}

// Execute the extraction function
extractExperience();


// Extract Experience //

function extractEducation(){
  //defining anchors (roots from where scraping starts)
  var anchor1 = document.getElementById('education');
  var anchor2 = document.querySelector('.pvs-list');

  var list = null;
  var education = [];
  

  if(anchor1) {
    anchor1 = anchor1.nextElementSibling.nextElementSibling
    list = anchor1.querySelector('ul').children;
  }

  if(anchor2 && document.getElementById('deepscan').checked && location.href.includes('education')) {
    list = anchor2.children;
  }

  if(list) { //if the anchor exists
    for(i=0; i<list.length; i++) {
      var elem = null;
      var firstdiv = null;
      

      if(anchor1 && !document.getElementById('deepscan').checked) {
        //alert("anchor1");
        elem = list[i].firstElementChild.firstElementChild.nextElementSibling
                        .querySelectorAll('div');
        
        if(elem[0].querySelector('a')){
          firstdiv = elem[0].querySelector('a').children;
        } else {
          firstdiv = elem[1].children;
        }
        
        //if anchor1
      } 
      else if ((anchor1 == null) && anchor2 && document.getElementById('deepscan').checked  && location.href.includes('education')) {
        //alert("anchor2s");
        elem = list[i].querySelector('div > div').firstElementChild.nextElementSibling;
        firstdiv = elem.firstElementChild.firstElementChild.children;

        
      } //if anchor2
      else {
        break;
      }
      
     
      var institute_name = getCleanText(firstdiv[0].querySelector('span > span')?.textContent || "");
      var degree = getCleanText(firstdiv[1].querySelector('span > span')?.textContent || "");
      var start = getCleanText(firstdiv[2]?.querySelector('span > span')?.textContent.split('-')[0] || "");
      var end = getCleanText(firstdiv[2]?.querySelector('span > span')?.textContent.split('-')[1] || "");
      var grade = getCleanText(elem?.firstElementChild?.nextElementSibling?.querySelector('ul > li >div > div > div >div >div')?.textContent.split(':')[2] || "");

        

      var temp = {
        'id': i,
        'name': institute_name,
        'degree': degree,
        'start_date': start,
        'end_data': end,
        'grade': grade
      };

      education.push(temp);
      console.log(temp)

    } //for loop to scrape through the list 
  }
  var objtemp = {
    'name': 'education',
    'data': education
  }
  console.log(objtemp)

  document.getElementById('educationtext').value = JSON.stringify(objtemp);
}
// function extractEducation() {
//   // Helper function to clean text
//   function getCleanText(text) {
//     return text ? text.trim().replace(/\s\s+/g, ' ') : '';
//   }
 

//   // Define the body container
//   var body = document.body;

//   // Define the anchor for the sbodycontainer
//   var sbodyContainer = body.querySelector('#sbodycontainer');
//   console.log(sbodyContainer)

//   if (!sbodyContainer) {
//     console.error("sbodycontainer not found");
//     return;
//   }
//   var educationAnchor = sbodyContainer.querySelector('#education');
//   console.log(educationAnchor);
//   if (!educationAnchor) {
//     console.error("education anchor not found");
//     return;
   
//   }

//   var list = null;
//   var education = [];
  
//   if (educationAnchor) {
//     // Move to the next sibling to find the education list
//     list = educationAnchor.nextElementSibling?.querySelector('ul')?.children;
//   }

//   if (list) { // If the anchor exists
//     for (var i = 0; i < list.length; i++) {
//       var elem = list[i].querySelector('div > div > div > a'); // Selecting the anchor element for each entry
      
//       if (elem) {
//         var instituteName = getCleanText(elem.querySelector('div > span')?.textContent);
//         var degreeElem = elem.querySelector('span.t-14');
//         var degree = getCleanText(degreeElem?.textContent);
//         var dateElem = degreeElem?.nextElementSibling;
//         var dates = getCleanText(dateElem?.textContent);
//         var gradeElem = dateElem?.nextElementSibling;
//         var grade = getCleanText(gradeElem?.textContent);

//         // Split dates into start and end date
//         var startDate = "";
//         var endDate = "";
//         if (dates) {
//           var dateParts = dates.split("-");
//           if (dateParts.length === 2) {
//             startDate = getCleanText(dateParts[0]);
//             endDate = getCleanText(dateParts[1]);
//           }
//         }

//         education.push({
//           'instituteName': instituteName,
//           'degree': degree,
//           'startDate': startDate,
//           'endDate': endDate,
//           'grade': grade
//         });
//       }
//     }
//   }

//   document.getElementById('educationtext').value = JSON.stringify(education);
// }

// // Execute the extraction function
extractEducation();










// } //extract education ends here










//////////// *---- UTILS -----* //////////////
// Utility functions

// Save PDF document of a linkedinProfile
function savePDF() {
  var spanList = document.getElementsByTagName("span");
  var m = [];

  for(i=0; i<spanList.length; i++)
   {
     if(spanList[i].textContent == 'Save to PDF') {
      m.push(spanList[i]);
     }
   }

   if(m.length < 1) {
    alert("No option to download profile.")
   } else {
    m[0].click();
   }

}


function expandButtons() {
  const expandButtonsSelectors = [
      '.pv-profile-section.pv-about-section .lt-line-clamp__more', // About
      '#experience-section .pv-profile-section__see-more-inline.link', // Experience
      '.pv-profile-section.education-section button.pv-profile-section__see-more-inline', // Education
      '.pv-skill-categories-section [data-control-name="skill_details"]', // Skills
    ];

    const seeMoreButtonsSelectors = ['.pv-entity__description .lt-line-clamp__line.lt-line-clamp__line--last .lt-line-clamp__more[href="#"]', '.lt-line-clamp__more[href="#"]:not(.lt-line-clamp__ellipsis--dummy)']

    for (const buttonSelector of expandButtonsSelectors) {
      try {
        if ($(buttonSelector) !== null) {
          $(buttonSelector).click();
        }
      } catch (err) {
        alert("Couldn't expand buttons");
      }
    }


    for (const seeMoreButtonSelector of seeMoreButtonsSelectors) {
      const buttons =  $(seeMoreButtonSelector)

      for (const button of buttons) {
        if (button) {
          try {
              button.click()
          } catch (err) {
            alert("Error expanding see more buttons");
          }
        }
      }
    }
}



function getCleanText(text) {
    const regexRemoveMultipleSpaces = / +/g
    const regexRemoveLineBreaks = /(\r\n\t|\n|\r\t)/gm
  
    if (!text) return null
  
    const cleanText = text.toString()
      .replace(regexRemoveLineBreaks, '')
      .replace(regexRemoveMultipleSpaces, ' ')
      .replace('...', '')
      .replace('See more', '')
      .replace('See less', '')
      .trim()
  
    return cleanText
}


//////// * ----- UTILS ENDS -------* /////////