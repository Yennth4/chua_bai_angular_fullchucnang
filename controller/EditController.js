window.EditController = function($scope , $http , $routeParams , $location){
    $scope.title = "Chinh sua dien thoai";

    let api = "http://localhost:3000/nhanvien"

    let id =  $routeParams.id

    $http.get(
        api + "/" + id
        ).then(function(response){
        if (response.status == 200){
            $scope.nhanvien = {
                id: response.data.id,
                hoten: response.data.hoten,
                sdt: response.data.sdt,
                email: response.data.email,
                chucvu: response.data.chucvu,
                ngaysinh: new Date(response.data.ngaysinh)
            }
        }
    })

    $scope.edit = function(){
        // tao 1 bien nhan vien moi de them
        let newNhanVien = {
            hoten: $scope.nhanvien.hoten,
            sdt: $scope.nhanvien.sdt,
            email: $scope.nhanvien.email,
            chucvu: $scope.nhanvien.chucvu,
            ngaysinh: $scope.nhanvien.ngaysinh,
        }

        // put
        $http.put( 
            api + "/" + id , 
            newNhanVien
        ).then(function (response) {
            if(response.status == 200){ // chinh thanh 200
                alert('Ban da sua thanh cong')
                $location.path('/list-employee')
            }
        })
    }

}