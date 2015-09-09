// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {

  var editInPlace = function(e){
    var $field = $(e.target);
    $field.removeClass("track-info");
    $(".track-info").removeClass("track-info");
    var trackId = parseInt($field.closest('tr').data('id'),10);
    var $ogData= $field.html();
    $field.empty();
    $field.html("<form id='new-info' style='width: 100%; margin: 0px' action='/my/tracks/" + trackId + "' method='post'><input type='text' name='" + $field.data('name') + "' value='" + $ogData + "'/></form>");


    $('#track-table').on('submit', '#new-info', function(e){
      e.preventDefault();

      var formData = $('form#new-info').serialize();

      $.ajax({
        url: "/tracks/" + trackId,
        method: "PUT",
        data: formData,
        dataType: 'json'
      })

      .done(function(track, status){
        var type = $("table form").closest("td").data("name");
        $("table #new-info").replaceWith(track[type]);
        // console.log($("#track-table td"))
        $("#track-table td").addClass("track-info");
        // $(".track-info").on("dblclick", editInPlace);
      });
    });
  }

  $("#track-table").on("dblclick", ".track-info", editInPlace);

});
