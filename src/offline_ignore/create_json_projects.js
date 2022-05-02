class Project {
  constructor(header, image, description, link, platform, created) {
    this.header = header;
    this.image = image;
    this.description = description;
    this.link = link;
    this.platform = platform;
    this.created = created;
  }
}

$(function () {

  $("#create_button").on("click", function () {

    var header_input = $(".input_header").val();
    var image_input = $(".input_image").val();
    var description_input = $(".input_description").text();
    var link_input = $(".input_link").val();
    var platform_input = $(".input_platform").val();
    var created_input = $(".input_created").val();

    let project = new Project(
      header_input,
      image_input,
      description_input,
      link_input,
      platform_input,
      created_input
    );

    $("#json_object").html(JSON.stringify(project).split(",").join(",<br />"));

    // read json //
    // fetch("./projects.json")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {

    //     $.each(data.projects, function (key, val) {
    //       console.log(val);
    //       $("#template_header").text(val["header"]);
    //       $(".panel_content_image").attr("src", val["image"]);
    //       $("#project_description").text(val["description"]);
    //       $(".linktext").attr("href", val["link"]);
    //       $(".text_platform").text(val["platform"]);
    //       $(".text_created_with").text(val["created"]);
    //     })

    //   });
    // read json //
  });

});