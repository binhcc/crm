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
        console.log(`Role id ${roleId}`)
        // $(this).closest('tr').remove()
        // location.reload()

        $.ajax({
            url: `http://localhost:8080/crm_war/api/role?id=${roleId}`, //Link lấy danh sách role
            method: "DELETE", //Phương thức tương ứng với link
            // data: {
            //     key: value
            // },
            // dataType: "application/json"
        }).done(function(result){
            console.log("kiemtra")
            console.log(result)
            // Lấy thành công và trả ra kết quả
            if(result.isSuccess == true){
                console.log("Xoá thành công !")
            }else{
                console.log("Xoá thất bại !")
            }
        })
        
    })

})