---
layout: default
title: Alexis Aubry
page_name: About
lang: en
---

Hi, I'm Alexis <span aria-hidden="true">👋🏻</span>

<span aria-hidden="true">🇫🇷</span> I'm a French expat

<span aria-hidden="true">🐻</span> I live and work in Berlin

<span aria-hidden="true">👨🏻‍💻</span> I'm an **engineer** on the <a href="https://yunar.de" target="_blank">**YUNAR**</a> iOS app from Deutsche Bank

<span aria-hidden="true">🎩</span> In my free time, I also wear my <a href="https://github.com/alexaubry" target="_blank">**OSS contributor**</a> and maintainer hat

<span aria-hidden="true">💡</span> Machine learning, accessibility and modern user experiences are my favorite topics

{% if site.available_for_hire %}
<span aria-hidden="true">🔎</span> I am currently looking for full-time software engineering position in {{ site.hiring_location }}.
{% endif %}

## Talks

<div id="talks">
{% for talk in site.data.talks %}
{% endfor %}    
</div>