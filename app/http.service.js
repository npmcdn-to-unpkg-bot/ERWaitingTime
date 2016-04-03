System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/Rx', "rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var HTTPService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HTTPService = (function () {
                function HTTPService(http) {
                    this.http = http;
                }
                HTTPService.prototype.getAllFromTable = function (table) {
                    return this.http.get("http://localhost:3002/" + table)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                HTTPService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                HTTPService.prototype.getVQuery = function () {
                    return this.http.get("http://localhost:3002/visit").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getEQuery = function () {
                    return this.http.get("http://localhost:3002/equipment").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getPQuery = function () {
                    return this.http.get("http://localhost:3002/patient").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getSQuery = function () {
                    return this.http.get("http://localhost:3002/staff").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getRQuery = function () {
                    return this.http.get("http://localhost:3002/report").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getVIQuery = function () {
                    return this.http.get("http://localhost:3002/vital").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getPRQuery = function () {
                    return this.http.get("http://localhost:3002/prescription").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.joinpv = function () {
                    return this.http.get("http://localhost:3002/patient_visit").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.joinpr = function () {
                    return this.http.get("http://localhost:3002/patient_report").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.selectyear = function (year) {
                    return this.http.get('http://localhost:3002/staff/' + year).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.findpid = function (eidlist) {
                    return this.http.get('http://localhost:3002/utilize_equip/' + eidlist).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.delete = function (input) {
                    return this.http.get('http://localhost:3002/patient/delete/' + input).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getsavg = function (input) {
                    return this.http.get('http://localhost:3002/staff/avg/' + input).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getMaxVital = function () {
                    return this.http.get('http://localhost:3002/vital/max').map(function (res) { return res.json(); });
                };
                HTTPService.prototype.updatePatient_http = function (input, pid) {
                    var json = JSON.stringify(input);
                    var key = "json=";
                    var param = key + input;
                    console.log(input);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://localhost:3002/patient/update/' + pid, param, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //Object {pid: 8, p_lname: "werwer", p_fname: "werwer", is_male: 1, dob: "2011-03-04"}
                HTTPService.prototype.post = function (jstring, table) {
                    console.log(jstring);
                    var json = JSON.stringify(jstring);
                    console.log(json);
                    var key = "json=";
                    var param = key + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://localhost:3002/' + table, param, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                HTTPService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPService);
                return HTTPService;
            }());
            exports_1("HTTPService", HTTPService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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bEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO29CQUNsQixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDOUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQWpGRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFtRmIsa0JBQUM7WUFBRCxDQWxGQSxBQWtGQyxJQUFBO1lBbEZELHFDQWtGQyxDQUFBIiwiZmlsZSI6Imh0dHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhUVFBTZXJ2aWNle1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7XG5cdH1cblxuXHRnZXRBbGxGcm9tVGFibGUodGFibGU6IHN0cmluZyl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvXCIgKyB0YWJsZSlcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cdFxuXHRwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuXHR9XG5cblx0Z2V0VlF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvdmlzaXRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRFUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9lcXVpcG1lbnRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRQUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wYXRpZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0U1F1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvc3RhZmZcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRSUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9yZXBvcnRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRWSVF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvdml0YWxcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRQUlF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvcHJlc2NyaXB0aW9uXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0am9pbnB2KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvcGF0aWVudF92aXNpdFwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGpvaW5wcigpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3BhdGllbnRfcmVwb3J0XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0c2VsZWN0eWVhcih5ZWFyKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3N0YWZmLycreWVhcikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRmaW5kcGlkKGVpZGxpc3Qpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvdXRpbGl6ZV9lcXVpcC8nK2VpZGxpc3QpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0ZGVsZXRlKGlucHV0KXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3BhdGllbnQvZGVsZXRlLycraW5wdXQpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0c2F2ZyhpbnB1dCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9zdGFmZi9hdmcvJytpbnB1dCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRNYXhWaXRhbCgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvdml0YWwvbWF4JykubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHR1cGRhdGVQYXRpZW50X2h0dHAoaW5wdXQsIHBpZCl7XG5cdFx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShpbnB1dCk7XG5cdFx0dmFyIGtleSA9IFwianNvbj1cIjtcblx0XHR2YXIgcGFyYW0gPSBrZXkgKyBpbnB1dDtcblx0XHRjb25zb2xlLmxvZyhpbnB1dCk7XG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvcGF0aWVudC91cGRhdGUvJysgcGlkLCBwYXJhbSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0Lm1hcChyZXM9PnJlcy5qc29uKCkpO1xuXHR9XG5cdC8vT2JqZWN0IHtwaWQ6IDgsIHBfbG5hbWU6IFwid2Vyd2VyXCIsIHBfZm5hbWU6IFwid2Vyd2VyXCIsIGlzX21hbGU6IDEsIGRvYjogXCIyMDExLTAzLTA0XCJ9XG5cblxuXHRwb3N0KGpzdHJpbmcsdGFibGUpe1xuXHRcdGNvbnNvbGUubG9nKGpzdHJpbmcpO1xuXHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoanN0cmluZyk7XG5cdFx0Y29uc29sZS5sb2coanNvbik7XG5cdFx0dmFyIGtleSA9IFwianNvbj1cIjtcblx0XHR2YXIgcGFyYW0gPSBrZXkgKyBqc29uO1xuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAyLycrdGFibGUsIHBhcmFtLCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHQubWFwKHJlcz0+cmVzLmpzb24oKSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
