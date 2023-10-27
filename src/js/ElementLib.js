function clickIfPresent(element) {
    if (element != null) {
        element.click();
    }
}

function fillIfPresent(element, str) {
    if (element != null) {
        element.value = str;
    }
}

function selectIfPresent(selector, option_name) {
    if (selector != null) {
        for (let option of selector.options) {
            if (option.value === option_name) {
                option.selected = true;
            }
        }
    }
}
