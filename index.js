$(".question").click(function () {
    $(this).next().fadeToggle("slow"); //To reach the answer of the questions
    $(this).children().toggleClass("collapse"); //To reach the arrow images
})

