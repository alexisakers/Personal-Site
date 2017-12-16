---
layout: default
tab_title: Contact Me
title: Alexis Aubry
---

You can the form below to send me an email.

You can also find me on [Twitter](https://twitter.com/{{ site.twitter_username }}) and [GitHub](https://github.com/{{ site.github_username }}).

<form method="POST" action="http://formspree.io/me@alexaubry.fr">
    <input type="text" name="name" placeholder="Your name">                    
    <input type="email" name="email" placeholder="Your email">
    <textarea name="message" placeholder="Your message" rows="5"></textarea>
    <button type="submit">Send</button>
</form>
