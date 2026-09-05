///////////////////////////////////
//Mark: CONST VARIABLES
///////////////////////////////////

const GALLERY = document.getElementById("gallery")
const DIALOG = document.getElementById("dialog")
const DIALOG_IMG = document.getElementById("dialog-img")
const DIALOG_SPAN = document.getElementById("dialog-span")
const DIALOG_BUTTON_LEFT = document.getElementById("button-left")
const DIALOG_BUTTON_RIGHT = document.getElementById("button-right")
const DIALOG_BUTTON_CLOSE = document.getElementById("dialog-header-button")
const DIALOG_HEADLINE = document.getElementById("dialog-headline")

///////////////////////////////////
//Mark: PHOTO GALLERY
//////////////////////////////////

function addPhotosToGallery() {
    let galleryElems = "";

    for (let i = 0; i < IMAGE_CONTAINER.length; i++) {
        galleryElems += `<img id="img_${i}" tabindex="0" src="${IMAGE_CONTAINER[i].path}" alt="${IMAGE_CONTAINER[i].alt}" onclick="openDialog(${i})" onkeypress='if(event.key=="Enter"){openDialog(${i})}' aria-label="opens Dialog with the same Picture scaled">`
    };

    GALLERY.innerHTML = galleryElems;
}

//////////////////////////////////
///Mark: OPEN DIALOG
/////////////////////////////////

function openDialog(index) {

    DIALOG.showModal()
    headline(index)
    innerDialogHtml(index)
    DIALOG_BUTTON_LEFT.onclick = function () {
        if (index === 0) {
            openDialog(IMAGE_CONTAINER.length - 1)
        } else {
            openDialog(index - 1)
        }
    }
    DIALOG_BUTTON_RIGHT.onclick = function () {
        if (index === IMAGE_CONTAINER.length-1) { 
            openDialog(0)
        } else {
            openDialog(index + 1)
        }
    }
}


function innerDialogHtml(index) {
    DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_${index}"src="${IMAGE_CONTAINER[index].path}" alt="${IMAGE_CONTAINER[index].alt}"> `
    DIALOG_SPAN.innerHTML = /*html*/`
        ${index + 1}/${IMAGE_CONTAINER.length}  `
}

function headline(index) {
    let lastSlash = IMAGE_CONTAINER[index].path.lastIndexOf("/")
    let lastPoint = IMAGE_CONTAINER[index].path.lastIndexOf(".")
    let headlineName = IMAGE_CONTAINER[index].path.slice(lastSlash + 1, lastPoint)
    DIALOG_HEADLINE.innerHTML = headlineName
}

/////////////////////////////
//Mark: BUTTON ONCLICK 
/////////////////////////////


DIALOG_BUTTON_CLOSE.onclick = function () {
    DIALOG.close()
}

//////////////////////////////////
//Mark: FUNCTION CALLS
//////////////////////////////////

addPhotosToGallery();

