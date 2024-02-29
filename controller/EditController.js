window.EditController = function($scope , $http , $routeParams , $location){
    $scope.title = "EDIT PHONE";

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
        let check = true

        $scope.kiemTra = {
            hoten: false,
            sdt: false,
            email: false,
            chucvu: false,
            ngaysinh: false,
            sdtLaSo: false,
            sdtLonHon0: false,
        }

        if (!$scope.nhanvien || !$scope.nhanvien.hoten) {
            check = false
            $scope.kiemTra.hoten = true
        }

        if (!$scope.nhanvien || !$scope.nhanvien.sdt) {
            check = false
            $scope.kiemTra.sdt = true
        }
        else if (isNaN($scope.nhanvien.sdt)) {
            check = false
            $scope.kiemTra.sdtLaSo = true
        }
        else if (parseInt($scope.nhanvien.sdt) <= 0) {
            check = false
            $scope.kiemTra.sdtLonHon0 = true
        }

        if (!$scope.nhanvien || !$scope.nhanvien.email) {
            check = false
            $scope.kiemTra.email = true
        }

        if (!$scope.nhanvien || !$scope.nhanvien.chucvu) {
            check = false
            $scope.kiemTra.chucvu = true
        }

        if (!$scope.nhanvien || !$scope.nhanvien.ngaysinh) {
            check = false
            $scope.kiemTra.ngaysinh = true
        }

        if (check) {
        // tao 1 bien nhan vien moi de them
        let newNhanVien = {
            hoten: $scope.nhanvien.hoten,
            sdt: $scope.nhanvien.sdt,
            email: $scope.nhanvien.email,
            chucvu: $scope.nhanvien.chucvu,
            ngaysinh: $scope.nhanvien.ngaysinh,
        }

        // post phai co link api vaf nhan vien moi
        $http.put(
            api + "/" + id, 
            newNhanVien
        ).then(function (response) {
            if(response.status == 200){
                alert('Edit successfully')
                $location.path('/list-employee')
            }
        })
    } else {
        alert('Please fill in all fields')
    }
    }

}