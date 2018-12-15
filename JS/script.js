$(document).ready(function(){
    $('#menu').load('/menu.html');});
$(document).ready(function(){
        $('#sidebarNav').load('/sidebar.html');});
$(document).ready(function(){
    $('#footer').load('/footer.html');});
$('a.anchor').on('click',function(e){e.preventDefault();
    var targetID=$(this).attr('href')
    var elementPosition=$(targetID).offset().top
$('html,body').animate({scrollTop:elementPosition},'slow');});
$(document).on('click','[data-toggle="lightbox"]',function(event){event.preventDefault();
    $(this).ekkoLightbox();});window.onload=function(){
        var toTopButton=document.getElementById("myBtn");
        window.onscroll=function(){
        var progres=document.getElementById("progres");
        var toTopButton=document.getElementById("myBtn");
        var yScrollAxis=window.pageYOffset;if(yScrollAxis>200)toTopButton.style.display="block";
        else
        toTopButton.style.display="none";
        var x=(yScrollAxis/(document.documentElement.scrollHeight-window.innerHeight))*100;progres.innerHTML=x.toFixed(0)+'%';};
        toTopButton.onclick=function(){window.scrollBy(0,-1*window.pageYOffset);};};
        var ds_loaded=false;function loadDisqus(){var disqus_div=$("#disqus_thread");
        var top=disqus_div.offset().top;
        var disqus_data=disqus_div.data();
        if(!ds_loaded&&$(window).scrollTop()+$(window).height()>top){ds_loaded=true;for(var key in disqus_data){
            if(key.substr(0,6)=='disqus'){window['disqus_'+key.replace('disqus','').toLowerCase()]=disqus_data[key];}}var dsq=document.createElement('script');dsq.type='text/javascript';dsq.async=true;dsq.src='https://'+window.disqus_shortname+'.disqus.com/embed.js';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(dsq);}
            if(ds_loaded){$("#btnDisqusLoadComments").hide();}
            else{
                $("#btnDisqusLoadComments").show();}}$(function(){
                    var disqus_div=$("#disqus_thread");
                    if(disqus_div.size()>0){
                        $(window).scroll(loadDisqus);}});
                        $(function(){$("#btnDisqusLoadComments").click(loadDisqus);});