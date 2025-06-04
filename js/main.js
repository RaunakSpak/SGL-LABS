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

    const $plusIcon = $this.find('.mobile-toggle-plus');
    const $minusIcon = $this.find('.mobile-toggle-minus');

    $plusIcon.toggleClass('active');
    $minusIcon.toggleClass('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const row = document.getElementById('footerRow');
    const sectionLeft = document.getElementById('sectionLeft');
    const sectionRight = document.getElementById('sectionRight');

    if (row && sectionLeft && sectionRight) {

        row.innerHTML = '';
        row.appendChild(sectionLeft);
        row.appendChild(sectionRight);
    }
});