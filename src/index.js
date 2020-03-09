var a="";
var b="";
var count=0;
for(var i=0;i<$("button").length;i++){
    /*eq传入变量要前后加+ +*/
    $("button:eq("+i+")").click(function(){
        if($(this).val()!="C" && $(this).val()!="="){
            a+=$(this).val();
            if(a.charAt(0)=="*"||a.charAt(0)=="/"||a.charAt(0)=="+"||a.charAt(0)=="."){
                a='';
            }
            if(a.charAt(a.length-1)=="."){
                count+=1;
            }
            if(count>=2){
                a=a.slice(0,a.length-1);
                count=1;
            }
            if(a.charAt(a.length-1)=="*"||a.charAt(a.length-1)=="/"||a.charAt(a.length-1)=="-"||a.charAt(a.length-1)=="+"||a.charAt(a.length-1)=="."){
                if(a.charAt(a.length-2)=="*"||a.charAt(a.length-2)=="/"||a.charAt(a.length-2)=="-"||a.charAt(a.length-2)=="+"||a.charAt(a.length-2)=="."){
                    a=a.slice(0,a.length-1);
                }
            }
            $("#result").html(a);
        }
        if($(this).val()=="C"){
            a='';
            $("#result").html(a);
        }
        if($(this).val()=="="){
            if(a.charAt(a.length-1)=="*"||a.charAt(a.length-1)=="/"||a.charAt(a.length-1)=="-"||a.charAt(a.length-1)=="+"||a.charAt(a.length-1)=="."){
                a=a.slice(0,a.length-1);
            }
            a=eval(a);
            a=Math.round(a* 100) / 100
            $("#result").html(a);
            
        }
    })
    
}