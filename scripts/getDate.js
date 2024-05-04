document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    // Update the content of the first paragraph with the current year
    document.getElementById("currentYear").innerHTML += currentYear;
    // Get the last modified date of the document
    const lastModifiedDate = new Date();
    // Format the last modified date
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', { year: 'numeric', day: 'numeric', month: '2-digit' });
    var formattedHour = lastModifiedDate.toLocaleTimeString('en-US', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
    var formattedFullDate = formattedDate + ' '+ formattedHour;
    // Update the content of the second paragraph with the last modified date
    document.getElementById("lastModified").innerHTML += formattedFullDate;
  });