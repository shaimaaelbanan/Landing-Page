# Landing Page

Landing page is a website page created with javascript, HTML and CSS.

## Sections auto active

Using the [screen.height].

```javascript
    if (rect.top <= screen.height / 2) active(section, link)
    else inactive(section, link)
    if (rect.bottom <= screen.height / 2) inactive(section, link)
```

## Show and Hide The scrollUp button

```javascript
    scrollUp.style.display = (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) ? "block" : "none";

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[Sh-LandingPg](https://github.com/shaimaaelbanan/Landing-Page)