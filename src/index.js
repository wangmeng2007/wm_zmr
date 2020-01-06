import _ from 'lodash'

function createComponent(tag) {
    let element = document.createElement(tag)

    element.innerHTML = _.join(['Hello', 'webpack'], ', ')

    return element
}

document.body.append(createComponent('div'))