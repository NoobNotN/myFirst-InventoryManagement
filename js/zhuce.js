$(document).ready(function(){

    $('#zhuce').click(function () {
        if ($("#who").val()==12138) {
            if($("#user").val()===""||$("#password").val()===""||$("#shopnameone").val()===""||$("#shopnametow").val()===""||$("#shopnamethree").val()==="") alert("有必要信息填写不全");
            else{
                var username=$("#user").val();
                var password=$("#password").val();
                $.ajax({
                    type:"POST",
                    url:"php/register.php",
                    date:{
                        username:username,
                        password:password
                    },
                    success:function(date){
                        if(date==1){
                            window.location.replace("http://123.57.92.105:8889/");
                        }

                    },
                    error:function(){
                        console.log("发送失败");
                    }
                })

            }
        }
        else alert("注册验证码不对");
    })
})