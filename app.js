const rating_cards = [$(".ratings span")];

rating_cards.forEach((rating_card) => {
    rating_card.click(function (e){
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
});

$(".submit_btn").click(function () {
    
        $("#rate").text(rate);
        $(".rating_section").addClass("hidden");
        $(".thanks_section").removeClass("hidden");
    
});
