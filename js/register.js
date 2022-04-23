
			$(function (){												
			$("#formRegister").submit(function(){		
	return checkFname()&&checkpsw()&&checkrepsw()&&checkEmail();	  			
						})
						$("#user").blur(checkFname);
						$("#pwd").blur(checkpsw);
						$("#repwd").blur(checkrepsw);
						$("#email").blur(checkEmail);
						
					})			       
					function checkFname() {
						var user = $('#user').val();
									var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
									if (reg.test(user) == false) {										
										$('#user').next().text("用户名不正确");
										return false;
									}
									$('#user').next().text("√");
									return true;
					}
					function checkpsw() {
					var pwd = $('#pwd').val();
								var reg = /^[a-zA-Z0-9]{4,10}$/;
								if (reg.test(pwd) == false) {
									$('#pwd').next().text("密码不能含有非法字符，长度在4-10之间");
									return false;
								}
								$('#pwd').next().text("√");
								return true;
					}
					function checkrepsw() {
					var repwd = $("#repwd").val();
								var pwd = $("#pwd").val();
								if (pwd != repwd) {
									$('#repwd').next().text("两次输入的密码不一致");
									return false;
								}
									$('#repwd').next().text("√");
								return true;
					}
					
					function checkEmail() {
					var email = $('#email').val();
								var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
								if (reg.test(email) == false) {
										$('#email').next().text("Email格式不正确");
									return false;
								}
								$('#email').next().text("√");
								return true;
					}
	
