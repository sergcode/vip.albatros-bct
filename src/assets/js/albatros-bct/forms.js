$(document).ready(function() {

    let translation = {
        name: 'ФИО',
        activity: 'Название мероприятия',
        // phone: 'Телефон',
        email: 'Телефон или Email',
        source: 'Форма источник'
    };

    const source = 'vip_albatros_bct';
    const submitURL = 'https://sender.e-trans.me/api/send';

    let consultationModal = $('#consultation');
    let formMaterialDesign = $('#formMaterialDesign');
    let activityForm = $('#activityForm');
    let retentionModal = $('#customerRetention');

    consultationModal.submit(function (event) {
        if(event.target.checkValidity())
            sendConsultationModal(event.target);
        event.preventDefault();
    });

    formMaterialDesign.submit(function(event){
        if(event.target.checkValidity())
            sendFormMaterialDesign(event.target);
        event.preventDefault();
    });

    activityForm.submit(function(event){
        if(event.target.checkValidity())
            sendActivityForm(event.target);
        event.preventDefault();
    });

    retentionModal.submit(function (event) {
        if(event.target.checkValidity())
            sendRetentionModal(event.target);
        event.preventDefault();
    });

    function sendConsultationModal(form)
    {
        let data = viewData.consultationForm;
        data.source = "Форма получить консультацию";
        $(".consultation").fadeOut().removeClass('show');
        $(".modal-backdrop").fadeOut();
        sendFormData(form, data);
    }

    function sendFormMaterialDesign(form)
    {
        let data = viewData.formMaterialDesignForm;
        data.source = "Форма мы ответим на любые Ваши вопросы";
        sendFormData(form, data);
    }

    function sendActivityForm(form)
    {
        let data = viewData.activityForm;
        data.source = "Форма расчета стоимости обслуживания мероприятия";
        sendFormData(form, data);
    }

    function sendRetentionModal(form)
    {
        let data = viewData.retentionForm;
        data.source = "Форма удержания клиента";
        $(".customer-retention").fadeOut().removeClass('show').attr('aria-hidden', 'true');
        $(".modal-backdrop_customer").fadeOut();
        setTimeout(function () {
            $('.customer-retention').remove();
            $('.modal-backdrop_customer').remove();
        }, 500);
        sendFormData(form, data);
    }


    function sendFormData(form, data)
    {
        try {

            send(form, data);

        } catch (e) {

            console.error(e);

        }

    }

    function send(form, data)
    {

        let html = htmlData(data);

        let reqData = {
            subject: 'Заявка с сайта  vip.albatros-bct.com',
            body: html,
            source: source,
            type: "html"
        };

        let strData = JSON.stringify(reqData);

        let req = {
            type: "POST",
            url: submitURL,
            data: strData,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        };

        console.log("sending", req, form);

        let btn = form.getElementsByTagName('button')[0];

        let srcText = btn.innerHTML;

        btn.setAttribute('disabled', 'true');

        btn.innerHTML = '<p>Отправка...</p><span><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4879 0.24322C15.1746 -0.0810734 14.6531 -0.0810734 14.3288 0.24322C14.0155 0.556558 14.0155 1.07806 14.3288 1.39066L20.2063 7.26812H0.811464C0.359352 7.26885 0 7.6282 0 8.08031C0 8.53242 0.359352 8.90346 0.811464 8.90346H20.2063L14.3288 14.77C14.0155 15.0943 14.0155 15.6165 14.3288 15.9291C14.6531 16.2534 15.1753 16.2534 15.4879 15.9291L22.7568 8.66024C23.0811 8.3469 23.0811 7.82541 22.7568 7.5128L15.4879 0.24322Z" fill="white"></path></svg></span>';

        $.post(req).done(function(data){
            if(data && data.statusCode === 200)
            {
                $('#modalSuccess').modal('show');
                form.classList.remove('was-validated');
                form.reset();
            }
            else
                $('#modalFailure').modal('show');
        }).fail(function(){
            $('#modalFailure').modal('show');
        }).always(function(){
            btn.removeAttribute('disabled');
            btn.innerHTML = srcText;
        });
    }

    function translate(name)
    {
        let trnslt = translation[name];

        if(trnslt)
            return trnslt;
        else
            return name;
    }

    function htmlData(data) {
        let arr = [];

        let keys = Object.keys(data);

        keys.forEach(function (item) {

            arr.push('<p>' + translate(item) + ' : ' + data[item] + '</p>');

        });

        return arr.join('\r\n</br>\r\n');
    }

});
