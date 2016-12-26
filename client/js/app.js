function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("span.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
}
$('#search-filters').on('hidden.bs.collapse', toggleChevron);
$('#search-filters').on('shown.bs.collapse', toggleChevron);

//application.constant('_', window._);