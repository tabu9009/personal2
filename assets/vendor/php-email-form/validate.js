
$(document).ready(function () {
  $("#submit-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      subject: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 5,
      },
    },
    submitHandler:function(){
      $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzdiyVeGXgv7fLBB653pS3Z1qnjV-wMpU42S8ZjyNxM_tuSGDHopHY6QMF0VwKxC23dng/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
  
        }
    })
    }
  });
});


 

