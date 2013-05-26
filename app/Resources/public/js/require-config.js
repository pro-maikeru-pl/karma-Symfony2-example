var require = {
    // here you don't have basePath because you don't know from where you load the script
    paths: {
        'AcmeFooBundle': 'Acme/FooBundle/Resources/public/js',
        'jquery': '../app/Resources/public/js/jquery',
        'lodash': '../app/Resources/public/js/lodash'
    },
    shim: {
        'lodash': {},
        'jquery': {}
    }
};