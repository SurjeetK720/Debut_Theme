
function product_image_height(){if($(window).innerWidth()<1441){var e=$("#shopify-section-header").height(),t=$(window).height()-e-50;$(".product-thumbnail__photos").height(t)}}if($(window).load(function(){$(".se-pre-con").fadeOut("slow")}),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut(),$("body").hasClass("js-sticky-header")&&$("#ui-id-1").css("display","none")}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(window).scroll(function(){$(window).scrollTop()>=140?$("body").addClass("js-sticky-header--animate js-sticky-header js-sticky-header--animate--end"):$("body").removeClass("js-sticky-header--animate js-sticky-header js-sticky-header--animate--end")}),$(window).on("load",function(e){$(window).resize(function(e){$(".grid-uniform").jQueryEqualHeight(".grid-product__wrapper"),$(".product-slider").jQueryEqualHeight(".grid-product__wrapper")}),$(".grid-uniform").jQueryEqualHeight(".grid-product__wrapper"),$(".first-article").jQueryEqualHeight(".grid-product__wrapper"),$(".second-article").jQueryEqualHeight(".grid-product__wrapper"),$(".third-article").jQueryEqualHeight(".grid-product__wrapper"),$(".custom-field--value").jQueryEqualHeight(".grid-product__wrapper"),$(".product-slider").jQueryEqualHeight(".grid-product__wrapper")}),$(window).resize(function(e){$(".grid-uniform").jQueryEqualHeight(".grid-product__wrapper"),$(".product-slider").jQueryEqualHeight(".grid-product__wrapper"),$("body").hasClass("template-product")&&product_image_height()}),$(window).load(function(){var e=$(".search-product,.natural-product").find(".grid-product__wrapper").map(function(){return $(this).height()}).get();maxHeight=Math.max.apply(null,e),$(".search-product,.natural-product").find(".grid-product__wrapper").css("height",maxHeight+80)}),$("body").hasClass("template-collection")&&($(window).innerWidth()>767&&($(".filter-menu").hide(),$(".collectionfilters").click(function(){$(".filter-menu").toggle(),$("#collection-right").toggleClass("three-quarters"),"Show"==$(this).find("span.show_hide").text()||"SHOW"==$(this).find("span.show_hide").text()?$(this).find("span.show_hide").text("HIDE"):$(this).find("span.show_hide").text("SHOW"),$(".filter-menu").click(function(e){$(".filter-menu").show()})})),$(window).on("load",function(e){$(window).resize(function(e){$(".collection-right .grid--full").jQueryEqualHeight(".grid-product__wrapper")}),$(".collection-right .grid--full").jQueryEqualHeight(".grid-product__wrapper")}),$(window).resize(function(e){$(".collection-right .grid--full").jQueryEqualHeight(".grid-product__wrapper")})),jQuery(document).ready(function(e){var t=[];if(e.ajax({url:"/products.json?limit=250",success:function(i){e.each(i.products,function(e,i){t.push(i.title)})}}),e(".search__input,.search-bar--page .input-group-field").autocomplete({source:t}),e(".search-bar--page .input-group-field").focus(function(){e(".ui-autocomplete").addClass("search--page")}),e(".search__input").focus(function(){e(".ui-autocomplete").removeClass("search--page")}),e(window).innerWidth()<768&&e(".main-slideshow .mobile--homepage__slider").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:!0}),e(".mobile-nav__link").click(function(){e(this).next(".mobile-nav__toggle").find(".mobile-nav__toggle-btn").trigger("click")}),e(".mobile-nav__sublistchild .mobile-nav__item-without_link .mobile-nav__has-sublist a").click(function(t){t.preventDefault(),e(this).next().trigger("click").trigger("click")}),e(".mobile-nav__sublistchild .mobile-nav__item-with_link .mobile-nav__has-sublist a").click(function(t){t.preventDefault(),e(this).next().trigger("click").trigger("click"),e(this).unbind("click")}),console.log(window.location),"https://hul-lakme.myshopify.com/collections/kareena-kapoor-khan"==window.location&&(window.location.href="https://hul-lakme.myshopify.com/pages/kareena-kapoor-khan-collection"),"https://hul-lakme.myshopify.com/collections/absolute-nude"==window.location&&(window.location.href="https://hul-lakme.myshopify.com/pages/absolute-nudes-collection"),e("body").hasClass("template-page")&&e("ul.tabs1 li").click(function(){var t=e(this).attr("data-tab");e("ul.tabs1 li").removeClass("current"),e(".tab-content1").removeClass("current"),e(this).addClass("current"),e("#"+t).addClass("current"),e(".display-table .insta--feed iframe").each(function(){e(this).attr("src",e(this).data("src"))})}),e("body").hasClass("template-article")){e(window).innerWidth()>767?e(".article__collection").slick({dots:!1,infinite:!0,speed:900,slidesToShow:3,slidesToScroll:1}):e(".article__collection").slick({dots:!1,infinite:!0,speed:900,slidesToShow:1,slidesToScroll:1});var i=e(".related--articles div.blog_post").size(),a=3;e(".related--articles div.blog_post:lt("+a+")").show(),e("#loadMore").click(function(){e(".related--articles div.blog_post:lt("+(a=a+3<=i?a+3:i)+")").show(),i==a&&e("#loadMore").hide()}),0==e(".related--articles").length&&e(".article__related-products").hide(),e(".related--articles .blog_post").length<3&&e("#loadMore").hide(),e(".custom-field__video-1").hide(),e(".custom-field__video-2").hide(),e(".custom-field__video-3").hide(),e(".custom-field__video-image-1").on("click",function(t){e(".custom-field__video-1").css("display","block"),e(".custom-field__video-image-1").hide(),e(".custom-field__video-1 iframe")[0].src+="&autoplay=1",t.preventDefault()}),e(".custom-field__video-image-2").on("click",function(t){e(".custom-field__video-2").css("display","block"),e(".custom-field__video-image-2").hide(),e(".custom-field__video-2 iframe")[0].src+="&autoplay=1",t.preventDefault()}),e(".custom-field__video-image-3").on("click",function(t){e(".custom-field__video-3").css("display","block"),e(".custom-field__video-image-3").hide(),e(".custom-field__video-3 iframe")[0].src+="&autoplay=1",t.preventDefault()})}if(e(".addtocartAddedText-cross").click(function(){e(".addtocartAddedText").removeClass("active"),e(".addtocartAddedText").hide()}),e(document).click(function(){e(".email__error1").text(""),e(".email__error1").hide()}),e("#Subscribe").click(function(){return t=e("#Email").val(),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?""==e("#Email").val()?(e(".email__error1").css("display","block"),e(".email__error1").text("Please enter a valid email address"),!1):void 0:(e(".email__error1").css("display","block"),e(".email__error1").text("Please enter a valid email address"),!1);var t}),e(".js-toggle-search-page").click(function(t){t.preventDefault(),e(".search-header").toggle(),t.stopPropagation()}),e(".search-header").click(function(e){e.stopPropagation()}),e(document).click(function(){e(".search-header").hide()}),e(".trends-pages").parents("body").addClass("trends-page-wrapper"),e(".trendss--inner_page").parents("body").addClass("trends-inner-page-wrapper"),e("body").hasClass("customer-logged-in"),e(".account__link").click(function(t){t.preventDefault(),e(".account--links").toggle()}),e("#ContactFormFirstName").blur(function(){e(".firstname__error").text(""),e(".firstname__error").hide()}),e("#ContactFormLastName").blur(function(){e(".lastname__error").text(""),e(".lastname__error").hide()}),e("#ContactFormPhone").blur(function(){e(".phone__error").text(""),e(".phone__error").hide()}),e("#ContactFormEmail").blur(function(){e(".email__error").text(""),e(".email__error").hide()}),e("#ContactFormMessage").blur(function(){e(".message__error").text(""),e(".message__error").hide()}),e("#contact__button").click(function(){if(""==e("#ContactFormFirstName").val())return e(".firstname__error").css("display","block"),e(".firstname__error").text("Please enter first name"),!1;if(e("#ContactFormFirstName").val().length<3)return e(".firstname__error").css("display","block"),e(".firstname__error").text("First name should contains atleast 3 letters"),!1;if(e("#ContactFormFirstName").val().match(/[|\\/~^:,;?!&%$@*+]/))return e(".firstname__error").css("display","block"),e(".firstname__error").text("First name should not contain symbols"),!1;if(""==e("#ContactFormLastName").val())return e(".lastname__error").css("display","block"),e(".lastname__error").text("Please enter last name"),!1;if(e("#ContactFormLastName").val().length<3)return e(".lastname__error").css("display","block"),e(".lastname__error").text("Last name should contains atleast 3 letters"),!1;if(e("#ContactFormLastName").val().match(/[|\\/~^:,;?!&%$@*+]/))return e(".lastname__error").css("display","block"),e(".lastname__error").text("Last name should not contain symbols"),!1;if(""==e("#ContactFormPhone").val())return e(".phone__error").css("display","block"),e(".phone__error").text("Please enter phone number"),!1;if(10!=e("#ContactFormPhone").val().length)return e(".phone__error").css("display","block"),e(".phone__error").text("Phone number must contain 10 digits"),!1;return""==e("#ContactFormEmail").val()?(e(".email__error").css("display","block"),e(".email__error").text("Please enter a valid email address"),!1):(t=e("#ContactFormEmail").val(),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?""==e("#ContactFormMessage").val()?(e(".message__error").css("display","block"),e(".message__error").text("Please enter message"),!1):e("#ContactFormMessage").val().length<15?(e(".message__error").css("display","block"),e(".message__error").text("Message must contains atleast 15 letters"),!1):void 0:(e(".email__error").css("display","block"),e(".email__error").text("Please enter a valid email address"),!1));var t}),e("body").hasClass("template-customers-login")){function s(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}e(".email__field").blur(function(){e(".email__error").text(""),e(".email__error").hide()}),e(".email__password").blur(function(){e(".password__error").text(""),e(".password__error").hide()}),e(".login--button").click(function(){return""==e(".email__field").val()?(e(".email__error").css("display","block"),e(".email__error").text("Please enter a valid email address"),!1):s(e(".email__field").val())?""==e(".email__password").val()?(e(".password__error").css("display","block"),e(".password__error").text("Please enter password"),!1):void 0:(e(".email__error").css("display","block"),e(".email__error").text("Please enter a valid email address"),!1)}),e(".forget--button").click(function(){if(""==e("#RecoverEmail").val()&&!s(e("#RecoverEmail").val()))return e(".recovery__error").css("display","block"),e(".recovery__error").text("Please enter a valid email address"),!1})}var r=jQuery(window).height(),o=jQuery("#shopify-section-header").height(),l=jQuery("#shopify-section-footer").height();if(jQuery(".main-content").css("min-height",r-(o+l)),jQuery(window).resize(function(){var e=jQuery(window).height(),t=jQuery("#shopify-section-header").height(),i=jQuery("#shopify-section-footer").height();jQuery(".main-content").css("min-height",e-(t+i))}),e("body").hasClass("template-collection")){if(-1!=navigator.appVersion.indexOf("Mac"));else{var n=!1;e(window).on("scroll",function(){var t=e(document).height();(t-(e(window).height()+e(window).scrollTop()))/t==0?(e("#sidebar--sticky").css("position","absolute"),e(".filter-menu").css("display","none"),n=!0):n=!1,0==n&&"HIDE"==e(".show_hide").text()&&e(".filter-menu").css("display","block")})}var c=function(e){var t,i,a=decodeURIComponent(window.location.search.substring(1)).split("&");for(i=0;i<a.length;i++)if((t=a[i].split("="))[0]===e)return void 0===t[1]||t[1]};function d(t,i){e(".main-content .not-allowed-layer").show();var a="";t.indexOf("?")>-1?a=t.split("?")[0]:a=t;""!=i&&void 0!=i&&(a=a+"?sort_by="+i),history.pushState(null,"",a),h(a)}function h(t){e.ajax({url:t,method:"GET",success:function(t){var i=e("<div></div>").html(t);e("#collection-right").html(e("#collection-right",i).html()),e(".filter-menu-option").html(e(".filter-menu-option",i).html()),e(".main-content .not-allowed-layer").hide(),e(".filter-group-bestsellers .nav-bestsellers").hide(),e(".filter-group-bestsellers ul").removeClass("has_selected"),e(".collection-right .grid--full").jQueryEqualHeight(".grid-product__wrapper")}})}if(e(document).on("click",".collection-container",function(t){t.preventDefault(),d(e(this).find("a").attr("href"),c("sort_by"))}),e(document).on("click",".filter-clear",function(t){t.preventDefault(),d(e(this).attr("href"),c("sort_by"))}),e(document).on("click",".sorting_list li a",function(t){t.preventDefault(),d(window.location.href,e(this).attr("data-select")),e(".filter-dropdown__label--title").text(e(this).text()),e(".filter-dropdown__label--title").trigger("click")}),e(window).on("popstate",function(){h(window.location.href)}),e(".main-content").css("position","relative"),e(".main-content").append('<div class="not-allowed-layer" style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:99;cursor:wait"></div>'),e(".main-content .not-allowed-layer").hide(),e(window).innerWidth()>767)if(-1!=navigator.appVersion.indexOf("Mac")){var p=e(window).scrollTop();e(".collection-slider").height();p>=500?(setTimeout(function(){e("#sidebar--sticky").floatit({limiter:"footer",preserve_width:!1,top_spacing:70,bottom_spacing:10,recalculate:!1})},1e3),e(window).on("scroll",function(){var t=e(document).height();(t-(e(window).height()+e(window).scrollTop()))/t==0&&e("#sidebar--sticky").css("position","absolute")})):e(window).innerWidth()>767&&e(window).innerWidth()<1025||(setTimeout(function(){e("#sidebar--sticky").floatit({limiter:"footer",preserve_width:!0,top_spacing:70,bottom_spacing:10,recalculate:!1})},1e3),e(window).on("scroll",function(){var t=e(document).height();(t-(e(window).height()+e(window).scrollTop()))/t==0&&e("#sidebar--sticky").css("position","absolute")}))}else e("#sidebar--sticky").floatit({limiter:"footer",preserve_width:!0,top_spacing:70,bottom_spacing:10,recalculate:!0});if(e("body").hasClass("skincare-template")&&(e(".filter-menu-option .filter-group-product-type").hide(),e(".filter-menu-option .filter-group-texture").hide(),e(".filter-menu-option .filter-group-face").hide()),e("body").hasClass("makeup-template")&&e(".filter-menu-option .filter-group-yqudhilc").hide(),e("#NavDrawer").click(function(){}),e(".grid-product__image-wrapper").css("height",""),e(window).innerWidth()<768){var u=e(".filter-menu").attr("class");-1!=u.indexOf("filter-selected")&&-1==u.indexOf("filter-menu-none-selected")&&e(".has_group_selected").hide(),e(".filter-menu").on("click",function(t){if(e(this).hasClass("filter-group-bestsellers")){var i=e(".filter-group-bestsellers a").attr("href");history.pushState(null,"",i),h(i)}e(".has_group_selected").show(),"none"!=e(".sorting_list").css("display")?(e(".sorting_list").hide(),e(".filter-menu-option").show(),e(".filter-menu").addClass("filter--menu_selected pt-expand"),e(".filter-menu").removeClass("filter--menu_selected")):(e(".filter-menu-option").show(),e(".filter-menu").addClass("filter--menu_selected pt-expand"),e(".filter-menu").removeClass("filter--menu_selected"))})}else e(".filter-group").on("click",function(){e(this).siblings().removeClass("pt-group-expanded")});e(document).on("click",".filter-group-bestsellers",function(){if(e(this).hasClass("filter-group-bestsellers")){var t=e(".filter-group-bestsellers a").attr("href");history.pushState(null,"",t),h(t)}})}e(".privacy-policy__accordion #accordion > li > span").click(function(){e(this).toggleClass("active").next("div").slideToggle(250).closest("li").siblings().find("span").removeClass("active").next("div").slideUp(250);var t=e(".privacy-policy__accordion #accordion").offset().top-90;console.log(t),e("html, body").animate({scrollTop:t},1e3)})}),$("body").hasClass("template-collection")){$(".check-pincode").click(function(){var e=$(".pincode-text").text(),t=$(".pincode-text1").text(),i=$(".field__input--zip").val();-1!=e.indexOf(i)&&""!=i&&"6"==i.length?($("#msg").text(""),$("#msg").text("{{settings.msg}}")):-1!=t.indexOf(i)&&""!=i&&"6"==i.length?($("#msg").text(""),$("#msg").text("{{settings.msg1}}")):""==i?($("#msg").text(""),$("#msg").text("Please enter your pincode")):($("#msg").text(""),$("#msg").text("Delivery not available."))}),$(window).innerWidth()<768&&$(".product-single__thumbnails li a").click(function(){$(".product-single__thumbnails li").removeClass("active-thumbSwatch"),$(".product-single__thumbnail").removeClass("active-thumb"),$(this).addClass("active-thumb");var e=$(this).find("img").attr("src");$(".product-single__photo--flex-wrapper .product-single__photo--container").each(function(){$(this).attr("data-swatch")==e?$(this).removeClass("hide"):$(this).addClass("hide")})}),product_image_height();var getUrlParameter=function(e){var t,i,a=decodeURIComponent(window.location.search.substring(1)).split("&");for(i=0;i<a.length;i++)if((t=a[i].split("="))[0]===e)return void 0===t[1]||t[1]},url_variantId=getUrlParameter("variant"),swatch_value="";if($(".product-single__meta--wrapper .swatch .swatch-element").each(function(){if($(this).attr("data-variantid")==url_variantId){$(".swatch .swatch-element").removeClass("active_swatch"),$(this).addClass("active_swatch"),swatch_value=$(this).attr("data-swatch");var e=$(this).attr("data-basepack"),t=$(this).attr("data-cbu");$("#Basepack").val(e),$("#CBU").val(t)}}),$(".product-single__meta--wrapper .swatch").length>0&&$(".product-single__thumbnails .product-single__photo-wrapper").each(function(){var e=$(this).find("img").attr("alt");swatch_value==e?$(this).show():$(this).hide()}),void 0==url_variantId&&$(".product-single__meta--wrapper .swatch").length>0){var swatch_alt=$(".swatch .swatch-element").attr("data-swatch");$(".product-single__thumbnails .product-single__photo-wrapper").each(function(){var e=$(this).find("img").attr("alt");swatch_alt==e?$(this).show():$(this).hide()})}$(".swatch .swatch-element").click(function(e){e.preventDefault(),$("#Quantity").val("1");var t=$(this).attr("data-swatchmaster"),i=$(this).attr("data-price"),a=$(this).attr("data-compareprice");if(""==a?($(".product-single__price--wrapper").addClass("hide"),$("span#ComparePrice").text(),$(".product-single__price").removeClass("on-sale"),$("span#ProductPrice").text(""),$("span#ProductPrice").text(i)):($(".product-single__price--wrapper").removeClass("hide"),$(".product-single__price").addClass("on-sale"),$("span#ProductPrice").text(""),$("span#ProductPrice").text(i),$("span#ComparePrice").text(),$("span#ComparePrice").text(a)),$(this).hasClass("soldout")){$(".swatch-element").removeClass("active_swatch"),$(".soldout-btn").css("display","block"),$("#AddToCart--product-template").hide();var s=$(this).attr("data-swatchmaster"),r=$(this).attr("data-swatch");console.log(r),$(".product-single__thumbnails .product-single__photo-wrapper").each(function(){var e=$(this).find("img").attr("alt");r==e?($(this).trigger("click"),$(this).show()):$(this).hide()}),$(".product-single__thumbnails li.product-single__photo-wrapper").each(function(){var e=$(this).attr("data-swatchImage");s==e&&($(this).children().addClass("active-thumb"),$(this).children().trigger("click"),$(".active-thumb").length>1&&$(this).children().addClass("active-thumb"))}),$(".product-single__photo--flex-wrapper").each(function(){$(this).find(".product-single__photo--container").attr("data-swatchimage")==t&&($(this).siblings().hide(),$(".product-single__photo--flex-wrapper .product-single__photo--flex .product-single__photo--container").addClass("hide"),$(this).find(".product-single__photo--container").removeClass("hide"))})}else{$("#AddToCart--product-template").css("display","block"),$("#AddToCart--product-template").find(".btn__text").text("Add to cart"),$("#AddToCart--product-template").attr("disabled",!1),$(".soldout-btn").hide();s=$(this).attr("data-thumbimage");var o=$(this).attr("data-inventory");null!=o?($(".hidden_qty").val(o),$(".qty__error").text(""),$(".qty__error").text("Quantity cannot be more than "+o)):($(".hidden_qty").val(0),$(".qty__error").hide(),$(".qty__error").text(""));var l=$(this).attr("data-basepack");$("#Basepack").val(l);var n=$(this).attr("data-cbu");$("#CBU").val(n),$(this).siblings().removeClass("active_swatch"),$(this).addClass("active_swatch");r=$(this).attr("data-swatch");$(".product-single__thumbnails .product-single__photo-wrapper").each(function(){var e=$(this).find("img").attr("alt");r==e?$(this).show():$(this).hide()}),$(".product-single__photo--flex-wrapper").each(function(){$(this).find(".product-single__photo--container").attr("data-swatchimage")==t&&($(this).siblings().hide(),$(".product-single__photo--flex-wrapper .product-single__photo--flex .product-single__photo--container").addClass("hide"),$(this).find(".product-single__photo--container").removeClass("hide"))}),$(".product-single__thumbnails li").each(function(){var e=$(this).attr("data-swatchimage");t==e&&($(this).siblings().removeClass("active-thumbSwatch"),$(this).addClass("active-thumbSwatch"))})}}),$("#Quantity").keyup(function(){"0"==$(this).val()&&$(this).val(1)}),$(".site-nav .site-nav__item").removeClass("site-nav--active");var selectCallback=function(e,t){if(e)for(var i=jQuery("#"+t.domIdPrefix).closest("form"),a=0,s=e.options.length;a<s;a++){var r=i.find('.swatch[data-option-index="'+a+'"] :radio[value="'+e.options[a]+'"]');r.size()&&(r.get(0).checked=!0)}};jQuery(".swatch :radio").change(function(){var e=jQuery(this).closest(".swatch").attr("data-option-index"),t=jQuery(this).val();jQuery(this).closest("form").find(".single-option-selector").eq(e).val(t).trigger("change")})}$(".nav-application li").each(function(){$(this).find("a").wrapInner("<span></span")}),$("#ProductThumbs li").each(function(){if($(this).is(":visible")){var e=$(this).attr("data-swatchimage");console.log(e),$(".product-single__photo--flex-wrapper").each(function(){var t=$(this).find(".product-single__photo--container-thumb ").attr("data-swatchimage");e==t&&($(this).addClass("single-selected"),$(this).find(".product-single__photo--container-thumb").removeClass("hide"))})}}),$(".single-selected").wrapAll('<div class="main-single-wrapper"></div>'),setTimeout(function(){$(".main-single-wrapper").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:1,slidesToScroll:1})},1e3),$(".swatch .swatch-element").click(function(){var e=$(".main-single-wrapper .slick-track").html();$(".main-wrap").append(e),$(".product-single__photo--flex-wrapper").removeClass("slick-slide slick-cloned slick-active single-selected"),$(".product-single__photo--flex-wrapper").removeAttr("index"),$(".main-single-wrapper").remove(),$(".single-selected").each(function(){$(this).parent().is(".main-single-wrapper")&&$(this).unwrap(".main-single-wrapper")}),$(".product-single__photo--flex-wrapper").removeClass("single-selected"),setTimeout(function(){$("#ProductThumbs li").each(function(){if($(this).is(":visible")){var e=$(this).attr("data-swatchimage");$(".product-single__photo--flex-wrapper").each(function(){var t=$(this).find(".product-single__photo--container-thumb ").attr("data-swatchimage");e==t&&($(this).addClass("single-selected"),$(".main-single-wrapper .product-single__photo--flex-wrapper").css("display","block"),$(this).find(".product-single__photo--container-thumb").removeClass("hide"))})}}),$(".single-selected").parent().is(".main-single-wrapper")||$(".single-selected").wrapAll('<div class="main-single-wrapper"></div>')},1e3),setTimeout(function(){$(".main-single-wrapper").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:1,slidesToScroll:1}),$(".single-selected").css("display","block"),$(".main-single-wrapper .slick-prev").click(function(){$(".single-selected").css("display","block"),$(".product-single__thumbnails li").removeClass("active-thumbSwatch"),$(".product-single__thumbnails li").find("a").removeClass("active-thumb");var e=$(".slick-active").find(".product-single__photo--container-thumb").attr("data-swatchimage");$("#ProductThumbs li").each(function(){var t=$(this).attr("data-swatchimage");e==t&&$(this).children("a").addClass("active-thumb")})}),$(".main-single-wrapper .slick-next").click(function(){$(".product-single__thumbnails li").removeClass("active-thumbSwatch"),$(".single-selected").css("display","block"),$(".product-single__thumbnails li").find("a").removeClass("active-thumb");var e=$(".slick-active").find(".product-single__photo--container-thumb").attr("data-swatchimage");$("#ProductThumbs li").each(function(){var t=$(this).attr("data-swatchimage");e==t&&$(this).children("a").addClass("active-thumb")})})},2e3)}),setTimeout(function(){$(".main-single-wrapper .slick-prev").click(function(){$(".product-single__thumbnails li").removeClass("active-thumbSwatch"),$(".single-selected").css("display","block"),$(".product-single__thumbnails li").find("a").removeClass("active-thumb");var e=$(".slick-active").find(".product-single__photo--container-thumb").attr("data-swatchimage");$("#ProductThumbs li").each(function(){var t=$(this).attr("data-swatchimage");e==t&&$(this).children("a").addClass("active-thumb")})}),$(".main-single-wrapper .slick-next").click(function(){$(".product-single__thumbnails li").removeClass("active-thumbSwatch"),$(".single-selected").css("display","block"),$("#ProductThumbs li").find("a").removeClass("active-thumb");var e=$(".slick-active").find(".product-single__photo--container-thumb").attr("data-swatchimage");$("#ProductThumbs li").each(function(){var t=$(this).attr("data-swatchimage");e==t&&$(this).children("a").addClass("active-thumb")})})},3e3),$(".product-single__thumbnails li").click(function(e){e.preventDefault(),$(".slick-slide .product-single__photo--container").removeClass("hide");try{$(this).find("a").hasClass("video-thumb")||($(".single-img").removeClass("hide"),$(".product-video-wrapper").addClass("hide"),$(".product-video").get(0).pause())}catch(e){console.log(e)}$(this).siblings().removeClass("active-thumbSwatch"),$("#ProductThumbs li").find("a").removeClass("active-thumb"),$(this).addClass("active-thumbSwatch");var t=$(this).attr("data-swatchimage");$(".single-selected").removeClass("slick-active"),$(".main-single-wrapper").find(".single-selected").each(function(){if($(this).find(".product-single__photo--container-thumb").attr("data-swatchimage")==t){var e,i=$(this).attr("index");$(".main-single-wrapper").slick("slickGoTo",i),$(this).addClass("slick-active"),0==i?$(".single-img .slick-track").css("transform","translate3d(0px, 0px, 0px)"):1==i?(e="-"+$(".product-single__photo--flex-wrapper").width()+"px",$(".single-img .slick-track").css("transform","translate3d("+e+", 0px, 0px)")):2==i?(e="-"+2*$(".product-single__photo--flex-wrapper").width()+"px",$(".single-img .slick-track").css("transform","translate3d("+e+", 0px, 0px)")):3==i?(e="-"+3*$(".product-single__photo--flex-wrapper").width()+"px",$(".single-img .slick-track").css("transform","translate3d("+e+", 0px, 0px)")):4==i&&(e="-"+4*$(".product-single__photo--flex-wrapper").width()+"px",$(".single-img .slick-track").css("transform","translate3d("+e+", 0px, 0px)"))}})}),$(document).ready(function(){var e=$(".related-slider").find(".grid-product__wrapper").map(function(){return $(this).height()}).get();maxHeight=Math.max.apply(null,e),$(".related-slider").find(".grid-product__wrapper").css("height",maxHeight+80);var t;e=$(".article__collection").find(".grid-product__wrapper").map(function(){return $(this).height()}).get();maxHeight=Math.max.apply(null,e),$(".article__collection").find(".grid-product__wrapper").css("height",maxHeight+80);try{if((t={},window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,i,a){t[i]=a}),t).customer_posted){var i=window.location.href,a=(i=i.split("?"))[0];"true"==$.cookie("contact")&&(window.location.href=a),setTimeout(function(){$(".fancybox-close").click(function(){console.log(document.location.replace),$.cookie("contact","true"),window.location.href=a})},8e3)}}catch(e){console.log(e)}$(window).width()<667&&($(".footer-content").css("display","none"),$(".footer-heading").click(function(){$(this).siblings(".footer-content").slideToggle(300),$(this).toggleClass("active-footer")})),setTimeout(function(){$(".open-chat").click(function(){$("#liveagent_button_online_5730L0000008fyx").trigger("click")})},2e3),ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&$("body").addClass("ie-browser"),$(".search__input").keyup(function(){$(".search__input").val($(this).val())}),768==$(window).width()&&$(".article__featured-wrapper").css("display","block").css("margin","auto").css("max-width","400px")});