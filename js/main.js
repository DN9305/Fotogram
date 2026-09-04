
const GALLERY = document.getElementById("gallery")
const DIALOG = document.getElementById("dialog")
const DIALOG_IMG = document.getElementById("dialog-img")
const DIALOG_SPAN = document.getElementById("dialog-span")
const DIALOG_BUTTON_LEFT = document.getElementById("button-left")
const DIALOG_BUTTON_RIGHT = document.getElementById("button-right")

function buttonLeft(index) {

    if (index === 0) {
        DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_11"src="${IMAGE_CONTAINER[11].path}" alt="${IMAGE_CONTAINER[11].alt}">`
        DIALOG_SPAN.innerHTML = /*html*/`
        ${IMAGE_CONTAINER.length}/${IMAGE_CONTAINER.length}+1
    `
    } else {
        DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_${index - 1}"src="${IMAGE_CONTAINER[index - 1].path}" alt="${IMAGE_CONTAINER[index - 1].alt}">`
        DIALOG_SPAN.innerHTML = /*html*/`
        ${index}/${IMAGE_CONTAINER.length}+1
    `
    }
}

function buttonRight(index) {
    if (index === 11) {
        DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_0"src="${IMAGE_CONTAINER[0].path}" alt="${IMAGE_CONTAINER[0].alt}">`
        DIALOG_SPAN.innerHTML = /*html*/`
        ${1}/${IMAGE_CONTAINER.length}+1
    `
    } else {
        DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_${index + 1}"src="${IMAGE_CONTAINER[index + 1].path}" alt="${IMAGE_CONTAINER[index + 1].alt}"> `
        DIALOG_SPAN.innerHTML = /*html*/`
        ${index + 1}/${IMAGE_CONTAINER.length}+1
    `
    }
}

function openDialog(index) {
    DIALOG.showModal()
    DIALOG_IMG.innerHTML = /*html*/`
        <img id="dialog-img_${index}"src="${IMAGE_CONTAINER[index].path}" alt="${IMAGE_CONTAINER[index].alt}"> `
    DIALOG_SPAN.innerHTML = /*html*/`
        ${index + 1}/12
    `
    DIALOG_BUTTON_LEFT.onclick = function () {
        buttonLeft(index)
        if (index === 0) {
            openDialog(IMAGE_CONTAINER.length - 1)
        } else {
            openDialog(index - 1)
        }
    }
    DIALOG_BUTTON_RIGHT.onclick = function () {
        buttonRight(index)
        if (index === 11) {
            openDialog(0)
        } else {
            openDialog(index + 1)
        }
    }
}

function addPhotosToGallery() {
    let galleryElems = "";

    for (let i = 0; i < IMAGE_CONTAINER.length; i++) {
        galleryElems += `<img id="img_${i}" class="" src="${IMAGE_CONTAINER[i].path}" alt="${IMAGE_CONTAINER[i].alt}" onclick="openDialog(${i})">`
    };

    GALLERY.innerHTML = galleryElems;
}

addPhotosToGallery();

