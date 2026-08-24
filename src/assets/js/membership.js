// Toggles the pricing cards on /membership/ between monthly and annual rates.
// Values are read from data-monthly/data-annual attributes set in membership.html.

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('billingToggle');
    if (!toggle) return;

    toggle.querySelectorAll('.cs-toggle-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const mode = btn.dataset.billing;

            toggle.querySelectorAll('.cs-toggle-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            document.querySelectorAll('.price-val').forEach(function (el) {
                el.textContent = el.dataset[mode];
            });
            document.querySelectorAll('.cs-annual-note').forEach(function (el) {
                el.textContent = el.dataset[mode];
            });
        });
    });
});
