$('#sglHeader').load('includes/header.html');
$('#sglHeader2').load('includes/header-2.html');
$('#sglFooter').load('includes/footer.html');

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
        $("#sglNavbar").addClass("fixed-top");
    } else {
        $("#sglNavbar").removeClass("fixed-top");
    }
});


function toggleMobileMenu(event) {
    const $this = $(event);    
    console.log($this);
    $this.siblings().toggleClass('active');
    $this.toggleClass('active');
}

$('.mobile-toggle-plus').on('click', function () {
    console.log('clicked');
    $(this).toggleClass('active');  
    $(this).siblings().toggleClass('active');
});