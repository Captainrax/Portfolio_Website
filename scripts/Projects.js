// loads navbar.js
$(document).ready(function () {
     MakeNavBar(); 
});




// azure storage

var SAS_TOKEN = "?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2022-06-12T15:59:00Z&st=2020-06-12T07:59:00Z&spr=https&sig=qzxk26uVb0bDZxY63crwbucvndn4OqjDp3JGGb8GGR8%3D";
var tableUri = 'https://' + 'andreasportfoliostorage' + '.table.core.windows.net';
var tableService = AzureStorage.Table.createTableServiceWithSas(tableUri, SAS_TOKEN);

refreshEntityList(); // function called (should probably just make this onload())
function refreshEntityList() {
    if (!tableService)
        return;

    var tableQuery = new AzureStorage.Table.TableQuery();
    tableService.queryEntities("PortfolioDescriptions", tableQuery, null, function(error, results) {
        if (error) {
            console.log(error);
        } else {

            if (results.entries.length < 1) {
                console.log("no entries");
            }
            
            let cp1 = "";
            let cp2 = "";
            let cp3 = "";
            for (var i = 0, entity; entity = results.entries[i]; i++) {

                if (entity.RowKey._ === "EVE_Online") {
                    cp1 = entity.Description._;
                }
                if (entity.RowKey._ === "Custom_Wow_Items") {
                    cp2 = entity.Description._;
                }
                if (entity.RowKey._ === "WPF_App_Pizzaria") {
                    cp3 = entity.Description._;
                }
            }
            // console.log(cp3,cp2,cp1);
            // console.log(results.entries[2].Description._); // debug
            $("#eve_project_description").html(cp1);
            $("#custom_wow_items_project_description").html(cp2);
            $("#wpf_app_pizzaria_project_description").html(cp3);
        }
    });
}
