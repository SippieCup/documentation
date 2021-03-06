

require(['gitbook'], function(gitbook) {
  gitbook.events.bind('page.change', function() {
    // var $githubLinks = $("<div class=\"github-links\"></div>");
    var $bookHeader = $(".book-header");
    var $commaNotice = $(".page-inner .alert").first();
    var $commaNoticeButton = $(".commaai-alert .btn-close");
    if (localStorage.getItem("hasClosedNotice") === "true") {
      gitbook.hasClosedNotice = true;
      $("body").removeClass("show-commaai-alert");
    } else {
      $("body").addClass("show-commaai-alert");
    }

    $commaNoticeButton.on("click",function() {
      localStorage.setItem("hasClosedNotice", true);
      gitbook.hasClosedNotice = true;
      $commaNotice.fadeOut();
    });
    
    // $bookHeader.append($githubLinks);

    // $githubLinks.append("<a class=\"github-link\" href=\"https://github.com/commaai/openpilot\"><span class=\"fa fa-github\"></span> commaai/openpilot</a>");

    if (!$(".book-summary .logo").length) {
      $(".book-summary").prepend("<a href=\"" + gitbook.state.bookRoot + "\" class=\"logo\"></a>");
    }
    $(".navigation").each((i,val) => {
      var $this = $(val);
      var labelParts = $this.attr('aria-label').split(":");
      var labelNav = labelParts[0].replace(' page','');
      var labelPageTitle = labelParts[1];
      
      $this.append("<span class=\"label-nav\">" + labelNav + "</span>");
      $this.append("<span class=\"label-page-title\">" + labelPageTitle + "</span>");
    })
  });
});
