///////////////////////////////////
//Mark: CONST VARIABLES
///////////////////////////////////

const GALLERY = document.getElementById("gallery")
const DIALOG = document.getElementById("dialog")
const DIALOG_IMG = document.getElementById("dialog-img")
const DIALOG_SPAN = document.getElementById("dialog-span")
const DIALOG_BUTTON_LEFT = document.getElementById("button-left")
const DIALOG_BUTTON_RIGHT = document.getElementById("button-right")

///////////////////////////////////
//Mark: PHOTO GALLERY
//////////////////////////////////

function addPhotosToGallery() {
    let galleryElems = "";

    for (let i = 0; i < IMAGE_CONTAINER.length; i++) {
        galleryElems += `<img id="img_${i}" class="" src="${IMAGE_CONTAINER[i].path}" alt="${IMAGE_CONTAINER[i].alt}" onclick="openDialog(${i})">`
    };

    GALLERY.innerHTML = galleryElems;
}

//////////////////////////////////
///Mark: OPEN DIALOG
/////////////////////////////////

function openDialog(index) {
    DIALOG.showModal()
    DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_${index}"src="${IMAGE_CONTAINER[index].path}" alt="${IMAGE_CONTAINER[index].alt}"> `
    DIALOG_SPAN.innerHTML = /*html*/`
        ${index + 1}/${IMAGE_CONTAINER.length}
    `
    DIALOG_BUTTON_LEFT.onclick = function () {
        if (index === 0) {
            openDialog(IMAGE_CONTAINER.length - 1)
        } else {
            openDialog(index - 1)
        }
    }
    DIALOG_BUTTON_RIGHT.onclick = function () {
        if (index === 11) {
            openDialog(0)
        } else {
            openDialog(index + 1)
        }
    }
}

//////////////////////////////////
//Mark: FUNCTION CALLS
//////////////////////////////////

addPhotosToGallery();

