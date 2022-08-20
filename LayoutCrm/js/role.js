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
                    <a href="#" class="btn btn-sm btn-danger">Xóa</a>
                </td>
            </tr>`

            $("#example tbody").append(row)
        })
    })

})