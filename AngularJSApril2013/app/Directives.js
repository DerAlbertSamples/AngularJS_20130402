var April;
(function (april) {
    (function (directives) {

        function buttonEditDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    title: '@',
                    action: '&'
                },
                template: "<div class='btn btn-primary btn-mini' ng-click='action()' ><i class='icon-edit icon-white'></i></div>"
            };
        }

        function buttonSubmitDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    title: '@',
                    action: '&'
                },
                template: "<button type='submit'  class='btn btn-info btn-small'  ng-click='action(menu)' ><i class='icon-ok icon-white'></i></button>"
            };
        }

        function buttonRemoveDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    action: '&',
                    title: '@'
                },
                template: "<div class='btn btn-warning btn-mini' ng-click='action()'><i class='icon-remove icon-white'></i></div>"
            };
        }

        directives.btnEdit = [buttonEditDirective];
        directives.btnRemove = [buttonRemoveDirective];
        directives.btnSubmit = [buttonSubmitDirective];

    })(april.Directives || (april.Directives = {}));
})(April || (April = {}));