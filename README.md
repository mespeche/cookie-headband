# Cookie Headband

This jQuery plugin allows you to display information about the obligations stipulated by the CNIL about cookies.

## How to install

First, create your information element :
```html
<div id="cookie-headband" class="alert fade in" role="alert">
    <div class="container">
        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <p>
            Cookies help us provide our services and to offer you personalized experiences. By using this site, you agree to our use of cookies. You can change your preferences at any time.
        </p>
    </div>
</div>
```

Juste copy the javascript file into your website directory and include it in your html file :

```html
<script src="js/cookie-headband.js"></script>
```

After included this file, start the plugin on the desired element :

```js
(function($){
    $('#cookie-headband').each(function(){
        var $elem = $(this);

        $elem.cookieHeadband({
            // Your options
            openClass : 'in',
            closeClass : 'hide',
            closeBtn : $('.close', $elem)
        });
    });
});
```

## Plugin options

| Options        | Default values              | Role                                                           |
|----------------| --------------------------- | -------------------------------------------------------------- |
| **openClass**  | "open"                      | string identifier of opened element                            |
| **closeClass** | "close"                     | string identifier of closed element                            |
| **closeBtn**   | $('#cookie-headband-close') | object identifier which allows the button to close the message |