# Intro to CSS Frameworks
Welcome to the wonderful world of CSS Frameworks! Frameworks make it easy to create modern, responsive websites and applications with minimal effort.

## What is a Framework?
A **CSS Framework** is a pre-prepared software framework meant to allow for easier, more standards-compliant web design. They typically consist of CSS (and usually JavaScript) files that you can add to your projects and have access to hundreds of pre-made components and styling options.

## Popular Frameworks
There are [lots](https://tutorialzine.com/2018/05/10-lightweight-css-frameworks-you-should-know-about) and [lots](https://hackernoon.com/top-5-most-popular-css-frameworks-that-you-should-pay-attention-to-in-2017-344a8b67fba1) of Frameworks out there, designed to fit particular needs.

Here we'll talk about Bootstrap and Semantic UI because a)they're powerful enough to take care of most of your styling needs b) they have good documentation and support and c) they are easy to incorporate into your Rails, JavaScript, and React projects.

### Bootstrap
[Bootstrap](https://getbootstrap.com/) is a free and open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. It was developed by Mark Otto and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools.

Bootstrap has both a Ruby gem and an NPM package, making it easy to incorporate into your projects.

### Semantic UI
Semantic UI is a modern front-end development framework, powered by LESS and jQuery. According to the Semantic UI website, the goal of the framework is to empower designers and developers “by creating a language for sharing UI”.

Semantic also has a Ruby gem and NPM package.

## Using Semantic UI
To use a Framework like Semantic UI or Bootstrap, there are a few ways to incorporate the files you need.
### Use a Gem or Node Package
If you're builing a Rails or React project, you can use packages and gems to install the files in your project:
```
gem install bootstrap -v 4.0.0

npm install semantic-ui-react

```
### Use a CDN
A **CDN (Content Delivery Network)** is a way to access CSS files remotely via a link tag. In your HTML (or `layout.html.erb`) file, you can add a link to the CDN in the head of the page.

```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>US National Parks</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
    <link rel="stylesheet" href="styles.css">
  </head>
  ```

(Some Frameworks also use JavaScript for animations, so you may need to also import a JavaScript or jQuery file in a `<script>` tag).

## Semantic UI Classes
Semantic uses HTML class attribtues to style your page. To use Semantic UI, go to their [website](https://semantic-ui.com/) and find documentation for the element you are trying to add (be it a button, navbar, card, etc.). If I wanted to add a navbar, I would find the menu section, and scroll through until I found the design that worked best for my site. Clicking the `< >` next to the design I like will reveal the HTML needed to make my navbar.

```
<div class="ui three item menu">
  <a class="active item">Editorials</a>
  <a class="item">Reviews</a>
  <a class="item">Upcoming Events</a>
</div>
```

I can copy and paste the code, or add the `class` names listed to my HTML elements.
