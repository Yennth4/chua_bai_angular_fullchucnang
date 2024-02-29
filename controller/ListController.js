window.ListController = function($scope , $http){
    $scope.title = "LIST PHONE";

    let api = "http://localhost:3000/nhanvien"

    $http.get(api).then(function(response){
        if (response.status == 200){
            $scope.listNhanVien = response.data;
        }
    })

    $scope.deleteID = function(id){
        let thongBao = window.confirm('Are you sure delete ' + id + " ?");
        if (thongBao){
            $http.delete(
                api + '/' + id
            ).then(function(response){
                if (response.status == 200) {
                    alert('Delete ' + id  + ' successfully')
                }
            })
        }
    }
}