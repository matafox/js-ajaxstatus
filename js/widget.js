;(function() {

        var xhr_request = new XMLHttpRequest();
        xhr_request.onreadystatechange = function () {
            if (xhr_request.readyState === 4) {
                var data;
                data = JSON.parse(xhr_request.responseText);
                console.log(data);

                var data = JSON.parse(xhr_request.responseText);
                var t = '<ul class="bulleted">';
                for (var key in data) {
                    var inOffice = data[key]['inoffice'];
                    var liClass = inOffice?'in':'out';

                    t += '<li class="'+liClass+'">' + data[key]['name'], data[key]['name'] + '</li>';
                }
                t += '</ul>';

                document.getElementById('employeeList').innerHTML = t;
                //===

            }
        }// onreadystatechange

    console.log('ll');
    xhr_request.open('GET', 'employees.json');
    xhr_request.send();
})();