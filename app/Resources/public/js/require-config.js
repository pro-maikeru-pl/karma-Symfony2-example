var require = {
    // here you don't have basePath because you don't know from where you load the script
    paths: {
        'AcmeSomeModuleFooBundle': 'Acme/SomeModule/FooBundle/Resources/public/js',
        'jquery': '../app/Resources/public/js/jquery',
        'jasmine-jquery': '../app/Resources/public/js/jasmine-jquery',
        'lodash': '../app/Resources/public/js/lodash'
    },
    shim: {
        'lodash': {},
        'jquery': {},
        'jasmine-jquery': {}
    }
};