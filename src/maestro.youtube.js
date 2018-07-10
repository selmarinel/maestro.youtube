'use strict';

class __MaestroModal {

    constructor() {
        this.render();
    }

    toggleModal() {
        var element = event.target,
            videoId = element.getAttribute('maestro-youtube-id'),
            __modal = document.getElementById('__modal__section'),
            __iframe = document.getElementById('__modal__player');

        __modal.classList.toggle("__maestro__toggle");
        __iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId)
    }

    windowOnClick(event) {
        var modal = document.getElementById('__modal__section');
        if (event.target === modal) {
            self.toggleModal();
        }
    }

    init() {
        self = this;
        this.trigger = document.querySelector('.__modal_trigger');
        this.trigger.addEventListener('click', self.toggleModal);
        window.addEventListener('click', self.windowOnClick);

        this.closeButton = document.querySelector(".__maestro__close__button");
        this.closeButton.addEventListener("click", self.toggleModal)
    }


    render() {
        var style = document.createElement('style');
        style.innerText = '.__maestro__close{background:#ff5c5c;font-size:15px;width:12px;height:12px;border:1px solid #e33e41;border-radius:50%;display:inline-block;margin:.25rem}.__maestro__close:active{background:#c14645;border:1px solid #b03537}.__maestro__close:active .__maestro__close__button{color:#4e0002}.__maestro__close__button{color:#820005;visibility:hidden;cursor:default;padding-left:2px;padding-top:1px;float:left;line-height:12px;margin:0 auto;display:block}.__maestro__close:hover .__maestro__close__button{visibility:visible}.__maestro__modal__section{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(52,73,94,.8);opacity:0;visibility:hidden;transform:scale(1.1);transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s}.__maestro__modal__content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ecf0f1;padding:0;width:auto;border-radius:.25rem}#__modal__player{width:75vw;height:75vh}.__maestro__toggle{opacity:1;visibility:visible;transform:scale(1);transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s}';

        document.getElementsByTagName('head')[0].appendChild(style);

        document.write('<section class="__maestro__modal__section" id="__modal__section">' +
            '<modal class="__maestro__modal__content">' +
            '<span class="__maestro__close"><span class="__maestro__close__button">&times;</span></span>' +
            '<iframe src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen' +
            ' id="__modal__player"></iframe>' +
            '</modal>' +
            '</section>');
        return this;
    }
}

new __MaestroModal().init();