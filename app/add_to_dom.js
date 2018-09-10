import $ from 'jquery';

export default function(type, text){
    const elem = $(`<${type}>`, {
        text: text
    });

    $('#root').append(elem);
}
