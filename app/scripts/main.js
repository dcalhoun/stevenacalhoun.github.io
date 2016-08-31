// Temporary check for old content
var type = window.location.hash.substr(1);
if (type == "new") {
  var contentId = "content";
}
else  {
  var contentId = "oldContent";
}

var content = require('html!../'+contentId+'.html');

// Load in content
document.body.innerHTML = content;
document.getElementById(contentId).className += " fadein";

// Load in css
require('../styles/main.scss');

// Switch tabs
function showTab() {
  // Get id of which to show
  var sectionId = this.id.replace("-link", "-section");

  // Change classes
  document.getElementById("about-link").className = "tab-link";
  document.getElementById("work-link").className = "tab-link";
  document.getElementById(this.id).className += " selected";

  // Hide everything
  document.getElementById("about-section").className = 'profile-section hidden';
  document.getElementById("work-section").className = 'profile-section hidden';

  // Fade in new tab
  document.getElementById(sectionId).className += 'profile-section fadein';
}

// Setup click event
document.getElementById("about-link").onclick = showTab;
document.getElementById("work-link").onclick = showTab;
