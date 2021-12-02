window.onload=function(){
	/* JS highlights by https://github.com/kyleplo/minilight */!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):"undefined"!=typeof exports?t(exports):t(e.microlight={})}(this,function(e){var t,n,i,o=window,r=document,a="appendChild",l="test",s=["#222","#f50","#000","#356","#e80","#599","#930","#4af","#888","#6f6","#6f6"],c=function(e){for(n=r.getElementsByClassName(e||"minilight"),t=0;i=n[t++];)for(var o,c,d,u,f,h=i.textContent,m=0,g=h[0],p=1,y=i.innerHTML="",b=0;c=o,o=b<7&&"\\"==o?1:p;){if(p=g,g=h[++m],u=y.length>1,!p||b>8&&"\n"==p||[/\S/[l](p),1,1,!/[$\w]/[l](p),("/"==o||"\n"==o)&&u,'"'==o&&u,"'"==o&&u,h[m-4]+c+o=="--\x3e",c+o=="*/"][b])for(y&&(i[a](f=r.createElement("span")).setAttribute("style","color:"+s[/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/[l](y)?2:b]),f[a](r.createTextNode(y))),d=b&&b<7?b:d,y="",b=11;![1,/[\/{}[(\-+*=<>:;|\\.,?!&@~]/[l](p),/[\])]/[l](p),/[a-zA-Z0-9\ \.\:\;\,\?\!\-\_\t\r\náàâãÁÀÂÃéèêẽÉÈÊẼíìîĨóòôõÓÒÔÕúùûũÚÙÛŨüçÇ\°\ª\º\#\$\@\%\¢\&\*\=\§\/\+\(\)\[\]\{\}]/[l](p),"/"==p&&d<2&&"<"!=o,'"'==p,"'"==p,p+g+h[m+1]+h[m+2]=="\x3c!--",p+g=="/*",p+g=="//","#"==p][--b];);y+=p}};e.reset=c,"complete"==r.readyState?c():o.addEventListener("load",function(){c()},0)});


	if(window.location.href.indexOf('videos.html') != -1) //prevent script running all the time
	{
		// Find all the YouTube video embedded on a page by -> https://www.labnol.org/code/19452-embed-youtube-with-javascript
		var videos = document.getElementsByClassName("youtube");

		for (var i=0; i<videos.length; i++)
		{
		  var youtube = videos[i];

			  if(window.outerWidth>1200) {
			    $wid='900';$hei=395;
			  }else
			  if(window.outerWidth>800) {
			    $wid=640;$hei=395;
			  }else
			  if(window.outerWidth>500) {
			    $wid=480;$hei=315;
			  }
			  if(window.outerWidth<500) {
			    $wid=(window.outerWidth);$hei=(window.outerWidth-100);
			  }

			
		  // Based on the YouTube ID, we can easily find the thumbnail image
		  var img = document.createElement("img");			
		  img.setAttribute("src", "https://i.ytimg.com/vi/" + youtube.id + "/mqdefault.jpg");
		  //img.setAttribute("style","width:241px;height:181px");			
		  img.setAttribute("width","320");
		  img.setAttribute("height","180");			
		  img.setAttribute("class", "videoy-thumb");
			
		  // Overlay the Play icon to make it look like a video player
		  var circle = document.createElement("div");
		  circle.setAttribute("class","circle");

		  youtube.appendChild(img);
		  youtube.appendChild(circle);

		  // Attach an onclick event to the YouTube Thumbnail
		  youtube.onclick = function()
		  {
			// Create an iFrame with autoplay set to true			  
		    var iframe = document.createElement("iframe");
		    iframe.setAttribute("src","https://www.youtube.com/embed/" + this.id + "?autoplay=0&autohide=1&border=0&wmode=opaque?rel=0&enablejsapi=1&fs=1");			  
			iframe.setAttribute("width",$wid);
			iframe.setAttribute("height",$hei);
		    iframe.setAttribute("class","videoiframe");

		    // The height and width of the iFrame should be the same as parent
		    iframe.style.width  = this.style.width;

		    iframe.style.height = this.style.height;

		    // Replace the YouTube thumbnail with YouTube HTML5 Player
		    this.parentNode.replaceChild(iframe, this);

		  };
	   }
	}

	if(window.location.href.indexOf('prints.html') != -1 || window.location.href.indexOf('plugins.html') != -1 || window.location.href.indexOf('themes.html') != -1)
	{
		var imgz    = document.getElementsByClassName("z");
		var len		= imgz.length;
		var showimg = document.getElementById('showimg');

		for (var i=0; i<len; i++)
		{
		  var zz = imgz[i];

		  zz.onclick=function()
		  {
		     if(showimg.hasChildNodes()) showimg.innerHTML='';

		      var simg = document.createElement("img");
		          simg.setAttribute("src", this.src);
			  simg.setAttribute("class", "z");
			  simg.style="width:100%;height:100%";

			   $mwidth='100';
			  
				$percW=(window.outerWidth-this.naturalWidth);
			    if($percW>0) $percW=($percW/35);
			    else $percW=0;
			  
				$percH=(window.outerHeight-this.naturalHeight);
			    if($percH>0) $percH=($percH/100);
			    else $percH=0;			    
			  
  			    showimg.style="position:fixed;left:"+$percW+"%;top:"+$percH+"%;border:1px double red;box-shadow:-1px 1px 3px #000;padding:10px;background-color:#eee;overflow:auto;max-width:"+$mwidth+"%;max-height:94%;z-index:100";


		          showimg.insertAdjacentHTML('afterbegin','Zoom - Imagem "'+this.alt+'" <small>Clique nessa imagem sair</small><br><br>');
			  showimg.onclick=function() {this.removeChild(simg);this.innerHTML='';this.style='';}
		      showimg.appendChild(simg);
		  }
		}
	}
	
	document.getElementsByClassName('links')[0].innerHTML=''+
		'<h2>Links internos</h2>'+
		'<ul>'+
			'<li><a href="./index.html"><i class="fas fa-home"></i> Principal</a></li>'+
			'<li><a href="./install.html" title="Instalação e atualização do CMS"><i class="fas fa-link"></i> Instalação</a></li>'+
			'<li><a href="./history.html" title="Histórico do Bludit"><i class="fas fa-link"></i> Histórico</a></li>'+	
			'<li><a href="./videos.html"><i class="fas fa-link"></i> Vídeos</a></li>'+
			'<li><a href="./prints.html"><i class="fas fa-link"></i> Snapshots</a></li>'+
			'<li><a href="./func.html"><i class="fas fa-link"></i> Funcionamento</a></li>'+
			'<li><a href="./plugins.html" title="Plugins do Bludit"><i class="fas fa-link"></i> Extensões</a></li>'+
			'<li><a href="./themes.html" title="Temas do Bludit"><i class="fas fa-link"></i> Temas</a></li>'+	
			'<li><a href="./articles.html" title="Artigos do Bludit"><i class="fas fa-link"></i> Artigos</a></li>'+	
		'</ul>';
}
