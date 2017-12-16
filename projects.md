---
layout: default
title: Projects
---

<div>
    
    {% for project in site.data.projects %}
    <div class="project">
        <h2>{{ project.name }}</h2>
        <h3>{{ project.headline }}</h3>
    </div>
    {% endfor %}

</div>