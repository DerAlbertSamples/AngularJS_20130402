var April;
(function (april) {
    (function (directives) {

        function buttonEditDirective() {
            return {
                restrict: 'A',
                scope: {},
                link: function(scope, element, attrs, controller) {
                    element.addClass('btn');
                }
            };
        }

        function buttonSubmitDirective() {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attrs, controller) {
                    element.addClass('btn btn-default');
                }
            };
        }

        function buttonDeleteDirective() {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attrs, controller) {
                    element.addClass('btn btn-danger');
                    element.prepend("<i class='icon icon-remove'></i>&nbsp;");
                }
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

        directives.btnDelete = [buttonDeleteDirective];
        directives.btnEdit = [buttonEditDirective];
        directives.btnRemove = [buttonRemoveDirective];
        directives.btnSubmit = [buttonSubmitDirective];

    })(april.Directives || (april.Directives = {}));
})(April || (April = {}));