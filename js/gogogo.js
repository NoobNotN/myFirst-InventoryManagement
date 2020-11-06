$(document).ready(function(){
    var ch;
    var num;
    var cnum;
    var shopname;
    var name;
    var X;
    var cname;
    var cprice
    $("#zhuce").click(function () {
        window.location.replace("http://123.57.92.105:8889/zhuce.html");
    })
    var pam=setInterval(function () {
        var obj = $(".number-amount");
        $.each(obj,function(key,val) {
            // alert(this.value);
            if($(this).html() < 21) {
                $(this).css("background","orangered");
            }
            if($(this).html() > 20) {
                $(this).css("background","white");
            }
            if($(this).html() > 200) {
                $(this).css("background","greenyellow");
            }
        });
    },200);
    $('#load').click(function () {

        /*获取用户名和密码*/
        var username =document.getElementById('user').value;
        var password =document.getElementById('password').value;
        var iu=document.getElementById('aad');


        // console.log(user);
        // console.log(password);


        if(username===''||password==='')
        {
            alert("用户名和密码不能为空");
        }
        else {
            $.ajax({
                url:"php/login.php",
                type:"post",
                datatype:"json",
                //如果为get方法date可不写
                data:{
                    username:username,
                    password:password
                },
                //json为后台异步传来的数据
                success:function(data){
                    //接到数据后的操作

                    if(data==0){
                        console.log(data);
                        alert("滚蛋");
                    }
                    else {
                        $(".content").css({
                            "display":"none"
                        });
                        $.ajax({
                            url: "php/shopname.php",
                            type: "POST",
                            datatype: "json",
                            data:{
                                username:username,
                            },
                            success:function (res) {
                                let obj = JSON.parse(res);
                                document.getElementById("x-1").innerHTML=obj[0];
                                document.getElementById("x-2").innerHTML=obj[1];
                                document.getElementById("x-3").innerHTML=obj[2];
                            },
                            error:function () {
                                console.log("发送失败");
                            }
                        })

                    }
                },
                error:function(){

                }
            });
        }
    });
    $('#1-1').click(function(){
        let shopname=$(this).children("div").html();
        $.ajax({
            url:"php/begin.php",
            type:"POST",
            data:{
                shopname:shopname
            },
            datatype:"JSON",
            success: function(item){
                let obj = JSON.parse(item);
                var mainbox_1=document.getElementById("mainbox-1");
                for(let i=0;i<obj.length;i++){
                    var ii=(i+2)%2;
                        mainbox_1.innerHTML+= "    <div class=\"mainbox-1\">\n" +
                            "        <div class=\"mainbox-l\">\n" +
                            "            <span style=\"display:none\">"+shopname+"</span><img class=\"mainbox-p\"\n" +
                            "                 src=\"png/"+shopname+"/"+i+".JPG\">\n" +
                            "            <div class=\"mainbox-name\">"+obj[i].name+"</div>\n" +
                            "        </div>\n" +
                            "        <div class=\"mainbox-r\">\n" +
                            "            <div class=\"number-price\">"+obj[i].price+""+"</div>\n" +
                            "<div class=\"number-oneprice\">元/件</div>"+
                            "            <div class=\"number-amount\">"+obj[i].num+"</div>\n" +
                            "        </div>"
                    }

                }

            },
            error:function(){
                console.log("请求失败")
            }
        })
    })
    $('#1-2').click(function(){
        let shopname=$(this).children("div").html();
        $.ajax({
            url:"php/begin.php",
            type:"POST",
            data:{
                shopname:shopname
            },
            datatype:"JSON",
            success: function(item){

                let obj = JSON.parse(item);
                var mainbox_1=document.getElementById("mainbox-2");
                for(let i=0;i<obj.length;i++){
                    var ii=(i+2)%2;

                    if(ii==0){
                        mainbox_1.innerHTML+= "    <div class=\"mainbox-1\">\n" +
                            "        <div class=\"mainbox-l\">\n" +
                            "            <span style=\"display:none\">"+shopname+"</span><img class=\"mainbox-p\"\n" +
                            "                 src=\"png/"+shopname+"/"+i+".JPG\">\n" +
                            "            <div class=\"mainbox-name\">"+obj[i].name+"</div>\n" +
                            "        </div>\n" +
                            "        <div class=\"mainbox-r\">\n" +
                            "            <div class=\"number-price\">"+obj[i].price+"</div>\n" +
                            "<div class=\"number-oneprice\">元/件</div>"+
                            "            <div class=\"number-amount\">"+obj[i].num+"</div>\n" +
                            "        </div>"
                    }
                    else{
                        mainbox_1.innerHTML+= "    <div class=\"mainbox-2\">\n" +
                            "        <div class=\"mainbox-l\">\n" +
                            "            <span style=\"display:none\">"+shopname+"</span><img class=\"mainbox-p\"\n" +
                            "                 src=\"png/"+shopname+"/"+i+".JPG\">\n" +
                            "            <div class=\"mainbox-name\">"+obj[i].name+"</div>\n" +
                            "        </div>\n" +
                            "        <div class=\"mainbox-r\">\n" +
                            "            <div class=\"number-price\">"+obj[i].price+"</div>\n" +
                            "<div class=\"number-oneprice\">元/件</div>"+
                            "            <div class=\"number-amount\">"+obj[i].num+"</div>\n" +
                            "        </div>"
                    }
                }

            },
            error:function(){
                console.log("请求失败")
            }
        })
    })
    $('#1-3').click(function(){
        let shopname=$(this).children("div").html();
        $.ajax({
            url:"php/begin.php",
            type:"POST",
            data:{
                shopname:shopname
            },
            datatype:"JSON",
            success: function(item){

                let obj = JSON.parse(item);
                var mainbox_1=document.getElementById("mainbox-3");
                for(let i=0;i<obj.length;i++){
                    var ii=(i+2)%2;
                    if(ii==0){
                        mainbox_1.innerHTML+= "    <div class=\"mainbox-1\">\n" +
                            "        <div class=\"mainbox-l\">\n" +
                            "            <span style=\"display:none\">"+shopname+"</span><img class=\"mainbox-p\"\n" +
                            "                 src=\"png/"+shopname+"/"+i+".JPG\">\n" +
                            "            <div class=\"mainbox-name\">"+obj[i].name+"</div>\n" +
                            "        </div>\n" +
                            "        <div class=\"mainbox-r\">\n" +
                            "            <div class=\"number-price\">"+obj[i].price+"</div>\n" +
                            "<div class=\"number-oneprice\">元/件</div>"+
                            "            <div class=\"number-amount\">"+obj[i].num+"</div>\n" +
                            "        </div>"
                    }
                    else{
                        mainbox_1.innerHTML+= "    <div class=\"mainbox-2\">\n" +
                            "        <div class=\"mainbox-l\">\n" +
                            "            <span style=\"display:none\">"+shopname+"</span><img class=\"mainbox-p\"\n" +
                            "                 src=\"png/"+shopname+"/"+i+".JPG\">\n" +
                            "            <div class=\"mainbox-name\">"+obj[i].name+"</div>\n" +
                            "        </div>\n" +
                            "        <div class=\"mainbox-r\">\n" +
                            "            <div class=\"number-price\">"+obj[i].price+"</div>\n" +
                            "<div class=\"number-oneprice\">元/件</div>"+
                            "            <div class=\"number-amount\">"+obj[i].num+"</div>\n" +
                            "        </div>"
                    }
                }

            },
            error:function(){
                console.log("请求失败")
            }
        })
    })


    var span=["    <div class=\"mainbox-1\">\n" +
    "        <div class=\"mainbox-l\">\n" +
    "            <img    class=\"mainbox-p\"\n" +
    "                    src=\"http://5b0988e595225.cdn.sohucs.com/images/20190102/18a939760fbf409182b89b9dda1e579f.jpeg\">\n" +
    "            <div class=\"mainbox-name\"> 点击更改</div>\n" +
    "        </div>\n" +
    "        <div class=\"mainbox-r\">\n" +
    "            <div class=\"number-price\" >点击</div>\n" +
    "<div class=\"number-oneprice\">元/件</div>"+
    "            <div class=\"number-amount\">             10</div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>","    <div class=\"mainbox-2\">\n" +
    "        <div class=\"mainbox-l\">\n" +
    "            <img    class=\"mainbox-p\"\n" +
    "                    src=\"http://5b0988e595225.cdn.sohucs.com/images/20190102/18a939760fbf409182b89b9dda1e579f.jpeg\">\n" +
    "            <div class=\"mainbox-name\"> 点击</div>\n" +
    "<div class=\"number-oneprice\">元/件</div>"+
    "        </div>\n" +
    "        <div class=\"mainbox-r\">\n" +
    "            <div class=\"number-price\" >点击更改</div>\n" +
    "            <div class=\"number-amount\">10</div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>"]
    var change=document.getElementById('change');
    var pricechange=document.getElementById('price-change');
    var namechange=document.getElementById('name-change');

    $("#1-1").click(function(){
        $("#mainbox-1").animate({left:'0'});
        $("#mainbox-2").animate({left:'100%'});
        $("#mainbox-3").animate({left:'200%'});
        $("#mainbox-1").html('    <div class="another" id="another1">+添加新商品+</div><span style="display:none">1</span>');
        $("#mainbox-2").html('    <div class="another" id="another2">+添加新商品+</div><span style="display:none">2</span>');
        $("#mainbox-3").html('    <div class="another" id="another3">+添加新商品+</div><span style="display:none">3</span>');

    });

    $("#1-2").click(function(){
        $("#mainbox-1").animate({left:'-100%'});
        $("#mainbox-2").animate({left:'0'});
        $("#mainbox-3").animate({left:'100%'});
        $("#mainbox-1").html('    <div class="another" id="another1">+添加新商品+</div><span style="display:none">1</span>');
        $("#mainbox-2").html('    <div class="another" id="another2">+添加新商品+</div><span style="display:none">2</span>');
        $("#mainbox-3").html('    <div class="another" id="another3">+添加新商品+</div><span style="display:none">3</span>');
    });

    $("#1-3").click(function(){
        $("#mainbox-1").animate({left:'-200%'});
        $("#mainbox-2").animate({left:'-100%'});
        $("#mainbox-3").animate({left:'0'});
        $("#mainbox-1").html('    <div class="another" id="another1">+添加新商品+</div><span style="display:none">1</span>');
        $("#mainbox-2").html('    <div class="another" id="another2">+添加新商品+</div><span style="display:none">2</span>');
        $("#mainbox-3").html('    <div class="another" id="another3">+添加新商品+</div><span style="display:none">3</span>');
    });
    // function fu(a){
    // 	console.log(this);
    // 	var num=a.innerHTML;
    // 	console.log(num);
    //}
    // $('.number-amount').click(function () {
    $(document).on("click",".number-amount",function(){
        console.log("开始测试");
        console.log(this);
        X=this;
        ch=0;
        cnum=0;
        num=X.innerHTML;
        // console.log(X);
        // console.log(cnum+"变更后");
        // console.log(ch+"改变量");
        // console.log(num+"现有量");
        name=$(X).parents("div:eq(1)").children("div:eq(0)").children("div").html();
        shopname=$(X).parents("div:eq(1)").children("div:eq(0)").children("span").text();
        change=document.getElementById('change');
        change.style.display="block";

    });
    $("#plus").click(function(){
        console.log(name)
        change.style.display="none";
        console.log(document.getElementById("change-input").value)
        ch=document.getElementById("change-input").value;
        cnum=Number(num)+Number(ch);
        document.getElementById("change-input").value="";
        X.innerHTML=(cnum);
        console.log(X.innerHTML);
        $.ajax({
            url:"php/changenum.php",
            type:"POST",
            datatype:"JSON",
            data:{
                shopname:shopname,
                name:name,
                cnum:cnum
            },
            success:function(res){
                console.log("连接成功");
            },
            error:function(){
                console.log("请求失败")
            }

        })
    });

    $("#reduce").click(function(){
        change.style.display="none";
        ch=document.getElementById("change-input").value;
        cnum=Number(num)-Number(ch);
        document.getElementById("change-input").value="";
        X.innerHTML=(cnum);
        console.log(X.innerHTML);
        $.ajax({
            url:"php/changenum.php",
            type:"POST",
            datatype:"JSON",
            data:{
                shopname:shopname,
                name:name,
                cnum:cnum
            },
            success:function(res){
                console.log("连接成功");
            },
            error:function(){
                console.log("连接失败");

            }

        })
    });

    // $('.number-price').click(function () {
    $(document).on("click",".number-price",function(){
        X=this;
        shopname=$(X).parents("div:eq(1)").children("div:eq(0)").children("span").text();
        name=$(this).parents("div:eq(1)").children("div:eq(0)").children("div").text();
        console.log(name);
        price=$(this).text();
        pricechange.style.display="block";

    });
    $('#prince-change-button').click(function () {
        cprice=$("#price-change-input").val();
        console.log(X);
        X.innerHTML=cprice;
        console.log(cprice);
        console.log(X);
        $.ajax({
            type:"POST",
            url:"php/changeprice.php",
            data:{
                shopname:shopname,
                name:name,
                cprice:cprice
            },
            success:function(){
                console.log("修改单价成功");
            },
            error:function(){
                console.log("修改单价失败");
            }
        })
        pricechange.style.display="none"; document.getElementById("price-change-input").value="";;
    })


    // $('.mainbox-name').click(function () {
    $(document).on("click",".mainbox-name",function(){
        X=this;
        shopname=$(this).parents("div:eq(0)").children("span").text();
        name=$(this).text();
        namechange.style.display="block";

    });
    $('#name-change-button').click(function () {
        namechange.style.display="none";
        cname=$("#name-change-input").val();
        $(X).innerHTML=cname;
        X.innerHTML=(cname);
        $.ajax({
            type:"POST",
            url:"php/changename.php",
            data:{
                shopname:shopname,
                name:name,
                cname:cname
            },
            datatype:"JSON",
            success:function(){
                console.log("修改名称成功");
            },
            error:function(){
                console.log("修改名称失败");
            }

        })

        document.getElementById("name-change-input").value="";;


    })
    var		nn1=$("#x-1").val();
    var		nn2=$("#x-2").val();
    var		nn3=$("#x-3").val();
    var witch1=0;
    $(document).on("click","#another1",function(){
        $('#mainbox-1').append(span[witch1]);
        if(witch1===1) {witch1=0;}
        else witch1=1;
        $.ajax({
            url:"php/addsell.php",
            type:"post",
            data:{
                shopname:nn1,
            },
            datatype:"JSON",
            success:function(){
                console.log("添加成功");
            },
            error:function(){
                console.log("添加失败");
            }
        })

    });
    var witch2=0;
    $(document).on("click","#another2",function(){
        $('#mainbox-2').append(span[witch2]);
        if(witch2===1){ witch2=0;}
        else witch2=1;
        $.ajax({
            url:"php/addsell.php",
            type:"post",
            data:{
                shopname:nn2
            },
            datatype:"JSON",
            success:function(){
                console.log("添加成功")
            },
            error:function(){
                console.log("添加失败");
            }
        })
    })
    var witch3=0;
    $(document).on("click","#another3",function(){
        $('#mainbox-3').append(span[witch3]);
        if(witch3===1) {witch3=0;}
        else witch3=1;
        $.ajax({
            url:"php/addsell.php",
            type:"post",
            data:{
                shopname:nn3,
            },
            datatype:"JSON",
            success:function(){
                console.log("添加成功");
            },
            error:function(){
                console.log("添加失败");
            }
        })
    })





});

// var qq=function (number) {
//     setInterval(function () {
//         if (number<6) this.style.background="red";
//     },500);
// }

// var classnames=document.getElementsByClassName('number-amount');
// function getElementsClass(classnames){
//     var classobj=new Array();
//     var tags=document.getElementsByTagName("*");//获取所有元素
//
//     for(i=0;i<tags.length;i++){//筛选出所有class属性符合条件的元素
//         alert(tags[i].html());
//         if(tags[i].html()<6){
//             tags[i].style.background="red";
//         }
//     }
// }
