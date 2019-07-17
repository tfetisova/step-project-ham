/**
 * Created by t.fetisova on 08.07.2019.
 */

$(document).ready(function () {
    $('.our-amazing-work .tab-content.active').slice(12).addClass('temporary-hidden');
      function tabs() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        let contentData = $(this).data('target');
          console.log(contentData);
          if(contentData==='All'){
            $('.load-more').show();
            $('.our-amazing-work .tab-content').not('.active').addClass('active');
            $('.our-amazing-work .tab-content.active').slice(12).addClass('temporary-hidden');
        }else if(contentData==='graphic-design-pic' || contentData==='web-design-pic'||contentData==='landing-pages-pic'||contentData==='wordpress-pic'){
            $('.load-more').show();
            $('.our-amazing-work .tab-content.active').removeClass('temporary-hidden');
            $('.tabs-content-wrap').find(`[data-target='${contentData}']`).siblings().removeClass('active');
            $('.tabs-content-wrap').find(`[data-target='${contentData}']`).addClass('active');
        }else{
            $('.tabs-content-wrap').find(`[data-target='${contentData}']`).siblings().removeClass('active');
            $('.tabs-content-wrap').find(`[data-target='${contentData}']`).addClass('active');
        }
    }
    const graphicDesignPics = [
        "img/graphic%20design/graphic-design1.jpg",
        "img/graphic%20design/graphic-design2.jpg",
        "img/graphic%20design/graphic-design3.jpg",
        "img/graphic%20design/graphic-design4.jpg",
        "img/graphic%20design/graphic-design5.jpg",
        "img/graphic%20design/graphic-design6.jpg",
        "img/graphic%20design/graphic-design7.jpg",
        "img/graphic%20design/graphic-design8.jpg",
        "img/graphic%20design/graphic-design9.jpg",
        "img/graphic%20design/graphic-design10.jpg",
        "img/graphic%20design/graphic-design11.jpg",
        "img/graphic%20design/graphic-design12.jpg",
    ];
    const webDesignPics = [
        "img/web%20design/web-design1.jpg",
        "img/web%20design/web-design2.jpg",
        "img/web%20design/web-design3.jpg",
        "img/web%20design/web-design4.jpg",
        "img/web%20design/web-design5.jpg",
        "img/web%20design/web-design6.jpg",
        "img/web%20design/web-design7.jpg",
        "img/web%20design/web-design1.jpg",
        "img/web%20design/web-design2.jpg",
        "img/web%20design/web-design3.jpg",
        "img/web%20design/web-design4.jpg",
        "img/web%20design/web-design5.jpg",

    ];
    const landingPagesPics = [
        "img/landing%20page/landing-page1.jpg",
        "img/landing%20page/landing-page2.jpg",
        "img/landing%20page/landing-page3.jpg",
        "img/landing%20page/landing-page4.jpg",
        "img/landing%20page/landing-page5.jpg",
        "img/landing%20page/landing-page6.jpg",
        "img/landing%20page/landing-page7.jpg",
        "img/landing%20page/landing-page1.jpg",
        "img/landing%20page/landing-page2.jpg",
        "img/landing%20page/landing-page3.jpg",
        "img/landing%20page/landing-page4.jpg",
        "img/landing%20page/landing-page5.jpg"
    ];
    const wordpressPics = [
        "img/wordpress/wordpress1.jpg",
        "img/wordpress/wordpress2.jpg",
        "img/wordpress/wordpress3.jpg",
        "img/wordpress/wordpress4.jpg",
        "img/wordpress/wordpress5.jpg",
        "img/wordpress/wordpress6.jpg",
        "img/wordpress/wordpress7.jpg",
        "img/wordpress/wordpress8.jpg",
        "img/wordpress/wordpress9.jpg",
        "img/wordpress/wordpress10.jpg",
        "img/wordpress/wordpress1.jpg",
        "img/wordpress/wordpress2.jpg"
    ];
    function addPics(arr, data) {
        let newArr = arr.map(function callback(elem, i, arr) {
            // return `<li>${arr[i]}</li>`;
            return `<img src=${elem} alt="" class="tab-content active" data-target=data width="284">`;
        });
        newArr = newArr.join('');
        $('.our-amazing-work .tab-content.active').last().after(newArr);

    }

    $('.tabs-headers-item').on('click',tabs);
    $('.load-more').on('click', function(e) {
        e.preventDefault();
        let contentData = $('.our-amazing-work .tabs-headers-item.active').data('target');
        switch (contentData) {
            case 'All':
                $('.our-amazing-work .tab-content.active').slice(12, 24).removeClass('temporary-hidden');
                $(this).hide('slow');
                break;
            case 'graphic-design-pic':
                addPics(graphicDesignPics,'graphic-design-pic');
                $(this).hide('slow');
                break;
            case 'web-design-pic':
                addPics(webDesignPics,'web-design-pic');
                $(this).hide('slow');
                break;
            case 'landing-pages-pic':
                addPics(landingPagesPics,'landing-pages-pic');
                $(this).hide('slow');
                break;
            case 'wordpress-pic':
                addPics(wordpressPics,'wordpress-pic');
                $(this).hide('slow');
                break;

        }
    });


    let slide = $('.what-people-say .tab-content');
    // let currentSlide = slide.index('.active');
    let currentSlide = Array.from(document.getElementsByClassName("tabs-content-wrap")[2].children);



    $('.next').on('click',function () {
        const index = currentSlide.findIndex(item => {
            return item.attributes[0].value.split(' ').includes('active')
        });

        let nextIndex = (+index+1)%+slide.length;

        $(`.what-people-say .tab-content:eq(${nextIndex})`).siblings().removeClass('active');
        $(`.what-people-say .tab-content:eq(${nextIndex})`).addClass('active');
        let slideHeadData = $('.what-people-say .tab-content.active').data('target');
        $('.tabs-headers').find(`[data-target='${slideHeadData}']`).siblings().removeClass('active');
        $('.tabs-headers').find(`[data-target='${slideHeadData}']`).addClass('active');
    });
    $('.prev').on('click',function () {
        const index = currentSlide.findIndex(item => {
            return item.attributes[0].value.split(' ').includes('active')
        });
        let prevIndex = (+index)%+slide.length;
        if (prevIndex){
            prevIndex -= 1;
            $(`.what-people-say .tab-content:eq(${prevIndex})`).siblings().removeClass('active');
            $(`.what-people-say .tab-content:eq(${prevIndex})`).addClass('active');
        }  else {
            prevIndex=slide.length-1;
            $(`.what-people-say .tab-content:eq(${prevIndex})`).siblings().removeClass('active');
            $(`.what-people-say .tab-content:eq(${prevIndex})`).addClass('active');
        }
        let slideHeadData = $('.what-people-say .tab-content.active').data('target');
        $('.tabs-headers').find(`[data-target='${slideHeadData}']`).siblings().removeClass('active');
        $('.tabs-headers').find(`[data-target='${slideHeadData}']`).addClass('active');
    });

});

