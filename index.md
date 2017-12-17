---
layout: default
title: About
---

Hi, I'm Alexis &#x1F44B;&#x1F3FB;

When I'm not studying law at [Paris-II University](https://www.u-paris2.fr), I build apps for Apple platforms and work on open-source software.
I am passionate about arts, design and science.

You can read my CV [here](/cv/Alexis_Aubry_CV_01-2018.pdf) (and [here](/cv/Alexis_Aubry_CV_01-2018_fr.pdf) in French).
My open-source work can be found on [GitHub](https://github.com/alexaubry).

## Featured Work

{% assign featured_projects = site.data.projects | where:'isFeatured', "true" %}

{% for project in featured_projects %}
- [{{ project.name }}]({{ project.quick_url }}) : {{ project.headline }}
{% endfor %}
