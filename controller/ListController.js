window.ListController = function($scope , $http){
    $scope.title = "Danh sach dien thoai";

    let api = "http://localhost:3000/nhanvien"

    $http.get(api).then(function(response){
        if (response.status == 200){
            $scope.listNhanVien = response.data;
        }
    })
// detail va list : se dung get : de thong tin tu db.json trang thai status == 200
// them : post (trang thai status == 201)
// sua : put (trang thai status == 200)
// xoa : dung detele trang thai status == 200

    $scope.deleteID = function(id){
        let thongBao = window.confirm('Ban co muon xoa ko ?');
        if (thongBao){
            $http.delete(
                api + '/' + id
            ).then(function(response){
                if (response.status == 200) {
                    alert('Xoa thanh cong')
                }
            })
        }
    }
}