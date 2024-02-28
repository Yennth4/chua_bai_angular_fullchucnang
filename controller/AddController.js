window.AddController = function($scope , $http , $location){
    // them Location : để chuyển hướng về trang chủd (dung cho Them và chỉnh sửa)
    $scope.title = "Them dien thoai";

    let api = "http://localhost:3000/nhanvien"

    $scope.add = function(){
        // tao 1 bien nhan vien moi de them
        let newNhanVien = {
            hoten: $scope.nhanvien.hoten,
            sdt: $scope.nhanvien.sdt,
            email: $scope.nhanvien.email,
            chucvu: $scope.nhanvien.chucvu,
            ngaysinh: $scope.nhanvien.ngaysinh,
        }

        // post phai co link api vaf nhan vien moi
        $http.post(
            api, 
            newNhanVien
        ).then(function (response) {
            if(response.status == 201){
                alert('Ban da them thanh cong')
                $location.path('/list-employee')
            }
        })
    }
}