'use strict';

class __MaestroModal {

    constructor() {
        this.render();
    }

    toggleModal(event) {
        let element = event.target,
            videoId = element.getAttribute('maestro-youtube-id'),
            __modal = document.getElementById('__modal__section'),
            __iframe = document.getElementById('__modal__player');

        __modal.classList.toggle("__maestro__toggle");
        __iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId)
    }

    fullScreen() {
        let __modal = document.getElementById('__modal__section');
        __modal.classList.toggle("__maestro__full");
        __modal.classList.remove("__maestro__minimize");
    }

    minimize() {
        let __modal = document.getElementById('__modal__section');
        __modal.classList.toggle("__maestro__minimize");
        __modal.classList.remove("__maestro__full");
    }

    windowOnClick(event) {
        let modal = document.getElementById('__modal__section');
        if (event.target === modal) {
            self.toggleModal();
        }
    }

    init() {
        let self = this;
        this.triggers = document.querySelectorAll('.__modal_trigger');
        window.addEventListener('click', self.windowOnClick);
        for (var i = 0; i < this.triggers.length; i++) {
            this.triggers[i].addEventListener('click', self.toggleModal);
        }

        this.closeButton = document.querySelector(".__maestro__close__button");
        this.closeButton.addEventListener("click", self.toggleModal);

        this.fullScreenButton = document.querySelector(".__maestro__full_screen");
        this.fullScreenButton.addEventListener("click", self.fullScreen);


        this.minimizeScreenButton = document.querySelector(".__maestro__minimize_screen");
        this.minimizeScreenButton.addEventListener("click", self.minimize);
    }


    render() {
        let style = document.createElement('style');
        style.innerText = '.__modal_trigger{cursor: pointer;}' +
            '.__maestro_button{font-size:15px;width:12px;height:12px;border-radius:50%;display:inline-block;margin:0 .25rem;cursor:pointer;}' +
            '.__maestro_button_inner{cursor:pointer;visibility:hidden;padding-left:1px;padding-top:0;float:left;line-height:12px;margin:0 auto;display:block}' +
            '.__maestro_button:hover .__maestro_button_inner{visibility:visible}' +
            '.__maestro__close{background:#ff5c5c;border:1px solid #e33e41}' +
            '.__maestro__close:active{background:#c14645;border:1px solid #b03537}' +
            '.__maestro__close:active .__maestro__close__button{color:#4e0002}' +
            '.__maestro__close__button{color:#820005}' +
            '.__maestro__full_screen{background:#00ca56;border:1px solid #14ae46}' +
            '.__maestro__full_screen:active{background:#029740;border:1px solid #128435}' +
            '.__maestro__full_screen:active .__maestro__full_screen__button{color:#003107}' +
            '.__maestro__full_screen__button{color:#006519}' +
            '.__maestro__minimize_screen{background:#ffbd4c;border:1px solid #e09e3e}' +
            '.__maestro__minimize_screen:active{background:#c08e38;border:1px solid #af7c33}' +
            '.__maestro__minimize_screen:active .__maestro__minimize_screen__button{color:#5a2607}' +
            '.__maestro__minimize_screen__button{color:#9a5518}' +
            '.__maestro__full #__modal__player{width:100vw!important;height:95vh!important}' +
            '.__maestro__minimize{bottom:0!important;left:0!important;top:inherit!important;transform:translate(0,0);height:0!important;width:150px!important}' +
            '.__maestro__minimize #__modal__player{width:0;height:0}' +
            '.__maestro__modal__section{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(52,73,94,.8);opacity:0;visibility:hidden;transform:scale(1.1);transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s}' +
            '.__maestro__modal__content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ecf0f1;padding:0;width:auto;border-radius:.25rem}' +
            '#__modal__player{width:45vw;height:45vh;transition:.2s}' +
            '.__maestro__toggle{z-index: 99999;opacity:1;visibility:visible;transform:scale(1);transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s}' +
            '@media (max-width: 992px) {#__modal__player{width: 65vw;}}' +
            '@media (max-width: 768px) {#__modal__player{width: 75vw;}}' +
            '@media (max-width: 576px) {#__modal__player{width: 95vw;}}' +
            '';
        document.getElementsByTagName('head')[0].appendChild(style);

        document.write('<section class="__maestro__modal__section" id="__modal__section">' +
            '<modal class="__maestro__modal__content">' +
            '<span class="__maestro_button __maestro__close"><span class="__maestro_button_inner __maestro__close__button">&times;</span></span>' +
            '<span class="__maestro_button __maestro__minimize_screen"><span class="__maestro_button_inner __maestro__minimize_screen__button">&ndash;</span></span>' +
            '<span class="__maestro_button __maestro__full_screen"><span class="__maestro_button_inner __maestro__full_screen__button">+</span></span>' +
            '<div><iframe src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen' +
            ' id="__modal__player"></iframe></div>' +
            '</modal>' +
            '</section>');
        return this;
    }
}

new __MaestroModal().init();