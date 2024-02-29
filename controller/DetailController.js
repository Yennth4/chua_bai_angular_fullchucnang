
window.DetailController = function($scope , $http , $routeParams ){
    //  routeParams : để lấy id trên api  (dùng cho detail và edit)
    $scope.title = "DETAIL PHONE";

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
}