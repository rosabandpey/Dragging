$(function () {
    $(".div_drag").draggable({
        revert: "invalid",
        refreshPositions: true,
        drag: function (event, ui) {
            ui.helper.addClass("draggable");
            console.log("drag start")
        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggable");
            console.log("drag stop")
        }
    });
    $("#dvSource").droppable({
        drop: function (event, ui) {
            console.log("drop start")
            // if ($(".div_drag").length == 0) {
            //     $("#dvSource").html("");
            // }
            ui.draggable.addClass("dropped");
            $("#dvSource").append(ui.draggable);
        }
    });
});