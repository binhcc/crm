$(document).ready(function(){
    // Gọi API BE lấy danh sách ROLE
    $.ajax({
        url: "http://localhost:8080/crm_war/api/role", //Link lấy danh sách role
        method: "GET" //Phương thức tương ứng với link
    }).done(function(result){
        // Lấy thành công và trả ra kết quả
        $("#example tbody").empty()
        $.each(result,function(index,value){
            console.log(value)

            var row = `<tr>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.description}</td>
                <td>
                    <a href="#" class="btn btn-sm btn-primary">Sửa</a>
                    <a href="#" class="btn btn-sm btn-danger btn-delete" role-id="${value.id}">Xóa</a>
                </td>
            </tr>`

            $("#example tbody").append(row)
        })
    })

    $('body').on('click','.btn-delete',function(){
        // Lấy thuộc tính role-id từ button được click
        var roleId = $(this).attr('role-id')
        var This = $(this)

        $.ajax({
            url: `http://localhost:8080/crm_war/api/role?id=${roleId}`, //Link lấy danh sách role
            method: "DELETE", //Phương thức tương ứng với link
            // data: {
            //     key: value
            // },
            // dataType: "application/json"
        }).done(function(result){
            // Lấy thành công và trả ra kết quả
            if(result.isSuccess == true){
                This.closest('tr').remove()
            }else{
                console.log("Xoá thất bại !")
            }
        })  
    })

    $('#btn-save-role').click(function(e){
        e.preventDefault() //Chặn tất cả các sự kiện liên quan tới button
        
        var dataRole = $('#role').val()
        var dataDescription = $('#description').val()

        $.ajax({
            url: `http://localhost:8080/crm_war/api/role`, //Link lấy danh sách role
            method: "POST", //Phương thức tương ứng với link
            data: {
                role: dataRole,
                description: dataDescription
            },
            // dataType: "application/json"
        }).done(function(result){
            // Lấy thành công và trả ra kết quả
            if(result.isSuccess == true){
                $('#role').val("")
                $('#description').val("")
                $.toast({
                    heading: 'Success',
                    text: 'Thêm thành công.',
                    showHideTransition: 'slide',
                    position: 'top-center',
                    icon: 'success'
                })
            }else{
                console.log("Thêm thất bại !")
            }
        })
    })

})